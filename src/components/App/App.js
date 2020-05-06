import React, {useEffect, useState} from 'react';
import {Button, Col, Container, InputGroup, InputGroupText, Navbar, Row} from "react-bootstrap";
import InfiniteScroll from 'react-infinite-scroller'
import Spinner from "react-bootstrap/Spinner";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import SingleImage from "../SingleImage/SingleImage";
import Search from "../Search/Search";
import SinglePost from "../SinglePost/SinglePost";
import Options from "../Options";


function App() {
    const [posts, setPosts] = useState([])// pusta tablica
    const [dataAfter, setDataAfter] = useState(null);
    const [subreddit, setSubreddit] = useState("awww")
    const [sort, setSort] = useState("hot.json?")
    const [allowNSFW, toggleAllowNSFW] = useState(false);
    const [error, setError] = useState(false)

    const handleNsfwChange = (e) => {
        toggleAllowNSFW(prev => !prev);
    }
    const searchSubreddit = (subredditName) => {
        setDataAfter(null);
        setSubreddit(subredditName)
    }
    const changeSort = (sortName) => {
        setDataAfter(null);
        setSort(sortName)
    }
    const getImagesFromReddit = () => {
        fetch(`https://www.reddit.com/r/${subreddit}/${sort}after=${dataAfter}`)
            .then(resp => resp.json())
            .then(data => {
                setPosts(data.data.children)// prev => ...prev, data.data.children
                setDataAfter(data.data.after)
            })
            .catch(error => setError(error.message))
        console.log(error);
    }
    const getMoreImagesFromReddit = () => {
        fetch(`https://www.reddit.com/r/${subreddit}/${sort}after=${dataAfter}`)
            .then(resp => resp.json())
            .then(data => {
                setPosts(prev => [...prev, ...data.data.children])
                setDataAfter(data.data.after)
            })
    }

    useEffect(() => {
        setDataAfter(null);
        setPosts([]);
        getImagesFromReddit();
    }, [subreddit, sort])
    console.log(posts);
    if (posts && subreddit && !('error' in posts)) {
        return (
            <>
                <Navbar className="bg-light justify-content-between flex" sticky='top' style={{
                    background: 'white',
                    marginBottom: '10px',
                    padding: "10px 20px 10px 20px"
                }}>
                    <Search onSearch={subredditName => searchSubreddit(subredditName)} onSort={changeSort}/>
                    <Options allowNSFW={handleNsfwChange} statusNSFW={allowNSFW}/>

                </Navbar>

                <Container className="d-flex justify-content-center flex-column">
                    <Row>
                        <Col>
                            {posts.map(el => <Container key={el.data.id} className="d-flex justify-content-center">
                                    <SinglePost key={el.data.id} post={el} allowNSFW={allowNSFW}/>
                                </Container>
                            )}
                        </Col>
                    </Row>

                    <Button onClick={getMoreImagesFromReddit} variant="light" style={{
                        margin: '20px'
                    }}>MORE IMAGES!</Button>
                </Container>
            </>
        );
    }
    if ((posts && 'error' in posts)) {
        return (
            <>
            <Navbar sticky='top' style={{
                background: '#ddd',
                marginBottom: '10px',
                padding: "10px 20px 10px 20px"
            }}>
                <Search onSearch={subredditName => searchSubreddit(subredditName)} onSort={changeSort}/>
                <Options allowNSFW={handleNsfwChange} statusNSFW={allowNSFW}/>

            </Navbar>
            <Container>
                <Row>
                    <Col>
                        <h1 style={{
                            paddingTop: "50px ",
                            color:"white",
                            textAlign: "center"
                        }}>Something goes wrong :(((  Try again!</h1>
                    </Col>
                </Row>
            </Container>
                </>
        )
    }

    return (
        <>

            <Navbar sticky='top' style={{
                background: '#ddd',
                marginBottom: '10px',
                padding: "10px 20px 10px 20px"
            }}>
                <Search onSearch={subredditName => searchSubreddit(subredditName)} onSort={changeSort}/>
                <Options allowNSFW={handleNsfwChange} statusNSFW={allowNSFW}/>
            </Navbar>
            <Container>
            <Row>
                <Col>
                    <h1 style={{
                        paddingTop: "50px ",
                        color:"white",
                        textAlign: "center"
                    }}>Something goes wrong :(((  Try again!</h1>
                </Col>
            </Row>
        </Container>
            </>
    )
}

export default App;
