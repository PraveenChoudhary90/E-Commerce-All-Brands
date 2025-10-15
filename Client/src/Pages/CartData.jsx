import { useSelector } from "react-redux";
import BASE_URL from "../Config/Config";
import Table from 'react-bootstrap/Table';

const CartData = ()=>{
    const Product = useSelector(state=>state.mycart.cart);
    console.log(Product);



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
                <td>{key.description}</td>
                <td>{key.price}</td>
                <td>{key.qty}</td>
                <td>{key.qty*key.price}</td>
                <td>Delete</td>
            </tr>
            </>
        )
    })

    return(
        <>
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>Count</th>
          <th>Image</th>
          <th>Name</th>
          <th>Brand</th>
          <th>Color</th>
          <th>Description</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {ans}
        </tbody>
        </Table>
        </>
    )
}

export default CartData;