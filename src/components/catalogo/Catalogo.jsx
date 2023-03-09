import styles from "./styles.module.css"

import { Header } from "../header/Header";
import { Cards } from "../cards/Cards";

export function Catalogo() {
    return (
        <>
            <Header />

            <div className={styles.reprodutor}>
                <div className={styles.repInterna}>
                    {/* <h1>Teste</h1> */}
                </div>
            </div>

            <div className={styles.container}>
                <Cards />
                <Cards />
            </div>
        </>
    )
}