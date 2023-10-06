import React, { Component } from 'react'

export class Profile extends Component {
    render() {
        let name ;
        let email ;
        if(this.props.user){
            name = this.props.user.name ;
            email =  this.props.user.email; 
        }
        return (
            <div className="row">
                    <div class=" col-lg-4 offset-lg-4">
                        <h1>My Account</h1>

  <h1>Name : {name}</h1>
  <h1>Email : {email}</h1>


                    </div>
                </div>
        )
    }
}

export default Profile
