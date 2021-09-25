import React from 'react';

const Selected = (props) => {
    console.log(props.list)
    const {list} = (props) || {}
    return (
        <div>
            <h1 className="text-3xl">Display all selected food here</h1>
            <h4>Item added:{list.length}</h4>
            <ul>
                {
                    list.map( food => <li key={food.idMeal} className='text-4xl'>{food.strMeal}</li>)
                }
            </ul>
        </div>
    );
};

export default Selected;