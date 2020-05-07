import React from 'react';
import {Button, Figure} from "react-bootstrap";
import FigureCaption from "react-bootstrap/FigureCaption";

function SingleGifv({post,style}) {
    if("variants" in post.data.preview.images[0] && "mp4" in post.data.preview.images[0].variants) {
        const vidPrev = post.data.preview.images[0].variants.mp4.source.url
        const vidUrl = vidPrev.replace(/&amp;/g, "&");
        return (
            <Figure style={style}>
                <video width="100%"
                       src={vidUrl}
                       controls
                />
                <FigureCaption>
                    <h3 style={{
                        maxWidth: post.data.preview.images[0].source.width,
                        textOverflow: 'hidden'
                    }}>{post.data.title}</h3>

                    <a target="_blank" rel="noopener noreferrer" href={'https://www.reddit.com/'+post.data.permalink}><Button className="mr-1" variant="primary"
                                                                                                                              size="sm">{post.data.subreddit_name_prefixed} link</Button></a>
                    <a target="_blank" rel="noopener noreferrer" href={post.data.url}><Button className="" variant="primary"
                                                                                              size="sm">Direct link</Button></a>

                </FigureCaption>
            </Figure>
        );
    }
    return null
}

export default SingleGifv;