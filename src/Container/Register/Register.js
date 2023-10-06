import React, { Component } from 'react';
import { Link ,Redirect } from 'react-router-dom';
import axios from 'axios';
import { LockClosedIcon } from '@heroicons/react/solid';

class Register extends Component {

state = {
  name:'',
  email:'',
  password:'',
  password_confirmation:'',
  loggedIn:false,
  message:"",
  buttonState:"Sign Up"
}

onClickHandler = (e) =>{
this.setState({
  [e.target.id]: e.target.value
})
console.log(this.state)

}



formSubmitHandler=(e)=>{
  this.setState({buttonState:"Creatng...",message:""})
  e.preventDefault();
  const data = {
    name:this.state.name,
    email:this.state.email,
    password:this.state.password,
    password_confirmation:this.state.password_confirmation
  }
  
  axios.post('/register', data )
  .then( (response) => {
   localStorage.setItem('TOKEN_KEY' , response.data.token );
   this.setState({buttonState:"Sign Up"})
   this.setState({
     loggedIn:true
   });
   this.props.setUser(response.data.user);
  })
  .catch(  (error) => {
    console.log(error);
    this.setState({message:"Use Another EMail",buttonState:"Sign Up"})
  
  });
    }

    render() {

      if(this.state.loggedIn){
        return <Redirect to={'/profile'} />
      }
      
     


        return (
            <>
            
                <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="assets/img/logo.png"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create an Account</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{' '}
            <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
              Sign in to Your Account
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6"  onSubmit={this.formSubmitHandler}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
          <div>
              <label htmlFor="name" className="sr-only">
                Password
              </label>
              <input
               onChange={this.onClickHandler}  
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="name"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
               onChange={this.onClickHandler}  
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900   focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
              onChange={this.onClickHandler}  
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900   focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
            <div>
              <label htmlFor="password_confirmation" className="sr-only">
                Password
              </label>
              <input
             onChange={this.onClickHandler}  
                id="password_confirmation"
                name="password_confirmation"
                type="password"
                autoComplete="password_confirmation"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="password_confirmation"
              />
            </div>
          </div>

          {/* <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <Link to="/forgetpassword" className="font-medium text-indigo-600 hover:text-indigo-500">
                Forgot your password?
              </Link>
            </div>
          </div> */}
         <p className="mt-2 text-center text-sm text-red-600">
            {this.state.message}
          </p>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {/* <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
              </span> */}
             {this.state.buttonState}
            </button>
          </div>
        </form>
      </div>
    </div>
            </>
        )
    }
}

export default Register
