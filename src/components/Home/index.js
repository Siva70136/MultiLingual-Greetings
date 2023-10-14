import {useState} from 'react'
import './index.css'

const Home = () => {
  const languageGreetingsList = [
    {
      id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
      buttonText: 'English',
      imageAltText: 'english',
    },
    {
      id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
      buttonText: 'Tamil',
      imageAltText: 'tamil',
    },
    {
      id: '89537778-7a46-4c58-988c-0adc931d087c',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
      buttonText: 'Telugu',
      imageAltText: 'telugu',
    },
  ]

  const [eng, setEng] = useState(0)
  const [active, setActive] = useState(languageGreetingsList[eng].imageAltText)

  const eng1 = () => {
    setEng(0)
    setActive(languageGreetingsList[0].imageAltText)
  }

  const tel1 = () => {
    setEng(2)
    setActive(languageGreetingsList[2].imageAltText)
  }

  const tam1 = () => {
    setEng(1)
    setActive(languageGreetingsList[1].imageAltText)
  }

  return (
    <div className="Main-container">
      <div className="app-container">
        <h1 className="textHead">Multilingual Greetings</h1>
        <div className="button-container">
          <button type="button" className={`button e${active}`} onClick={eng1}>
            English
          </button>
          <button type="button" className={`button ta${active}`} onClick={tam1}>
            Tamil
          </button>
          <button type="button" className={`button te${active}`} onClick={tel1}>
            Telugu
          </button>
        </div>
        <ul key={languageGreetingsList[eng].id}>
          <li>
            <img
              src={languageGreetingsList[eng].imageUrl}
              className="image"
              alt={languageGreetingsList[eng].imageAltText}
            />
          </li>
          <li>&nbsp;</li>
          <li>&nbsp;</li>
        </ul>
      </div>
    </div>
  )
}

export default Home
