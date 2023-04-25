
import Header from './Header'
import estilo from './App.module.css'
import Info from './Info'
import Footer from './Footer'

function App() {

  return (
    <div className={estilo.main}>
      <Header />
      <section className={estilo.corpo}>
        <div className={estilo.cards}>
          <Info valor='A' />
          <Info valor='B' />
          <Info valor='C' />
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default App
