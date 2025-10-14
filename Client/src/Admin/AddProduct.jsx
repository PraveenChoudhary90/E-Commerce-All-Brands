import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import BASE_URL from '../Config/Config';
import axios from "axios"
import {message } from 'antd';
import { ToastContainer, toast } from 'react-toastify';
function AddProduct() {
    
   const [input, setInput] = useState("");
   const [image, setImage] = useState("");
  
      const handelInput = (e)=>{
          const name=e.target.name;
          const value = e.target.value;
          setInput(values=>({...values, [name]:value}));
          console.log(input);
      }

      const handelImage = (e)=>{
        setImage(e.target.files);
        console.log(image);
      }
  
      const handelSubmit =async (e)=>{
          e.preventDefault();
          const api = `${BASE_URL}/product/InsertProduct`;
          const formData = new FormData();

          for(let key in input){
            formData.append(key, input[key]);
          }

          for(let i =0;i<image.length;i++){
            formData.append("image", image[i])
          }

          try {
              const response  = await axios.post(api, formData);
              console.log(response.data);
              toast.success(response.data.msg)
  
          } catch (error) {
              console.log(error);
          }
  
      }
  


  return (
    <>
            <div id="from">
        <h4>Add Product</h4>
         <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Product Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" name='name' value={input.name} onChange={handelInput} />
      </Form.Group>      

       <Form.Group className="mb-3" controlId="formBasicEmairl">
        <Form.Label>Enter Product Brand </Form.Label>
        <Form.Control type="text" placeholder="Enter brand" name='brand' value={input.brand} onChange={handelInput} />
      </Form.Group> 

      <Form.Group className="mb-3" controlId="formBasicEmaild">
        <Form.Label>Enter Product Color</Form.Label>
        <Form.Control type="text" placeholder="Enter Color"  name='color' value={input.color} onChange={handelInput} />
      </Form.Group>      

      <Form.Group className="mb-3" controlId="formBasicEdmakil">
        <Form.Label>Enter Product Description</Form.Label>
        <Form.Control type="text" placeholder="Enter Description"  name='description' value={input.description} onChange={handelInput} />
      </Form.Group> 

      <Form.Group className="mb-3" controlId="formBasicEdmajkil">
        <Form.Label>Enter Product Price</Form.Label>
        <Form.Control type="text" placeholder="Enter Price"  name='price' value={input.price} onChange={handelInput} />
      </Form.Group>     

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Product Image Url</Form.Label>
        <Form.Control type="file" placeholder="ImageUrl"  onChange={handelImage} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handelSubmit}>
        Submit
      </Button>
    </Form>
    </div>
     <ToastContainer />
    </>
  )
}

export default AddProduct