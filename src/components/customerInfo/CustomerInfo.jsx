import { useContext } from "react";
import "../customerInfo/customerInfo.css";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { FaRegUserCircle } from "react-icons/fa";
import { format, parseISO } from 'date-fns'; 


const CustomerInfo = () => {
  const { user } = useContext(UserContext);
  const date =parseISO(user.created_at);
  const formattedDate = format(date, 'MMMM dd, yyyy HH:mm:ss');
  if (!user) return <p>no user selected</p>;
  return (
    <>
      <div style={{ marginTop: "20px" }}>
        <div style={{ display: "flex" }} className="customer-details">
          {user.image !==
          "https://goods24api.yelmarpariwar.com/uploads/user/" ? (
            <img
              src={user.image}
              style={{
                height: "100px",
                width: "100px",
                margin: "20px",
                borderRadius: "50px",
              }}
            />
          ) : (
            <FaRegUserCircle
              style={{
                height: "100px",
                width: "100px",
                margin: "20px",
                borderRadius: "50px",
                color: "gray",
              }}
            />
          )}

          {/* 
          <img
            src={user.image}
            alt="user profile"
            style={{ height: "100px", width: "100px", margin: "20px" }}
            className="profile-image"
          /> */}
          <div
            style={{ marginLeft: "50px", margin: "10px", lineHeight: "1.5rem" }}
          >
            <h1>
              {user.first_name} {user.last_name},
            </h1>
            <div style={{ marginTop: "-10px" }}>{user.phone}</div>
            <div>{user.email}</div>
            <div>User Created  {formattedDate}</div>
          </div>
        </div>
        <div className="order-details">
          <div className="customerCart">
            <p>Total Item</p>
            <p>-------------------------------------- </p>
            <p>{user.total_items}</p>
          </div>
          <Link
            to={`/customer/customerInfo/total-order/${user.id}`}
            className="customerCart"
          >
            <p>Total Order</p>
            <p>-------------------------------------- </p>
            <p>{user.total_order}</p>
          </Link>
          <div className="customerCart">
            <p>Wallet</p>
            <p>-------------------------------------- </p>
            <p>{user.wallet}</p>
          </div>
          <div className="customerCart">
            <p>Total Order Amount</p>
            <p>-------------------------------------- </p>
            <p>{user.total_order_amount}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default CustomerInfo;
