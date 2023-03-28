import styles from "./styles.module.css"

import { Header } from "../header/Header";
import { Cards } from "../cards/Cards";

import { BsFillPlayFill } from "react-icons/bs";
import { IoMdInformationCircleOutline } from "react-icons/io"

import { Link } from 'react-router-dom'

export function Catalogo() {
    return (
        <>
            <Header />

            <div className={styles.reprodutor}>
                <div className={styles.repInterna}>
                    <h1>2.3</h1>
                    <p>Em um reino tão tão distante, nascia uma bela princesa chamada Giovana, que em 23 anos de vida, aproveitou, viveu, e o mais importante, se tornou uma mulher incrível. Essa é uma singela homenagem aos seus 23 anos, você é luz, você é a pessoa mais incrível desse mundo todo!</p>
                    <div className={styles.btns}>
                        <Link to="/Player"><button className={styles.btnWhite}>
                            <div className={styles.btn_interna}>
                                <BsFillPlayFill size={40} />
                                <span>Assistir</span>
                            </div>
                        </button></Link>
                            <button className={styles.btnGray}>
                                <div className={styles.btn_interna}>
                                    <IoMdInformationCircleOutline size={40} />
                                    <span>Mais informações</span>
                                </div>
                            </button>
                    </div>
                </div>
            </div>
            <Cards />
        </>
    )
}