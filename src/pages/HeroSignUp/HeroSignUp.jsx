import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
 
const HeroSignUp = () => {

  const [signUpError, setSignUpError] = useState('')
  const [success , setSuccess] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    //reset error
    setSignUpError('')
    setSuccess('')

    if(password.length <6){
      setSignUpError(' Password should be at least 6 characters or longer')
      return
    }

    // create user
    createUserWithEmailAndPassword(auth, email, password)
    .then(result=>{
      console.log(result.user)
      setSuccess('User Account Created Successfully.')
    })
    .catch(error=>{
      console.error(error)
      setSignUpError(error.message)
    })
  };
  return (
    <div>
      <div className="hero  h-[80vh] flex items-center justify-center  ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-slate-300">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input outline-none "
                  required
                />
              </div>
              <div className="form-control my-4">
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input outline-none "
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign Up</button>
              </div>
            {
              signUpError && <p className="text-red-700">{signUpError}</p>
            }
            {
              success && <p className="text-green-700">{success}</p>
            }
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeroSignUp;
