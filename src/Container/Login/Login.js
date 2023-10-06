import React, { Component } from 'react'
import { Link , Redirect } from 'react-router-dom';
import axios from 'axios';
import { LockClosedIcon } from '@heroicons/react/solid'
import { login } from '../../Component/utils/index';
 class Login extends Component {
 
  state = {

    email:"",
    password:"",
    message:"", 
    loggedIn:"",
    buttonState:"Sign In"

  }
  componentDidMount(){
    this.setState({
      loggedIn:this.props.loggedIn
    })
  }

  formSubmitHandler=(e)=>{
    this.setState({buttonState:"Processing...", message:""})
e.preventDefault();
 
const data = {
  email:this.state.email,
  password:this.state.password
}

console.log(data);
axios.post('/login', data )
.then( (response) => {
  console.log(response);
  this.setState({  buttonState:"Sign In"})
  if(response.data.result==0){
    this.setState({  message:"Email Or Password Incorrect"})
  }
  const TOKEN_KEY_VALUE = response.data.token;
  if(TOKEN_KEY_VALUE!=null && TOKEN_KEY_VALUE!=undefined && TOKEN_KEY_VALUE !=""){
    login(TOKEN_KEY_VALUE);
    
    this.setState({
      loggedIn:true,
      
    });
    this.props.userlogin()
    this.props.setUser("hello")
  }
  
//  this.props.history.push('/profile');
// const { history } = this.props;
// history.push("/profile")
//  localStorage.setItem('TOKEN_KEY' , response.data.token );
 

//  this.props.setUser(response.data.user);
})
.catch(  (error) => {
  console.log(error);
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
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{' '}
            <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
              Register An Acoount
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6"   onSubmit={this.formSubmitHandler}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
               onChange={(e)=>{this.setState({email:e.target.value})}}
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
              onChange={(e)=>{this.setState({password:e.target.value})}} 
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>
          <p className="mt-2 text-center text-sm text-red-600">
            {this.state.message}
          </p>
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

          

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
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

export default Login

 



 