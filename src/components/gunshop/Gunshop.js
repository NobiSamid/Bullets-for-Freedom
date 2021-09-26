import React, { useEffect, useState } from 'react';
import Gun from '../gun/Gun';
import Gunlist from '../gunlist/Gunlist';
import "./Gunshop.css"

const Gunshop = () => {
    /////////////// useState for Gun and Gunlist component /////////
    const [guns, setGuns] = useState([]);
    const [list, setList] = useState([]);

    /////////////// useEffect for fetching data /////////
    useEffect(()=>{
        fetch('./tools.JSON')
        .then(res =>res.json())
        .then(data=> setGuns(data));
    },[])

    /////////////// Button handler /////////
    const handleAddGun = (gun) =>{
        const newGunList = [...list, gun];
        setList(newGunList);
    }

    return (
        <div className="shop-container">

        {/********** Displaying Gun component here **********/}
            <div className="gun-container row row-cols-1 row-cols-md-3 g-4">
            {
                guns.map(gun=><Gun
                key={gun.name}
                gun={gun}
                handleAddGun={handleAddGun}
                ></Gun>)
            }
            </div>

            {/********** Displaying Gunlist component here **********/}
            <div className="list-container card list-bg">
            <Gunlist
             list={list}></Gunlist>
            </div>
        </div>
    );
};

export default Gunshop;