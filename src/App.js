import './App.css'
import './Buttons/Round.js'
import Round from './Buttons/Round.js'
import saveIcon from './Icons/save.svg'
import searchIcon from './Icons/search.svg'
import Circle from './Buttons/Circle.js'

function App() {
  return (
    <div className='App'>
      <Round holder='Bookmarks' icon={saveIcon} />
      <Circle holder='Search' icon={searchIcon} />
    </div>
  )
}

export default App
