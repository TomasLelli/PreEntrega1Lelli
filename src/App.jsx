import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

//CSS
import '../css/bootstrap.min.css'

//Components
import NavBar from './components/navbar/navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {
  

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={ <ItemListContainer /> }/>
        <Route path='/category/:id' element={ <ItemListContainer /> } />
        <Route path='/detalle' element={ <ItemDetailContainer /> } />
      </Routes>
    </div>
  )
}

export default App
