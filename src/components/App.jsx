import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function App(){
    const [restaurentId , setRestaurentId] = useState("");
     function handleChange(event) {
       setRestaurentId(event.target.value); 
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
            <form>
              <h1 className="fw-normal">LOGIN</h1>
              <br />
              <div className="form-floating">
                <input
                  onChange={handleChange}
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  value={restaurentId}
                />
                <label htmlFor="floatingInput">Restaurent ID</label>
              </div>

              <div className="checkbox mb-3">
                <label>
                  <input type="checkbox" defaultValue="remember-me" /> Remember
                  me
                </label>
              </div>
              <Link to={`/${restaurentId}`}>
                <button className="w-50 btn btn-primary" type="submit">
                  Login
                </button>
              </Link>
              <p className="mt-5 mb-3 text-muted">© Fooder</p>
            </form>
          </main>
        </div>
      </div>
    );
}