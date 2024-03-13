import React, { useState } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';



const Contact: React.FC = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Define la URL del endpoint del servidor Express
        const serverURL = 'http://localhost:3001/contacto';

        // Configura los datos del formulario para enviar
        const formDataToSend = {
            nombre: formData.name,
            email: formData.email,
            mensaje: formData.message,
        };

        // Realiza una solicitud POST al servidor usando axios
        axios.post(serverURL, formDataToSend)
            .then((response) => {
                // Aquí puedes manejar la respuesta del servidor, por ejemplo, mostrando un mensaje de éxito
                alert("Mensaje enviado con éxito: " + response.data);
            })
            .catch((error) => {
                // Maneja cualquier error que ocurra durante el envío
                console.error('Error al enviar el formulario:', error);
                alert("Error al enviar el mensaje.");
            })
            .finally(() => {
                setFormData({
                    name: '',
                    email: '',
                    message: '',
                }
                )
            })
    };

    return (
        <div id="contact" className="text-gray-200 p-6 ">
            <h2 className="text-3xl font-bold mb-6">{t('contact.title')}</h2>
            <div className='flex flex-col items-center'>
                <form onSubmit={handleSubmit} className="space-y-8 w-full max-w-lg mx-auto">
                    <div>
                        <label htmlFor="name" className="block text-md font-medium ">{t('contact.name')}</label>
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
                        <label htmlFor="email" className="block text-md font-medium ">{t('contact.email')}</label>
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
                        <label htmlFor="message" className="block text-md font-medium ">{t('contact.message')}</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="text-gray-900 w-full border border-transparent rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-4 focus:ring-teal-500 focus:border-transparent bg-white shadow-sm"
                            required
                        />
                    </div>
                    <button type="submit" className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                    {t('contact.send')}
                    </button>
                </form>
            </div>
        </div>

    );
};

export default Contact;
