import React from 'react';
import {Button, Figure} from "react-bootstrap";
import FigureImage from "react-bootstrap/FigureImage";
import FigureCaption from "react-bootstrap/FigureCaption";

function SingleGif({post,style}) {
    return (
        <>
            <Figure style={style}>
                <FigureImage
                    variant="top"
                    src={post.data.url}
                    height={post.data.preview.images[0].source.height}
                    width={post.data.preview.images[0].source.width}
                    margin='10px'
                    controls
                autoPlay/>

                <FigureCaption>
                    <h3 style={{
                        maxWidth: post.data.preview.images[0].source.width,
                        textOverflow:'hidden'}}>{post.data.title}</h3>

                    <a target="_blank" rel="noopener noreferrer" href={'https://www.reddit.com/'+post.data.permalink}><Button className="mr-1" variant="primary"
                                                                                                                              size="sm">{post.data.subreddit_name_prefixed} link</Button></a>
                    <a target="_blank" rel="noopener noreferrer" href={post.data.url}><Button className="" variant="primary"
                                                                                              size="sm">Direct link</Button></a>


                </FigureCaption>
            </Figure>
        </>
    );
}

export default SingleGif;