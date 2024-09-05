import { useEffect, useState } from "react";
import "../enquiry/enquiry.css";
import axios from "axios";
const Enquiry = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchdata = async () => {
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
                    setData(response.data.data);
                }
            } catch (error) { }
        };
        fetchdata();
    }, [setData]);

    return (
        <>
        <div className="enquiry-container">
      

            {data.map((item) => (
                <div className="enquiry-info" key={item.id}>
                    <div className="fsize">{item.name}</div>
                    <div className="fsize">{item.email}</div>
                    <div className="fsize">{item.phone}</div>
                    <div style={{fontWeight:'bold',fontSize:'19px'}}>{item.subject}</div>
                    <div>{item.message}</div>
                </div>
            ))}
            </div>
        </>
    );
};
export default Enquiry;
