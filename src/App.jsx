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
      <Form />
      <Table />
    </> 
  )
}

export default App
