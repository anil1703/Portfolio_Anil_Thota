import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { CiMenuFries } from "react-icons/ci";

import { RxCross2 } from "react-icons/rx";
import "./index.css"

const Header = () => {
    const [isOffNavBar,closingNavBar] = useState(true)


    const openNav = () => closingNavBar(false)

    const closeNav = () => closingNavBar(true)
    return (
        <>
        <nav className="navbar">

    <h1 className="nav-head">Portfolio</h1>
    <ul className="nav-ul">
        <li ><a  style={{color:"black"}} href="#about">
            About</a></li>
        <li><a  style={{color:"black"}} href="#projects">
        Projects</a></li>
        <li><button className="navbar-button" > <a className="letsConnect"  style={{color:"#C73659",height:"100%",width:"100%"}} href="#connect">
        Lets Connect <FaArrowRightLong/>
            </a>  </button></li>
    </ul>


    
</nav>

<nav style={isOffNavBar?({width:"40px",padding:"0",paddingTop:"20px",paddingRight:"12px"}):null} className="nav-mobile">
    <div className="iconsample">
        {isOffNavBar?(<CiMenuFries onClick={openNav} color={"white"}  size={33}/>):(<RxCross2 onClick={closeNav} color={"white"}  size={33}/>)}
    
        </div>
{isOffNavBar?(null):(<h1 className="nav-head">Portfolio</h1>)}
<ul className="nav-ul-mobile">
    {isOffNavBar?(null):(<><li><a  style={{color:"white"}} href="#about">
        About</a></li>
        <li><a  style={{color:"white"}} href="#projects">
        Projects</a></li>
        <li><button className="navbar-button-mobile"><a className="letsConnectMobile"  style={{color:"white",height:"100%",width:"100%"}} href="#connect">
        Lets Connect <FaArrowRightLong/>
            </a>  </button></li></>)}
        
    </ul>

</nav>
</>
    )

}

export default Header