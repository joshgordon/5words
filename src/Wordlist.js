import {useState, useEffect} from 'react'
import {Message, List, ListItem} from 'semantic-ui-react'

function WordList(props) {
  let [words, setWords] = useState([])
  useEffect(() => {
    fetch("5words.txt").then((res) => res.text()).then((wordlist) => setWords(wordlist.split("\n")))
  }, [])

  let [re, setre] = useState(null)

  let must = props.must
  let cant = props.cant
  let regex = props.regex

  useEffect(() => {
      //try {new RegExp("fo[o") } catch (e) {alert(e)} 


    try {
        setre(new RegExp(regex))
    }
    catch (e) {
        setre(null)
    }
  }, [props.regex])

  if (re === null) {
        return (<Message warning>
            <Message.Header>Invalid Regex</Message.Header>
            <p>Please try again</p>
        </Message>)
  }
    return (
        <List>
          {words.filter((word) => {
            if (re.test(word)) {
              // go through the musts:
              for (let ii=0; ii < must.length; ii++) {
                if (word.indexOf(must[ii]) < 0) {
                  return false
                }
              }

              //and the cant's:
              for (let ii=0; ii < cant.length; ii++) {
                if (word.indexOf(cant[ii]) >= 0) {
                  return false
                }
              }
              return true
            }
          return false
          }).map(word => (
            <ListItem>{word}</ListItem>
          ))}

        </List>
    )
}

export default WordList
