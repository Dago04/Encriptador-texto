import { useState } from "react";
import { FaExclamationCircle } from "react-icons/fa";

export const Main = ({ setTextoAside }) => {
    const [texto, setTexto] = useState(""); // Estado del texto

    const removerAcento = (str) => {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9 ]/g, ""); // Remueve el acento de las palabras
    }
    const encriptarTexto = (str) => {
        return str
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
    };
    const desencriptarTexto = (str) => {
        return str
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
    };

    const handleText = (e) => {
        e.preventDefault(); // Evitar que se recargue la página
        setTexto(e.target.value); // Actualiza el estado del texto
    };

    const handleEncrypt = () => {

        if (texto.trim() === "") {
            setTextoAside("El texto no puede estar vacío");
            return;
        }

        const textoLimpiado = removerAcento(texto.toLowerCase()); // Remueve los acentos del texto y lo convierte en minisculas
        const textoEncriptado = encriptarTexto(textoLimpiado); // Encripta el texto
        setTextoAside(textoEncriptado); // Guarda el texto encriptado en el estado del componente Aside
    };
    const handleDecrypt = () => {
        if (texto === "") {
            setTextoAside("No hay nada que desencriptar");
            return;
        }
        const textoDesencriptado = desencriptarTexto(texto); // Desencripta el texto
        setTextoAside(textoDesencriptado); // Guarda el texto desencriptado en el estado del componente Aside
    }

    return (
        <div className="flex flex-col px-5 justify-between md:min-h-[700px] ">
            <textarea
                className="w-full px-2 bg-[#D8EFD3] text-black/90 placeholder-black outline-none"
                name="textoAEncriptar"
                rows={5}
                cols={50}
                value={texto}
                onChange={handleText}
                placeholder="Ingrese el texto aquí"
            />

            <div className="mt-auto mb-3 flex items-center gap-2 text-gray-900/80">
                <FaExclamationCircle size={15} />
                <p className="text-sm">Solo letras minúsculas y sin acentos</p>
            </div>
            <div className=" w-full max-w-[680px] flex flex-col sm:flex-row justify-center items-center gap-6">
                <button
                    className="bg-[#95D2B3] w-full max-w-[380px] rounded-[32px] py-2 px-5 hover:bg-[#55AD9B]"
                    onClick={handleEncrypt}
                >
                    Encriptar
                </button>
                <button className="bg-[#95D2B3] w-full max-w-[380px] rounded-[32px] py-2 px-5 hover:bg-[#55AD9B]"
                    onClick={handleDecrypt}
                >

                    Desencriptar
                </button>
            </div>
        </div>
    );
};
