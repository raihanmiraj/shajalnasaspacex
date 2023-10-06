import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class ForgetPassword extends Component {
    render() {
        return (
            <>
                 <div className="row">
                    <div class=" col-lg-4 offset-lg-4">
                        <h1>Forget Account</h1>

                        <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
   
  </div>
  
 
  <button type="submit" class="btn btn-primary ">Forget Password</button>
  <br/>

  Forget My Password <Link to="/forgetpassword">Click Here</Link>
</form>


                    </div>
                </div>
            </>
        )
    }
}

export default ForgetPassword
