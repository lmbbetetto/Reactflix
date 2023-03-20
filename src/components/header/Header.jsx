import logo from "../../assets/images/netflix.png"
import styles from "./styles.module.css"

import { BsSearch } from "react-icons/bs"
import { HiOutlineBell } from "react-icons/hi"

export function Header() {
    return (
        <div className={styles.bg}>
            <header className={styles.container}>
                <div className={styles.esquerda}>
                    <img src={logo} alt="logo_netflix" />
                    <p>Início</p>
                    <p>Séries</p>
                    <p>Filmes</p>
                </div>

                <div className={styles.direita}>
                    <BsSearch />
                    <p>Infantil</p>
                    <HiOutlineBell className={styles.icon} />
                    <div className={styles.giovana}></div>
                </div>
            </header>
        </div>

    )
}