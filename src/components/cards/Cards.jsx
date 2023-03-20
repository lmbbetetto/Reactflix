import styles from "./styles.module.css"
import { motion } from "framer-motion"
import { useState, useRef, useEffect } from "react"

import img1 from "../../assets/images/carrossel/img1.jpeg"
import img2 from "../../assets/images/carrossel/img2.jpeg"
import img3 from "../../assets/images/carrossel/img3.jpeg"
import img4 from "../../assets/images/carrossel/img4.jpeg"
import img5 from "../../assets/images/carrossel/img5.jpeg"
import img6 from "../../assets/images/carrossel/img6.jpeg"
import img7 from "../../assets/images/carrossel/img7.jpeg"
import img8 from "../../assets/images/carrossel/img8.jpeg"

const imagens = [img1, img2, img3, img4, img5, img6, img7, img8]

export function Cards() {

    const carousel = useRef()
    const [width, setWidth] = useState(0)

    useEffect(() => {
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    }, [])

    return (
        <div>

            <div className={styles.cards}>
                <h1>Lançamentos</h1>
            </div>

            <div className={styles.container}>
                <motion.div ref={carousel} className={styles.carousel}>
                    <motion.div
                        className={styles.inner}
                        drag="x"
                        dragConstraints={{ right: 0, left: -width }}
                        initial={{ x: 500 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.2 }}
                        exit={{ x: -100 }}
                    >

                        {imagens.map(image => (
                            <motion.div key={image} className={styles.item}>
                                <img src={image} alt="Imagem BG" />
                            </motion.div>
                        ))}

                    </motion.div>
                </motion.div>
            </div>
        </div>


    )
}