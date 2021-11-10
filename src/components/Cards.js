import React from "react";
import {Card} from "react-bootstrap"

const Cards = () => {
    return (
        <div className="cards">
            <Card

                variant="light"
                style={{ width: "18rem" }}
                className="mb-2"
            >
                <Card.Header>Books</Card.Header>
                <Card.Body>
                    <Card.Title> Books </Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card
                variant="light"
                style={{ width: "18rem" }}
                className="mb-2"
            >
                <Card.Header>Audio-books</Card.Header>
                <Card.Body>
                    <Card.Title> Audio-books </Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Cards;
