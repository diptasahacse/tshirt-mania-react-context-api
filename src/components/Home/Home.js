import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';
import ProductCard from '../ProductCard/ProductCard';

const Home = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useState([]);
    const addToCartHandler = (selectedItem) => {
        const ifExist = cart.find(item => item._id === selectedItem._id);
        if (!ifExist) {
            const newCart = [...cart, selectedItem];
            setCart(newCart);

        }



    }
    const removeFromCart = (selectedItem) => {
        const restCartItems = cart.filter(item => item._id !== selectedItem._id);
        setCart(restCartItems)

    }
    console.log(cart)
    return (
        <div>
            <div className="row m-0">
                <div className="col-md-9">
                    <h3>Products</h3>
                    <Row xs={1} md={3}>
                        {
                            products.map(product => <ProductCard addToCartHandler={addToCartHandler} product={product} key={product._id}></ProductCard>)
                        }
                    </Row>
                </div>
                <div className="col-md-3">
                    <Cart removeFromCart={removeFromCart} cart={cart}></Cart>
                </div>


            </div>

        </div>
    );
};

export default Home;