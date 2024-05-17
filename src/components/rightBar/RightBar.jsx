import"./rightBar.scss"
import Dog from "../../assets/Dog.jpg";
import Mouse from "../../assets/Mouse.jpg";


const RightBar =() =>{
  return (
    <div className="rightBar">
      <div className="container">
        <div className="menu">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img src={Dog} alt=""></img>
              <span>Bruno Bae</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dissmiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Mouse} alt=""></img>
              <span>Ratatoulie</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dissmiss</button>
            </div>
          </div>
        <hr/>
        <div className="menu">
        <span>Latest Activities</span>
        
        <div className="user">
          <div className="userInfo">
            <img src={Mouse} alt=""/>
            <p>
              <span>Ratatouille</span>Changed their cover picture
            </p>
          </div>
          <span>1 min ago</span>
        </div>
        <div className="user">
          <div className="userInfo">
            <img src={Mouse} alt=""/>
            <p>
              <span>Ratatouille</span>Changed their cover picture
            </p>
          </div>
          <span>1 min ago</span>
        </div>
        <hr/>
        <div className="menu">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img src={Mouse} alt=""/>
              <div className="online" />
              <span>Ratatouille</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Mouse} alt=""/>
              <div className="online" />
              <span>Ratatouille</span>
              </div>
            </div>
            <div className="user">
            <div className="userInfo">
              <img src={Mouse} alt=""/>
              <div className="online" />
              <span>Ratatouille</span>
            </div>
          </div>
        </div>  
      </div>
    </div>
  </div>
  </div>
  );
};
export default RightBar
