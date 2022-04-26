import Navbar from "./Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import { Col, Container,Row } from "react-bootstrap";
import { ClipLoader } from "react-spinners";

export default function App(){
    let navigate = useNavigate();
    const [restaurentId , setRestaurentId] = useState("");
    const [loading, setLoading] =useState(false);
    const [password, setPassword] = useState("");
    const [invalid , setInvalid] = useState("none")
     function handleChange1(event) {
       setRestaurentId(event.target.value); 
     }
     function handleChange2(event) {
       setPassword(event.target.value);
     }
     function handleClick(){
        setLoading(true);
       axios
         .get(`https://fooder-app-server.herokuapp.com/${restaurentId}`)
         .then(function (response) {
           if (!response.data) {
             setInvalid("")
            setLoading(false)}
           else{ 
             setLoading(false);
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
          style={{
            paddingTop: "50px",
          }}
        >
          <Container>
            <Row>
              <Col xs={1} lg={3} md={3}></Col>
              <Col xs={10} lg={6} md={6}>
                <main className="form-signin">
                  <h1 className="fw-normal text-center">LOGIN</h1>
                  <br />
                  <form onSubmit={(e) =>{ 
                    e.preventDefault()
                    handleClick();
                  }}>
                    <div className="col-md-12">
                      <label
                        htmlFor="validationDefault01"
                        className="form-label"
                      >
                        Restaurent ID
                      </label>
                      <input
                        onChange={handleChange1}
                        type="text"
                        className="form-control"
                        id="validationDefault01"
                        value={restaurentId}
                        placeholder="Enter Restaurent ID"
                        required
                      />
                    </div>
                    <div className="col-md-12 mt-2">
                      <label
                        htmlFor="validationDefault02"
                        className="form-label"
                      >
                        Password
                      </label>
                      <input
                        onChange={handleChange2}
                        type="password"
                        className="form-control"
                        id="validationDefault02"
                        value={password}
                        placeholder="Enter Password"
                        required
                      />
                    </div>
                    <h6 style={{ color: "red", display: invalid }}>
                      Invalid credentials!!!
                    </h6>
                    <div className="checkbox mb-3 mt-2 text-center">
                      <label>
                        <input type="checkbox" defaultValue="remember-me" />{" "}
                        Remember me
                      </label>
                    </div>
                    <div className="text-center">
                      {!loading && (
                        <button type="submit" className="w-50 btn btn-primary">
                          Login
                        </button>
                      )}
                      <ClipLoader loading={loading} color={"#444645"} />
                    </div>

                    <p className="mt-5 mb-3 text-muted text-center">© Fooder</p>
                  </form>
                </main>
              </Col>

              <Col xs={1} lg={3} md={3}></Col>
            </Row>
          </Container>
        </div>
      </div>
    );
}