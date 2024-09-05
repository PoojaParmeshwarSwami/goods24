import axios from "axios";
import { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [total, setTotal] = useState("");
  const [user, setUser] = useState(null);
  const [totalCategory,setTotalCategory]=useState("");
  const [totalProduct,setTotalProduct]=useState('');
  const[totalEnquiry,setTotalEnquiry] = useState('');
  const[productInfo,setProductInfo] =useState('');
const [totalBseller,setTotalBseller] =useState('');
  const[uName,setUName] =useState()

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
        setTotal(response.data.pagination.limit);
      }
    } catch (error) {
        console.log("error occured getting data",error)
    }
  };


 
 
    const fetchEnquiry = async () => {
        try {
            const response = await axios.get(
                "https://goods24api.yelmarpariwar.com/admin/enquiry",
                {
                    auth: {
                        username: "admin",
                        password: "password",
                    },
                }
            );
            if (response.data.status) {
                setTotalEnquiry(response.data.pagination.total);
            }
        } catch (error) { }
    };

  
    const fetchProduct = async () => {
        try {
            const response = await axios.get("https://goods24api.yelmarpariwar.com/website/product/18.4509994/73.827328", {
                auth: {
                    username: 'admin',
                    password: 'password'
                }
            })
            if (response.data.status) {
                setTotalProduct(response.data.pagination.total);
            }   
        } catch (error) {
            console.log("error occured getting data",error);
         }
    };

   
        const fetchCategory = async () => {
          try {
            const response = await axios.get(
              "https://goods24api.yelmarpariwar.com/admin/category",
              {
                auth: {
                  username: "admin",
                  password: "password",
                },
              }
            );
            if (response.data.status) {
                setTotalCategory(response.data.pagination.total);
            }
          } catch (error) {
            console.log(error)
          }
        };

   
            const fetchBseller = async () => {
                 const finalData = {
                    filter_parameter : "is_bestseller",
                    filter_value:"Y"
                 }
                try {
                    const response = await axios.get("https://goods24api.yelmarpariwar.com/website/product/18.4509994/73.827328", {
                        params:finalData,
                        auth: {
                            username: 'admin',
                            password: 'password'
                        }
                    })
                    if (response.data.status) {
                        setTotalBseller(response.data.pagination.total);
                        // console.log("data",response.data.data);
                    }   
                } catch (error) {
                    console.log("bestSeller Error occured",error)
                 }
            };
                            

    
return (
    <>
      <UserContext.Provider
        value={{ user, setUser, total, setTotal, fetchdata,totalProduct,setTotalProduct,fetchProduct,totalEnquiry,setTotalEnquiry,
            fetchEnquiry,totalCategory,setTotalCategory,fetchCategory,productInfo,
            setProductInfo,totalBseller,setTotalBseller,fetchBseller,uName,setUName}}
      >
        {children}
      </UserContext.Provider>
    </>
  );
};
