import React from 'react';
import {Figure} from "react-bootstrap";
import FigureCaption from "react-bootstrap/FigureCaption";
import FigureImage from "react-bootstrap/FigureImage";
import ResponsiveEmbed from "react-bootstrap/ResponsiveEmbed";

function SingleImage({element, index}) {

    if (element.data.preview && !element.data.is_video) {
        const imgPrev = element.data.preview.images[0].resolutions[element.data.preview.images[0].resolutions.length - 1].url
        const imgUrl = imgPrev.replace(/&amp;/g, "&");
        return (
                <>
                        <Figure>
                            <FigureImage variant="top" src={imgUrl} />
                            <a href={element.data.url}><FigureCaption>{element.data.url}</FigureCaption></a>
                        </Figure>
            </>
        )
    }
    if(element.data.preview && element.data.is_video){
        const imgPrev = element.data.preview.images[0].resolutions[element.data.preview.images[0].resolutions.length - 1].url
        const imgUrl = imgPrev.replace(/&amp;/g, "&");
        return (
            <>

                    <ResponsiveEmbed aspectRatio="16by9">
                        <embed  src={element.data.media.reddit_video.fallback_url} />
                    </ResponsiveEmbed>
            </>
        )
    }

    return (
        null
    )

}

export default SingleImage;