import { createContext, useState } from "react";

const NavbarContext=createContext();
export function NavbarProvider({children}) {
  const [rName, setRestaurentName] = useState("");
  const [button, setButton] = useState("btn btn-success d-none");
  const [status, setStatus] = useState("");

  const showButton = (status) => {
      if(status)
      {
          setButton("btn btn-success")
          setStatus("ONLINE")
      }
      if(!status){
          setButton("btn btn-danger");
          setStatus("OFFLINE");
      }
    
  };
  function hideButton(){
      setButton("btn btn-danger d-none")
  }
  const showRestaurentName =(name)=>{
      setRestaurentName(name)

  }
  
  return (
    <NavbarContext.Provider value={{ hideButton,rName,button,status,showButton,showRestaurentName }}>
      {children}
    </NavbarContext.Provider>
  );
}

export default NavbarContext;
