import React, {Component} from 'react';

const UserProfile = (props) => {
    // Update this with this.props
    const {name, lastname} = props.userInfo;
    // console.log('props.userInfo', props.userInfo);

    return (
        <div>
            Welcome Back
            <div>{name} {lastname}</div>
        </div>
    )
}

export default UserProfile;