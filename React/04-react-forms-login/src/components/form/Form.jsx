import { useEffect, useState } from "react";
import { validateEmail, validatePassword } from "../../validators/validate";
import Loader from "../Loader";
import { useNavigate } from "react-router-dom";

function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [showpassword, setShowPassword] = useState(false);
  const [laoding, setLoading] = useState(false);
  const navigate = useNavigate();
  const emailValidate = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailError(validateEmail(email));
  };

  const passwordValidate = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordError(validatePassword(password));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      navigate("/dashbaord", {
        state: {
          email: email,
        },
      });
    }, 5000);
  };

  useEffect(() => {
    if (emailError === "" && passwordError === "") {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [emailError, passwordError]);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <form className="space-y-5" onSubmit={handleSubmit}>
          <h1 className="text-3xl font-bold text-center mb-6">Login Form</h1>
          <input
            type="text"
            value={email}
            placeholder="Enter your username or email"
            className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            onChange={emailValidate}
            disabled={laoding}
          ></input>
          {emailError && (
            <p className="text-red-500 text-sm mt-1">{emailError}</p>
          )}
          <div className="relative w-full">
            <input
              type={showpassword ? "text" : "password"}
              value={password}
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              onChange={passwordValidate}
              disabled={laoding}
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-blue-600"
              onClick={() => setShowPassword(!showpassword)}
            >
              {showpassword ? "Hide" : "Show"}
            </button>

            {passwordError && (
              <label className="text-red-500 text-sm mt-1">
                {passwordError}
              </label>
            )}
          </div>

          <button
            className={`w-full py-2 rounded-md text-white ${
              isValid
                ? "bg-blue-500 hover:bg-blue-600"
                : "bg-gray-400 cursor-not-allowed"
            }`}
            disabled={!isValid}
          >
            {laoding ? (
              <>
                {" "}
                <Loader /> <span>Logging In</span>
              </>
            ) : (
              "Login "
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
