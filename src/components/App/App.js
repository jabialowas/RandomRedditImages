import React, {useEffect, useState} from 'react';
import {Button, Col, Container, Nav, Navbar, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Search from "../Search/Search";
import SinglePost from "../SinglePost/SinglePost";
import Options from "../Options";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Categories from "../Categories/Categories";


function App() {
    const [posts, setPosts] = useState([])
    const [dataAfter, setDataAfter] = useState(null);
    const [subreddit, setSubreddit] = useState(false)
    const [sort, setSort] = useState("hot.json?")
    const [allowNSFW, toggleAllowNSFW] = useState(false);
    const [error, setError] = useState(false)
    //toggle SafeForWork mode
    const handleNsfwChange = (e) => {
        toggleAllowNSFW(prev => !prev);
    }
    // Changing subreddit state after subreddit change
    const searchSubreddit = (subredditName) => {
        setDataAfter(null);
        setSubreddit(subredditName.replace(/%20/g, " "))
    }
    // Changing sort
    const changeSort = (sortName) => {
        setDataAfter(null);
        setSort(sortName)
    }
    // Changing subreddit state after click on category button
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
        if((typeof subreddit) !== 'boolean' ){
            getImagesFromReddit();
        }

    }, [subreddit, sort])


    //    Render when post fetched
    if (posts && subreddit && !('error' in posts)) {
        return (
            <>
                {/*NAVBAR*/}

                <Header searchSubreddit={searchSubreddit} changeSort={changeSort} handleNsfwChange={handleNsfwChange} allowNSFW={allowNSFW}/>
                {/*Page Content*/}
                <Container className="d-flex justify-content-center flex-column page-content">
                    <Row>
                        <Col>
                            {posts.map(el => <Container key={el.data.id} className="d-flex justify-content-center">
                                    <SinglePost key={el.data.id} post={el} allowNSFW={allowNSFW}/>
                                </Container>
                            )}
                        </Col>
                    </Row>
                    <h6 style={{
                        margin: "10px",
                        color: "white",
                        textAlign: "center"
                    }}>If nothing is displayed, make sure you have entered correct subreddit, or not viewing NSFW content in SFW mode.</h6>
                    <Button onClick={getMoreImagesFromReddit} variant="info" style={{
                        margin: '20px',
                        padding: '10px'
                    }}>MORE IMAGES!</Button>
                </Container>
            {/*   Footer*/}
            <Footer/>
            </>
        );
    }
    if ((!posts)) {
        return (
            <>
                {/*NAVBAR*/}
                <Header searchSubreddit={searchSubreddit} changeSort={changeSort} handleNsfwChange={handleNsfwChange} allowNSFW={allowNSFW}/>

                {/*Page content*/}
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
                {/*Footer*/}
                <Footer/>
            </>
        )
    }
    return (
        <>
            {/*NAVBAR*/}
            <Header searchSubreddit={searchSubreddit} changeSort={changeSort} handleNsfwChange={handleNsfwChange} allowNSFW={allowNSFW}/>

            {/*Page Content*/}
            <Container className="d-flex justify-content-center flex-column page-content">
                <Row>
                    <Col>
                        <h1 style={{
                            color: "white",
                            textAlign: "center"
                        }}>Select category or enter subreddit in search bar! </h1>
                        <h6 style={{
                            color: "white",
                            textAlign: "center"
                        }}>For multisubreddit search split subreddit names with spaces and select <code>"Or search:"</code> in searchbar! </h6>
                    </Col>
                </Row>
                {/*Category buttons*/}
           <Categories handleButtonCategory={handleButtonCategory}/>
            </Container>

            {/*Footer*/}
            <Footer/>
        </>
    )
}

export default App;
