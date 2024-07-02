import { FaExclamationCircle } from "react-icons/fa";

export const Main = () => {
    return (
        <div className="flex flex-col px-5 justify-between md:min-h-[700px] ">
            <textarea className="w-full px-2 bg-[#D8EFD3] text-black/90 placeholder-black outline-none" name="textoAEncriptar" rows={5} cols={50} placeholder="Ingrese el texto aquí" />

            <div className="mt-auto mb-3 flex items-center gap-2 text-gray-900/80">
                <FaExclamationCircle size={15} />
                <p className="text-sm">Solo letras minisculas y sin acentos</p>
            </div>
            <div className=" w-full max-w-[680px] flex flex-col sm:flex-row justify-center items-center gap-6">
                <button className="bg-[#95D2B3] w-full max-w-[380px] rounded-[32px] py-2 px-5 hover:bg-[#55AD9B]">Encriptar</button>
                <button className="bg-[#95D2B3] w-full max-w-[380px] rounded-[32px] py-2 px-5 hover:bg-[#55AD9B]">Desencriptar</button>
            </div>
        </div>
    )
}
