import React, { useEffect, } from 'react';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, ListGroup, Image, Button, Form, Card } from 'react-bootstrap';
import Message from '../components/Message';
import { addToCart,removeFromCart } from './../redux/action/cartAction';

const CartScreen = ({ match, location, history}) => {
    const productId = match.params.id;
    const qty = location.search ? Number(location.search.split('=')[1]) : 1;
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart
    console.log(cartItems);
    useEffect(() => {
        if(productId) {
            dispatch(addToCart(productId, qty))
        }
    }, [dispatch, productId, qty])
    const removeFromCartHandler = (id) => {
        console.log('cart remove', id)
        dispatch(removeFromCart(id))
    }
    const checkOutHandler = () => {
        console.log('checkout');
        history.push('/login?redirect=shipping')
    }
    console.log(qty);
    return ( 
        <Row>
            <Col md={8}>
                <h1>Shopping cart</h1>
                {cartItems.length === 0 ? 
                    <Message>Your cart is empty <Link  to='/'>Go back</Link> </Message> :
                    <ListGroup variant='flush'>
                        {cartItems.map(item => (
                            <ListGroup.Item key={item.product}>
                                <Row>
                                    <Col md={2}>
                                        <Image src={item.image} alt={item.name} rounded fluid />
                                    </Col>
                                    <Col md={3}>
                                        <Link to={`/product/${item.product}`}></Link>
                                    </Col>
                                    <Col md={2}>{item.price}</Col>
                                    <Col md={2}>
                                    <Form.Control
                                            as='select'
                                            value={item.qty}
                                            onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}
                                        >
                                            {[...Array(item.countInStock).keys()].map(
                                            (x) => (
                                                <option key={x + 1} value={x + 1}>
                                                {x + 1}
                                                </option>
                                            )
                                            )}
                                        </Form.Control>
                                    </Col>
                                    <Col md={2}>
                                        <Button type='button' 
                                            variant='light' 
                                            onClick={() => removeFromCartHandler(item.product)}>
                                                <i className='fas fa-trash'></i>
                                        </Button>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                }
            </Col>
            <Col md={4}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>Sub Total ({cartItems.reduce((acc,item) => acc+ item.qty, 0)}) Items</h2>
                            ${cartItems.reduce((acc,item) => acc+ item.qty* item.price, 0)}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button type='button' 
                                className='btn btn-block' 
                                disabled={cartItems.length ===0}
                                onClick={checkOutHandler}>Procced to Checkout</Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
    );
}
 
export default CartScreen;