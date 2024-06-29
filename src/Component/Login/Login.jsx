import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";


const Login = () => {
    return (
        <div>
            <h2 className="text-3xl text-center my-10">Please Login</h2>
            <form className="md:w-3/4 lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="Password" name="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
                <div className="form-control mt-6">
                    <p className="text-2xl text-center">or</p>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Google Login</button>
                </div>
                <div className="form-control mt-6">
                    <button  className="btn btn-primary">GitHub Login</button>
                </div>
            </form>
            <p className="text-center mt-4 mb-8">Do not have an account <Link to='/register' className="text-blue-600 font-bold">Register</Link></p>
            <Footer></Footer>
        </div>
    );
};

export default Login;