import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Products = ({history}) => {
    return (
        <div>
            <h2>This is the products page</h2>
            <div className="cards">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1356&h=668&fit=crop" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Button variant="primary">
                        <Link className="link" to="/products/books">View books</Link>
                    </Button>
                </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://www.scarymommy.com/wp-content/uploads/2020/03/06/Feature-Comfortable-Shoes.jpg" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Button variant="primary">
                        <Link className="link" to="/products/shoes"> View Shoes</Link>
                    </Button>
                </Card.Body>
                </Card>
            </div>
            <Button onClick={() => history.goBack()} > go back </Button>
        </div>
    )
}

export default Products
