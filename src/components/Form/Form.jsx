import { useState } from 'react'
import styles from './Form.module.css'

function Form() {

    const [peso, setPeso] = useState(0)
    const [altura, setAltura] = useState(0)
    const [IMC, setIMC] = useState(0)

    function calculaIMC() {
        const calculo = peso / (altura*altura)
        setIMC(calculo.toFixed(2))
    }

    return (
        <>
        <form className="container">
            <div className={styles.formItem}>
                <label>Digite seu peso</label>
                <input onChange={event => setPeso(parseFloat(event.target.value))}  type="number"/>
            </div>
            <div className={styles.formItem}>
                <label>Digite sua altura Ex:(1,70)</label>
                <input onChange={event => setAltura(parseFloat(event.target.value))} type="number" />
            </div>
            <button onClick={calculaIMC} type='button'>Calcular</button>
            {console.log(IMC)}
        </form>
        {IMC !== 0 &&
        <h3>Seu IMC é: <span>{IMC}</span></h3>
        }
        </>
    )
}

export default Form

// https://flatuicolors.com/palette/gb