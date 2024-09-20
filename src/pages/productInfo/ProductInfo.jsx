import "../productInfo/productInfo.css";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { MdCurrencyRupee } from "react-icons/md";
import { format, parseISO } from 'date-fns'; 

const ProductInfo = () => {
    const { productInfo } = useContext(UserContext);
  
    let formattedDate;
    if (productInfo && productInfo.created_at) {
      try {
        const date = parseISO(productInfo.created_at);
        formattedDate = format(date, 'MMMM dd, yyyy HH:mm:ss');
      } catch (error) {
        console.error("Failed to parse date:", error);
        formattedDate = "Invalid date";
      }
    } else {
      formattedDate = "Date not available";
    }
  
  return (
    <>
      <div className="productInfoDiv">
        <div style={{ border: "1px solid rgb(224, 214, 214)", width: "49%" }}>
          <img
            style={{
              height: "300px",
              width: "300px",
              margin: "30px",
              margin: "90px",
            }}
            src={productInfo.product_image}
            alt=""
          />
        </div>

        <div
          style={{
            marginLeft: "20px",
            marginRight: "20px",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          <h3>{productInfo.product_name}</h3>
          <p style={{ fontSize: "12px", color: "#626262" }}>
            {productInfo.product_description}
          </p>
          <p>ProductCode : {productInfo.product_code}</p>
          <p style={{ display: "flex" }}>
            <MdCurrencyRupee style={{height:'15px',marginTop:'7px'}}/>
            <h3 style={{marginTop:'0px'}}>{productInfo.price}</h3>
            <h5 style={{ textDecoration: "line-through", color: "#626262",marginLeft:'5px',marginTop:'4px'}}>
              {productInfo.mrp}
            </h5>
          </p>
          <p>Material : {productInfo.material || "material not mentioned"}</p>
          <p>{formattedDate}</p>
          <p>Category : {productInfo.category_name}</p>
          <h5>Specification:-</h5>
          <p style={{ fontSize: "12px", color: "#626262",marginTop:'-15px' }}>{productInfo.specification}</p>
        </div>
      </div>
    </>
  );
};
export default ProductInfo;
