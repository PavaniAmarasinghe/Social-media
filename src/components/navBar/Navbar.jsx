import "./navbar.scss"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from "react-router-dom";
import Cat from "../../assets/Cat.png";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";


const Navbar =() =>{
  const {toggle} = useContext(DarkModeContext);
  return (
    <div className="navbar">
      <div className="left">
        <Link to ="/" state={{textDecoration:"none"}}>
        <span>NovaNexus</span>
        </Link>
        <HomeOutlinedIcon/>
        <DarkModeOutlinedIcon onClick={toggle}/>
        <GridViewOutlinedIcon/>
        <div className="search">
          <SearchOutlinedIcon/>
          <input type="text" placeholder="Search..."/>
        </div>
      </div>
      <div className="right">
        <PersonOutlineOutlinedIcon/>
        <EmailOutlinedIcon/>
        <NotificationsActiveOutlinedIcon/>
        <div className="User">
          <img src={Cat} alt=""></img>
          <span>Sandy Shen</span>
        </div>
      </div>
      
    </div>
  )
}

export default Navbar
