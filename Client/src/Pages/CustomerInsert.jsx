import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import BASE_URL from '../Config/Config';

const EmpInert = ()=>{
    const [input, setInput] = useState("");

    const handelInput = (e)=>{
        const name=e.target.name;
        const value = e.target.value;
        setInput(values=>({...values, [name]:value}));
        console.log(input);
    }

    const handelSubmit =async (e)=>{
        e.preventDefault();
        const api = `${BASE_URL}/product/InsertCustomer`;
        try {
            const response  = await axios.post(api, input);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }

    }

    return(
        <>
        <div id="from">
        <h4>Sign Up</h4>
         <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" name='name' value={input.name} onChange={handelInput} />
      </Form.Group>      

       <Form.Group className="mb-3" controlId="formBasicEmairl">
        <Form.Label>Enter Email </Form.Label>
        <Form.Control type="text" placeholder="Enter Email" name='email' value={input.email} onChange={handelInput} />
      </Form.Group> 

      <Form.Group className="mb-3" controlId="formBasicEmaild">
        <Form.Label>Enter Number</Form.Label>
        <Form.Control type="text" placeholder="Enter Number"  name='number' value={input.number} onChange={handelInput} />
      </Form.Group>      

      <Form.Group className="mb-3" controlId="formBasicEdmail">
        <Form.Label>Enter Address</Form.Label>
        <Form.Control type="text" placeholder="Enter Address"  name='address' value={input.address} onChange={handelInput} />
      </Form.Group>      

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  name='password' value={input.password} onChange={handelInput} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handelSubmit}>
        Submit
      </Button>
    </Form>
    </div>
        </>
    )
}

export default EmpInert;