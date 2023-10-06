import React, { Component } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import QuizPage from '../../../Component/Quiz/QuizPage/QuizPage';
 

 class QuizStartingPage extends Component {

 
    render() {
      return (<>
   <div class="relative bg-white overflow-hidden">
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
          
             <div class="  text-transparent bg-gray-200 animate-pulse">Quiz Title</div>
             <div class=" text-transparent bg-gray-200 my-5 animate-pulse">Subject Name</div>
       
           <p class="mt-3  sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0  h-20 rounded-sm bg-gray-200 w-full animate-pulse mb-1  text-transparent bg-gray-200">
           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s 
           </p>
           <div class="bg-white shadow overflow-hidden sm:rounded-lg">
  

  {/* table */}
 
    
      <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium  text-transparent bg-gray-200 animate-pulse" >
         Point
        </dt>
        <dd class="mt-1 text-sm text-transparent bg-gray-200 sm:mt-0 sm:col-span-2 animate-pulse">
     100
        </dd>
      </div>
      <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 animate-pulse">
        <dt class="text-sm font-medium text-transparent bg-gray-200 animate-pulse">
        Time
        </dt>
        <dd class="mt-1 text-sm text-transparent bg-gray-200 sm:mt-0 sm:col-span-2 animate-pulse">
    50
        </dd>
      </div>
    


</div>
<div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
             <div onClick="{this.quizStartHandler}" class="rounded-md shadow">
               <button type="button" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-transparent  bg-gray-200 w-48 md:py-4 md:text-lg md:px-10 animate-pulse ">
            
                 Get started
               </button>
             </div>
             <div class="mt-3 sm:mt-0 sm:ml-3">
               <a onClick="" href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-transparent  bg-gray-200 md:py-4 md:text-lg md:px-10 animate-pulse">
                Back
               </a>
             </div>
           </div>
         </div>
       </main>
     </div>
   </div>
   <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 text-transparent bg-gray-200 animate-pulse">
 
   </div>
 </div>
        </>
  
        )
    }
}

export default QuizStartingPage
