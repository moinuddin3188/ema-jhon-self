import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {name, img, seller, price, features} = props.product;
    console.log(props.product);
    return (
        <div className='product'>
            <div>
                <img src={img} alt=""/>
            </div>
            <div className='product-name'>
                <h4>{name} </h4>
                <div className='detail'>
                    <div>
                        <p><small>by: {seller} </small></p>
                        <p>Price: ${price} </p>
                        <button className="product-btn" onClick={() => props.handleAddProduct(props.product)}>
                            <FontAwesomeIcon icon={faShoppingCart} />add to cart
                        </button>
                    </div>
                    <div className='description'>
                        <h3>description</h3>
                        <ul>
                            {
                                features.map(item => <li>{item.description}: {item.value} </li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;