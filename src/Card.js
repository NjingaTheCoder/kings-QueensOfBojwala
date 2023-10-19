import './Card.css'
import React , {useState} from "react";
import CardImage from './images/drinking.png'
const Card  = ({cardState , togglePopup}) =>{

    return(
        <div className="card">

            <div className="inner-card">
                
                   <img onClick={togglePopup} src={cardState.cardImage} alt="card-image"/>
      
            </div>
        </div>
    );

}

export default Card;