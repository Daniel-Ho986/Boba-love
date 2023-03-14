import React, { Component }from 'react'

import './member.css'

class Member extends Component {

    render() {
        return (
            <div className="member-card">
                <div className="member-card-items">
                    <img src={this.props.image} className="member-img" alt={this.props.image}/>
                </div>
                <div className="member-card-items">
                    <h4>{this.props.name}</h4>
                    <h5>{this.props.role}</h5>
                    <p><img src={this.props.drinkIcon} className="drinkIcon" alt={this.props.drinkIcon}/>{this.props.drink}</p>
                </div>
            </div>
        ) 
    }
}

export default Member;
