import React, { Component }from 'react'

import './member.css'

class Member extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="member-card">
                <div className="member-card-items">
                    <img src={this.props.image} className="member-img" alt={this.props.image}/>
                </div>
                <div className="member-card-items">
                    <h4>{this.props.name}</h4>
                    <p>{this.props.role}</p>
                    <p>{this.props.drink}</p>
                </div>
            </div>
        ) 
    }
}

export default Member;
