import React from 'react';
import "./Gunlist.css";

const Gunlist = (props) => {
    //////////////// Destructuring newGunLIst array  /////////////////////
    const {list} = (props) || {};

    //////////////// calculating total by Reduce //////////////////////
    const totalReducer=(prevValue, currentValue) => prevValue + currentValue.price
    const total = list.reduce(totalReducer, 0)

    return (
        <div className="card-body list">
            <h3>Gun list</h3>
            <h5>Item added: {list.length}</h5>
            <h5>totlal price: ${total}</h5>
            <ul>
                {
                    list.map(gun => <li className="gun-list" key={gun.name}>{gun.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Gunlist;