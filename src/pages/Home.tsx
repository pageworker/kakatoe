import React from 'react';
import {Col, Image, Row} from "react-bootstrap"
import Container from "react-bootstrap/Container";
import image from "../images/banner.jpg"

function Home() {

    // let image = require('./../images/banner.jpg').default
    return (
        <div>
            <Container>
                <Row>
                    <Col className="text-center">
                        <h1>Welkom bij de kakatoe</h1>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center">
                        <div id="banner" style={{
                            backgroundImage: `url(${image})`
                        }}>
                        </div>

                    </Col>
                </Row>
                <Row xs={2} sm={2} md={2}>
                    <Col>
                        De Kakatoe was een Cafe in Volendam met een rijke geschiedenis. Hoewel het Cafe niet
                        langer
                        bestaat zijn de herinnering nog steeds levend. Deze website is er om deze herinneringen
                        te delen
                        en levend te houden voor die gene die daar behoefte aan hebben.
                    </Col>
                    <Col>


                        Door de jaren heen zijn velen van deze herinnering op de gevoelige plaat opgeslagen.
                        Veel van
                        deze fotos gaan over de diverse uitstapjes die gemaakt zijn met de vaste gasten en de
                        soos club.
                        Je vindt deze fotos in onze foto gallerij.
                    </Col>

                </Row>
            </Container>
        </div>
    )

}

export default Home

