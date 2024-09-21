//App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardLayout from "./components/dashboardLayout/DashboardLayout";
import Product from "./pages/product/Product";
import LoginPage from "./pages/loginPage/LoginPage";
import MainContent from "./components/mainContent/MainContent";
import LoginLayout from "./components/loginLayout/LoginLayout";
import RegistrationPage from "./pages/registrationPage/RegistrationPage";
import Customer from "./pages/customer/Customer";
import Enquiry from "./pages/enquiry/Enquiry";
import Category from "./pages/category/Category";
import CustomerInfo from "./components/customerInfo/CustomerInfo";
import TotalOrder from "./pages/TotalOrder/TotalOrder";
import { UserProvider } from "./context/UserContext";
import ProductInfo from "./pages/productInfo/ProductInfo";
import Banner from "./pages/banner/Banner";
import SubCategory from "./pages/subCategory/SubCategory";
import BestSeller from "./pages/bestSeller/BestSeller";
import Wallet from "./pages/wallet/Wallet";
import Profile from "./pages/profile/Profile";
import Settings from "./pages/settings/Settings";


const App = () => {




  return (
    <UserProvider>
        {/* <FetchData/> */}
    <Router>
      <Routes>
        <Route path="/login" element={<LoginLayout />}>
          {" "}
          <Route path="/login" element={<LoginPage />} />
          

        </Route>
        <Route path="/" element={<DashboardLayout />}>
        
          <Route path="/gridProduct" element={<Product />} />
          <Route index element={<MainContent />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/customer/customerInfo" element={<CustomerInfo />} />
          <Route path="/category" element={<Category />} />
          <Route path="/productInfo" element={<ProductInfo/>}/>
          <Route path="/enquiry" element={<Enquiry />} />
          <Route path="/banner" element={<Banner/>}/>
          <Route path='subcategory' element={<SubCategory/>}/>
          <Route path = '/bestSeller' element={<BestSeller/>}/>
          <Route path = '/profile' element={<Profile/>}/>
          <Route path="/settings" element ={<Settings/>}/>
          <Route path="/wallet" element ={<Wallet/>}/>
         
          <Route path="/customer/customerInfo/total-order/:id" element={<TotalOrder />}/>
        </Route>

        <Route path="/registration" element={<RegistrationPage />} />
      </Routes>
    </Router>
    </UserProvider>
  );
};
export default App;
// import { Route, Routes } from "react-router-dom";
// import LoginPage from "./Pages/LoginPage/LoginPage";
// import RegistrationPage from "./Pages/RegistrationPage/RegistrationPage";
// import MainContent from "./Components/MainContent/MainContent";
// import Product from './Pages/Product/Product';
// const App = () => {

//     return (<>
//    {/* <LoginPage/> */}
//    {/* <RegistrationPage/> */}

//         <Routes>
//             <Route path='/' element={<LoginPage />} />
//             <Route path="/dashboard" element={<MainContent />} />
//             <Route path="/gridProduct" element={<Product />} />
//             <Route path='/bashboard1' element={<MainContent />} />
//             <Route path="/registration" element={<RegistrationPage />} />
//         </Routes>
//     </>)
// }; export default App;
