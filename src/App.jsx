import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import Title from './components/Title'

function App() {
  const [word, setWord] = useState('cat');

  return (
    <div className="App">
      <Title/>
      <Form setWord={setWord}/>
      {word}
    </div>
  )
}

export default App
