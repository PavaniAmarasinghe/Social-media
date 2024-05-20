import Login from "./Pages/Login/Login";
import Register from "./Pages/register/Register";
import "./Pages/Style.scss"
import{
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Navbar from './components/navBar/Navbar';
import LeftBar from './components/leftBar/LeftBar';
import RightBar from './components/rightBar/RightBar';
import Home from './Pages/home/Home';
import Profile from './Pages/profile/Profile';
import { useContext } from "react";
import { DarkModeContext } from "./contex/darkModeContext";
import { AuthContext } from "./context/authContext";

function App() {
  const {currentUser} = useContext(AuthContext);

  const{darkMode} = useContext(DarkModeContext)
  console.log(darkMode)

  const Layout = ()=>{
    return(
      <div className={'theme-${darkMode ? "dark" :"light"}'}>
        <Navbar/>
        <div style={{display:"flex"}}>
          <LeftBar/>
          <div style={{flex:6}}>
            <Outlet/>
          </div>
          <RightBar/>

        </div>
        </div>
        
    );
  };
  const ProtectedRoute = ({children})=>{
    if(!currentUser){
      return<Navigate to="/login"/>
    }
    return children
  }
  const router = createBrowserRouter([
    {
      path:"/",
      element:(
        <ProtectedRoute>
          <Layout/>
        </ProtectedRoute>
      ),
      
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/profile/:id",
          element:<Profile/>
        },
      ],

    },
    {
      path:"/login",
      element:<Login/>,
    },
    {
      path:"/register",
      element:<Register/>,
    }
  ]);
  return(
    <div>
      <RouterProvider router={router}/>
            
    </div>
  );
};

export default App;

