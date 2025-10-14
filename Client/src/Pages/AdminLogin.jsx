import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import BASE_URL from '../Config/Config';
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';

const AdminLogin = ()=>{
    const navigate = useNavigate();
    
     const [input, setInput] = useState("");
 
     const handelInput = (e)=>{
         const name=e.target.name;
         const value = e.target.value;
         setInput(values=>({...values, [name]:value}));
         console.log(input);
     }

     
    const handelSubmit =async (e)=>{
        e.preventDefault();
        const api = `${BASE_URL}/product/GetAdmin`;
        try {
            const response  = await axios.post(api, input);
            console.log(response.data);
            toast.success(response.data.msg)
            localStorage.setItem("email", response.data.Admin.email);

        } catch (error) {
            toast.error(error.response.data.msg);
            // alert(error.response.data.msg);
        }

    }


    return(
        <>
             <div id="from">
            <h4>AdminLogin</h4>
             <Form>
    
           <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter Email </Form.Label>
            <Form.Control type="text" placeholder="Enter Email" name='email' value={input.email} onChange={handelInput} />
          </Form.Group>  
    
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password"  name='password' value={input.password} onChange={handelInput} />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handelSubmit}>
            Login
          </Button>
        </Form>
        </div>
         <ToastContainer />
        </>
    )
}

export default AdminLogin;