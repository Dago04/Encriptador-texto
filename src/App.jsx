import "./index.css";
import { Aside, Main, Header } from './components'
function App() {

  return (
    <main className='bg-[#D8EFD3]  min-h-screen'>
      <Header />
      <section className="w-full container px-5 py-10 mx-auto mt-5 flex flex-col md:flex-row  items-cente justify-center gap-10">
        <Main />
        <Aside />
      </section>
    </main >
  )
}

export default App
