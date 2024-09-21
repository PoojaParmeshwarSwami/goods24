import { useEffect, useState } from "react";
import "../wallet/wallet.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Wallet = () => {
  const [data, setData] = useState([]);
  const [recharge, setRecharge] = useState(false);
  const [val, setVal] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState();
  const [userId, setUserId] = useState("");

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

  useEffect(() => {
    fetchdata();
  }, []);

  //   reload data
  const handleReload = async () => {
    await fetchdata();
  };

  const handleInputeChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleRecharge = async () => {
    try {
      const formData = new FormData();
      formData.append("user_id", userId);
      formData.append("amount", inputValue);
      formData.append("payment_id", "asfdfs");
      const response = await axios.post(
        "https://goods24api.yelmarpariwar.com/admin/wallet/add-fund",
        formData,
        {
          auth: {
            username: "admin",
            password: "password",
          },
        }
      );
      if (response.data.status) {
        // setData(response.data.data);
        setRecharge(!recharge);
        handleReload();
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  console.log(result);

  return (
    <>
      <table className="customer-container">
        <th>Profile</th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>wallet</th>
        <th> Recharge Now</th>
        <tbody>
          {data.map((item, ind) => (
            <tr key={ind}>
              <td>
                {item.image !==
                "https://goods24api.yelmarpariwar.com/uploads/user/" ? (
                  <img src={item.image} className="profile-image" />
                ) : (
                  <FaRegUserCircle className="profile-image" />
                )}
              </td>
              <td>
                {item.first_name} {item.last_name}
              </td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.wallet}</td>
              <td>
                <button
                  onClick={() => {
                    setRecharge(!recharge);
                    setVal([item]);
                    setUserId(item.id);
                  }}
                >
                  Recharge
                </button>
              </td>
            </tr>
          ))}
          {recharge && (
            <div
              style={{
                height: "300px",
                width: "350px",
                backgroundColor: "#f5f5f5",
                marginTop: "-550px",
                marginLeft: "300px",
                border: "1px solid gray",
                borderRadius: "5px",
                position: "fixed",
              }}
            >
              <div
                style={{
                  height: "30px",
                  width: "30px",
                  borderRadius: "50px",
                  border: "0.5px solid",
                  marginLeft: "330px",
                  marginTop: "-10px",
                  backgroundColor: "white",
                }}
              >
                <RxCross2
                  style={{ height: "30px", width: "30px", color: "gray" }}
                  onClick={() => {
                    setRecharge(!recharge);
                  }}
                />
              </div>
              {val.map((elem) => (
                <div
                  style={{
                    fontFamily: "sans-serif",
                    color: "gray",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <h1>
                    {elem.first_name} {elem.last_name}
                  </h1>
                  <h3>Balance:{elem.wallet}</h3>

                  <input
                    type="number"
                    style={{ height: "30px", width: "200px" }}
                    value={inputValue}
                    onChange={handleInputeChange}
                    onClick={() => setResult(elem.wallet)}
                  />
                  <br />
                  <button
                    style={{
                      height: "30px",
                      width: "150px",
                      borderRadius: "3px",
                      backgroundColor: "#567dec",
                      color: "white",
                    }}
                    onClick={handleRecharge}
                  >
                    Recharge Now
                  </button>
                </div>
              ))}
            </div>
          )}
        </tbody>
      </table>
    </>
  );
};
export default Wallet;
