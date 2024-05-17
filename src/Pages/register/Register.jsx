import { Link } from 'react-router-dom';
import "./register.scss"
const Register = () => {
    return (
        <div className= "Register">
            <div className="card">
                <div className="left">
                   <h1>Nova
                    Nexus.</h1>
                   <p>Connect,share,thrive where ideas ignite,and communities unite, 
                    welcome!
                   </p>
                   <span>Do you have an account?</span>
                   <Link to ="/Login">
                   <button>Login</button>
                   </Link>
                </div>
                <div className="right">
                    <h1>Register</h1>
                    <form >
                        <input type="text" placeholder="Username"/>
                        <input type="Email" placeholder="Email"/>
                        <input type="password" placeholder="Password"/>
                        <input type="text" placeholder="Name"/>
                        <button>Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
    
}
export default Register