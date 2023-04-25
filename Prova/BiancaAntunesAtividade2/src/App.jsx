import estilo from './App.module.css'
import Header from './Header'
import Anotacoes from './Anotacoes'

function App() {

  return (
   <div className={estilo.bkgcolor}>
    <div className={estilo.main}>
        <Header />
        <div className={estilo.principal}>
        <Anotacoes mensagem = 'Fazer Atividades de React.'/>
        <Anotacoes mensagem = 'Tomar mais agua durante o dia.'/>
        <Anotacoes mensagem = 'HTML não é linguagem de programação'/>
        <Anotacoes mensagem = 'Semana de prova'/>
        <Anotacoes mensagem = 'O que é dormir?'/>
        </div>

    </div>
    </div> 
  )
}

export default App