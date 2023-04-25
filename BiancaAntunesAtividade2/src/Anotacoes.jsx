import estilo from './Anotacoes.module.css'


function Anotacoes(props) {
    return (
        <div>
            
                <div className={estilo.msg}>
                        <p className={estilo.Letra}> {props.mensagem}</p>
                </div>
                

        </div>
    )
}

export default Anotacoes;