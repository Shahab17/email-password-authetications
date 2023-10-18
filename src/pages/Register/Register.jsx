import { useState } from "react";
import auth from "../../firebase/firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [regError, setRegError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPass, setShowPass] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    // reset error
    setRegError("");
    setSuccess("");

    // validate
    if (password.length < 6) {
      setRegError("Password should be at least 6 characters or longer");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegError(
        "Your Password should have at least one uppercase characters"
      );
      return;
    }

    // create user

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess("User Created Succesfully.");
      })
      .catch((error) => {
        console.error(error);
        setRegError(error.message);
      });
  };

  return (
    <div className="h-[80vh] flex px-5  items-center">
      <div className="bg-slate-200 rounded-md   p-10 w-full md:w-2/3 lg:w-1/3 mx-auto">
        <h3 className="text-2xl text-center font-semibold uppercase ">
          Register page
        </h3>
        <form onSubmit={handleSubmit}>
          <input
            className="my-4 w-full px-4 py-2 rounded-md outline-none"
            placeholder="Type Your Email.."
            type="email"
            name="email"
            id=""
            required
          />{" "}
          <br />
          <div className="relative">
            <input
              className="  my-4 w-full px-4 py-2 rounded-md outline-none  "
              placeholder="Type Your Password.."
              type={showPass ? "text" : "password"}
              name="password"
              id=""
              required
            />
            
            <span
              onClick={() => setShowPass(!showPass)}
              className="absolute inset-y-0 right-3 flex items-center "
            >
              {showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </span>
          </div>
          <br />
          <input className="btn w-full my-4 " type="submit" value="submit" />
        </form>
        {regError && <p className="text-red-700">{regError}</p>}
        {success && <p className="text-green-700">{success}</p>}
      </div>
    </div>
  );
};

export default Register;
