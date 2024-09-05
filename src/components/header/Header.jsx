import { LiaShoppingCartSolid } from "react-icons/lia";
import { CiSettings } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { TbLogout2 } from "react-icons/tb";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "/src/assets/logo.png";
import "/src/components/header/header.css";
import axios from "axios";


const HeaderComponent = () => {
  const [searchBox, setSearchBox] = useState(false);
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
        setData([]); // Clear results if input is empty
        setSearchBox(false); // Hide search results if input is empty
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
        console.log("Search data", response.data.data);
        setSearchBox(true); // Show search results if data is fetched
      }
    } catch (error) {
      console.log("search error", error);
      setSearchBox(false); // Hide search results in case of error
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
        
        {searchBox && (
          <div className="search-results">
            {data.length > 0 ? (
              <>
                {data.map((item) => (
                  <div key={item.id}>
                    <Link to={`/product/${item.id}`} className="search-result-item">
                  <div>
                    <img src={item.product_image} alt="" style={{height:'30px',width:'30px',borderRadius:'50px'}} />
                    {item.product_name}  {item.type}
                    </div>
                    </Link>
                  </div>
                ))}
              </>
            ) : (
              <p>No results found</p>
            )}
          </div>
        )}

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
