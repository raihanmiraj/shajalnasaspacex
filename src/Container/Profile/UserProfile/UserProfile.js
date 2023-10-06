 import React, { Component } from 'react';
 import axios from 'axios';
import { Link } from 'react-router-dom';
 
 class UserProfile extends Component {

  state = {
    userProfileData: "",
    userQuizAttendData:"",
    loading:true,

  }

  componentDidMount(){
    axios.defaults.headers.common['Authorization'] = 'Bearer '+localStorage.getItem("TOKEN_KEY");
    axios.post('/userresult')
    .then( (response) => {
    this.setState({
        loading:false,
        userQuizAttendData:response.data.data,
        userProfileData:response.data.user
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
return ( <tr key={data.id}>
  <td className="px-6 py-4 whitespace-nowrap">
    <div className="flex items-center">
      <div className="flex-shrink-0 h-10 w-10">
        <img className="h-10 w-10 rounded-full" src={JSON.parse(data.image).thumb} alt="" />
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
      <main className="profile-page">
      <section className="relative block" style={{ height: "500px" }}>
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage:
              "url('assets/img/defaultaloroncover.png')"
          }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-50 bg-black"
          ></span>
        </div>
        
      </section>
      <section className="relative py-16 bg-gray-300">
        <div className="container mx-auto px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
              <img className="h-20 w-20 rounded-full bg-gray-400  mt-10"  src="assets/img/defaultaloroncover.png" />
 
             
                 </div>
              <div className="text-center mt-5">
             
                <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                {this.state.userProfileData.name}
                </h3>
               
                
                <div className="mb-2 text-gray-700">
                  <i className="fas fa-university mr-2 text-lg text-gray-500"></i>
                  Student Of Aloron
                </div>
              </div>
            
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
  {/* table */}
            </div>
          </div>
        </div>
      </section>
    </main>
     )
   }
 }

 export default UserProfile;
 
 