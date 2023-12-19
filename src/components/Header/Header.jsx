import { useEffect, useRef, useState } from "react"
import styles from './Header.module.css'

function Header() {
    
    const [seuNome, setSeuNome] = useState('')
    const isFirstRender = useRef(true)
    
    useEffect(() =>{
            function pedeNome() {
                if (isFirstRender.current) {
                    const nome = prompt('Digite seu nome')
                    setSeuNome(nome)
                    isFirstRender.current = false
                    return
            }}

            pedeNome()
        
    }, [])

    return (
        
        <header className="container">
            <h1>ola, <span className={styles.nome}>{seuNome}</span>! Vamos calcular seu IMC</h1>
        </header>
        )
}

export default Header
