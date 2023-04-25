import objeto from './Header.module.css'
import img from './Img.png'

function Header() {
    console.log(objeto)
    return (
        <header className={objeto.estilo}>
            <img src={img} className={objeto.img} />
            <p className={objeto.letra}>Ferramaenta de aprendizagem de calculo</p>
            <p className={objeto.letra}>11/04/2023</p>

        </header>
    )
}

export default Header;