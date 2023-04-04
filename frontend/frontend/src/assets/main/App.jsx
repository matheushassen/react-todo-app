import 'bootstrap/dist/css/bootstrap.min.css'
import '../../template/custom.css'

import React from 'react'
import { BrowserRouter as Router} from  'react-router-dom'
import Menu from '../../template/menu'
import Routes2 from './routes'

function App() {
  
  return (
    <div className='container'>
      <Router>
        <Menu></Menu>
        <Routes2></Routes2>
      </Router>
    </div>
  )
}

export default App
