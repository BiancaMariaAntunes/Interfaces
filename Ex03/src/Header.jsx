import objeto from './Header.module.css'

function Header(){
     console.log(objeto)
    return (
        <div>
            <header className={objeto.estilo}>
            </header>
            <header className={objeto.estilo2}>
            </header>
        </div>
    )
}

export default Header;