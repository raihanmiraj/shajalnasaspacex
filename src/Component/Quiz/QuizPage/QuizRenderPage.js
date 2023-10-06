import React, { Component, Fragment, useRef, useState } from 'react'
 import axios from 'axios';
 import { useHistory } from "react-router-dom";
 import { Link } from 'react-router-dom';
 import Countdown from 'react-countdown';
 import QuizPageAnimation from './QuizPageAnimation';
 import MathElement from '../../MathElement/MathElement';
 import parse from "html-react-parser";
//  import MathJax from 'react-mathjax-preview'
import MathJax from "react-mathjax-preview/es/index";
import './QuizRenderPage.css';
//  import MathJax from "mathjax3-react";
// import Countdown from "react-countdown";
 
 class QuizRenderPage extends Component {

    state = {
        // quizRadioButtonClass : 'block mt-4 border border-gray-300 rounded-lg py-2 px-6 text-lg hover:bg-gray-100 cursord-pointer',
        quizRadioButtonClass : 'block mt-4 border border-gray-300 rounded-lg py-2 px-6 text-lg hover:bg-gray-100 cursord-pointer',
        quizRadioButtonOnCLickClass : 'block mt-4 border border-gray-300 rounded-lg py-2 px-6 text-lg bg-green-200 bg-red-200',
        selectedQuiz:[],
        quesData:[],
        loading: true,
        quiz_id:"",
        is_attend:0,
        timeover:0,
        open:true,
        message:"",
        userresultid:"",
        quiz_time : 100,
        quesID :[], 
        timecounter:0,
        autosubmit:0,
        submit:false,
        point:0,
        modal:false
 }

   componentDidMount(){
  
      this.setState({
            quiz_id:this.props.quizid
        })

        axios.post('/question/'+this.props.quizid)
.then( (response) => {
  // console.log(response.data)
this.setState({
    quesData:response.data,
    loading:false,
    message:response.data.message,
    quiz_time:response.data.time
 });
console.log(response.data.time)
 
 
})
.catch(  (error) => {
  console.log(error);
});

 

if(localStorage.getItem('quiz'+this.props.quizid)){
    this.setState({
        selectedQuiz:JSON.parse(localStorage.getItem('quiz'+this.props.quizid)) ,
    });
}
setInterval(this.timecounterhandler,1000)
      
    }

setModalFalse=()=>{
  this.setState({modal:false})
}
setModalTrue=()=>{
  this.setState({modal:true})
}
  onClickHandle =()=>{

var data = {
quiz_data : JSON.stringify(this.state.selectedQuiz),
quizid:this.state.quiz_id,
questionid :localStorage.getItem("questionID"+this.state.quiz_id)

}
// console.log(data);

    axios.post('/submitquiz/'+this.state.quiz_id , data)
    .then( (response) => {
  // alert(response.data);
  this.setState({submit:true, point:response.data , modal:true })
    
   })
    .catch(  (error) => {
      console.log(error);
    });
    localStorage.removeItem('quiz'+this.state.quiz_id);
        // console.log(JSON.stringify(this.state.selectedQuiz) );
    }

    quizSelectHandler = (e) =>{
      if(!e.target.getAttribute("disabled")){
        var id_question =e.target.getAttribute("questionid");
        var value_question = e.target.value;
          e.target.setAttribute('disabled',"true");
          e.target.parentNode.className  = 'block mt-4 border border-gray-300 rounded-lg py-2 px-6 text-lg bg-green-200 bg-red-200';
      
          var updateQuiz ={
                    ...this.state.selectedQuiz
                }
     if(this.state.selectedQuiz[id_question]){
                 var updateSubmittedOptionsForSameQuestion = [...this.state.selectedQuiz[id_question],value_question] ;
                 updateQuiz[id_question]   = updateSubmittedOptionsForSameQuestion;
                 console.log("QUes ALready Exist")
                   } else{
                    console.log("New Question")
                    updateQuiz[id_question]=[value_question];
                    }
        
                   this.setState({
                    selectedQuiz:updateQuiz,
                   })
                localStorage.setItem("quiz"+this.state.quiz_id, JSON.stringify(updateQuiz) );
   }
         
        
    }
      handleGoBack = ()=>{
        this.props.history.goBack();
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


    mathJaxFuntion = (html)=>{
    return     <MathJax.Provider>
    <MathJax.Html html={html}/>
  </MathJax.Provider>
  }
 
timecounterhandler = ()=>{
  this.setState({quiz_time:this.state.quiz_time - 1})
}
updateTimeCounter = (data)=>{
  this.setState({quiz_time:data});
}

    render() {


var ModalOpen = <> 
<div
  id="defaultModal"
  tabIndex={-1}
  className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full justify-center items-center flex"
  aria-modal="true"
  role="dialog"
>
  <div className="relative w-full h-full max-w-2xl md:h-auto">
    {/* Modal content */}
    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
      {/* Modal header */}
      <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          Terms of Service
        </h3>
        <button onClick={this.setModalFalse}
          type="button"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
          data-modal-hide="defaultModal"
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
          <span className="sr-only">Close modal</span>
        </button>
      </div>
      {/* Modal body */}
      <div className="p-6 space-y-6">
        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
         Your Point is : <b>{this.state.point}</b>
        </p>
      </div>
      {/* Modal footer */}
      <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
        <button onClick={this.setModalFalse}
          data-modal-hide="defaultModal"
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
         Close
        </button>

        <Link to={"/profile/" }
          data-modal-hide="defaultModal"
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
         Show Answer
        </Link>
         
      </div>
    </div>
  </div>
</div>

</>


 
var ModalCode =   <div class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
<div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
 
  <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
 
  <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

 
  <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
    <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
      <div class="sm:flex sm:items-start">
        <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
      
          <svg class="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
          <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
         Quiz Error
          </h3>
          <div class="mt-2">
            <p class="text-sm text-gray-500">
            {this.state.message}   </p>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
      <Link to="/quizlist"type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
       Go Back
      </Link>
    
    </div>
  </div>
</div>
</div>;

    var renderQuiz =<QuizPageAnimation/>;
  // code suru
  
  var selected_quiz = this.state.selectedQuiz;
      if(!this.state.loading ){
        var questionIdArray =  [];
      const quizData =  this.state.quesData.data;
       var renderQuiz  =quizData==0?ModalCode:  quizData.map(i=>{
       
         questionIdArray.push(i.id);
         console.log(questionIdArray);
 
          var setting = JSON.parse(i.setting) ;
          var posMark = setting.posMark;
          var negMark = setting.negMark;
          // console.log(posMark);
          if (this.isJson(i.options)){
  var options = JSON.parse(i.options) ;
  
   var renderOptions =  Object.keys(options).map(optionkey=>{
      var id =  i.id;
  var quiz = selected_quiz[id];
  var makeSelectedQuizdisable = false;
  var classOfRadioButton = this.state.quizRadioButtonClass;
  if(quiz!=null && quiz.indexOf(optionkey) !=-1 ){
      // console.log(quiz);
      var classOfRadioButton = this.state.quizRadioButtonOnCLickClass;
  }
   var optionValue = "";
   optionValue =   options[optionkey].option;

   
   

  if(options[optionkey].type=='math'){
    optionValue =   String.raw`${optionValue}`
   optionValue =     <MathJax math={optionValue} />
    // optionValue = this.mathJaxFuntion(optionValue);
    // optionValue =  <div dangerouslySetInnerHTML={{__html:optionValue}} />
  }else if(options[optionkey].type=='text'){
    optionValue = parse(optionValue);
  }



  //  optionValue =  <div dangerouslySetInnerHTML={{__html:optionValue}} />

  // const tex = `<math ><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>a</mi><mi>b</mi><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup><mo>&#x222B;</mo><msqrt><mfrac><mn>3</mn><mn>4</mn></mfrac></msqrt></math>`;
  // optionValue =  <MathElement elements={optionValue} />;

  // optionValue = <MathElement html={optionValue} />
//   optionValue =    <MathJax.Provider>
//   <MathJax.Html html={optionValue}/>
// </MathJax.Provider>
{/* <MathJax math={this.state.math}  */}
// optionValue =  <MathJax math={optionValue} />
  // optionValue =  parse(optionValue);
  var makeid =  id+optionkey;
    return (
          <label for={makeid} class={classOfRadioButton}  value={optionkey} ><input  onClick={this.quizSelectHandler} questionid={id}   id={makeid} key={makeid} type="radio" class="hidden" value={optionkey}  />{optionValue}</label>
       )
  })
}else{
  var renderOptions = "Option Error";
}
   
  var question = "";
  if (this.isJson(i.question)){
    var questionJson = JSON.parse(i.question);
    question = questionJson.question;
    // if(questionJson.type="text"){
    //   question = questionJson.question;
    //   // question = <div dangerouslySetInnerHTML={{__html:question}} />
    // }else if(questionJson.type="img"){
    //   question = <img src={questionJson.question}  />;
    // }
}else{
  var question = "Question Load Error";
}


  // var question = "gfdgdfgdf fdfdg"; 
  // if(JSON.parse(i.question)){
  //   console.log(i);
  // }
  // console.log(i.question);
  
              return(<div class="bg-white p-12 rounded-lg  w-full mt-8"><div><p class="text-2xl font-bold"  dangerouslySetInnerHTML={{__html:question}} /><p class="text-2xl font-bold">(postive mark: {posMark} , negative mark: {negMark})</p>
     {renderOptions}
    </div></div>)
          })
localStorage.setItem("questionID"+this.state.quiz_id, JSON.stringify(questionIdArray))

      }
 


var buttonLoad = this.state.loading?"":  <div class="w-50 flex items-center justify-center px-8 py-3">
<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-10 p-5 rounded "  type="button" onClick={this.onClickHandle}>Submit</button></div> ;
// if(!this.state.loading){
//   console.log(this.state.quesID);
// }

var timeleft  =Date.now() +  parseInt(this.state.quiz_time)
const renderer = ({ hours, minutes, seconds, completed }) => {
  document.title = hours+':'+minutes+':'+seconds;
  var time = hours* 24 + minutes*60 + seconds;
  console.log(time);
  //  this.updateTimeCounter.bind(time);
  // this.updateTimeCounter(time);

  if(this.state.autosubmit){
  if(hours == 0  && minutes==0 && seconds == 5){
    this.onClickHandle()
  }
}
 
if(this.state.submit){
  return  <span>Your Point is { this.state.point}</span>;
}

  if (completed) {
    // // Render a completed state
    //  return <span>Time Over</span>;
     return  <span>Time Over</span>;
  } else {
    // Render a countdown
    return <span>{hours}:{minutes}:{seconds}</span>;
  }
}; 
    return (
          <>{this.state.modal?ModalOpen:""} <div className='quiz-layout'>
 {this.state.loading || this.state.quiz_time<=0 || this.state.timeover==1?"":<div className='timeshow'> 
  <Countdown date={Date.now() + parseInt(this.state.quiz_time)*1000} 
 renderer={renderer} />   
 </div>}

               {renderQuiz}
 {buttonLoad}

            </div></> 
        )
    }
}

export default QuizRenderPage
