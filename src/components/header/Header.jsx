import { CiSettings } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { TbLogout2 } from "react-icons/tb";
import { useState, useContext, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "/src/assets/logo.png";
import "/src/components/header/header.css";
import axios from "axios";
import { UserContext } from "../../context/UserContext";

const HeaderComponent = () => {
  const { setProductInfo } = useContext(UserContext);
  const [inputVal, setInputVal] = useState("");
  const [data, setData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [showResults, setShowResults] = useState(false);
  
  const searchRef = useRef(null);
  const modalRef = useRef(null);  // Create a ref for the modal

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("info");
    navigate("/login");
  };

  const fetchData = async (value) => {
    try {
      if (value.trim() === "") {
        setData([]);
        setShowResults(false);
        return;
      }

      const finalData = { search: value };

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
        setShowResults(true);
      }
    } catch (error) {
      console.log("search error", error);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setInputVal(value);
    fetchData(value);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if click is outside the modal and the search input
      const isOutsideSearchBox = searchRef.current && !searchRef.current.contains(event.target);
      const isOutsideModal = modalRef.current && !modalRef.current.contains(event.target);
      
      if (isOutsideModal) {
        setOpenModal(false); // Close modal when clicking outside
      }
      
      if (isOutsideSearchBox) {
        setShowResults(false); // Close search results if they are open
      }
    };
  
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showResults]); // Add showResults to the dependency array
  

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

        <div ref={searchRef}>
          <input
            className="search-box"
            type="text"
            value={inputVal}
            placeholder="Search"
            onChange={handleChange}
            onFocus={() => setShowResults(true)}
          />
          {showResults && data.length > 0 && (
            <div className="search-results">
              <Link to="/productInfo" className="search-result-item">
                {data.map((elem) => (
                  <div
                    key={elem.vendor_product_id}
                    onClick={() => {
                      setProductInfo(elem);
                      setShowResults(false);
                    }}
                  >
                    <div>
                      <img
                        src={elem.product_image}
                        alt=""
                        style={{
                          height: "25px",
                          width: "30px",
                          borderRadius: "50px",
                        }}
                      />
                      {elem.product_name} {elem.type}
                    </div>
                  </div>
                ))}
              </Link>
            </div>
          )}
        </div>

        <button className="search-button">Search</button>

        <Link onClick={() => setOpenModal(!openModal)}>
          <CgProfile
            className="header-icons"
            style={{ marginLeft: "95px", height: "30px", marginTop: "20px" }}
          />
        </Link>
        {openModal && (
          <div ref={modalRef} className="logOutmodal"> {/* Attach ref to modal */}
            <Link to="/profile" className={"popup dropDown-div"} onClick={()=>{ setOpenModal(false); }}>
              <FaRegUser className="dropdown-icons" />
              Profile 
            </Link>
            <Link to="/settings" className={"popup dropDown-div"}>
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
