import { useEffect } from "react";
import "../category/category.css";
import axios from "axios";
import { useState } from "react";
const Category = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
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
          setData(response.data.data);
        }
      } catch (error) {}
    };
    fetchData();
  }, [setData]);

  return (
    <>
      <div className="category-container">
        {data.map((item) => (
          <div className="category-info" key={item.id}>
            <img src={item.image} style={{width:'200px',height:'130px',mixBlendMode:'darken'}} />
            <div>{item.title}</div>
            <div>{item.parent}</div>
            <div>{item.prtitle}</div>
        
          </div>
        ))}
      </div>
    </>
  );
};
export default Category;
