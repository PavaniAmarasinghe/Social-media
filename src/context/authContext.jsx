import { createContext,useEffect,useState} from "react";
export const AuthContext = createContext()

export const AuthContextProvider = ({Children}) => {
    const[currentUser,setcurrentUser] = useState(
       JSON.parse(localStorage.getItem("user" )) || null
    );

    const login = ()=>{
        //To Do
        setcurrentUser({
            id:1,
            name:"Sandy Shane",
            ProfilePic:"Cat.png"
        });
    }
    useEffect(()=>{
        localStorage.setItem("user",JSON.stringify(currentUser));
    }, [currentUser]);

    return(
        <AuthContext.Provider value ={{currentUser,login}}>
            {Children}
        </AuthContext.Provider>
    );
};