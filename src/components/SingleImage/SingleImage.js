import React from 'react';
import {Figure} from "react-bootstrap";
import FigureCaption from "react-bootstrap/FigureCaption";
import FigureImage from "react-bootstrap/FigureImage";

function SingleImage({element, index}) {
    if ((element.data.preview && 'preview' in element.data) && (element.data.media !== null && element.data.media.type === "gfycat.com") || (element.data.domain === "i.imgur.com" && 'preview' in element.data && 'reddit_video_preview' in element.data.preview)) {
        if("reddit_video_preview" in element.data.preview){
        return (
            <>
                <Figure>
                    <video width="100%" src={element.data.preview.reddit_video_preview.fallback_url} controls/>

                    <FigureCaption>
                        <a target="_blank" rel="noopener noreferrer" href={element.data.url}>Direct Link</a>
                        <p>Original size
                            : {element.data.preview.images[0].source.width}x{element.data.preview.images[0].source.height}</p>
                    </FigureCaption>
                </Figure>
            </>
        )
        }
    }

    if (element.data.preview && !element.data.is_video) {
        if("variants" in element.data.preview.images[0] && "gif" in element.data.preview.images[0].variants){
            return (
                <>
                    <Figure>
                        <FigureImage
                            variant="top"
                            src={element.data.url}
                            height={element.data.preview.images[0].source.height}
                            width={element.data.preview.images[0].source.width}
                            margin='10px'
                            controls/>

                        <FigureCaption>
                            <a target="_blank" rel="noopener noreferrer" href={element.data.url}>Direct Link</a>
                            <p>Original size
                                : {element.data.preview.images[0].source.width}x{element.data.preview.images[0].source.height}</p>
                        </FigureCaption>
                    </Figure>
                </>)
        }
        const imgPrev = element.data.preview.images[0].resolutions[element.data.preview.images[0].resolutions.length - 1].url
        const imgUrl = imgPrev.replace(/&amp;/g, "&");
        return (
            <>
                <Figure>
                    <FigureImage
                        variant="top"
                        src={imgUrl}
                        height={element.data.preview.images[0].source.height}
                        width={element.data.preview.images[0].source.width}
                        margin='10px'
                        controls/>

                    <FigureCaption>
                        <a target="_blank" rel="noopener noreferrer" href={element.data.url}>Direct Link</a>
                        <p>Original size
                            : {element.data.preview.images[0].source.width}x{element.data.preview.images[0].source.height}</p>
                    </FigureCaption>
                </Figure>
            </>
        )
    }

    if (element.data.preview && element.data.is_video) {
        return (
            <>
                <Figure>
                    <video width="100%"
                           src={element.data.media.reddit_video.fallback_url} controls/>

                    <FigureCaption>
                        <a target="_blank" rel="noopener noreferrer" href={element.data.url}>Direct Link</a>
                        <p>Original size
                            : {element.data.preview.images[0].source.width}x{element.data.preview.images[0].source.height}</p>
                    </FigureCaption>
                </Figure>


            </>
        )
    }
    return (
        null
    )
}
export default SingleImage;