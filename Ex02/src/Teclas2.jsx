import estilo from './Teclas2.module.css'


function Teclas2(){
    return(
        <div className={estilo.section}>
        <section className={estilo.principal}>
                <p className={estilo.Letra}> 3
                </p>
        </section>
        <section className={estilo.principal}>
            <p className={estilo.Letra}> 6
            </p>
        </section>
        <section className={estilo.principal}>
            <p className={estilo.Letra}> 9
            </p>
        </section>
        <section className={estilo.principal}>
            <p className={estilo.Letra}> /
            </p>
        </section>
        </div>  

    )
}

export default Teclas2;