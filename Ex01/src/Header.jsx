import objeto from './Header.module.css'

function Header(){
     console.log(objeto)
    return (
        <header className={objeto.estilo}>
            <p className={objeto.Letra}> 
                Cesul
            </p>
        </header>
    )
}

export default Header;