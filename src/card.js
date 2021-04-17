import React, { Component} from "react";

class Card extends Component{
    constructor(props){
        super(props);
        this.state = {
            name : props.name,
            link : props.link,
            img :props.img,
        }
    }

    render(){
        console.log(this.state.img)
    return (
        <div className="card">
            <p>{this.state.name}</p>
            <a href={this.state.link}> <img src={this.state.img} alt="img"/> </a>
                
        </div>
    );
    }
}

export default Card;