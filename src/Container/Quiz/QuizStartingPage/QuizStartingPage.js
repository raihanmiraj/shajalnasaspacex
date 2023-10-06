import React, { Component } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import QuizPage from '../../../Component/Quiz/QuizPage/QuizPage';
import QuizStartingPageAnimation from './QuizStartingPageAnimation';
import QuizRenderPage from '../../../Component/Quiz/QuizPage/QuizRenderPage';
 

 class QuizStartingPage extends Component {

  state = {
    urlparam:"",
    loading:true,
    quizmetadata:"",
    title:"",
    description:"",
    quizimage:"",
    status:"",
    subject_name:"",
    time:"",
    point:"",
    userresultid:""
  }

  componentDidMount() {
    
    // const params = useParams();
    const { match: { params } } = this.props;
    console.log(params );
    this.setState({urlparam:params.id});

    

    if(localStorage.getItem('quiz'+params.id )){
      this.setState({
        loading:true,
        quizstart:true,
      })

    }else{
      axios.get('/getquizmeta/'+params.id)
      .then((response) => {
        console.log(response);
      //   if(response.datainsertedid!=0 ){
      //     this.setState({userresultid:response.datainsertedid});
      //     localStorage.setItem('userresultidfor'+params.id, response.datainsertedid);
      // }
       
  
        this.setState({
           loading:false
       })
      const quizMetaData = response.data.data;
       var quizmetasingle= quizMetaData[0];
       var title = quizmetasingle.quiz_name;
       document.title = title;
       var description = quizmetasingle.description;
       var status = quizmetasingle.status;
       var subject_name = quizmetasingle.subject_name;
       var quizimage = quizmetasingle.image;
       var setting = JSON.parse( quizmetasingle.setting);
       var point = quizmetasingle.point;
       var time = setting.time;
       this.setState({
         title:title,
         description:description,
         quizimage:JSON.parse(quizimage),
         subject_name:subject_name,
         status:status,
         point:point,
         time:time , 
         quizstart:false,
            
       });
  
  
  
      })
     .catch((error)=>{
        console.log(error);
     });
    }


 
  }

  backtothepage = () =>{
    this.props.history.goBack()
  }

  quizStartHandler= () => {
 
    this.setState({
      loading:true,
      quizstart:true,
      


    })


  }

 
    render() {
      var ContentRender =  "";
 
      if(!this.state.loading){
        var imgdata = this.state.quizimage;
var imagefile = imgdata.hasOwnProperty('thumb')?imgdata.thumb:(imgdata.hasOwnProperty('medium')?imgdata.medium:imgdata.image)
 
   var ContentRender =    <div class="relative bg-white overflow-hidden">
   <div class="max-w-7xl mx-auto">
     <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
       <svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
         <polygon points="50,0 100,0 50,100 0,100" />
       </svg>
 
       <div>
         <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
          </div>
     </div>
 
       <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
         <div class="sm:text-center lg:text-left">
           <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
             <span class="block xl:inline">{this.state.title}</span>
             <span class="block text-indigo-600 xl:inline">({this.state.subject_name})</span>
           </h1>
           <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            {this.state.description}
           </p>
           <div class="bg-white shadow overflow-hidden sm:rounded-lg">
  

  {/* table */}
 
    
      <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-500">
         Point
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
       {this.state.point}
        </dd>
      </div>
      <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-500">
        Time
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
       {this.state.time}
        </dd>
      </div>
    


</div>
    <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
             <div onClick={this.quizStartHandler} class="rounded-md shadow">
               <button type="button" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
            
                 Get started
               </button>
             </div>
             <div class="mt-3 sm:mt-0 sm:ml-3">
               <a onClick={this.backtothepage}  href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                Back
               </a>
             </div>
           </div>
         </div>
       </main>
     </div>
   </div>
   <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
 
     <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src={ imagefile} alt=""/>
   </div>
 </div>;
 
   }
    
      
      
        return (<>
 {!this.state.loading?ContentRender:""}
{this.state.quizstart? <QuizRenderPage quizid = {this.state.urlparam}/>:"" }  
{this.state.loading==true && !this.state.quizstart?<QuizStartingPageAnimation/>:''}

        </>
  
        )
    }
}

export default QuizStartingPage
