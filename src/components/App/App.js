import React, {useEffect, useState} from 'react';
import logo from '../../logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import SingleImage from "../SingleImage/SingleImage";
import {Button, Col, Container, Row} from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";


function App() {
    const [data, setData] = useState(false)
    const [subreddit, setSubreddit] = useState("awww")


    const handleClick = (e) => {
        e.preventDefault();
    }
    useEffect(() => {
        fetch(`https://www.reddit.com/r/${subreddit}/hot.json?limit=50`)
            .then(resp => resp.json())
            .then(data => setData(data))
    }, [subreddit])
    console.log(data.data);
    if (data) {
        return (
            <>           <Button onClick={handleClick}> Kittens</Button>
                <Container fluid="sm">
                    <Row>
                        <Col>
                            {data.data.children.map(el => <SingleImage element={el}/>)}
                        </Col>
                    </Row>
                </Container>

            </>
        );
    }
    return (
        <Container>
            <Row>
                <Col>
                    <Spinner animation="border" variant="warning"/>
                </Col>
            </Row>
        </Container>
    )
}

export default App;
