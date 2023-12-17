
import { useEffect, useState } from "react"

function Header() {
    
    const [seuNome, setSeuNome] = useState('')

    useEffect(() =>{
            setSeuNome(prompt('Digite seu nome')) 
    }, [])

    return (
        
        <header className="container">
            <h1>ola, {seuNome}! Vamos calcular seu IMC</h1>
        </header>
        )
}

export default Header
