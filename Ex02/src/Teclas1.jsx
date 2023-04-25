import estilo from './Teclas1.module.css'


function Teclas1(){
    return(
        <div className={estilo.section}>
        <section className={estilo.principal}>
                <p className={estilo.Letra}> 
                2
                </p>
        </section>
        <section className={estilo.principal}>
            <p className={estilo.Letra}> 5
            </p>
        </section>
        <section className={estilo.principal}>
            <p className={estilo.Letra}> 8
            </p>
        </section>
        <section className={estilo.principal}>
            <p className={estilo.Letra}> .
            </p>
        </section>
        </div>  

    )
}

export default Teclas1;