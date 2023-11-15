import { NavLink } from "react-router-dom"

export default function Header(){
    return (

        <>

        <header>
          
            <nav>
          
                <NavLink to="/">Home</NavLink>
                {/* <NavLink to="/blog">Blog</NavLink>
                <NavLink to="/about">About Us</NavLink> */}
            </nav>
        </header>
        
        </>

       
      
    )
}