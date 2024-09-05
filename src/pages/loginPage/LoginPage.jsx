import "/src/pages/loginPage/loginPage.css";
import img from "/src/assets/img.jpg";
import { Link,useNavigate } from "react-router-dom";
import { useEffect, useState} from "react";

import axios from "axios";

const LoginPage = () => {
  const [error, setError] = useState();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate  = useNavigate();                             

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !pass) {
        setError("both fields required");
    return
    }
    
    try {
      const finalData = {
        email: email,
        password: pass
      };
      const response = await axios.post(
        "https://goods24api.yelmarpariwar.com/admin/login",
        finalData,
        {
          auth: {
            username: "admin",
            password: "password",
          },
        }
      );
      if (response.data.status) {
        setError(response.data.message);
        localStorage.setItem("info",JSON.stringify(response.data.data))
        navigate("/"); 
        
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      <div style={{ display: "flex", height: "100%", width: "100%" }}>
        <div style={{ width: "70%", height: "650px" }}>
          <div
            className="loginpage-imgDiv"
            style={{ height: "100%", width: "100px" }}
          >
            <img id="imgTag" src={img} alt="" />
            <h1 id="text">GOODS24 STAFF</h1>
          </div>
        </div>
        <div
          style={{
            width: "30%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="login-rightsideDiv">
            <form className="loginForm" onSubmit={handleSubmit}>
              <h1 id="rightside-loginText"> Staff Login</h1> <br />
              <input
                className="Login-inputfield"
                type="text"
                placeholder="Email"
                name="email"
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
              />
              <br />
              <input
                className="Login-inputfield"
                type="password"
                name="password"
                placeholder="Password"
                value={pass}
                onChange={(e)=>{setPass(e.target.value)}}
              />
              <p>{error}</p>
              <br />
              <button type="submit" className="loginButton">Login</button >
              <div
                style={{
                  display: "flex",
                  marginLeft: "60px",
                  marginTop: "15px",
                }}
              >
                <p style={{ fontFamily: "sans-serif", fontSize: "11px" }}>
                  If you are new Please
                </p>
                <Link
                  to="/registration"
                  style={{
                    fontSize: "11px",
                    fontFamily: "sans-serif",
                    marginTop: "11.2px",
                    marginLeft: "5px",
                  }}
                >
                  Register
                </Link>
              </div>
            </form>
            <p
              style={{
                padding: "30px",
                marginTop: "20px",
                fontFamily: "sans-serif",
                fontSize: "13px",
              }}
            >
              Design & Developed By
              <a href="https://www.microdynamicsoftware.com">
                {" "}
                Microdynamic Software Pvt.Ltd
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginPage;
