import { useEffect, useState } from "react"
import styles from './Header.module.css'

function Header() {
    
    const [seuNome, setSeuNome] = useState('')
    
    useEffect(() =>{
        const nome = prompt('Digite seu nome')
        if (seuNome ==='') {
            setSeuNome(nome)
        }

    }, [])

    return (
        
        <header className="container">
            <h1>ola, <span className={styles.nome}>{seuNome}</span>! Vamos calcular seu IMC</h1>
        </header>
        )
}

export default Header
