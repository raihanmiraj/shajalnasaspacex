import React, { Component } from 'react'
import axios from 'axios';
import $ from 'jquery';
export class UploadImgBB extends Component {
    state = {
        imageArr:[],
    }

    handleImgBBUpload = (e) =>{
        
var formData = new FormData();
var countFile = e.target.files.length;
console.log(countFile);
for(var i=0;i<countFile;i++){
    formData.append("image",e.target.files[i]);
    $.ajax({
    type:'POST',
    url:"https://api.imgbb.com/1/upload?expiration=0&key=89cd126a18f125ea9e7f8256dcb15acb",
    data:formData,
    cache:false,
    contentType: false,
    processData: false,
    success:(data)=>{
        console.log("success");
        console.log(data.data);
  var imageArray = {
        image:data.data.image,
            medium: data.data.medium,
            thumb:data.data.thumb
}
var img_id = data.data.id;
var dataArrayImage = {
    img_id:img_id,
    image_data:imageArray
}

this.imageDataHandler(dataArrayImage);
        console.log(imageArray);
       var oldImageArray = this.state.imageArr;
       var newImageArray = [...oldImageArray, imageArray];

        this.setState({
            imageArr:newImageArray
        });
      
  this.props.uploadHandle(newImageArray);
        
    },
    error: (data)=>{
        console.log("error");
        console.log(data);
    }
    });
}



}

imageDataHandler = (data)=>{
    axios.post('/upload/images' , data)
    .then( (response) =>{
    console.log(response);
     
    })
    .catch(  (error) =>{
      // handle error
      console.log(error);
    })
}


    render() {
        // 
        return (
    <div>
      <input onChange={this.handleImgBBUpload} type="file" id="files" name="files" multiple={this.props.multiple}/> 
    </div>
 
        )
    }
}

export default UploadImgBB
