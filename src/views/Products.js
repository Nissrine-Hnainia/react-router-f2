import React from "react";
import { Button } from "react-bootstrap";
import Cards from "../components/Cards";
import Search from "../components/Search";

const Products = ({history}) => {
    return (
        <div>
            <Search />
            <Cards/>
            <Button onClick={() =>history.goBack() } >Go Back</Button>

        </div>
    );
};

export default Products;
