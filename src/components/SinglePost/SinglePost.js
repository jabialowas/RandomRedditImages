import React from 'react';
import {Figure} from "react-bootstrap";
import FigureCaption from "react-bootstrap/FigureCaption";
import FigureImage from "react-bootstrap/FigureImage";
import SingleImage from "../SingleImage/SingleImage";
import SingleVideo from "../SingleVideo/SingleVideo";
import SingleNativeVideo from "../SingleNativeVideo/SingleNativeVideo";
import SingleGif from "../SingleGif/SingleGif";
import SingleGifv from "../SingleGifv/SingleGifv";

function SinglePost({post, allowNSFW}) {

    const figureStyle = {
        background: '#ddd',
        margin: '20px',
        padding: '10px'
    }
    if (post.data.preview) {
        if (!post.data.over_18 || (post.data.over_18 && allowNSFW)) {

            //RENDER WEBM
            if ((post.data.preview && 'preview' in post.data) && (post.data.media !== null && post.data.media.type === "gfycat.com")
                || (post.data.domain === "i.imgur.com" && 'preview' in post.data && 'reddit_video_preview' in post.data.preview)) {
                if ("reddit_video_preview" in post.data.preview) {
                    return <SingleVideo post={post} style={figureStyle}/>
                }
            }
            //RENDER GIFV
            if(post.data.url.includes('.gifv')){
                return <SingleGifv post={post} style={figureStyle}/>
            }
            //RENDER IMGE/GIF
            if (post.data.preview && !post.data.is_video) {
                if ("variants" in post.data.preview.images[0] && "gif" in post.data.preview.images[0].variants) {
                    return <SingleGif post={post} style={figureStyle}/>
                }
                return <SingleImage post={post} style={figureStyle}/>
            }
            //RENDER NATIVE VIDEO
            if (post.data.preview && post.data.is_video) {
                return <SingleNativeVideo post={post} style={figureStyle}/>
            }
        }
    }
    return null;
}

export default SinglePost;