import estilo from './Header.module.css'


function Header(){
    return(
        <header className={estilo.principal}>
            <p className={estilo.Letra}> 
                Anotações
            </p>
        </header>


    )
}

export default Header;