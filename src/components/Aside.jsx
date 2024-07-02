
export const Aside = () => {
    return (
        <aside className="w-full max-w-[400px]  bg-white h-full md:min-h-[700px] rounded-[32px] mx-auto md:mx-0  flex flex-col gap-2 items-center justify-center">
            <img src="Muñeco.svg" alt="Aluro Logo" />
            <div className="text-center flex flex-col items-center justify-center gap-3">
                <h1 className="text-xl font-bold">Ningún Mensaje fue <br></br> encontrado</h1>
                <p className="text-pretty text-sm">Ingresa el texto que desees encriptar o <br></br> desencriptar</p>
            </div>
        </aside>
    )
}
