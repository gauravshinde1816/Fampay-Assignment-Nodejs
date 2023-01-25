import React from 'react'
import { Row } from 'antd';
import VideoItem from './VideoItem';



const VideoList = ({ videos }) => {
    return (
        <div>
            <Row
                gutter={{
                    xs: 8,
                    sm: 16,
                    md: 24,
                    lg: 32,
                }}
            >
                {videos && videos.map((video, index) => (
                    <VideoItem key={index} video={video} />
                ))}
            </Row>


        </div>
    )
}

export default VideoList