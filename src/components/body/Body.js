import React, { useEffect, useState } from 'react';
import Food from '../all-food/Food';
import Selected from '../selected/Selected';
import './Body.css'

const Body = () => {
    const [foods, setFood] = useState([]);
    const [list, setList] = useState([]);
    useEffect(()=> {
        fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
        .then(res => res.json())
        .then(data => setFood(data.meals));
    }, [])

    const handleAddFood = (food) =>{
        const newFoodList = [...list, food];
        setList(newFoodList);
    }
    return (

        <div className="body-container">
        
        <div className="all-food">
        <h1>food:{foods.length}</h1>
        {
            foods.map(food =><Food 
            key={food.idMeal}
            food={food}
            handleAddFood={handleAddFood}
            ></Food>)
        }
        </div>
        <div className="food-list">
            <Selected 
            list={list}></Selected>
        </div>
            
        </div>
    );
};

export default Body;