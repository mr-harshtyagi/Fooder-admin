import {useContext} from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavbarContext from "../navbarcontext";
import axios from "axios";

export default function Navbar() {
  let navigate= useNavigate();
  let params = useParams();
  const { hideButton,rName,button, status, showButton ,showRestaurentName} = useContext(NavbarContext);

  function handleClick(){
     showButton(false)
     axios
         .patch(`http://localhost:5000/restaurent/${params.restaurentId}`, {
           status: false,
         })
         .then(function (response) {
          if(response.status === 200)
          {
            setTimeout(()=>{
            navigate("/")
            showRestaurentName("")
            hideButton();}, 1000)
          }   
         })
         .catch(function (error) {
           console.log(error);
         });
   }

  return (
    <div style={{ marginBottom: "100px" }}>
      <nav className="navbar fixed-top navbar-light bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <i
              className="bi bi-egg-fill"
              style={{
                color: "#FFB72B",
                fontSize: "2rem",
                float: "left",
                marginRight: "20px",
              }}
            ></i>
            <h1
              style={{
                display: "inline",
                fontWeight: "900",
                fontSize: "2.2rem",
                color: "white",
              }}
            >
              {" "}
              Fooder{" "}
            </h1>
          </a>
          <h2
            style={{
              display: "inline",
              color: "white",
            }}
          >
            {rName}
          </h2>
         <button onClick={handleClick}
         className={button}>{status}</button>
        </div>
      </nav>
    </div>
  );
}

