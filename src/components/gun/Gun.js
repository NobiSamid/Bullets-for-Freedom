import React from 'react';
import './Gun.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Gun = (props) => {
    console.log(props.gun)
    const {name, type, price, fireRate, magazineSize, image} = props.gun || {};
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div>
            <div className="col">
                <div className="card h-100 card-bg">
                    <img src={image} className="card-img-top rounded-start cart-image" alt="thumbnail"></img>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">Type: {type}</p>
                        <p className="card-text">Fire-rate: {fireRate}</p>
                        <p className="card-text">Magazine-size: {magazineSize} round</p>
                        <p className="card-text">Price: {price}$</p>
                        <button onClick={()=> props.handleAddGun(props.gun)} className="btn btn-primary">{cartIcon} Add to list</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gun;