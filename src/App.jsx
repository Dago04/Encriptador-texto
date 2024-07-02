import "./index.css";
import { FaExclamationCircle } from "react-icons/fa";
function App() {

  return (
    <main className='bg-[#D8EFD3]  min-h-screen'>
      <header className=" py-5 bg-[#55AD9B] ">
        <nav className="container mx-auto ">
          <img src="Logo.png" alt="Aluro Logo" />
        </nav>
      </header>
      <section className="w-full container px-5 py-10 mx-auto mt-5 flex flex-col md:flex-row justify-center items-start gap-10">
        <div className="flex flex-col px-5 justify-between xl:min-h-[700px] ">
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

        <aside className="w-full max-w-[400px] bg-white h-full md:min-h-[700px] rounded-[32px] px-5 py-10 flex flex-col gap-2 items-center justify-center">
          <img src="Muñeco.svg" alt="Aluro Logo" />
          <div className="text-center flex flex-col items-center justify-center gap-3">
            <h1 className="text-xl font-bold">Ningún Mensaje fue <br></br> encontrado</h1>
            <p className="text-pretty text-sm">Ingresa el texto que desees encriptar o <br></br> desencriptar</p>
          </div>
        </aside>
      </section>
    </main >
  )
}

export default App
