import estilo from './Info.module.css'


function Info(props) {
    return (
        <div className={estilo.section}>
                <p className={estilo.Letra}>
                    {props.valor}
                </p>  
        </div>

    )
}

export default Info;