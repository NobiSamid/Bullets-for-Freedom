import React from 'react';

const Gunlist = (props) => {
    console.log(props);
    const {list} = (props) || {};

    const totalReducer=(prevValue, currentValue) => prevValue + currentValue.price
    const total = list.reduce(totalReducer, 0)

    return (
        <div className="card-body">
            <h3>Gun list</h3>
            <h5>Item added:{list.length}</h5>
            <h5>totlal price: {total}$</h5>
            <ul>
                {
                    list.map(gun => <li key={gun.name}>{gun.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Gunlist;