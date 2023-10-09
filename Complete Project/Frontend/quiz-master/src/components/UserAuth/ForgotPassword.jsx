import { React, useState, useReducer, useEffect, useContext } from "react";
import "../UserAuth/ForgotPasswordStyles.css";
import Binghamton_University_pic from "../../images/Binghamton-University-pic.jpg";
import { AuthContext } from "../../store/auth-context";
import { tokenReducer, userNameReducer,passwordReducer } from "./AuthReducers";
import { useNavigate } from "react-router-dom";
import { USER_ROLE } from "../../enums/role_enums";

export default function ForgotPassword() {
  const passwordChangehandler = (event) => {
    dispatchPassword({
      type: "USER_INPUT",
      val: event.target.value,
    });
  };
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  const confirmPasswordHandler = (event) => {
    setEnteredConfirmPassword(event.target.value);
  };
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState("");
  const validatePassword = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
    // console.log(`FORM: ${formIsValid}`);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      authCtx
        .onSignup(
          passwordState.value,
        )
        .then((response) => {
          navigate("/");
        });
    }
  };

  const authCtx = useContext(AuthContext);
  const [formIsValid, setFormIsValid] = useState(false);
  const navigate = useNavigate();
  const [userNameState, dispatchUserName] = useReducer(userNameReducer, {
    value: "",
    isValid: null,
  });

  const { isValid: userNameIsValid } = userNameState;

  const [tokenState, dispatchToken] = useReducer(tokenReducer, {
    value: "",
    isValid: null,
  });

  const { isValid: tokenIsValid } = tokenState;

  

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("Checking form validity");
      setFormIsValid(userNameIsValid && tokenIsValid);
      if (formIsValid) {
        console.log("FORM OK");
      }
    }, 500);

    return () => {
      console.log("cleanup");
      clearTimeout(identifier);
    };
  }, [userNameIsValid, tokenIsValid, formIsValid]);

  const userNameChangeHandler = (event) => {
    dispatchUserName({
      type: "USER_INPUT",
      val: event.target.value,
    });
  };

  const validateUserNameHandler = () => {
    // setUserNameIsValid(enteredUserName.includes("@binghamton.edu"));
    console.log(userNameIsValid);
    dispatchUserName({ type: "INPUT_BLUR" });
  };

  const tokenChangeHandler = (event) => {
    console.log(event.target.value);
    dispatchToken({
      type: "USER_INPUT",
      val: event.target.value,
    });
  };

  const validateToken = () => {
    // setUserNameIsValid(enteredUserName.includes("@binghamton.edu"));
    console.log(userNameIsValid);
    dispatchToken({ type: "INPUT_BLUR" });
  };

  const generateTokenHandler = async (event) => {
    event.preventDefault();
    if (userNameIsValid) {
      authCtx.onGenerateToken(userNameState.value).then((response) => {
        if (response !== "") {
          console.log(response);
        }
      });
    }
    // const baseURL = "http://localhost:8080/login-register/";
    // const url = `${baseURL}login/generatetoken`;
    // const user = {
    //   email: userNameState.value,
    // };

    // await axios
    //   .post(url, user)
    //   .then((res) => {
    //     console.log(res.data);
    //   })
    //   .catch((err) => {
    //     console.log(err.message);
    //     alert(err.message);
    //   });
  };

  const submitBtnHandler = async (event) => {
    event.preventDefault();

    if (userNameIsValid && tokenIsValid) {
      authCtx
        .onTokenSubmit(userNameState.value, tokenState.value)
        .then((response) => {
          if (response) {
            navigate("/RegisterNewPassword", {
              state: {
                email: userNameState.value,
              },
            });
          }
        });
    }

    // const baseURL = "http://localhost:8080/login-register/";
    // const url = `${baseURL}login/confirmtoken`;
    // const user = {
    //   email: userNameState.value,
    //   token: tokenState.value,
    // };
    // await axios
    //   .post(url, user)
    //   .then((res) => {
    //     console.log(res.data.isValid);
    //     if (res.data.isValid) {
    //       navigate("/RegisterNewPassword", {
    //         state: {
    //           email: userNameState.value,
    //         },
    //       });
    //     } else {
    //       alert(res.data.message);
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err.message);
    //     alert(err.message);
    //   });
  };
  const signUpSubmitHandler = (event) => {
    event.preventDefault();
    navigate("/Signup", {
      state: {
        role: USER_ROLE.STUDENT,
      },
    });
  };

  const [NewPassPageShow, setNewPassPage] = useState(false);
  const showNewPassPage=()=>{
    setNewPassPage(true);
    setGenerateToken(false);
  }
  const [GenerateTokenShow, setGenerateToken] = useState(true);
  const showGenerateToken=()=>{
    setNewPassPage(false);
    setGenerateToken(true);
  }

  return (
    <div className="LoginMainComponent">
      <div className="ImageSlider">
        <img
          src={Binghamton_University_pic}
          alt="Binghamton_University"
          className="BinghamtonUniversityImage"
        />
      </div>
      <div className="FPUserAuth">
        <h1 className="FPheadingTitle">Forgot Password</h1>
        <p className="FPheadText">Welcome to Leadership Assesment Program</p>
        {GenerateTokenShow && (
          <>
            <form id="loginForm" action={showNewPassPage}>
            
            <label htmlFor="email" className="userName">
              B-mail
            </label>
            <div className="userNameInput">
              <input
                type={"email"}
                //className="userNameInput"
                placeholder="xyz@binghamton.edu"
                id="email"
                name="email"
                required
                onChange={userNameChangeHandler}
                onBlur={validateUserNameHandler}
              />
            </div>
            <div>
              <button
                className="GenerateTokenButton"
                onClick={generateTokenHandler}
              >
                <p className="GenerateTokenText">Generate Token</p>
              </button>
            </div>
          </form>
          <form id="loginForm">
            <label htmlFor="password" className="TokenLabel">
              Token {"(12-digit)"}
            </label>
            <div className="TokenInput">
              <input
                //type={"date"}
                //className="passInput"
                placeholder="************"
                id="password"
                name="password"
                required
                onChange={tokenChangeHandler}
                onBlur={validateToken}
              />
            </div>
            <div className="FPLoginButton">
              <input
                className="ForgotPasswordSubmitBtn"
                value="Submit"
                onClick={showNewPassPage}
              ></input>
            </div>
          </form>
          </>
        )}{
        NewPassPageShow && (
          <>
          <form action="/">
            <label htmlFor="password" className="password1">
              Password
            </label>
            <div className="passInput1">
              <input
                type={"password"}
                //className="passInput1"
                placeholder="*************"
                id="password"
                name="password"
                required
                onChange={passwordChangehandler}
                onBlur={validatePassword}
              />
            </div>
            <label htmlFor="password" className="confirmPassword">
              Confirm Password
            </label>
            <div className="confirmPassInput">
              <input
                type={"password"}
                //className="confirmPassInput"
                placeholder="*************"
                id="confirmPassword"
                name="confirmPassword"
                required
                onChange={confirmPasswordHandler}
              />
            </div>
            <div className="LoginButton1">
              <input
                className="LoginText1"
                type="submit"
                value="Sign Up"
                onClick={"/"}
              ></input>
            </div>
            </form>
          </>
        )}
        
        <div className="NusEul_CSS">
          <div className="NewUserDiv" type="submit">
            <input
              type="button"
              className="NewUserClass"
              onClick={signUpSubmitHandler}
              value="New User? "
            ></input>
            <input
              type="button"
              className="SignupClass"
              onClick={signUpSubmitHandler}
              value="Signup  "
            ></input>
          </div>
          <form className="EU_Css" id="ForgotPasswordForm" action="/">
            <div type="submit">
              <input
                className="FPForgotPasswordClass"
                type="submit"
                value="Existing User? Login  "
              ></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
