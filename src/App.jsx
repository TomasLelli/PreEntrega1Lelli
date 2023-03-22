import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

//CSS
import '../css/bootstrap.min.css'

//Components
import NavBar from './components/navbar/navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  

  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Bienvenidos!" />
    </div>
  )
}

export default App
