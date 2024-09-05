import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const TotalOrder = () => {
  const [orderdata, setOrderdata] = useState()

  const { id } = useParams();
  
  useEffect(() => {
    const fetchdata = async () => {
      const finalData = {
        user_id: id,
      };    

      try {
        const response = await axios.get(
          `https://goods24api.yelmarpariwar.com/website/order/my-orders`,
          {
            params: finalData,
            auth: {
              username: "admin",
              password: "password",
            },
          }
        );

        if (response.data.status) {
          console.log("hi");
          setOrderdata(response.data.status);
        }
      } catch (error) {}
    };
    fetchdata();
  }, []);
  console.log(orderdata)
  return (
    <>
      <div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div>Sale ID</div>
          <div>Order Date</div>
          <div>Category Name</div>
          <div>Product Name</div>
          <div>Quantity</div>
          <div>Price</div>
        </div>
      </div>
    </>
  );
};
export default TotalOrder;
