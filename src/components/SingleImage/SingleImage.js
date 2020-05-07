import React from 'react';
import {Button, Card,} from "react-bootstrap";
import FigureImage from "react-bootstrap/FigureImage";
import FigureCaption from "react-bootstrap/FigureCaption";

function SingleImage({post,style}) {

    const imgPrev = post.data.preview.images[0].resolutions[post.data.preview.images[0].resolutions.length - 1].url
    const imgUrl = imgPrev.replace(/&amp;/g, "&");

        return (
        <>
            {/*<Figure style={style}>*/}
            {/*    <FigureImage*/}
            {/*        variant="top"*/}
            {/*        src={imgUrl}*/}
            {/*        height={post.data.preview.images[0].source.height}*/}
            {/*        width={post.data.preview.images[0].source.width}*/}
            {/*        margin='10px'*/}
            {/*        controls/>*/}
            {/*    <a href={post.data.url} target="_blank" rel="noopener noreferrer"><button className="btn btn-secondary btn-sm top-right-float">View Post</button></a>*/}
            {/*        <h3 style={{*/}
            {/*            maxWidth: post.data.preview.images[0].source.width,*/}
            {/*            textOverflow:'hidden'}}>{post.data.title}</h3>*/}
            {/*        <p>Karma: {post.data.ups.toLocaleString()}</p>*/}
            {/*        <a target="_blank" rel="noopener noreferrer" href={'https://www.reddit.com/'+post.data.permalink}>Reddit Link</a><br/>*/}
            {/*        <a target="_blank" rel="noopener noreferrer" href={post.data.url}>Direct Link</a>*/}
            {/*        <p>Original size*/}
            {/*            : {post.data.preview.images[0].source.width}x{post.data.preview.images[0].source.height}</p>*/}

            {/*</Figure>*/}


            <Card className=" text-white m-2 flex">
                <Card.Img src={imgUrl}
                alt={post.data.title}/>
                <Card.ImgOverlay style={{
                    background: "rgba(0,0,0,0.6)"
                }} className=" text-bottom">
                    <Card.Text>{post.data.title}</Card.Text>
                    <Card.Text >
                        <a target="_blank" rel="noopener noreferrer" href={'https://www.reddit.com/'+post.data.permalink}><Button className="mr-1" variant="primary"
                                                                                                                                  size="sm">{post.data.subreddit_name_prefixed} link</Button></a>
                        <a target="_blank" rel="noopener noreferrer" href={post.data.url}><Button className="" variant="primary"
                                                                                                  size="sm">Direct link</Button></a>
                    </Card.Text>
                </Card.ImgOverlay>

            </Card>
        </>
        )


}

export default SingleImage;