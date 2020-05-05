import React, {useEffect, useState} from 'react';
import {Button, Col, Container, InputGroup, InputGroupText, Row} from "react-bootstrap";
import InfiniteScroll from 'react-infinite-scroller'
import Spinner from "react-bootstrap/Spinner";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import SingleImage from "../SingleImage/SingleImage";
import Search from "../Search/Search";



function App() {
    const [data, setData] = useState(false)
    const [dataAfter, setDataAfter ] = useState(null);
    const [subreddit, setSubreddit] = useState("all")
    const [sort, setSort] = useState("hot.json?")


    const handleClick = (e) => {
        e.preventDefault();
    }
    const searchSubreddit = (subredditName) => {
        setSubreddit(subredditName)
    }
    const changeSort = (sortName) => {
        setSort(sortName)
    }

    const getImagesFromReddit = () => {
        fetch(`https://www.reddit.com/r/${subreddit}/${sort}after=${dataAfter}`)
            .then(resp => resp.json())
            .then(data => {setData(data)})
                // setDataAfter(data.data.after)})
    }
    useEffect(() => {
      getImagesFromReddit();
    }, [subreddit,sort])
console.log(data.data);
    if (data && subreddit) {
        return (
            <>

                <Container >
                    <Search onSearch={searchSubreddit} onSort={changeSort}/>

                    <Row >
                        <Col>
                            {data.data.children.map(el => <Container  key={el.data.id} className="d-flex justify-content-center">
                                <SingleImage key={el.data.id} element={el}/>
                            </Container>
                            )}
                        </Col>
                    </Row>
                </Container>

            </>
        );
    }

    return (
        <Container>
            <Search onSearch={subredditName => searchSubreddit(subredditName)}/>
            <Row>
                <Col>
                    <Spinner animation="border" variant="warning"/>
                </Col>
            </Row>
        </Container>
    )
}

export default App;
