import { useEffect, useState } from "react";
import axios from "axios";
import BeatLoader from "react-spinners/BeatLoader"
import {Container, Row,Col } from "react-bootstrap";

export default function Dish(props){
  const [checkValue, setCheckValue]= useState(false);
  const [checked, setChecked] = useState("");
  const [status, setStatus] = useState("");
  const [color, setColor] = useState("");
  const [isLoaded ,setIsLoaded] =useState(false)

  useEffect(()=>{
    axios
      .get(`https://fooder-app-server.herokuapp.com/dishstatus/${props.id}`)
      .then((response) => {
        if (response.data) {
          setCheckValue(true);
          setChecked("checked");
          setStatus("In Stock");
          setColor("green");
          setIsLoaded(true);
        } else {
          setCheckValue(false);
          setChecked("");
          setStatus("Out of Stock");
          setColor("red");
          setIsLoaded(true);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  },[])
  
  function handleClick(event){
    if(event.target.value === "false") {
      axios
        .patch(`https://fooder-app-server.herokuapp.com/dish/${props.id}`, {
          status: true,
        })
        .then(function (response) {
          if (response.status === 200);
          console.log(`Dish ${props.id} status changed to In Stock`);
        })
        .catch(function (error) {
          console.log(error);
        });
      setCheckValue("true")
      setChecked("checked")
      setStatus("In Stock"); 
      setColor("green") 
    }
    if (event.target.value === "true") {
      axios
        .patch(`https://fooder-app-server.herokuapp.com/dish/${props.id}`, {
          status: false,
        })
        .then(function (response) {
          if (response.status === 200);
          console.log(`Dish ${props.id} status changed to Out of Stock`);
        })
        .catch(function (error) {
          console.log(error);
        });
      setCheckValue("false");
      setChecked("");
      setStatus("Out of Stock");
      setColor("red"); }
  }
    return (
      <div>
        {isLoaded ? (
          <div
            style={{
              textAlign: "left",
              marginBottom:"15px"
            }}
          >
            <Container>
              <Row>
                <Col xs={4} lg={2}>
                  <img
                    style={{
                      float: "left",
                      height: "100px",
                      width: "100px",
                      borderRadius: "5px",
                      marginRight: "10px",
                    }}
                    src={"../" + props.img}
                    alt="dish-img"
                  ></img>
                </Col>
                <Col xs={4} lg={8}>
                  <div style={{ marginTop: "20px" }}>
                    <h3 style={{ fontWeight: "800" }}>{props.name}</h3>

                    <h6 style={{ fontSize: "1.2rem", color: "grey" }}>
                      {"₹ "} {props.price}
                    </h6>
                  </div>
                </Col>
                <Col xs={4} lg={2}>
                  <div
                    className="form-check form-switch"
                    style={{
                      marginTop: "30px",
                      float: "right",
                    }}
                  >
                    <input
                      onClick={handleClick}
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      value={checkValue}
                      defaultChecked={checked}
                    />
                  </div>
                  <h6
                    style={{
                      float: "right",
                      marginTop: "60px",
                      marginRight: "-47px",
                      color: color,
                    }}
                  >
                    <strong>{status}</strong>
                  </h6>
                </Col>
              </Row>
            </Container>
          </div>
        ) : (
          <div className="text-center mt-5">
            <BeatLoader color={"#444645"} size={15} />
          </div>
        )}
      </div>
    );
}
