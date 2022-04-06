import Navbar from "./Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"


export default function App(){
    let navigate = useNavigate();
    const [restaurentId , setRestaurentId] = useState("");
    const [invalid , setInvalid] = useState("none")
     function handleChange(event) {
       setRestaurentId(event.target.value); 
     }
     function handleClick(){
       axios
         .get(`http://localhost:5000/${restaurentId}`)
         .then(function (response) {
           if(!response.data)
            setInvalid("");
            else
            navigate(`/status/${restaurentId}`);
         })
         .catch(function (error) {
           console.log(error);
         });
     }
    return (
      <div>
        <Navbar />
        <div
          className="text-center"
          style={{
            paddingLeft: "30%",
            paddingRight: "30%",
            paddingTop: "50px",
          }}
        >
          <main className="form-signin">
            <form onSubmit={(e)=> e.preventDefault()}>
              <h1 className="fw-normal">LOGIN</h1>
              <br />
              <div className="form-floating">
                <input
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  value={restaurentId}
                />
                <label htmlFor="floatingInput">Restaurent ID</label>
              </div>
              <h6 style={{color: "red", display:invalid}}>Invalid credentials!!!</h6>

              <div className="checkbox mb-3">
                <label>
                  <input type="checkbox" defaultValue="remember-me" /> Remember
                  me
                </label>
              </div>
                <button onClick={handleClick} className="w-50 btn btn-primary" type="submit">
                  Login
                </button>
              <p className="mt-5 mb-3 text-muted">© Fooder</p>
            </form>
          </main>
        </div>
      </div>
    );
}