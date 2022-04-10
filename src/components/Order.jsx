// Design and code later
import { useState } from "react";
export default function Order(props) {
  const [payStatus,setPayStatus] = useState("Not Paid");
  const [acceptOrderButtonState, setAcceptOrderButtonState] = useState(
    "btn btn-outline-success"
  );
  const [completedButtonState, setCompletedButtonState] = useState("btn btn-outline-success");
  return (
    <div>
      <div
        style={{
          padding: "5px",
          backgroundColor: "white",
          margin: "20px",
          borderRadius: "20px",
        }}
      >
        <h2
          style={{
            float: "right",
            padding: "7px",
            color: "white",
            backgroundColor: "#FF6B6B",
            borderRadius: "5px",
          }}
        >
          {payStatus}
        </h2>
        <h3 style={{ fontWeight: "700", color: "grey" }}>
          Order #{props.id}
          <h6 style={{ fontSize: "1.2rem", display: "inline", color: "black" }}>
            <strong
              style={{
                paddingLeft: "7px",
                paddingRight: "7px",
                backgroundColor: "#61A4BC",
                borderRadius: "5px",
              }}
            >
              {" "}
              Total : {"₹ "} {props.total}
            </strong>
          </h6>
        </h3>
        <h2>{props.name}</h2>
        <div style={{ float: "right", textAlign: "center" }}>
          <button
            onClick={() =>
              setAcceptOrderButtonState("btn btn-success disabled")
            }
            className={acceptOrderButtonState}
          >
            {" "}
            <strong>ACCEPT ORDER</strong>{" "}
          </button>
          <br /> <br />
          <button
            onClick={() =>
              setCompletedButtonState("btn btn-success disabled")
            }
            className={completedButtonState}
          >
            {" "}
            <strong> COMPLETED</strong>{" "}
          </button>
        </div>
        <h5>
          <span
            style={{
              paddingLeft: "7px",
              paddingRight: "7px",
              backgroundColor: "#20c997",
              borderRadius: "5px",
            }}
          >
            {" "}
            Dishes{" "}
          </span>
        </h5>
        <ul>
        {props.items.map(item => {
          return (
          <li>{item.name}</li>
          )
        })}
        </ul>

        <hr />
      </div>
    </div>
  );
}
