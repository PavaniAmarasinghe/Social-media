import { useContext } from "react";
import "./comments.scss"
import { AuthContext } from "../../context/authContext";

const Comments = () => {

    const{currentUser} = useContext(AuthContext)
    //temporary
    const comments = [
        {
            id:1,
            desc:"fhb fbgg hgbfsh hfbg owyt kshrg",
            name:"Sandy Shane",
            userId:1,
            profilePicture:"Cat.jpg"
        },
        {
            id:2,
            desc:"fhb fbgg hgbfsh hfbg owyt kshrg",
            name:"Sandy Shane",
            userId:2,
            profilePicture:"Cat.jpg"
        },
    ];
  return (
    <div className="comments">
        <div className="write">
        <img src ={currentUser.profilePic} alt = "" />
        <input type="text" placeholder = "write a comment"/>
        <button>Send</button>
        </div>
        {comments.map(comment =>(
            <div className="comment">
                <img src ={comment.profilePicture} alt = "" />
                <div className="info">
                    <span>{comment.name}</span>
                    <p>{comment.desc}</p>
                </div>
                <span className="date">1 hour ago</span>
            </div>
        ))}
        </div>
    );
};

export default Comments
