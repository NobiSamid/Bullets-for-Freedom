import React from 'react';

const Food = (props) => {
    const {strArea, strCategory, strMeal, strMealThumb} = props.food;
    return (
        <div>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={strMealThumb} className="img-fluid rounded-start" alt="..."></img>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{strMeal}</h5>
                            <p className="card-text">{strArea}</p>
                            <p className="card-text"><small className="text-muted">{strCategory}</small></p>
                            <button onClick={()=> props.handleAddFood(props.food)} className="btn btn-primary">Add to list</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Food;