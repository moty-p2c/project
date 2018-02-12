import React, { Component } from 'react';
import './UserCard.css'

class UserCard extends Component{
    render() {
        return(
            <div className="UserCard">
                <div>
                    <a className="UserCardLink" href="#"/>
                    <div className="UserCardContent">
                        <img src={this.props.url} className='user-img' alt="user image" />
                        <div className="UserDetails">
                            <div className="name">{this.props.name}</div>
                            <div className="user-name">@{this.props.username}</div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default UserCard;