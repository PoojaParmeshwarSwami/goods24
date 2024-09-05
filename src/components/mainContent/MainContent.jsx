import "/src/Components/MainContent/MainContent.css";
import { CgProfile } from "react-icons/cg";
import { LuUsers } from "react-icons/lu";
import { MdOutlineContactPage } from "react-icons/md";
import Footer from "/src/components/footer/footer";
import { LuNewspaper } from "react-icons/lu";
import { FaUser } from "react-icons/fa";
import { TbCategory2 } from "react-icons/tb";
import { Link } from "react-router-dom";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { UserContext } from "../../context/UserContext";
import { useContext, useEffect } from "react";

const MainContent = () => {
   const {total,fetchdata,fetchProduct,totalProduct,totalEnquiry,fetchEnquiry,totalCategory,fetchCategory,
    fetchBseller,totalBseller} = useContext(UserContext);
  
  const now = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = now.toLocaleDateString(undefined, options);
  const userInfo = localStorage.getItem('info');
const useDetails = JSON.parse(userInfo)
useEffect(()=>{
    fetchEnquiry();
    fetchdata();
    fetchCategory();
    fetchProduct();
    fetchBseller();
    
},[])
// console.log('userinfo',userInfo);

  return (
    <>
      <div>
        {/* <Header/> */}
        <div className="mainContentDiv">
          <div className="Right-sideDiv">
            <div className="top-right">
              <CgProfile style={{ height: "60px", width: "60px" }} />
              <div className="top-right-content">
                <h2>Hi, {useDetails.fullname}</h2>
                <p>chears, and happy activitis - {formattedDate}</p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-around",
                height: "350px",
                
              }}
            >
              <Link to='/customer'
                className="dash-cart"
                style={{ backgroundColor: "#f5f5f5", fontSize: "20px" }}
              >
                <p>
                  <FaUser />
                </p>
                <p style={{ marginTop: "0px" }}>Customer</p>
                <div style={{ color: "#377387" }}>
                  ----------------------------------
                </div>
                <p>{total || 0}</p>
              </Link>
              <Link to="/gridProduct" 
                className="dash-cart"
                style={{ backgroundColor: "#f5f5f5", fontSize: "20px" }}
              >
                <p>
                  <MdOutlineProductionQuantityLimits />
                </p>
                <p style={{ marginTop: "0px" }}>Product</p>
                <div style={{ color: "#377387" }}>
                  ----------------------------------
                </div>
                <p>{totalProduct||0}</p>
              </Link>
              <Link to='/enquiry'
                className="dash-cart"
                style={{ backgroundColor: "#f5f5f5", fontSize: "20px" }}
              >
                <p>
                <LuNewspaper />
                </p>
                <p style={{ marginTop: "0px" }}>Enquiry</p>
                <div style={{ color: "#377387" }}>
                  ----------------------------------
                </div>
                <p>{totalEnquiry||0}</p>
              </Link>
              <Link to='/category'
                className="dash-cart"
                style={{ backgroundColor: "#f5f5f5", fontSize: "20px" }}
              >
                <p>
                  <TbCategory2 />
                </p>
                <p style={{ marginTop: "0px" }}>Category</p>
                <div style={{ color: "#377387" }}>
                  ----------------------------------
                </div>
                <p>{totalCategory ||0}</p>
              </Link>

              <Link to='/bestSeller'
                className="dash-cart"
                style={{ backgroundColor: "#f5f5f5", fontSize: "20px" }}
              >
                <p>
                  <TbCategory2 />
                </p>
                <p style={{ marginTop: "0px" }}>BestSeller</p>
                <div style={{ color: "#377387" }}>
                  ----------------------------------
                </div>
                <p>{totalBseller || 0}</p>
              </Link>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MainContent;
