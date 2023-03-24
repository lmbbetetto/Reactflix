import styles from "./styles.module.css"
import {DefaultPlayer as Video} from "react-html5video"
import video from "../../assets/video/l7.mp4"

export function Player() {
    return(
        <Video autoPlay loop>
            <source src={video} type="video/webm" />
        </Video>
    )
}