import React, {useEffect, useState} from 'react';
import {Form} from "react-bootstrap";


function Options({allowNSFW, statusNSFW}) {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        if (scroll) {
            const id = setInterval(() => {
                window.scrollBy(0, 3)
                console.log("test");
            }, 10)
            return () => clearInterval(id);
        }
    }, [scroll])


    const nsfwLabel = statusNSFW ? "NSFW" : "SFW"
    return (
        <>
            <Form>
                <Form.Check
                    className='nsfw-check'
                    onClick={allowNSFW}
                    type='switch'
                    id='nsfw_switch'
                    label={nsfwLabel}
                    style={{
                        color: statusNSFW ? "red" : "green",
                        paddingRight: '10px',
                    }}
                />
                <Form.Check
                    onClick={() => setScroll(prev => !prev)}
                    type='switch'
                    id='autoScroll'
                    label="autoScroll"
                />

            </Form>
        </>
    );
}

export default Options;