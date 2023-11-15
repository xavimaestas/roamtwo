import { Outlet } from "react-router-dom"
import Header from "./Header"
import Hero from "./Hero"


export default function Layout(){
    return (

        <div className="layout">
        
      
            <Header />
           
            
                <Outlet />
            
          
            
        </div>
    )
}