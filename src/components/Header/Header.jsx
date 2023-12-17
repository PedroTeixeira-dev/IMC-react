import { useEffect, useState } from "react"

const Header = () => {
    
    const [seuNome, setSeuNome] = useState('')
    const [nomePreenchido, setNomePreenchido] = useState(false)


    useEffect(() =>{
        const nome = prompt("Digite seu nome")
        
        function pegaNome(){            
            if (nome.length > 3) {
                setSeuNome(nome)
                setNomePreenchido(true)
                console.log(nome)
            } else {
                alert("nome invalido")
            }
        }
        if (!nomePreenchido) {
            pegaNome()
        }
    }, [])

    return (
        (nomePreenchido && (
            <header className="container">
            <h1>ola, {seuNome}</h1>
        </header>
        ))

    )
}

export default Header
