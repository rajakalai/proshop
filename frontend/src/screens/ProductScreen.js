import React, { useState, useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux'
import { Row, Col, Image, ListGroup, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from "../components/Rating";
import { listProductsDetails } from '../redux/action/productAction '
import Loader from './../components/Loader';
import Message from './../components/Message';
const ProductScreen = ({ history, match}) => {
    const [qty, setQty] = useState(0);

    const dispatch = useDispatch();
    const productDetails = useSelector(state => state.productDetails);
    const { loading, error, product} =productDetails;
    useEffect(() => {
        dispatch(listProductsDetails(match.params.id))
    }, [dispatch]);
   const addToCartHandler = ( ) => {
        history.push(`/cart/${match.params.id}?qty=${qty}`)
   }
    return ( 
       <>
        <Link className='btn btn-light my-3' to="/">
            Go Back
        </Link>
        {loading ? <Loader/>: error ? <Message variant='danger'>{error}</Message> : 
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
                    { product.countInStock > 0 && (
                        <ListGroup.Item>
                            <Row>
                                <Col>Qty</Col>
                                    <Col>
                                        <Form.Control
                                            as='select'
                                            value={qty}
                                            onChange={(e) => setQty(e.target.value)}
                                        >
                                            {[...Array(product.countInStock).keys()].map(
                                            (x) => (
                                                <option key={x + 1} value={x + 1}>
                                                {x + 1}
                                                </option>
                                            )
                                            )}
                                        </Form.Control>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    )}
                    <ListGroup.Item>
                        <Button className="btn btn-block" 
                            type="button" 
                            disabled={product.countInStock === 0}
                            onClick={addToCartHandler}>
                            Add To Cart 
                        </Button>
                    </ListGroup.Item>
                </ListGroup>
            </Col>
        </Row>
        }        
       </>
    );
}
 
export default ProductScreen;