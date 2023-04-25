import Header from "./Header"
import Partedomeio from "./Partedomeio"
import objeto from "./App.module.css"
import Lado from "./Lado"



function App() {


  return (
    <div>
      <section className={objeto.bloco}>
        <Lado />
      </section>
      <section className={objeto.main}>
        <Header />
        <Partedomeio />
      </section>
    </div>

  )
}

export default App
