import styles from "./styles.module.css"

import { Header } from "../header/Header";
import { Cards } from "../cards/Cards";

export function Catalogo() {
    return (
        <>
            <Header />

            <div className={styles.reprodutor}>
                <div className={styles.repInterna}>
                    <h1>Filme legal</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <div className={styles.btns}>
                        <button>Assistir</button>
                        <button>Mais Informações</button>
                    </div>
                </div>
            </div>
            <Cards />
        </>
    )
}