import objeto from './Lado.module.css'

function Lado() {
    console.log(objeto)
    return (
        <div className={objeto.principal}>
            <section className={objeto.section}>
                <p className={objeto.letra1}> Você tem 0 pontos </p>
                <div className={objeto.quadrado1}>
                    <p className={objeto.letra2}> Sortear Desafio </p>
                </div>
                <div className={objeto.linha}>  </div>
                <p className={objeto.letra3}>Quanto é:</p>
                <div className={objeto.quadrado2}>
                    <p className={objeto.letra4}>50</p>
                </div>
                <div className={objeto.quadrado3}>
                    <p className={objeto.letra4}>9</p>
                </div>
                <div className={objeto.quadrado4}>
                    <p className={objeto.letra4} >+</p>
                </div>
                <p className={objeto.letra3}>Sua resposta:</p>
                <div className={objeto.quadrado5}>
                    <p className={objeto.letra4} >59</p>
                </div>
                <div className={objeto.quadrado6}>
                    <p className={objeto.letra5} >Validar</p>
                </div>
                <div className={objeto.quadrado7}>
                    <p className={objeto.letra5} >Novo Jogo</p>
                </div>
            </section>

        </div>
    )
}

export default Lado;