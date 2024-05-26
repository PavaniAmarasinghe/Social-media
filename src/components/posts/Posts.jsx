import "./posts.scss";
import Post from '../post/Post.jsx';


const Posts = () => {
    const posts = [
        {
            id:1,
            name:"Sandy Shane",
            userId:1,
            profilePic:"Cat.png",
            desc:"Lorem ipsum dolor sit amet consectetur adipsicing elit",
            img:"Cat.png",

        },
        {
            id:2,
            name:"Sandy Shane",
            profilePic:"Cat.png",
            desc:"Tenetur iste volubtates dolern ren commodi voluplate particularvoluptatumlaboriosan consequatur enin",
        },
    ];
    return <div className="posts">
        {posts.map(post =>(
            <Post post={post} key={post.id}/>
        ))}
    </div>
    };

export default Posts;