
import styles from "./app.module.css"

import { useEffect, useState } from "react"
import { WORDS, type Challenge } from "./utils/words"

import { Input } from "./components/Input"
import { Tip } from "./components/Tip"
import { Button } from "./components/Button"
import { Letter } from "./components/Letter"
import { Header } from "./components/Header"
import { LettersUsed } from "./components/LettersUsed"
import type { LettersUsedProps } from "./components/LettersUsed"

function App() {
  const [attempts, setAttempts] = useState(0)
  const [letter, setLetter] = useState("")
  const [lettersUsed, setLettersUsed] = useState<LettersUsedProps[]>([])
  const [challenge, setChallenge] = useState<Challenge | null>(null)

  function handleRestartGame(){
    alert("Reiniciar o jogo!")
  }

  function startGame(){
    const index = Math.floor(Math.random() * WORDS.length)
    const randomWord = WORDS[index]

    setChallenge(randomWord)
    setAttempts(0)
    setLetter("")
  }

  function handleConfirm() {
    if (!challenge) {
      return
    }

    if (!letter.trim()) {
      return alert("Digite uma letra!")
    }

    const value = letter.toUpperCase()
    const exists = lettersUsed.find((used) => used.value.toUpperCase() === value)
    if (exists) {
      return alert("Você já utilizou a letra " + value)
    }

    setLettersUsed((prevState) => [...prevState, { value, correct: false }])

    setLetter("")
  }

  useEffect(() => {
    startGame()
  }, [])

  if (!challenge) {
    return
  }

  return (
    <div className={styles.container}>
      <main>
        <Header current={attempts} max={10} onRestart={handleRestartGame} />
        <Tip tip="Umas das linguagens de programação mais utilizadas" />
        <div className={styles.word}>
          {
            challenge.word.split("").map(() => (
              <Letter value="" />
            ))
          }
        </div>
        <h4>Palpite</h4>
        <div className={styles.guess}>
          <Input autoFocus maxLength={1} placeholder="?" value={letter} onChange={(e) => setLetter(e.target.value)}/>
          <Button title="confirmar" onClick={handleConfirm}/>
        </div>

        <LettersUsed data={lettersUsed} />
      </main>
    </div>
  )
}

export default App
