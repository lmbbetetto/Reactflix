import styles from "./styles.module.css"

export function User() {
    return (
        <div>
            <h1 className={styles.header}>Quem está assistindo?</h1>
            <a>
                <div className={styles.giovana} ></div>
            </a>

            <p className={styles.nome}>Giovana</p>

        </div>
    )
}