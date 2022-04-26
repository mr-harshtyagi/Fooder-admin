import Navbar from "./Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import { Col, Container,Row } from "react-bootstrap";
import { BounceLoader } from "react-spinners";

export default function App(){
    let navigate = useNavigate();
    const [restaurentId , setRestaurentId] = useState("");
    const [isLoaded, setIsLoaded] =useState(true);
    const [password, setPassword] = useState("");
    const [invalid , setInvalid] = useState("none")
     function handleChange1(event) {
       setRestaurentId(event.target.value); 
     }
     function handleChange2(event) {
       setPassword(event.target.value);
     }
     function handleClick(){
        setIsLoaded(false);
       axios
         .get(`https://fooder-app-server.herokuapp.com/${restaurentId}`)
         .then(function (response) {
           if (!response.data) setInvalid("");
           else{ 
             setIsLoaded(true);
             navigate(`/status/${restaurentId}`);

          };
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
            paddingTop: "50px",
          }}
        >
          <Container>
            <Row>
              <Col xs={1} lg={3} md={3}></Col>
              {isLoaded ? (
                <Col xs={10} lg={6} md={6}>
                  <main className="form-signin">
                    <form onSubmit={(e) => e.preventDefault()}>
                      <h1 className="fw-normal">LOGIN</h1>
                      <br />
                      <div className="form-floating">
                        <input
                          onChange={handleChange1}
                          type="text"
                          className="form-control"
                          id="floatingInput1"
                          value={restaurentId}
                        />
                        <label htmlFor="floatingInput1">Restaurent ID</label>
                      </div>
                      <div className="form-floating mt-3">
                        <input
                          onChange={handleChange2}
                          type="password"
                          className="form-control"
                          id="floatingInput2"
                          value={password}
                        />
                        <label htmlFor="floatingInput2">Password</label>
                      </div>
                      <h6 style={{ color: "red", display: invalid }}>
                        Invalid credentials!!!
                      </h6>
                      <div className="checkbox mb-3 mt-2">
                        <label>
                          <input type="checkbox" defaultValue="remember-me" />{" "}
                          Remember me
                        </label>
                      </div>
                      <button
                        onClick={handleClick}
                        className="w-50 btn btn-primary"
                        type="submit"
                      >
                        Login
                      </button>
                      <p className="mt-5 mb-3 text-muted">© Fooder</p>
                    </form>
                  </main>
                </Col>
              ) : (
                <Col xs={10} lg={6} md={6}>
                  <BounceLoader color={"#444645"} size={15} />
                </Col>
              )}

              <Col xs={1} lg={3} md={3}></Col>
            </Row>
          </Container>
        </div>
      </div>
    );
}