import './App.css';
// import 'semantic-ui-css/semantic.min.css'
import {useState, useEffect} from 'react'

import {Input} from "semantic-ui-react"
import WordList from './Wordlist';

function update(callback) {
  function onChange(event) {
    callback(event.target.value)
  }
  return onChange
}

function App() {
  let [regex, setRegex] = useState("")
  let [must, setMust] = useState("")
  let [cant, setCant] = useState("")

  return (
    <div className="App">
        <Input placeholder="Regex" value={regex} onChange={update(setRegex)} type="text"></Input>
        <Input placeholder="Must include" value={must} onChange={update(setMust)} type="text"></Input>
        <Input placeholder="Can't include" value={cant} onChange={update(setCant)} type="text"></Input>
        <WordList regex={regex} must={must} cant={cant}/>
    </div>


  );
}

export default App;
