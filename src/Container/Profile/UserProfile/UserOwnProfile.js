import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './UserOwnProfile.css';
import axios from 'axios';
export class UserOwnProfile extends Component {
    state = {
        userProfileData: "",
        userQuizAttendData:"",
        loading:true,
        name:"",
        email:"",
        phone_no:"",
        hometown:"",
        present_address:"",
        birthdate:"",
        gender:"",
        school_name:"",
        college_name:"",
        blood_group:""

      
 
      }
    
      componentDidMount(){
        document.title ="Profile";
        axios.defaults.headers.common['Authorization'] = 'Bearer '+localStorage.getItem("TOKEN_KEY");
        axios.post('/userresult')
        .then( (response) => {
            var userdata = response.data.user;
        this.setState({
            loading:false,
            userQuizAttendData:response.data.data,
            userProfileData:userdata,
            name:userdata.name,
            email:userdata.email,
            phone_no:userdata.phone_no,
            hometown:userdata.hometown,
            present_address:userdata.present_address,
            birthdate:userdata.birthdate,
            // gender:userdata.data,
            school_name:userdata.school_name,
            college_name:userdata.college_name,
            // blood_group:userdata.data
         });
        
        })
        .catch(  (error) => {
          console.log(error);
        });

        
      }
  render() {
      
   
 
 console.log(this.state.userProfileData)

 const QuizAttendData = this.state.userQuizAttendData;
console.log(QuizAttendData);


var tabledata = this.state.loading==false? QuizAttendData.map(data => {
if(data.is_user_submitted==0){
 return "";
} 
var imgdata = JSON.parse(data.image);
var img = imgdata.hasOwnProperty('thumb')?imgdata.thumb:(imgdata.hasOwnProperty('medium')?imgdata.medium:imgdata.image)
return ( <tr key={data.id}>
 <td className="px-6 py-4 whitespace-nowrap">
   <div className="flex items-center">
     <div className="flex-shrink-0 h-10 w-10">
       <img className="h-10 w-10 rounded-full" src={img} alt="" />
     </div>
     <div className="ml-4">
       <div className="text-sm font-medium text-gray-900">{data.quiz_name}</div>
       <div className="text-sm text-gray-500">{data.subject_name}</div>
     </div>
   </div>
 </td>
 <td className="px-6 py-4 whitespace-nowrap">
   <div className="text-sm text-gray-900">{data.correct_answer}</div>
 
 </td>

 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{data.total_point}</td>
 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"><Link to={"/userquizresult/"+data.userid}>View</Link></td>

</tr>)

}
              
             ):"";
    return (
      <>
      
<div class="bg-gray-200">
 
   <div class="container mx-auto   p-5">
        <div class="md:flex no-wrap md:-mx-2 ">
            
            <div class="w-full md:w-3/12 md:mx-2">
                
                <div class="bg-white p-3   my-4  ">
                    <div class="image overflow-hidden">
                        <img class="h-auto w-full mx-auto"
                            src={this.props.profile_image}
                            alt=""/>
                    </div>
                    <h1 class="text-gray-900 font-bold text-xl leading-8 my-1">{this.state.name}</h1>
                     
                    <p class="text-sm text-gray-500 hover:text-gray-600 leading-6"> 
                       {this.state.bio}</p>
                    <ul
                        class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                        <li class="flex items-center py-3">
                            <span>Status</span>
                            <span class="ml-auto"><span
                                    class="bg-green-500 py-1 px-2 rounded text-white text-sm">Active</span></span>
                        </li>
                        {/* <li class="flex items-center py-3">
                            <span>Member since</span>
                            <span class="ml-auto">Nov 07, 2016</span>
                        </li> */}
                    </ul>
                </div>
                
              
                
           
            </div>
            
            <div class="w-full md:w-9/12  my-4   h-64">
                
                
                <div class="bg-white p-3 shadow-sm rounded-sm">
                    <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                        <span clas="text-green-500">
                            <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </span>
                        <span class="tracking-wide">About</span>
                    </div>
                    <div class="text-gray-700">
                        <div class="grid md:grid-cols-2 text-sm">
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold"> Name</div>
                                <div class="px-4 py-2">{this.state.name}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Blood Group</div>
                                <div class="px-4 py-2">{this.state.blood_group}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Gender</div>
                                <div class="px-4 py-2">{this.state.gender}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Contact No.</div>
                                <div class="px-4 py-2">{this.state.phone_no}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Current Address</div>
                                <div class="px-4 py-2">{this.state.present_address}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Hometown</div>
                                <div class="px-4 py-2">{this.state.hometown}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Email</div>
                                <div class="px-4 py-2">
                                    <a class="text-blue-800" href={"mailto:"+this.state.email}>{this.state.email}</a>
                                </div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Birthday</div>
                                <div class="px-4 py-2">{this.state.birthdate}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">School</div>
                                <div class="px-4 py-2">{this.state.school_name}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">College</div>
                                <div class="px-4 py-2">{this.state.college_name}</div>
                            </div>
                        </div>
                    </div>
                  
                </div>
                

              

                
                <div class="bg-white p-3 shadow-sm rounded-sm my-4" >

               
                    <div className="flex flex-col">
    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Quiz Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Correct Answer
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Total Point
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  View Answer
                </th>
                {/* <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Edit</span>
                </th> */}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {tabledata}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
                      
                 
                    
                </div>
                
            </div>
        </div>
    </div>
</div>
      </>
    )
  }
}

export default UserOwnProfile