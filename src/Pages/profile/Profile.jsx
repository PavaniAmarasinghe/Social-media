import "./profile.scss"
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Profile = () => {
  return (
    <div className="profile">
        <div className="images">
            <img src = "Cat.png" className="cover"/>
            <img src = "Cat.png" className="profilePic"/>
        </div>
        <div className="profileContainer">
            <div className="uInfo">
                <div className="left">
                   <a href = "http://facebook.com">
                    <FacebookTwoToneIcon fontSize = "large" />
                   </a> 
                   <a href = "http://facebook.com">
                    <InstagramIcon fontSize = "large" />
                   </a> 
                   <a href = "http://facebook.com">
                    <LinkedInIcon fontSize = "large" />
                   </a> 
                   <a href = "http://facebook.com">
                    <PinterestIcon fontSize = "large" />
                   </a> 
                </div>
                <div className="center">
                    <span>Sandy Shen</span>
                    <div className="info">
                        <div className="item">
                          <PlaceIcon/>
                           <Span>German</Span> 
                        </div>
                        <div className="item">
                          <LanguageIcon/>
                           <Span>Nova.dev</Span> 
                        </div>
                        <button>follow</button>
                    </div>
                </div>
                <div className="right">
                    <EmailOutlinedIcon/>
                    <MoreVertIcon/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile
