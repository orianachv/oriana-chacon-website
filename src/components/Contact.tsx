import React, { useState } from 'react';
import axios from 'axios';



const Contact: React.FC = () => {
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
        <div id="contact" className="bg-gray-900 text-gray-100">
            <h2 className="text-4xl font-bold mb-6 text-start">Contact</h2>
            <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto text-center">
                <div>
                    <label htmlFor="name" className="block text-md font-medium">Nombre</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="text-gray-900 w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-md"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-md font-medium">Correo Electrónico</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="text-gray-900 w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-md"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-md font-medium">Mensaje</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="text-gray-900 w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-md"
                        required
                    />
                </div>
                <button type="submit" className="w-full bg-teal-500 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
                    Enviar
                </button>
            </form>
        </div>
    );
};

export default Contact;
