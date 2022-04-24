import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Dish from "../components/Dish";
import Order from "../components/Order"
import NavbarContext from "../navbarcontext";
import axios from "axios";
import Navbar2 from "../components/Navbar2";
import Appbar from "../components/appbar";

export default function Restaurent() {
  let params = useParams();
  const { showButton, showRestaurentName } =useContext(NavbarContext);
  const [buttonClicked, setButtonClicked] =useState(true);
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
      <Navbar2 />

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
          {orders.map(
            (order) =>
              !order.order_completed && (
                <Order
                  key={order.order_id}
                  id={order.order_id}
                  name={order.customer_name}
                  time={order.time}
                  total={order.order_total}
                  items={order.order_items}
                  accept_status={order.order_accepted}
                />
              )
          )}
        </>
      )}
      <div style={{ height: "50px" }}></div>
      <Appbar
        dishes={handleDishes}
        orders={handleOrders}
        count={orders.length}
      />
    </div>
  );
}


