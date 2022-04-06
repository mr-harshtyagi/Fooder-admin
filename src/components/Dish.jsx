import { useState } from "react";

export default function Dish(){
  const [check, setCheck]= useState(false);
  const [status, setStatus] = useState("In Stock");
  const [color, setColor] = useState("green");
  function handleChange(event){
    setCheck(prevState => !prevState)
    if(event.target.value === "true") {setStatus("In Stock"); setColor("green") }
    if (event.target.value === "false") {setStatus("Out of Stock");setColor("red"); }
  }
    return (
      <div>
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
            src="images/pizza-logo.svg"
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
              onChange={handleChange}
              className="form-check-input"
              type="checkbox"
              role="switch"
              value={check}
              defaultChecked="checked"
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
            <h3 style={{ fontWeight: "800" }}>Pizza</h3>

            <h6 style={{ fontSize: "1.2rem", color: "grey" }}>{"₹ "} 100</h6>
          </div>
        </div>
      </div>
    );
}
