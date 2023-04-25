import estilo from './Teclas3.module.css'


function Teclas3(){
    return(
        <div className={estilo.section}>
        <section className={estilo.principal}>
                <p className={estilo.Letra}> *
                </p>
        </section>
        <section className={estilo.principal}>
            <p className={estilo.Letra}> -
            </p>
        </section>
        <section className={estilo.principal}>
            <p className={estilo.Letra}> +
            </p>
        </section>
        <section className={estilo.principal}>
            <p className={estilo.Letra}> =
            </p>
        </section>
        </div>  

    )
}

export default Teclas3;