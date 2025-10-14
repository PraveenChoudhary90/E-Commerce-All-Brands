import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const EmpInert = ()=>{
    return(
        <>
        <div id="from">
        <h4>Sign Up</h4>
         <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" />
      </Form.Group>      

       <Form.Group className="mb-3" controlId="formBasicEmairl">
        <Form.Label>Enter Email </Form.Label>
        <Form.Control type="text" placeholder="Enter Email" />
      </Form.Group> 

      <Form.Group className="mb-3" controlId="formBasicEmaild">
        <Form.Label>Enter Number</Form.Label>
        <Form.Control type="text" placeholder="Enter Number" />
      </Form.Group>      

      <Form.Group className="mb-3" controlId="formBasicEdmail">
        <Form.Label>Enter Address</Form.Label>
        <Form.Control type="text" placeholder="Enter Address" />
      </Form.Group>      

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
        </>
    )
}

export default EmpInert;