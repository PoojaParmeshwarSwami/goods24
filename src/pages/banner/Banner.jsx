import axios from "axios";
import { useState,useEffect} from "react";
import { WiDayThunderstorm } from "react-icons/wi";
import { Link } from "react-router-dom";

const Banner =()=>{
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchdata = async () => {
            try {
                const response = await axios.get("https://goods24api.yelmarpariwar.com/website/slider", {
                    auth: {
                        username: 'admin',
                        password: 'password'
                    }
                })
                if (response.data.slider_status) {
                    setData(response.data.data);
                }   
            } catch (error) { }
        }
        fetchdata();
    }, [setData])
    console.log(data);
    return (<>

      <div>
        {data.map((item)=>(
           <div > <img src={item.slider_image} alt="" style={{width:'1005px',marginBottom:'10px'}} /></div>
        ))}
      </div>
       

    </>)
};export default Banner;
