import React from "react";
import {Carousel} from "react-bootstrap"

const Home = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    style={{width:"80%"}}
                    className="d-block w-100"
                    src="https://img-4.linternaute.com/JJ0Skx8vB7zmLBWaT9Zevs-N4Cc=/1240x/smart/7ed2862b6c20462fba01314b3d0cb8cc/ccmcms-linternaute/17258928.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>
                        Nulla vitae elit libero, a pharetra augue mollis
                        interdum.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{width:"80%"}}
                    className="d-block w-100"
                    src="https://img-4.linternaute.com/JJ0Skx8vB7zmLBWaT9Zevs-N4Cc=/1240x/smart/7ed2862b6c20462fba01314b3d0cb8cc/ccmcms-linternaute/17258928.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{width:"80%"}}
                    className="d-block w-100"
                    src="https://img-4.linternaute.com/JJ0Skx8vB7zmLBWaT9Zevs-N4Cc=/1240x/smart/7ed2862b6c20462fba01314b3d0cb8cc/ccmcms-linternaute/17258928.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Home;
