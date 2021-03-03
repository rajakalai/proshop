import React from 'react';
import {Card} from "react-bootstrap";
import Rating from './Rating'
import { Link } from 'react-router-dom';
const Product = ({product}) => {
    return ( 
        <Card className="my-3 p-3 rounded">
            <Link href={`/product/${product.id}`}></Link>
            <Card.Img src={product.image} variant="top" />
            <Card.Body>
                <Link to={`/product/${product._id}`}>
                    <Card.Title as="div">
                        <strong>{product.name}</strong>
                    </Card.Title>
                </Link>
                <Card.Text as="div">
                    <Rating  star={product.rating} text={`${product.numReviews} reviews`} />
                </Card.Text>
                <Card.Text as="h3">
                    ${product.price}
                </Card.Text>
            </Card.Body>    
        </Card>
     );
}
 
export default Product;