import React, { Component } from 'react';
import './UserMiniCard.css'

class UserMiniCard extends Component{
    render(){
        return(
            <div className='UserMiniCard'>
                <div>
                    <a href='#'>
                <img src={this.props.url} className='user-mini-img' alt="user image" />
                        <span>
                            <span className="name">{this.props.name}</span>
                            <span className="user-name">@{this.props.username}</span>
                        </span>
                    </a>
                </div>
            </div>
        );
    }
}

export default UserMiniCard