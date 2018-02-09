import React, { Component } from 'react';


class UserCard extends Component{
    render() {
        return(
            <div className="UserCard">
                <div>
                    <img src={this.props.url} className='user-img' alt="user image" />
                    <div className="user-name">{this.props.username}</div>
                    <div className="name">{this.props.name}</div>
                </div>
            </div>

        );
    }
}

export default UserCard;