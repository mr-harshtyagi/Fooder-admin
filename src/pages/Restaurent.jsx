import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Dish from "../components/Dish";
import Order from "../components/Order"
import Navbar from "../components/Navbar";
import NavbarContext from "../navbarcontext";
import axios from "axios";

export default function Restaurent() {
  let params = useParams();
  const { showButton, showRestaurentName } =useContext(NavbarContext);
  const [buttonClicked, setButtonClicked] =useState(false);
  const [dishes, setDishes] = useState([]);
  const [orders, setOrders] = useState([]);
   useEffect(() => {
     axios
       .get(
         `https://fooder-app-server.herokuapp.com/getrestaurentdetails/${params.restaurentId}`
       )
       .then(function (response) {
         setDishes(response.data.dish); // loading all dishes
         showButton(response.data.status);
         showRestaurentName(response.data.name);
       })
       .catch(function (error) {
         console.log(error);
       });
        axios
          .get(
            `https://fooder-app-server.herokuapp.com/getordersdetails/${params.restaurentId}`
          )
          .then(function (response) {
            setOrders(response.data); // loading all orders
          })
          .catch(function (error) {
            console.log(error);
          });
   }, []);

  function handleDishes(){
      setButtonClicked(true);
  }

  function handleOrders(){
     setButtonClicked(false);
  }

  return (
    <div>
      <Navbar />

      {buttonClicked ? (
        dishes.map((dish) => {
          return (
            <Dish
              key={dish.id}
              id={dish.id}
              name={dish.name}
              price={dish.price}
              img={dish.img}
            />
          );
        })
      ) : (
        <>
       {orders.map((order) => {
          return (
            <Order
              key={order.order_id}
              id={order.order_id}
              name={order.customer_name}
              total={order.order_total}
              items={order.order_items}
      
            />
          );
        })}
         
        </>
      )}

      <div style={{ height: "50px" }}></div>

      <div
        style={{
          height: "45px",
          boxShadow: "0px -1px 8px 0px rgba(0,0,0,0.63)",
        }}
        className="btn-group w-100 fixed-bottom bg-light"
        role="group"
        aria-label="Basic radio toggle button group"
      >
        <input
          type="radio"
          className="btn-check"
          name="btnradio"
          id="btnradio1"
          autoComplete="off"
        />
        <label
          style={{ borderColor: "white" }}
          onClick={handleDishes}
          className="btn btn-outline-dark w-50"
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
          style={{ borderColor: "white" }}
          onClick={handleOrders}
          className="btn btn-outline-dark w-50"
          htmlFor="btnradio2"
        >
          <strong style={{ fontSize: "1.5rem" }}>Recent Orders</strong>
        </label>
      </div>
    </div>
  );
}


