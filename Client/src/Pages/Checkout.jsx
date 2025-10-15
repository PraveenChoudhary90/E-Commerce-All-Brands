import { useDispatch, useSelector } from "react-redux";
import BASE_URL from "../Config/Config";
import Table from 'react-bootstrap/Table';
import { FaPlusSquare } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Decrement, DeleteItem, Increment } from "../CartSlice";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
const Checkout = ()=>{
    const Product = useSelector(state=>state.mycart.cart);
    console.log(Product);
  const dispatch = useDispatch();
 const navigate = useNavigate();

    let count = 0;
    var totalamount = 0;

    const ans = Product.map(key=>{
        count++;
        totalamount+=key.qty*key.price
        return(
            <>
            <tr>
                <td>{count}</td>
                <td><img src={`${BASE_URL}/${key.defaultImage}`} alt=""  width="80px" height="80px"/></td>
                <td>{key.name}</td>
                <td>{key.brand}</td>
                <td>{key.color}</td>
                <td>{key.price}</td>
                <td>{key.qty}</td>
                <td>{key.qty*key.price}</td>
            </tr>
            </>
        )
    })

    return(
        <>

           <h1 style={{textAlign:"center", color:"green"}}>TotalAmount:{totalamount}</h1>
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>Count</th>
          <th>Image</th>
          <th>Name</th>
          <th>Brand</th>
          <th>Color</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {ans}
        </tbody>
        </Table>

       <Button variant="primary" >pay now!!</Button>
        </>
    )
}

export default Checkout;