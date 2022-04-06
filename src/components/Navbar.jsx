import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  let navigate= useNavigate();
  const [restaurentName , setRestaurentName] = useState("Restaurent Z");
  const [button, setButton] = useState("btn btn-success");
  const [status, setStatus] = useState("ONLINE");
  function handleClick(){
    setButton("btn btn-danger");
    setStatus("OFFLINE")
     navigate("/")
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
            {restaurentName}
          </h2>
         <button onClick={handleClick}
         className={button}>Status : {status}</button>
        </div>
      </nav>
    </div>
  );
}
