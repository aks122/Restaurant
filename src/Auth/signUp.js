import React from "react";
import { StyledSignupDiv, StyledForm } from "../StyleComponents/Signup.style";
// import blackLogo from "../Assets/blacklogo.png";
import fb from "../Assets/facebook.png";
import google from "../Assets/google.jpg";
import { NavLink } from "react-bootstrap";
import { useFormik } from "formik";

const initialValues = {
  email: "",
  confirm_email: "",
  password: "",
  profile: "",
  gender: "",
  date: "",
  checkCondition: "",
  
}

export default function Signup({customForLogin}) {


  const formk = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
           console.log(values)

    },
  })





  return (
    <>
      <div className="form-wrapper">
        <div className="container">
          <StyledSignupDiv>
            <div className="header-img-heading">
              <div className="logo-Momato">
                {/* <img src={blackLogo} alt="black-logo" id="black-logo" /> */}
                {/* <span className="title"> Momato</span> */}
              </div>
              <div className="heading">
                <h2>Sign up for free to start listening.</h2>
              </div>
            </div>
            <div className="facebook_signup-button">
              <button className="facebook">
                <div className="img-photo">
                  <img src={fb} alt="fb" id="fb" />
                  <span className="fb-sign">Sign up with Facebook</span>
                </div>
              </button>
            </div>
            <div className="google_signup-button">
              <button className="google">
                <div className="google-icon">
                  <img src={google} alt="google" id="google" />
                  <NavLink>
                    <p className="google-sign54865">Sign up with Google</p>
                  </NavLink>
                </div>
              </button>
            </div>
            <span className="formDivider">or</span>
          <StyledForm>
            <form onSubmit={formk.handleSubmit}>
              <div className="form-email">
                <div className="form-email-label">
                  <label htmlFor="email">Whats's your email?</label>
                </div>
                <div className="email-input">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email."
                    onChange={formk.handleChange}
                    value={formk.values.email}

                  />
                </div>
                <NavLink className="alter">
                  <span className="alt">Use your phone number instead.</span>
                </NavLink>
              </div>
              <div className="form-confirm-email">
                <div className="confirm-email-label">
                  <label htmlFor="confirm">Confirm your email.</label>
                </div>
                <div className="confirm-email-input">
                  <input
                    type="email"
                    name="confirm_email"
                    id="confirm"
                    placeholder="Enter your email again."
                    onChange={formk.handleChange}
                    value={formk.values.confirm_email}
                  />
                </div>
              </div>
              <div className="form-password">
                <div className="password-label">
                  <label htmlFor="password">Create a password</label>
                </div>
                <div className="password-input">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Create a password"
                    onChange={formk.handleChange}
                    value={formk.values.password}
                  />
                </div>
              </div>
              <div className="form-profile-name">
                <div className="profile-name-label">
                  <label htmlFor="name">What should we call you?</label>
                </div>
                <div className="profile-name-input">
                  <input
                    type="name"
                    name="profile"
                    id="name"
                    placeholder="Enter a profile name."
                    onChange={formk.handleChange}
                    value={formk.values.profile}
                  />
                </div>
                <div className="profile-alt">
                  <span className="profile-alt-text">
                    This appears on your profile
                  </span>
                </div>
              </div>
              <div className="form-dob">
                <div className="dob-label">
                  <label htmlFor="dob">What's your date of birth?</label>
                </div>
                <div className="dob-input">
                  <div className="year-input-label">
                    <div className="year-label">
                      <label htmlFor="year">Year</label>
                    </div>
                    <div className="year-input">
                      <input type="text" id="year" placeholder="YYYY"  onChange={formk.handleChange}
                    />
                    </div>
                  </div>
                  <div className="month-input-label">
                    <div className="month-label">
                      <label htmlFor="month">Month</label>
                    </div>
                    <div className="month-input">
                      {/* <input type="text" id="month" placeholder="Month" /> */}
                      <select name="month" id="month">
                        <option selected disabled value>Month</option>
                        <option value="01">January</option>
                        <option value="02">February</option>
                        <option value="03">March</option>
                        <option value="04">April</option>
                        <option value="05">May</option>
                        <option value="06">June</option>
                        <option value="07">July</option>
                        <option value="08">August</option>
                        <option value="09">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">Decemmber</option>
                      </select>
                    </div>
                  </div>
                  <div className="date-input-label">
                    <div className="date-label">
                      <label htmlFor="date">Date</label>
                    </div>
                    <div className="date-input">
                      <input type="text" id="date" placeholder="DD" onChange={formk.handleChange}
                    />
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-gender">
                <div className="gender-label">
                  <label htmlFor="gender">What's your gender?</label>
                </div>
                <div className="gender-input">
                  <div className="male-input">
                    <input type="radio" id="male" name="gender" value="male" onChange={formk.handleChange}/>
                    <label htmlFor="male">
                      <span className="male-gender">Male</span>
                    </label>
                  </div>
                  <div className="female-input">
                    <input
                      type="radio"
                      id="female"
                      name="gender"
                      value="female"
                      onChange={formk.handleChange}
                                      />
                    <label htmlFor="female">
                      <span className="female-gender">Female</span>
                    </label>
                  </div>
                  <div className="Non-binary-input">
                    <input
                      type="radio"
                      id="non-binary"
                      name="gender"
                      value="non-binary"
                      onChange={formk.handleChange}
                    />
                    <label htmlFor="non-binary">
                      <span className="non-binary-gender">Non-binary</span>
                    </label>
                  </div>
                  <div className="other-input">
                    <input
                      type="radio"
                      id="other"
                      name="gender"
                      value="other"
                      onChange={formk.handleChange}
                    />
                    <label htmlFor="other">
                      <span className="other-gender">Other</span>
                    </label>
                  </div>
                  <div className="prefer-not-to-say-input">
                    <input
                      type="radio"
                      id="prefer-not-to-say"
                      name="gender"
                      value="prefer-not-to-say"
                      onChange={formk.handleChange}
                    />
                    <label htmlFor="prefer-not-to-say">
                      <span className="prefer-not-to-say-gender">
                        Prefer not to say
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-check1">
                <input type="checkbox" />
                <label htmlFor="check1">
                  <span className="check1-title">
                    I would prefer not to receive marketing messages from
                    Momato
                  </span>
                </label>
              </div>
              <div className="form-check2">
                <input type="checkbox" />
                <span className="geemark"></span>
                <label htmlFor="check2">
                  <span className="check2-title">
                    Share my registration data with Momato's content providers
                    for marketing purposes.
                  </span>
                </label>
              </div>
              <div className="signup-btn-tc">
                <p className="tc">
                  <span className="terms-condns">
                    By clicking on sign-up, you agree to Momato's.
                  </span>
                  <span className="nav-tc">
                    <NavLink> Terms and Conditions of Use.</NavLink>
                  </span>
                </p>
                <p className="policy">
                  <span className="privacy-policy">
                    To learn more about how Momato collects, uses, shares and
                    protects your personal data, please see.
                  </span>
                  <span className="nav-policy">
                    <NavLink> Momato's Privacy Policy</NavLink>
                  </span>
                </p>
                <div className="signup-button">
                  <button type="submit">Sign up</button>
                </div>
                <p className="login-account">
                  <span className="account">Have an account? </span>
                  <span className="custom-login" onClick={()=>customForLogin()} >Log in</span>.
                </p>
              </div>
            </form>
          </StyledForm>
          </StyledSignupDiv>
        </div>
      </div>
    </>
  );
}
