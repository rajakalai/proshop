import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../action/productAction '
import {Row, Col} from "react-bootstrap"
import Product from "../components/Product";
import Message from '../components/Message';
import Loader from '../components/Loader';
// import Loader from './../components/Loader';
// import Message from './../components/Message';
const HomeScreen = () => {
    const dispatch = useDispatch();
    const productList = useSelector( state => state.productList);
    const { loading, error, products } = productList;
    console.log(products)
    useEffect(() => {
      dispatch(listProducts())
    }, [dispatch]);    
    return ( 
        <>
            <h1> Latest products</h1>  
            {loading ? <Loader/>: error ? <Message variant='danger'>{error}</Message> :
             <Row>
                {products.map(product => {
                    return (
                        <Col sm={12} md={6} lg={3} key={product._id}>
                            <Product product={product} />
                        </Col>
                    )                    
                })}
            </Row>
            }
        </>
    );
}
 
export default HomeScreen;