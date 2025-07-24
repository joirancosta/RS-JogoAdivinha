
import styles from "./app.module.css"
import { Tip } from "./components/Tip"
import { Header } from "./components/Header"

function App() {
  function handleRestartGame(){
    alert("Reiniciar o jogo!")
  }

  return (
    <div className={styles.container}>
      <main>
        <Header current={5} max={10} onRestart={handleRestartGame} />
        <Tip tip="Umas das linguagens de programação mais utilizadas" />
      </main>
    </div>
  )
}

export default App
