import estilo from './Teclas.module.css'


function Teclas(props) {
    return (
        <div className={estilo.section}>
                <p className={estilo.Letra}>
                    {props.valor}
                </p>  
        </div>

    )
}

export default Teclas;