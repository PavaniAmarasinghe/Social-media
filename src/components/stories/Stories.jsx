import "./stories.scss";

const Stories = () => {
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
        {stories.map(story=>{
            <div className="story">
                <img src={story.img} alt="" />
                <span>{story.name}</span>
            </div>
        })}
    </div>
  )
}

export default Stories
