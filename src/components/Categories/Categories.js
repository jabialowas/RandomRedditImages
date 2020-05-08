import React from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";

function Categories({handleButtonCategory}) {
    return (
        <Container >
            <Row className="d-flex justify-content-center align-items-center flex-column">
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
    );
}

export default Categories;