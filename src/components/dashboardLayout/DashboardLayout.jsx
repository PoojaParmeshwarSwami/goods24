import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import LeftSideBar from "../leftsSideBar/LeftSideBar";
import Header from "../header/Header";

const DashboardLayout = () => {
  return (
    
    <div className="dashboard-layout" style={{height:'540px'}}>
      <Header />
      <div className="content">
        <LeftSideBar />
        <main style={{backgroundColor:'white'}}>
            
          <Outlet /> {/* This will render the nested routes */}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
