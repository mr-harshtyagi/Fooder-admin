import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";

export default function RestaurentStatus() {
  let params = useParams();
  let navigate = useNavigate();
   const [adminPage, setAdminPage] = useState("none");
   const [statusButton, setStausButton] = useState("btn btn-lg btn-danger");
   const [message, setMessage] = useState(
     "Click the button to make Restaurent Online"
   );
   const [online, setOnline] = useState(
     "OFFLINE"
   );
   const [restaurentName, setRestaurentName ] = useState("")
   const [isLoaded, setIsLoaded]=useState(false)

   useEffect(()=>{
       axios
         .get(`http://localhost:5000/getrestaurentdetails/${params.restaurentId}`)
         .then(function (response) {
          setRestaurentName(response.data.name)
          if(response.data.status){
              setAdminPage("");
              setStausButton("btn btn-lg btn-success");
              setMessage("Your restaurent is Online now.");
              setOnline("ONLINE");
              setIsLoaded(true)
          }
         else
         {
           setAdminPage("none");
           setStausButton("btn btn-lg btn-danger");
           setMessage("Click the button to make Restaurent Online");
           setOnline("OFFLINE");
           setIsLoaded(true)

         }
         })
         .catch(function (error) {
           console.log(error);
         });

   },[])


   function handleClick(){
       axios
         .patch(`http://localhost:5000/restaurent/${params.restaurentId}`, {
           status: true,
         })
         .then(function (response) {
          if(response.status === 200)
           window.location.reload();
             
         })
         .catch(function (error) {
           console.log(error);
         });
   }

  return (
    <div style={{ textAlign: "center" }}>
      <Navbar />
      {isLoaded ? (
        <>     
      <h1>{restaurentName}</h1>
      <h5 style={{ color: "grey" }}>{message}</h5>
      <br />
      <button
        onClick={handleClick}
        type="button"
        className={statusButton}
      >
        <strong>Restaurent {online}</strong>
      </button>
      <br />
      <br />
      <br />
      <button
        style={{ display: adminPage, borderRadius: "20px" }}
        className="btn btn-primary"
        onClick={() => navigate(`/online/${params.restaurentId}`)}
      >
        <strong>Go to Admin Page</strong>
      </button>
      </>):
      (
        <h1>Loading ...</h1>
      )}
    </div>
  );
}
