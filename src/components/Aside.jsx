
const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
        .then(() => {
            alert("Texto copiado al portapapeles");
        })
        .catch((error) => {
            console.error("Error al copiar al portapapeles: ", error);
            alert("Error al intentar copiar al portapapeles");
        });
};

export const Aside = ({ textoAside }) => {
    const handleCopy = () => {
        copyToClipboard(textoAside);
    };
    return (
        <aside
            className={`w-full md:max-w-[400px] bg-white h-full md:min-h-[700px] rounded-[32px] mx-auto md:mx-0 flex flex-col gap-2 pt-5  px-9  ${textoAside ? "justify-start py-5 items-center" : "justify-center py-5 items-center"
                }`}
        >
            {textoAside ? (
                <>
                    <div className="text-center flex flex-col items-center justify-between md:h-[660px] md:gap-0">
                        <p className="text-xl ">{textoAside}</p>
                    </div>
                    <button className="bg-[#95D2B3] w-full  rounded-[32px] py-2 px-5 hover:bg-[#55AD9B]"
                        onClick={handleCopy}
                    >
                        Copiar
                    </button>
                </>


            ) : (
                <>
                    <img src="Muñeco.svg" alt="Aluro Logo" />
                    <div className="text-center flex flex-col items-center justify-center gap-3">
                        <h1 className="text-xl font-bold">Ningún Mensaje fue <br /> encontrado</h1>
                        <p className="text-pretty text-sm">Ingresa el texto que desees encriptar o <br /> desencriptar</p>
                    </div>

                </>
            )}
        </aside>
    );
}
