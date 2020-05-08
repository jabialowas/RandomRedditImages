import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import Search from "../Search/Search";
import Options from "../Options/Options";

function Header({searchSubreddit,changeSort,handleNsfwChange,allowNSFW}) {
    return (
        <Navbar collapseOnSelect expand="md" sticky='top' style={{
            background: 'white',
            marginBottom: '10px',
            padding: "10px 20px 10px 20px"
        }}>

            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Brand href="/RedditGibImages">
                    <img
                        style={{
                        }}
                        alt=""
                        src="logo.png"
                        width="auto"
                        height="64px"
                        className='ml-10'
                    /></Navbar.Brand>
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav >
                        <Search onSearch={subredditName => searchSubreddit(subredditName)} onSort={changeSort}/>
                    </Nav>
                </Navbar.Collapse>
                <Options allowNSFW={handleNsfwChange} statusNSFW={allowNSFW}/>
            </Container>
        </Navbar>
    );
}

export default Header;