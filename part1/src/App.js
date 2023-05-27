import {useState} from 'react'

const App = () => {
  const anecdotes = [
    'Se fazer algo dói, faça isso com mais frequência.',
    'Contratar mão de obra para um projeto de software que já está atrasado, faz com que se atrase mais ainda!',
    'Os primeiros 90% do código correspondem aos primeiros 10% do tempo de desenvolvimento... Os outros 10% do código correspondem aos outros 90% do tempo de desenvolvimento.',
    'Qualquer tolo consegue escrever um código que um computador consegue entender. Bons programadores escrevem código que humanos conseguem entender.',
    'Antes de mais nada, depurar é duas vezes mais difícil do que escrever o código. Portanto, se você escrever o código da forma mais inteligente possível, você, por definição, não é inteligente o suficiente para depurá-lo.',
    'Programar sem o uso extremamente intenso do console.log é o mesmo que um médico se recusar a usar raio-x ou testes sanguíneos ao diagnosticar pacientes.',
    'A única maneira de ir rápido é ir bem.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const generateNumber = () => {
    return Math.floor(Math.random() * anecdotes.length)
  }

  const registerVote = () => {
    const copyVotes = [...votes]
    copyVotes[selected] += 1
    setVotes(copyVotes)
  }

  const getAnecdoteMoreVoted = () => {
    let index = votes.indexOf(Math.max(...votes))
    return anecdotes[index]
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={() => registerVote()}>vote</button>
      <button onClick={() => setSelected(generateNumber)}>next anecdote</button>
      <h2>Anecdote with most votes</h2>
      <p>{getAnecdoteMoreVoted()}</p>
    </div>
  )
}

export default App;
