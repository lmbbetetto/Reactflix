import ReactPlayer from 'react-player';

import video from '../../assets/video/video.mp4'

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