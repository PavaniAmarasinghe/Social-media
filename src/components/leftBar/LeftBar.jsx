import "./leftBar.scss"
import Friends from "../../assets/Friends.png";
import Group from"../../assets/Group.png";
import Marketplace from"../../assets/Marketplace.png";
import Memories from"../../assets/Memories.png";
import Watch from "../../assets/Watch.png";
import Cat from "../../assets/Cat.png";
import Event from "../../assets/Event.png";
import Galary from "../../assets/Galary.png";
import Vedios from "../../assets/Vedios.png";
import Gaming from "../../assets/Gaming.jpg";
import Message from "../../assets/Message.png";
import Fundraiser from "../../assets/Fundraiser.png";
import Tutorials from "../../assets/Tutorials.jpg";
import Courses from "../../assets/Courses.png";


const LeftBar =() =>{
  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
           <img src={Cat} alt=""></img>
          <span>Sandy Shen</span>
          </div>
          <div className="item">
            <img src={Friends} alt=""/>
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={Group} alt=""/>
            <span>Group</span>
          </div>
          <div className="item">
            <img src={Marketplace} alt=""/>
            <span>Marketplace</span>
          </div>
          <div className="item">
            <img src={Memories} alt=""/>
            <span>Memories</span>
          </div>
          <div className="item">
            <img src={Watch} alt=""/>
            <span>Watch</span>
          </div>
        </div>

        <hr/>
        <div className="menu">
          <span>Your Shortcuts</span>
          <div></div>
          <div className="item">
              <img src={Event} alt=""/>
              <span>Events</span>
            </div>
          <div className="item">
              <img src={Gaming} alt=""/>
              <span>Gaming</span>
          </div>
          <div className="item">
              <img src={Galary} alt=""/>
              <span>Gallery</span>
          </div>
          <div className="item">
              <img src={Vedios} alt=""/>
              <span>Vedios</span>
          </div>
          <div className="item">
              <img src={Message} alt=""/>
              <span>Message</span>
          </div>

        <hr/>
        <div className="menu">
          <span>Others</span>
          <div className="item">
              <img src={Fundraiser} alt=""/>
              <span>Fundraiser</span>
          </div>
          <div className="item">
              <img src={Tutorials} alt=""/>
              <span>Tutorials</span>
          </div>
          <div className="item">
              <img src={Courses} alt=""/>
              <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default LeftBar