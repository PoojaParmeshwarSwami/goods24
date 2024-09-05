import axios from "axios";
import { useState,useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { UserContext } from "../../context/UserContext";

const BestSeller = ()=>{

    const [data, setData] = useState([]);
    const{setProductInfo} = useContext(UserContext);
    const finalData = {
        filter_parameter : "is_bestseller",
        filter_value:"Y"
     }
    
    useEffect(() => {
        const fetchdata = async () => {
           
            try {
                const response = await axios.get("https://goods24api.yelmarpariwar.com/website/product/18.4509994/73.827328", {
                    params:finalData,
                    auth: {
                        username: 'admin',
                        password: 'password'
                    }
                })
                if (response.data.status) {
                    setData(response.data.data);
                    // console.log("data",response.data.data);
                }   
            } catch (error) { }
        }
        fetchdata();
    }, [])                                
    
    return(<>
    

    <div style={{ display: 'flex' }}>
            
            <div><h2 style={{ marginLeft: '400px', fontWeight: '500' }}>BestSeller</h2>
                <Link to='/productInfo' className="grid-container" >
                    {data.map((elem) => (
                        <div key={elem.id} className="grid-item" onClick={()=>{setProductInfo(elem)}} >

                            <div style={{ backgroundColor: '#f4f0e3', display: 'flex', flexDirection: 'column' }} >
                                <CiHeart style={{ alignSelf: 'flex-end', marginTop: '5px',height:'25px',width:'40px' }} />
                                <img id='product-img' src={elem.product_image} alt="" />
                            </div>
                            <p className='ptag'>{elem.product_name}</p>
                            <span className='spantag' style={{ color: '#551756' }}>Start from Rs.{elem.price}</span>
                        </div>
                    ))}
                </Link>
            </div>
        </div>
       
    
    </>)
};
export default BestSeller;