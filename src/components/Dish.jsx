import { useEffect, useState } from "react";
import axios from "axios";

export default function Dish(props){
  const [checkValue, setCheckValue]= useState(false);
  const [checked, setChecked] = useState("");
  const [status, setStatus] = useState("");
  const [color, setColor] = useState("");
  const [isLoaded ,setIsLoaded] =useState(false)
   

  useEffect(()=>{
    axios
      .get(`http://localhost:5000/dishstatus/${props.id}`)
      .then((response) => {
        if(response.data ){
          setCheckValue(true)
          setChecked("checked");
          setStatus("In Stock")
          setColor("green")
          setIsLoaded(true)

        }
        else{
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
        .patch(`http://localhost:5000/dish/${props.id}`, {
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
        .patch(`http://localhost:5000/dish/${props.id}`, {
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
              padding: "30px",
            }}
          >
            <img
              style={{
                float: "left",
                height: "100px",
                width: "100px",
                borderRadius: "5px",
                marginRight: "20px",
              }}
              src={"../" + props.img}
              alt="dish-img"
            ></img>

            <div
              className="form-check form-switch"
              style={{
                marginTop: "30px",
                marginRight: "60px",
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

            <div style={{ marginTop: "20px" }}>
              <h3 style={{ fontWeight: "800" }}>{props.name}</h3>

              <h6 style={{ fontSize: "1.2rem", color: "grey" }}>
                {"₹ "} {props.price}
              </h6>
            </div>
          </div>
        ) : (
          <h1> Loading...</h1>
        )}
      </div>
    );
}
