import React, {useEffect, useState} from 'react';
import {Button, Col, Container, Nav, Navbar, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Search from "../Search/Search";
import SinglePost from "../SinglePost/SinglePost";
import Options from "../Options";


function App() {
    const [posts, setPosts] = useState([])// pusta tablica
    const [dataAfter, setDataAfter] = useState(null);
    const [subreddit, setSubreddit] = useState(false)
    const [sort, setSort] = useState("hot.json?")
    const [allowNSFW, toggleAllowNSFW] = useState(false);
    const [error, setError] = useState(false)

    const handleNsfwChange = (e) => {
        toggleAllowNSFW(prev => !prev);
    }
    const searchSubreddit = (subredditName) => {
        setDataAfter(null);
        setSubreddit(subredditName.replace(/%20/g, " "))
    }
    const changeSort = (sortName) => {
        setDataAfter(null);
        setSort(sortName)
    }
    const handleButtonCategory = e => {
        e.preventDefault();
        setSubreddit(e.target.value)
    }
    //fetch posts
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
                <Navbar collapseOnSelect expand="md" sticky='top' style={{
                    background: 'white',
                    marginBottom: '10px',
                    padding: "10px 20px 10px 20px"
                }}>
                    <Navbar.Brand>123s</Navbar.Brand>
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav >
                                <Search onSearch={subredditName => searchSubreddit(subredditName)} onSort={changeSort}/>
                            </Nav>
                        </Navbar.Collapse>
                        <Options allowNSFW={handleNsfwChange} statusNSFW={allowNSFW}/>
                    </Container>
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
    if ((!posts)) {
        return (
            <>
                <Navbar collapseOnSelect expand="lg" sticky='top' style={{
                    background: 'white',
                    marginBottom: '10px',
                    padding: "10px 20px 10px 20px"
                }}>
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav>
                                <Search onSearch={subredditName => searchSubreddit(subredditName)} onSort={changeSort}/>

                            </Nav>
                        </Navbar.Collapse>
                        <Options allowNSFW={handleNsfwChange} statusNSFW={allowNSFW}/>
                    </Container>
                </Navbar>
                <Container>
                    <Row>
                        <Col>
                            <h1 style={{
                                paddingTop: "50px ",
                                color: "white",
                                textAlign: "center"
                            }}>Something goes wrong :((( Try again!</h1>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }

    return (
        <>

            <Navbar collapseOnSelect expand="lg" sticky='top' style={{
                background: 'white',
                marginBottom: '10px',
                padding: "10px 20px 10px 20px"
            }}>
                <Navbar.Brand>123s</Navbar.Brand>
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <Search onSearch={subredditName => searchSubreddit(subredditName)} onSort={changeSort}/>
                        </Nav>
                    </Navbar.Collapse>
                    <Options allowNSFW={handleNsfwChange} statusNSFW={allowNSFW}/>
                </Container>
            </Navbar>
            <Container>
                <Row>
                    <Col>
                        <h1 style={{
                            paddingTop: "50px ",
                            color: "white",
                            textAlign: "center"
                        }}>Select category or enter subreddit in search bar! </h1>
                    </Col>
                </Row>
                <Container>
                    <Row className="justify-content-md-center">
                        <Col md={{offset: 2}}>
                            <Button className="m-2" variant="outline-danger"
                                    value="wallpapers+wallpaper+widescreenwallpaper"
                                    onClick={handleButtonCategory}
                            size="lg">Wallpapers</Button>
                            <Button className="m-2" variant="outline-primary"
                                    value="photography+pics+itookapicture+ExposurePorn"
                                    onClick={handleButtonCategory}
                            size="lg">Photo</Button>
                            <Button className="m-2" variant="outline-light" value="art+sketchpad+conceptart"
                                    onClick={handleButtonCategory}
                            size="lg">Art</Button>
                            <Button className="m-2" variant="outline-info" value="pcgaming+gaming+games"
                                    onClick={handleButtonCategory}
                            size="lg">Gaming</Button>
                            <Button className="m-2" variant="outline-warning" value="funny+wtf"
                                    onClick={handleButtonCategory}
                            size="lg">Funny</Button>
                            <Button className="m-2" variant="outline-success"
                                    value="awww+thecatdimension+Catloaf+NatureIsFuckingLit"
                                    onClick={handleButtonCategory}
                            size="lg">Animals</Button>
                        </Col>
                    </Row>

                </Container>
            </Container>
        </>
    )
}

export default App;
