import { CiSettings } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { TbLogout2 } from "react-icons/tb";
import { useState,useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "/src/assets/logo.png";
import "/src/components/header/header.css";
import axios from "axios";
import { UserContext } from '../../context/UserContext';


const HeaderComponent = () => {
    const {setProductInfo} =useContext(UserContext);
  const [inputval, setInputVal] = useState("");
  const [data, setData] = useState([]);
  const[openModal,setOpenModal]= useState(false)
  
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("info");
    navigate("/login");
  };

  const fetchdata = async (value) => {
    try {
      if (value.trim() === "") {
        setData([]); 
      
        return;
      }

      const finalData = {
        search: value,
      };

      const response = await axios.get(
        "https://goods24api.yelmarpariwar.com/website/product/search/18.4509994/73.827328",
        {
          params: finalData,
          auth: {
            username: "admin",
            password: "password",
          },
        }
      );
      if (response.data.status) {
        setData(response.data.data);
       
     
      }
    } catch (error) {
      console.log("search error", error);
      
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setInputVal(value);
    fetchdata(value);
  };

  return (
    <>
      <div className="headerDiv">
        <Link to="/">
          <img
            src={logo}
            alt=""
            style={{
              width: "220px",
              mixBlendMode: "darken",
              height: "60px",
              marginTop: "5px",
            }}
          />
        </Link>

        <input
          className="search-box"
          type="text"
          value={inputval}
          placeholder="Search"
          onChange={handleChange}
        />
        
        
          <div className="search-results search-result-item" >

            {data.length > 0 ? (
              <>
            <Link to='/productInfo'>
                {data.map((elem) => (
                  <div key={elem.vendor_product_id}  onClick={()=>{setProductInfo(elem)}}>
                
                  <div>
                    <img src={elem.product_image} alt="" style={{height:'30px',width:'30px',borderRadius:'50px'}} />
                    {elem.product_name}  {elem.type}
                    </div>
                   
                  </div>
                ))}
                </Link>
              </>
            ) : ""}
          </div>
      

        <button className="search-button">Search</button>

        <Link onClick={() => setOpenModal(!openModal)}>
          <CgProfile
            className="header-icons"
            style={{ marginLeft: "95px", height: "30px", marginTop: "20px" }}
          />
        </Link>
        {openModal && (
          <div className="logOutmodal">
            <Link to="/profile" className={"popup dropDown-div"}>
              <FaRegUser className="dropdown-icons" />
              Profile
            </Link>
            <Link to="/settigs" className={"popup dropDown-div"}>
              <CiSettings className="dropdown-icons" />
              Settings
            </Link>
            <Link
              to="/login"
              onClick={handleLogout}
              className={"popup dropDown-div"}
            >
              <TbLogout2 className="dropdown-icons" />
              Logout
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default HeaderComponent;
