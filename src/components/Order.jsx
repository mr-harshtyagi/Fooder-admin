// Design and code later
import { useState } from "react";
import axios from "axios";

export default function Order(props) {
  let accept_status = "btn btn-outline-success";
  let reject_status = "btn btn-outline-danger";
  if(props.accept_status === true){
    accept_status = "btn btn-success disabled";
    reject_status = "btn btn-outline-danger disabled";

  }
  const [payStatus,setPayStatus] = useState("Not Paid");
  const [showPopup, setShowPopup] = useState(false);

  const [acceptOrderButtonState, setAcceptOrderButtonState] = useState(accept_status);
  const [rejectOrderButtonState, setRejectOrderButtonState] = useState(reject_status);
  const [completedButtonState, setCompletedButtonState] = useState("btn btn-outline-success");
 
  function handleAcceptOrderClick(){
    setAcceptOrderButtonState("btn btn-success disabled");
    setRejectOrderButtonState("btn btn-outline-danger disabled");
     axios
       .patch(
         `https://fooder-app-server.herokuapp.com/acceptedstatus/${props.id}`,{})
       .then(function (response) {
         if (response.status === 200);
         console.log(response.data);
       })
       .catch(function (error) {
         console.log(error);
       });
  }
  function handleRejectOrderClick() {
    setRejectOrderButtonState("btn btn-danger disabled");
    setAcceptOrderButtonState("btn btn-outline-success disabled");
    setCompletedButtonState("btn btn-outline-success disabled");
    axios
      .patch(
        `https://fooder-app-server.herokuapp.com/rejectedstatus/${props.id}`,
        {}
      )
      .then(function (response) {
        if (response.status === 200);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
       axios
      .patch(
        `https://fooder-app-server.herokuapp.com/completedstatus/${props.id}`,
        {}
      )
      .then(function (response) {
        if (response.status === 200);
        console.log(response.data);
         props.refreshOrders();
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  function handleCompleteOrderClick() {
    if (acceptOrderButtonState === "btn btn-success disabled"){
      setCompletedButtonState("btn btn-success disabled");
    axios
      .patch(
        `https://fooder-app-server.herokuapp.com/completedstatus/${props.id}`,
        {}
      )
      .then(function (response) {
        if (response.status === 200);
        console.log(response.data);
        props.refreshOrders();
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    else{
      // show a message PLEASE ACCEPT ORDER FIRST
      setShowPopup(true);
      setTimeout(()=>{setShowPopup(false)}, 500)
    }
  }

  return (
    <div>
      <div
        style={{
          paddingLeft: "10px",
          paddingRight: "10px",
          backgroundColor: "white",
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
          Order ID #{props.id}
          {"  "}
        </h3>
        <h6 style={{ fontSize: "1.3rem", display: "inline", color: "black" }}>
          <strong
            style={{
              paddingLeft: "3px",
              paddingRight: "7px",
              backgroundColor: "#B6FFCE",
              borderRadius: "5px",
            }}
          >
            Order Total : {"₹ "} {props.total}
          </strong>
        </h6>
        <p style={{ fontWeight: "400", color: "grey" }}>
          Order Time : {new Date(props.time).toLocaleTimeString()}
        </p>
        <h2>{props.name}</h2>
        <div style={{ float: "right", textAlign: "center" }}>
          <button
            onClick={handleAcceptOrderClick}
            className={acceptOrderButtonState}
            style={{ marginRight: "10px" }}
          >
            {" "}
            <strong>ACCEPT</strong>{" "}
          </button>
          <button
            onClick={handleRejectOrderClick}
            className={rejectOrderButtonState}
          >
            {" "}
            <strong>REJECT</strong>{" "}
          </button>
          <br /> <br />
          <button
            onClick={handleCompleteOrderClick}
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
              backgroundColor: "#FFEEEE",
              borderRadius: "5px",
            }}
          >
            {" "}
            Dishes{" "}
          </span>
        </h5>
        <ul>
          {props.items.map((item) => {
            return <li key={item.id}>{item.name}</li>;
          })}
        </ul>
        <hr style={{ marginTop: "80px" }} />
      </div>
      {showPopup && (
        <div style={{ paddingLeft: "25%", paddingRight: "25%" }}>
          <div
            style={{
              position: "absolute",
              marginTop: "-70px",
              padding: "5px",
              backgroundColor: "#FF6B6B",
              color: "white",
              width: "50%",
              fontSize: "1.5rem",
              textAlign: "center",
              borderRadius: "20px",
            }}
          >
            <strong>Please Accept this order first.</strong>
          </div>
        </div>
      )}
    </div>
  );
}
