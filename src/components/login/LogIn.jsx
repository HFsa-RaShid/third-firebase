import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";


const LogIn = () => {

    const {signInUser}=useContext(AuthContext)
    const handleLogin = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password);
        signInUser(email,password)
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>{
            console.error(error)
        })
    }
    return (
        <div className="hero min-h-[571px] bg-base-200 ">
            <div className="hero-content flex-col w-[500px]">
                
                <h1 className="text-5xl font-bold">Login now!</h1>
                
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form className="card-body" onSubmit={handleLogin}>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className="text-center">New to Third-Firebase-Project? Please <Link to="/register">
                    <button className="text-blue-800 underline">Register</button>
                </Link></p>
                </div>
            </div>
        </div>
    );
};

export default LogIn;