import objeto from './Footes.module.css'

function Footes(){
     console.log(objeto)
    return (
        <header className={objeto.estilo}>
            <p className={objeto.Letra}> 
                Footes
            </p>
        </header>
    )
}

export default Footes;