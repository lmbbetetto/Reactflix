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
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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