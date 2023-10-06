import React, { Component } from 'react'
import axios from 'axios';
import { data } from 'autoprefixer';

import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import QuizPage from '../../../Component/Quiz/QuizPage/QuizPage';
 import  '../../Quiz/QuizPage/QuizRenderPage.css';
 import './UserQuizResultsPage.css'


export class UserQuizResultsPage extends Component {




    
    state = {
        // quizRadioButtonClass : 'block mt-4 border border-gray-300 rounded-lg py-2 px-6 text-lg hover:bg-gray-100 cursord-pointer',
        quizRadioButtonClass : 'block mt-4 border border-gray-300 rounded-lg py-2 px-6 text-lg hover:bg-gray-100 cursord-pointer relative',
        // quizRightAns : 'block mt-4 border border-gray-300 rounded-lg py-2 px-6 text-lg bg-green-200 bg-red-200',
        // quizWrongButton:'block mt-4 border border-gray-300 rounded-lg py-2 px-6 text-lg  bg-red-200',
        // quizUserClickedButton:'block mt-4 border border-gray-300 rounded-lg py-2 px-6 text-lg bg-blue-200',
        quizRightAns : 'block mt-4 border-2 border-green-600 rounded-lg py-2 px-6 text-lg hover:bg-gray-100 cursord-pointer relative',
        quizWrongButton:'block mt-4 border-2 border-red-600 rounded-lg py-2 px-6 text-lg hover:bg-gray-100 cursord-pointer relative',
        quizUserClickedButton:'block mt-4 border-2 border-green-600 rounded-lg py-2 px-6 text-lg hover:bg-gray-100 cursord-pointer relative',
       
        userQuizResultAndQuestion:"",
        loading:true,
        urlparam:"",
        userresultid:"",
        totalquestion:0,
        totalpoint:0,
        correctans:0,
        wrongans:0
    
 }

     componentDidMount(){
        
        const { match: { params } } = this.props;
        // console.log(params );
        this.setState({urlparam:params.id});
    // this.setState({
    //     userresultid:this.props.location.userresultquiz.id
    //     })
        // console.log(this.props.match.params.redirectParam);

       

        axios.post('userquizresult/'+params.id)
.then( (response) => {
    var data =response.data;
this.setState({
    userQuizResultAndQuestion:data.quesdata,
    correctans:data.correctans,
    totalpoint:data.totalpoint,
    totalquestion:data.totalquestion,
    wrongans:data.wrongans,
    loading:false,

 });

 console.log(response.data)
 
})
.catch(  (error) => {
  console.log(error);
});

  }


  isJson=(item)=> {
    item = typeof item !== "string"
        ? JSON.stringify(item)
        : item;

    try {
        item = JSON.parse(item);
    } catch (e) {
        return false;
    }

    if (typeof item === "object" && item !== null) {
        return true;
    }

    return false;
}



    render() {

//         var userResultQuiz = [{
//             id:1,
//             question:{
//                 question:"helo",
//                 type:"text"
//             },
//             option:{
//                 A:{
//                     option:"raihan Miraj",
//                     type:"text",
//                     userans:1,
//                     mainans:1
//                 },
//                 B:{
//                     option:"raihan Miraj",
//                     type:"text",
//                     userans:0,
//                     mainans:1
//                 }
//             },
//             is_user_take:1
//         }
//     ,
//     {
//         question:{
//             question:"helo",
//             type:"text"
//         },
//         option:{
//             A:{
//                 option:"raihan Miraj",
//                 type:"text",
//                 userans:1,
//                 mainans:2
//             },
//             B:{
//                 option:"raihan Miraj",
//                 type:"text",
//                 userans:0,
//                 mainans:0
//             }
//         },
//         is_user_take:1
//     }
// ]
        if(!this.state.loading){
       var   userResultQuiz=    this.state.userQuizResultAndQuestion;
 

        }

        // userResultQuiz = JSON.parse(userResultQuiz);






      

var QuizResultRender = !this.state.loading? userResultQuiz.map(data=>{
    var questionJson = data.question;
// if(data.question.type=='img'){
//     var question = <img src={data.question.question}/>
// }

var statusques = "";
var question = "";
if (this.isJson(questionJson)){
  question = questionJson.question;
}else{
// var question = "Question Load Error";
var question = data.id;
}
question =  <div dangerouslySetInnerHTML={{__html:question}} />


var options = data.option;
statusques = "";
if (this.isJson(options)){
var renderOptions =  Object.keys(options).map(optionkey=>{
    var id =  data.id;
 

var classOfRadioButton =this.state.quizRadioButtonClass;
 var optionValue = "";


 
// if(options[optionkey].type=='text'){
//   optionValue =   options[optionkey].option
// }else if(options[optionkey].type=='img'){;
//   optionValue = <img src={options[optionkey].option}  />;
// }
var classStyle = ""
var justMessage = "";
optionValue =   options[optionkey].option;
optionValue =  <div dangerouslySetInnerHTML={{__html:optionValue}} />
if(options[optionkey].userans == 1 && options[optionkey].mainans == 1){
    var  classOfRadioButton =this.state.quizUserClickedButton;
   justMessage = "You Clicked (Correct)"
 
   var classStyle = "you-click"
}else if(options[optionkey].userans == 1  && options[optionkey].mainans ==0) {
      var  classOfRadioButton =this.state.quizWrongButton; 
    justMessage = "Wrong"
    var classStyle = "wrong-ans"
     
}else if(options[optionkey].userans == 0  && options[optionkey].mainans ==1) {
    var  classOfRadioButton =this.state.quizRightAns; 
    justMessage = "Correct"
    var classStyle = "correct-ans"
    
} 
 
  return (
        <label onClick={this.quizSelectHandler}  for={id} class={classOfRadioButton} disabled={"false"} value={optionkey}><span className={classStyle}>{justMessage}</span><input id={id} type="radio" class="hidden" value={optionkey}  />{optionValue}</label>
     )
})
}else{
    var renderOptions = "Option Error"
}


    return (<div class="bg-white p-12 rounded-lg  w-full mt-8"><div><p class="text-2xl font-bold">{question}</p> { statusques }
    {renderOptions}
   </div></div>)
}):""


 
 
        return (
            <div className='quiz-layout'>
                   {/* <p className='text-green-500 sm:text-blue-500'>hello 'm checling</p> */}
                <div class="bg-white p-3 rounded-lg  w-full mt-8 flex flex-wrap justify-center"> 
                 
                    <div class="w-full   sm:w-1/3   bg-blue-100 rounded-lg py-5 px-6 mb-4 text-base text-blue-700 m-4" role="alert">
  Total Marks : {this.state.totalpoint}
</div>
<div class="w-full   sm:w-1/3   bg-purple-100 rounded-lg py-5 px-6 m-4 text-base text-purple-700 mb-3" role="alert">
  Total Question : {this.state.totalquestion}
</div>
<div class="w-full  bg-green-100 rounded-lg py-5   sm:w-1/3  px-6 m-4 text-base text-green-700 mb-3" role="alert">
 Correct Ans :  {this.state.correctans}
</div>

<div class="w-full  sm:w-1/3 bg-red-100 rounded-lg py-5 px-6 m-4 text-base text-red-700 mb-3" role="alert">
 Wrong Ans :  {this.state.wrongans}
</div>
   
   </div>
               {QuizResultRender}
 
 
            </div>
        )
    }
}

export default UserQuizResultsPage
