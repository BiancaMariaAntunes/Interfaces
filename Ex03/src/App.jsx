import Footes from './Footes'
import Header from './Header'
import Menu from './Menu'
import Teclas from './Teclas'

import estilo from './App.module.css'

function App() {

  return (
    <div className={estilo.main}>
      <Header />
      <section className={estilo.corpo}>
        <Menu />
        <div className={estilo.cards}>
          <Teclas valor='1' />
          <Teclas valor='2' />
          <Teclas valor='3' />
          <Teclas valor='4' />
        </div>
      </section>
      <Footes />
    </div>
  )
}

export default App
