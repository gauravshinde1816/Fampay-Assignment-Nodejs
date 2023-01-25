import React from 'react'
import { Col, Card } from 'antd';
const { Meta } = Card;

const VideoItem = ({ video }) => {
    return (
        <Col className="gutter-row" span={6}>
            <Card
                hoverable
                style={{
                    width: 240,
                }}
                cover={<img alt="example" src={video.thumbnails.default.url} />}
            >
                <Meta title={video.title} description={video.description} />
            </Card>
        </Col>
    )
}

export default VideoItem