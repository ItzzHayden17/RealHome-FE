import React, { useState } from "react";
import Navbar from "../components/Navbar";
import serverUrl from "../serverUrl";
import axios from "axios";
import Cookie from "js-cookie";
const Login = () => {
  const [signUpActive, setSignUpACtive] = useState(false);
  const [isAgent, setIsAgent] = useState(false);
  const [userLoginDetails,setUserLoginDetails] = useState({email:"",password:""})

  function handleAgent() {
    if (!isAgent) {
      setIsAgent(true);
    } else {
      setIsAgent(false);
    }
  }

  function handleSignup(e) {
    if (signUpActive) {
      setSignUpACtive(false);
    } else {
      setSignUpACtive(true);
    }
  }

  function handleLogin(e){
    e.preventDefault()
    const formData = new FormData();
    formData.append('email', userLoginDetails.email);
    formData.append('password', userLoginDetails.password);
    
    axios.post(serverUrl + "/login", formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then((response) => {
      Cookie.set("user",JSON.stringify(response.data));
      window.location.href = "/"
    })
    .catch((error) => {
      console.error("Login error:", error);
      // Handle error
    });
    
  }

  function handleChange(e){
    const {value,name} = e.target
    setUserLoginDetails((prev) =>({...prev,[name]:value}))
    
  }
  return (
    <div>
      <Navbar />
      <div className="Login">
        <div class="main-logo">
          <img src="./media/logo3.png" alt="RealHome Logo" />
        </div>

        <main>
          <section class="login-section">
            {signUpActive ? (
              <>
                <form
                  class="signup-form"
                  id="signupForm"
                  action={serverUrl + "/signup"}
                  method="POST"
                  enctype="multipart/form-data"
                >
                  <h2>Create a RealHome Account</h2>

                  <label for="name">Name:</label>
                  <input type="text" id="name" name="name" required />
                  <label for="surname">Surname:</label>
                  <input type="text" id="surname" name="surname" required />
                  <label for="signup-email">Email Address:</label>
                  <input type="email" id="signup-email" name="email" required />

                  <label for="signup-password">Password:</label>
                  <input
                    type="password"
                    id="signup-password"
                    name="password"
                    required
                  />

                  <label for="signup-confirm-password">Confirm Password:</label>
                  <input
                    type="password"
                    id="signup-confirm-password"
                    name="confirmPassword"
                    required
                  />

                  <label for="number">Mobile number:</label>
                  <input type="number" id="number" name="number" required />

                  <div className="isAgent" onClick={handleAgent}>
                    {" "}
                    <p>Are you an agent?</p>
                    {isAgent ? (
                      <>
                        <i class="fa-solid fa-check"></i>
                      </>
                    ) : (
                      <>
                        <i class="fa-solid fa-xmark"></i>
                      </>
                    )}{" "}
                  </div>
                  {isAgent ? (
                    <>
                      <label htmlFor="agentImage">
                        Please upload an image of yourself
                      </label>
                      <input
                        type="file"
                        id="agentImage"
                        name="agentImage"
                        required
                      />
                    </>
                  ) : (
                    <></>
                  )}

                  <button type="submit" class="signup-btn">
                    Sign Up
                  </button>

                  <p>
                    Already have an account?{" "}
                    <a id="loginLink" onClick={handleSignup}>
                      Login here
                    </a>
                  </p>
                </form>
              </>
            ) : (
              <>
                <h2>
                  Login to <span>Real</span>
                  <span>Home</span>
                </h2>
                <form
                  class="login-form"
                  id="loginForm"
                  action={serverUrl + "/login"}
                  method="POST"
                  onSubmit={handleLogin}
                >
                  <label for="email">Email Address:</label>
                  <input type="email" id="email" name="email" value={userLoginDetails.email} required onChange={handleChange} />

                  <label for="password">Password:</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    value={userLoginDetails.password}
                    onChange={handleChange}
                  />

                  <button type="submit" class="login-btn">
                    Login
                  </button>

                  <p>
                    Don't have an account?{" "}
                    <a id="signupLink" onClick={handleSignup}>
                      Sign up here
                    </a>
                  </p>
                </form>
              </>
            )}
          </section>
        </main>
      </div>
    </div>
  );
};

export default Login;
