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
    return (
        <div class="card">
            <p>{this.state.name}</p>
            <a href={this.state.link}> <img src={this.state.img} alt=""/> </a>
                
        </div>
    );
    }
}

export default Card;