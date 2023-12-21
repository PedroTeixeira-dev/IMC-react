import { useState } from 'react'
import Header from './components/Header/Header'
import Form from './components/Form/Form'
import Table from './components/Table/Table'



function App() {

  const [IMC, setIMC] = useState(0)

  const handleIMCUpdate = (newIMC) => {
    setIMC(newIMC)
  }

  return (
    <>
      <Header />
      <Form onIMCUpdate={handleIMCUpdate} />
      <Table prop = {IMC} />
      {IMC !== 0 && 
      <h3>Seu IMC é: <span>{IMC}</span></h3>
      }

    </> 
  )
}

export default App
