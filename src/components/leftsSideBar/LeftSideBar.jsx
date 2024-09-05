import { Link } from "react-router-dom";
import "./leftSideBar.css";
import { RxDashboard } from "react-icons/rx";
import { LuUsers } from "react-icons/lu";
import { LiaUserCogSolid } from "react-icons/lia";
import { MdOutlineContactPage } from "react-icons/md";
import { MdOutlinePublishedWithChanges } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { IoWalletOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
const LeftSideBar = () => {
  return (
    <>
      <div className="dashboard-content">
        <Link to="/" className="products">
          <RxDashboard className="dashboard-icons" />
          Dashboard
        </Link>

        <Link to="/customer" className="products">
          <LuUsers className="dashboard-icons" />
          Customer
        </Link>

        <Link to="/gridProduct" className="products">
          <LiaUserCogSolid className="dashboard-icons" />
          Product
        </Link>

        <Link to="/enquiry" className="products">
          <MdOutlineContactPage className="dashboard-icons" />
          Enquiry
        </Link>

        <Link to="/category" className="products">
          <MdOutlinePublishedWithChanges className="dashboard-icons" />
          category
        </Link>
        <Link to='subcategory' className="products">
          <CiSettings className="dashboard-icons" />
          Sub category
        </Link>

        <Link to='bestSeller' className="products">
          <CiSettings className="dashboard-icons" />
          Best Seller
        </Link>
        <Link to='/banner' className="products">
          <CiSettings className="dashboard-icons" />
          Banner
        </Link>
        <Link to='/wallet' className="products">
          <IoWalletOutline className="dashboard-icons" />
          Wallet
        </Link>
        <Link className="products">
          <CiSettings className="dashboard-icons" />
          Failed Payment
        </Link>
        <Link className="products">
          <CiSettings className="dashboard-icons" />
          Abandonment
        </Link>
        <Link to="/login" className="products">
          <CiLogout className="dashboard-icons" />
          Log out
        </Link>
      </div>
    </>
  );
};
export default LeftSideBar;
