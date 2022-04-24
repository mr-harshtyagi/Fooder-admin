import {useContext} from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavbarContext from "../navbarcontext";
import axios from "axios";

export default function Navbar2() {
  let navigate= useNavigate();
  let params = useParams();
  const { hideButton,rName,button, status, showButton ,showRestaurentName} = useContext(NavbarContext);

  function handleClick(){
     showButton(false)
     axios
       .patch(
         `https://fooder-app-server.herokuapp.com/restaurent/${params.restaurentId}`,
         {
           status: false,
         }
       )
       .then(function (response) {
         if (response.status === 200) {
           setTimeout(() => {
             navigate("/");
             showRestaurentName("");
             hideButton();
           }, 1000);
         }
       })
       .catch(function (error) {
         console.log(error);
       });
   }

  return (
    <div style={{ marginBottom: "50px" }}>
      <nav
        style={{
          boxShadow: "0px 0px 8px 0px rgba(0,0,0,1)",
        }}
        className="navbar fixed-top navbar-light bg-dark"
      >
        <div className="container-fluid">
          <h2
            style={{
              display: "inline",
              color: "white",
            }}
          >
            {rName}
          </h2>
          <button onClick={handleClick} className={button}>
            {status}
          </button>
        </div>
      </nav>
    </div>
  );
}

