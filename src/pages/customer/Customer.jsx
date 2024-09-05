import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import "../customer/customer.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";



const Customer = () => {
  const [data, setData] = useState([]);
  const { setUser } = useContext(UserContext);
 

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(
          "https://goods24api.yelmarpariwar.com/admin/user",
          {
            auth: {
              username: "admin",
              password: "password",
            },
          }
        );
        if (response.data.status) {
          
          setData(response.data.data);
        
        
        }
      } catch (error) {}
    };
    fetchdata();
  }, []);
  
  return (
    <>
      <table className="customer-container">
        
        <th>Profile</th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Total Order</th>
        <th>Total Order Amount</th>

        <tbody>
          {data.map((item, ind) => (
            <tr key={ind}>
              <td>
              {item.image !=="https://goods24api.yelmarpariwar.com/uploads/user/" ? (
                  <img src={item.image} className="profile-image" />
                ) : (
                  <FaRegUserCircle   className="profile-image" />
                )}
              </td>
              <td>
                <Link
                  to="/customer/customerInfo"
                  style={{
                    color: "black",
                    textDecoration: "none",
                    // marginLeft: "10px",
                  }}
                  onClick={() => {
                    setUser(item);
                  }}
                >
                  {item.first_name} {item.last_name}
                </Link>
              </td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.total_order}</td>
              <td>{item.total_order_amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default Customer;
