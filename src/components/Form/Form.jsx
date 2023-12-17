import styles from './Form.module.css'

function Form() {

    return (
        <form className="container">
            <div className={styles.formItem}>
                <label>Digite seu peso</label>
                <input type="number"/>
            </div>
            <div className={styles.formItem}>
                <label>Digite sua altura Ex:(1,70)</label>
                <input type="number" />
            </div>
        </form>
    )
}

export default Form