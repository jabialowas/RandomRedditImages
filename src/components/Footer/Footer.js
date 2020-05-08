import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

function Footer() {
    return (
        <footer className='page-footer'>
            <Container>
                <Row>
                    <Col>
                        <p>Open-source available on <a
                            href="https://github.com/jabialowas/RedditGibImages">Github</a>.<br/>Some images
                            may be explicit, please use it on your own risk.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;