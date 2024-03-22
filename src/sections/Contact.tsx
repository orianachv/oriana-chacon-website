import React, { useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

interface ToastState {
  visible: boolean;
  message: string;
  type: "success" | "error";
}

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [toast, setToast] = useState<ToastState>({
    visible: false,
    message: "",
    type: "success",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const apiUrl = process.env.REACT_APP_API_URL;
    const formDataToSend = {
      nombre: formData.name,
      email: formData.email,
      mensaje: formData.message,
    };

    axios
      .post(`${apiUrl}/contact`, formDataToSend)
      .then((response) => {
        setToast({
          visible: true,
          message: "Mensaje enviado con éxito",
          type: "success",
        });
      })
      .catch((error) => {
        console.error("Error al enviar el formulario:", error);
        setToast({
          visible: true,
          message: "Error al enviar el mensaje. Inténtalo de nuevo.",
          type: "error",
        });
      })
      .finally(() => {
        setFormData({ name: "", email: "", message: "" });
        // Ocultar toast después de 3 segundos
        setTimeout(() => setToast({ ...toast, visible: false }), 3000);
      });
  };

  return (
    <div id="contact" className="text-gray-200 p-6 ">
      {/* Toast Notification */}
      {toast.visible && (
        <div className="fixed bottom-0 right-0 mb-4 mr-4 flex items-center justify-center z-10">
          <div className="bg-gray-200 text-gray-800 p-3 rounded-lg shadow-lg">
            {toast.message}
          </div>
        </div>
      )}
      <h2 className="text-3xl font-bold mb-6">{t("contact.title")}</h2>
      <div className="flex flex-col items-center">
        <form
          onSubmit={handleSubmit}
          className="space-y-8 w-full max-w-lg mx-auto"
        >
          <div>
            <label htmlFor="name" className="block text-md font-medium ">
              {t("contact.name")}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="text-gray-900 w-full border border-transparent rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-4 focus:ring-teal-500 focus:border-transparent bg-white shadow-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-md font-medium ">
              {t("contact.email")}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="text-gray-900 w-full border border-transparent rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-4 focus:ring-teal-500 focus:border-transparent bg-white shadow-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-md font-medium ">
              {t("contact.message")}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="text-gray-900 w-full border border-transparent rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-4 focus:ring-teal-500 focus:border-transparent bg-white shadow-sm"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          >
            {t("contact.send")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
