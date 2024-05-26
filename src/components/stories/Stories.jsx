import { useContext } from "react";
import "./stories.scss";
import { AuthContext } from "../../context/authContext";

const Stories = () => {

    const{currentUser} = useContext(AuthContext)
    const stories = [
        {
            id:1,
            name:"Sandy Shane",
            img:"Cat.png"
        },
        {
            id:2,
            name:"Sandy Shane",
            img:"Cat.png"
        },
        {
            id:3,
            name:"Sandy Shane",
            img:"Cat.png"
        },
        {
            id:4,
            name:"Sandy Shane",
            img:"Cat.png"
        },
    ];
  return (
    <div className="stories">
        <div className="story">
                <img src={currentUser.profilePic} alt="" />
                <span>{currentUser.name}</span>
                <button>+</button>
            </div>
        {stories.map(story=>{
            <div className="story" key={story.id}>
                <img src={story.img} alt="" />
                <span>{story.name}</span>
            </div>
        })}
    </div>
  )
}

export default Stories
