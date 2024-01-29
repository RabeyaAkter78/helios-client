
import { useForm } from "react-hook-form";
import { Link} from "react-router-dom";

import { useState } from "react";



// const auth = getAuth(app);

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error] = useState();


    const onSubmit = data => {
        console.log(data)
    };

    return (
        <div>
            
            <div className="hero min-h-screen " style={{ backgroundImage: "url(https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRtZIgNNT0y9EGmimjGthiHq4vweNA-d2vXJhGDMhj2v_fXXu7g)" }}>

                <div className="hero-content flex-col lg:flex-row">

                    <div className="card flex-shrink-0 w-full max-w-md shadow-2xl ">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text ">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text ">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>
                            
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text ">Contact number</span>
                                </label>
                                <input type="text" {...register("contactNumber")} placeholder="Contact number" className="input input-bordered text-black" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-ghost bg-slate-200 mt-3">SignUp</button>
                            </div>
                            <div className="">
                                <h3>Already Have An Account? Please <Link to="/login"><span className="font-bold">Login</span></Link> </h3>
                            </div>
                            <p className="text-red-500">{error}</p>
                        </form>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default SignUp;