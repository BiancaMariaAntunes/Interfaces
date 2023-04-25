import estilo from './Teclas.module.css'


function Teclas(){
    return(
        <div className={estilo.section}>
        <section className={estilo.principal}>
                <p className={estilo.Letra}> 
                1
                </p>
        </section>
        <section className={estilo.principal}>
            <p className={estilo.Letra}> 
            4
            </p>
        </section>
        <section className={estilo.principal}>
            <p className={estilo.Letra}> 
            7
            </p>
        </section>
        <section className={estilo.principal}>
            <p className={estilo.Letra}> 
            0
            </p>
        </section>
        </div>  

    )
}

export default Teclas;