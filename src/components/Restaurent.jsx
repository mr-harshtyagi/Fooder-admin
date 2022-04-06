import { useState } from "react";
import { useParams } from "react-router-dom";
import Dish from "./Dish";
import Order from "./Order"
import Navbar from "./Navbar";

export default function Restaurent() {
  let params = useParams();
  const [buttonClicked, setButtonClicked] =useState(false);

  function handleDishes(){
      setButtonClicked(true);
  }

  function handleOrders(){
     setButtonClicked(false);
  }

  return (
    <div>
      <Navbar />
      <div
        style={{ marginTop: "-15px", height: "45px" }}
        className="btn-group w-100"
        role="group"
        aria-label="Basic radio toggle button group"
      >
        <input
          type="radio"
          className="btn-check"
          name="btnradio"
          id="btnradio1"
          autoComplete="off"
          defaultChecked=""
        />
        <label
          onClick={handleDishes}
          className="btn btn-outline-primary w-50"
          htmlFor="btnradio1"
        >
          <strong style={{ fontSize: "1.5rem" }}>All Dishes</strong>
        </label>
        <input
          type="radio"
          className="btn-check"
          name="btnradio"
          id="btnradio2"
          autoComplete="off"
        />
        <label
          onClick={handleOrders}
          className="btn btn-outline-primary w-50"
          htmlFor="btnradio2"
        >
          <strong style={{ fontSize: "1.5rem" }}>Recent Orders</strong>
        </label>
      </div>

      {buttonClicked ? (
        <>
          <Dish />
          <Dish />
          <Dish />
          <Dish />
          <Dish />
        </>
      ) : (
        <>
          <Order />
          <Order />
          <Order />
          <Order />
          <Order />
          <Order />
        </>
      )}
    </div>
  );
}
