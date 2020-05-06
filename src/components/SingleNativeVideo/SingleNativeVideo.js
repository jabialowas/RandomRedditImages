import React from 'react';
import {Figure} from "react-bootstrap";
import FigureCaption from "react-bootstrap/FigureCaption";

function SingleNativeVideo({post,style}) {
    return (
        <>
        <Figure style={style}>
            <video width="100%"
                   src={post.data.media.reddit_video.fallback_url} controls/>

            <FigureCaption>
                <h3 style={{
                    maxWidth: post.data.preview.images[0].source.width,
                    textOverflow:'hidden'}}>{post.data.title}</h3>
                <p>Karma: {post.data.ups.toLocaleString()}</p>
                <a target="_blank" rel="noopener noreferrer" href={'https://www.reddit.com/'+post.data.permalink}>Reddit Link</a><br/>
                <a target="_blank" rel="noopener noreferrer" href={post.data.url}>Direct Link</a>
                <p>Original size
                    : {post.data.preview.images[0].source.width}x{post.data.preview.images[0].source.height}</p>
            </FigureCaption>
        </Figure>
            </>
    );
}

export default SingleNativeVideo;