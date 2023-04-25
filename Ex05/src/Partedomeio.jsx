import objeto from './Partedomeio.module.css'
import img from './crianca.png'

function Partedomeio() {
    return (
        <div className={objeto.estilo}>
            <img src={img} className={objeto.img} />
            <p className={objeto.letra}>Para ser muito bom amanha é preciso
                começar a práticar hoje</p>
            <p className={objeto.letra2}>
                Prof Cleiton
            </p>
            <p className={objeto.letra3}>São nos primeiros anos escolares que as crianças aprendem os fundamentos da matemática, inclusive as quatro operações - soma, subtração, multiplicação e divisão. Qualquer dificuldade que a criança tenha nessa fase se refletirá por toda a sua vida escolar :((</p>
            <p className={objeto.letra3}>Aqui você e seu filho irão encontrar exercícios relacionados ao conteúdo ensinado nós primeiros anos escolares e buscara aperfeiçoar seu conhecimento nas operações básicas;</p>

        </div>
    )
}

export default Partedomeio;