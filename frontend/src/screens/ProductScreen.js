import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { Row, Col, Image, ListGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from "../components/Rating";
const ProductScreen = ({match}) => {
    const [product, setProduct] = useState({});
    useEffect(() => {
        const fetchdata = async () => {
            const {data} = await axios.get(`/api/products/${match.params.id}`);
            setProduct(data);
        }
        fetchdata();
    }, [match]);
    console.log(product);
   // const product = products.find(p => p._id === match.params.id);
    return ( 
       <>
        <Link className='btn btn-light my-3' to="/">
            Go Back
        </Link>
        <Row>
            <Col md={6}>
                <Image src={product.image} alt={product.name} fluid/>
            </Col>
            <Col md={3}>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h3>{product.name}</h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Rating 
                            star={product.rating}
                            text={`${product.numReviews} reviews`}
                        />
                    </ListGroup.Item>
                    <ListGroup.Item>
                        price : ${product.price}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Description : ${product.description}
                    </ListGroup.Item>
                </ListGroup>
            </Col>
            <Col md={3} variant="flush">
                <ListGroup>
                    <ListGroup.Item>
                        <Row>
                            <Col>Price:</Col>
                            <Col>
                                <strong>${product.price}</strong>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col>status:</Col>
                            <Col>
                               {product.countInStock > 0 ? "In stock" : "Out of stock"}
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Button className="btn btn-block" type="button" disabled={product.countInStock === 0}>
                            Add To Cart 
                        </Button>
                    </ListGroup.Item>
                </ListGroup>
            </Col>
        </Row>
       </>
    );
}
 
export default ProductScreen;