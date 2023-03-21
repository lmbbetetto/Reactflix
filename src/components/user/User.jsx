import styles from "./styles.module.css"

import { Link } from 'react-router-dom'

export function User() {
    return (
        <div>
            <h1 className={styles.header}>Quem está assistindo?</h1>
            <a>
                <Link to="/Catalogo"><div className={styles.giovana} ></div></Link>
            </a>

            <p className={styles.nome}>Giovana</p>

        </div>
    )
}