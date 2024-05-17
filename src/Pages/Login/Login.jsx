import { Link } from 'react-router-dom';
import "./login.scss"
const Login = () => {
    return (
        <div className= "Login">
            <div className="card">
                <div className="left">
                   <h1>Nova
                    Nexus.</h1>
                   <p>Connect,share,thrive where ideas ignite,and communities unite, 
                    welcome!
                   </p>
                   <span>Don't you have an account?</span>
                   <Link to="/register">
                   <button>Register</button>
                   </Link>
                   
                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form >
                        <input type="text" placeholder="Username"/>
                        <input type="password" placeholder="Password"/>
                        <button>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
    
}

export default Login