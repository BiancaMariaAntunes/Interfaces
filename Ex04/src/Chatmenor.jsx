import estilo from './Chatmenor.module.css'


function Chatmenor() {
    return (
        <div>
            <div className={estilo.principal}>
            <div className={estilo.msg1}>
                    <p className={estilo.Letra2}>Olá! Bem-vindo ao nosso chat! Estamos aqui para ajudá-lo e responder a todas as suas perguntas. </p>
                </div>
                <div className={estilo.msg2}>
                    <p className={estilo.Letra2}>Estou com dificuldade para acessar minha plataforma</p>
                </div>
                <div className={estilo.msg3}>
                    <p className={estilo.Letra2}>Consegue informar o CNPJ vinculado a sua conta ?</p>
                </div>
                <div className={estilo.msg4}>
                    <p className={estilo.Letra2}>10.256.236/0001-65</p>
                </div>
                <div className={estilo.msg3}>
                    <p className={estilo.Letra2}>Aguarde um momento, estamos verificando.</p>
                </div>
            <div className={estilo.Chat}>
                    <p className={estilo.Letra}>Informe sua mensagem</p>
                </div>
            </div>

        </div>
    )
}

export default Chatmenor;