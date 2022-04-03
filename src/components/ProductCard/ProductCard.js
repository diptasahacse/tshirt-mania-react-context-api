import React from 'react';
import { Card, Col } from 'react-bootstrap';

const ProductCard = ({ product, addToCartHandler }) => {
    const {_id, name, picture, price } = product;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {
                            price
                        }
                    </Card.Text>
                    <button onClick={()=>addToCartHandler(product)} className='btn btn-primary'>Add to Cart</button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ProductCard;