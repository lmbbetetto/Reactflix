import video from "../../assets/video/l7.mp4"

import ReactPlayer from 'react-player';

export function Player() {
    return (
        <>
            <ReactPlayer
                url={video}
                width="100%"
                height="100vh"
                controls={true}
                playing={true}
            />
        </>
    )
}