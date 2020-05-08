import React from 'react';
import FigureCaption from "react-bootstrap/FigureCaption";
import {Button, Figure} from "react-bootstrap";

function SingleVideo({post, style}) {
    return (
        <Figure style={style}>
            <video width="100%"
                   src={post.data.preview.reddit_video_preview.fallback_url}
                   controls
            />
            <FigureCaption>
                <h3 style={{
                    maxWidth: post.data.preview.images[0].source.width,
                    textOverflow: 'hidden'
                }}>{post.data.title}</h3>
                <a target="_blank" rel="noopener noreferrer"
                   href={'https://www.reddit.com/' + post.data.permalink}><Button className="mr-1" variant="primary" size="sm">{post.data.subreddit_name_prefixed} link</Button></a>
                <a target="_blank" rel="noopener noreferrer" href={post.data.url}><Button className="" variant="primary" size="sm">Direct link</Button></a>
            </FigureCaption>
        </Figure>
    );
}

export default SingleVideo;