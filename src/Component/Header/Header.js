import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';
  import axios from 'axios';
import Home from '../../Container/Home/Home';
import Login from '../../Container/Login/Login';
import ForgetPassword from '../../Container/ForgetPassword/ForgetPassword';
import Register from '../../Container/Register/Register';
import Profile from '../../Container/Profile/Profile';
 import QuizList from '../../Container/Quiz/QuizList/QuizList';
 import QuizStartingPage from '../../Container/Quiz/QuizStartingPage/QuizStartingPage';
 import QuizPage from '../Quiz/QuizPage/QuizPage';
 import UserProfile from '../../Container/Profile/UserProfile/UserProfile';
 import UserQuizResultsPage from '../UserProfileComponent/UserQuizResultsPage/UserQuizResultsPage';
 import PublicRoute from '../PublicRoute';
 import PrivateRoute from '../PrivateRoute';
 import AuthContext from '../Context/AuthContext';
 import {isLogin} from '../utils/index';
import UserSettings from '../../Container/Profile/UserSettings/UserSettings';
import UserOwnProfile from '../../Container/Profile/UserProfile/UserOwnProfile';
import Check from '../../Check';
 
class Header extends Component {
   state = {
       user:{},
       loggedIn:isLogin(),
       navbaropen:false,
       loading:true,
       profile_image:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
       pageTitle:"HomePage"
   }
 
   componentDidMount(){
    axios.get('/user' )
    .then( (response) => {
      var data = response.data;
     this.setUser(response.data);
     var imgdata =   JSON.parse(response.data.profile_image);
     var image =  imgdata.hasOwnProperty('thumb')?imgdata.thumb:(imgdata.hasOwnProperty('medium')?imgdata.medium:imgdata.image);
     this.setState({
      loggedIn:true,
      loading:false,
      profile_image:image
    })
   
    })
    .catch(  (error) => {
      console.log(error);
      // localStorage.removeItem("TOKEN_KEY");
    });
   }
setTitle = (name)=>{
  this.setState({pageTitle:name})
}
   setProfilePicture = (data)=>{
     this.setState({profile_image:data})
   }

     navbarhandle = (data)=>{
      this.setState({navbaropen:data})
    }
   setUser = (user)=>{
      this.setState({user: user}) 
      console.log("set user also called");
   }
  
   setLoggedIn=()=>{
    axios.get('/user' )
    .then( (response) => {
      var data = response.data;
     this.setUser(response.data);
     var imgdata =   JSON.parse(response.data.profile_image);
     var image =  imgdata.hasOwnProperty('thumb')?imgdata.thumb:(imgdata.hasOwnProperty('medium')?imgdata.medium:imgdata.image);
     this.setState({
      loggedIn:true,
      loading:false,
      profile_image:image
    })
   
    })
    .catch(  (error) => {
      console.log(error);
      // localStorage.removeItem("TOKEN_KEY");
    });
     this.setState({
       loggedIn:true
     })
     console.log("login True")
   }
   setLogout=()=>{
    this.setState({
      loggedIn:false
    })
   }
    render() {
      const loggedIn = this.state.loggedIn;
      const setLoggedIn = this.setLoggedIn;
      console.log(loggedIn);
        return (
            <>
     <Router> 
     <AuthContext.Provider value={{ loggedIn, setLoggedIn }}>
          <Navbar image={this.state.profile_image} loading={this.state.loading}  navbarhandle={this.navbarhandle} setLogout={this.setLogout} checklogin={this.state.loggedIn} user={this.state.user} setUser={this.setUser} />
         
          <Switch>
          {/* <Route exact path="/" component={Home} />
          <Route  path="/login" component=  {()=> <Login user={this.state.user} />} />
          <Route  exact path="/quizlist" component=  { QuizList } />
          
          <Route exact  path="/quiz/:id" component={QuizStartingPage} />
          <Route exact  path="/quiz/start/:id" component={QuizPage} />
          <Route  path="/forgetpassword" component={ForgetPassword} />
          <Route  path="/register" component={()=> <Register user={this.state.user} />}  />
          <Route  path="/profile" component={()=> <UserProfile user={this.state.user} />} />
          <Route exact   path="/userquizresult/:id" component={UserQuizResultsPage} />
           */}
     
          <PublicRoute restricted={false} component={Home} path="/" exact />
          <PrivateRoute component={QuizList} path="/quizlist" exact />
          <PublicRoute restricted={isLogin()} component={()=> <Login loggedIn= {this.state.loggedIn} user={this.state.user} userlogin={this.setLoggedIn} setUser = {this.setUser}/>} path="/login" exact />
          <PublicRoute restricted={isLogin()}  component={Register} path="/register" exact />
          <PrivateRoute component={QuizStartingPage} path="/quiz/:id"  exact />
          <PrivateRoute component={QuizPage} path="/quiz/start/:id" exact />
          <PrivateRoute component={()=><UserOwnProfile profile_image={this.state.profile_image}/>} path="/profile" exact />
          <PrivateRoute component={()=><UserSettings setProfilePicture={this.setProfilePicture}/>} path="/settings" exact />
          <PrivateRoute component={UserQuizResultsPage}  path="/userquizresult/:id" exact />
          <Route component={Home} />
      
          
        </Switch>
        </AuthContext.Provider>
    </Router>
            </>
        )
    }
}

export default Header
