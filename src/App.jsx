import "./index.css";
import { Aside, Main, Header } from './components'
import { useState } from "react";
function App() {
  const [textoAside, setTextoAside] = useState("");
  return (
    <main className='bg-[#D8EFD3]  min-h-screen'>
      <Header />
      <section className="w-full container px-5 py-10 mx-auto mt-5 flex flex-col md:flex-row  items-cente justify-center gap-10">
        <Main setTextoAside={setTextoAside} textoAside={textoAside} />
        <Aside textoAside={textoAside} />
      </section>
    </main >
  )
}

export default App
