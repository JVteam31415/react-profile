import React from "react";

function Card(link, name, img){
    return (
        <div class="card">
            <p>{name}</p>
            <a href={link}> <img src={img} /> </a>
                
        </div>
    );
}

module.exports = Card;