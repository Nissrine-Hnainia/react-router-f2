import React from 'react'
import {Form, FormControl, Button} from "react-bootstrap"

const Search = () => {
    return (
        <div>
            <Form className="d-flex">
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
            </Form>
        </div>
    )
}

export default Search
