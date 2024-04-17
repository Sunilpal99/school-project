/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';

const SignUp = () => {
  
  return (
    <>
      {/* <!-- sign up start --> */}
      <section id="sign_up">
        <div className="container">
          <div className="row">
            <div className="main-section">
              <div className="col-md-6">
                <div className="first">
                  <img src="./image/image.webp" alt="" />
                </div>
              </div>
              {/* <div className="col-md-"></div> */}
              <div className="col-md-6 form-section">
                <form>
                  {/* <div className="mb-6"> */}
                  <div className="logo d-flex justify-content-center">
                    <img src="./image/sns-new-logo.png" alt="" />
                  </div>
                  <h4 className="text-center m-0">-Sign Up Here-</h4>

                  <label className="form-label">Full Name: </label>
                  <input type="text" id="uname" className="form-control mb-2" required />

                  <label className="form-label">Email: </label>
                  <input type="email" id="uemail" className="form-control mb-2" aria-describedby="emailHelp" />

                  <label className="form-label">Password: </label>
                  <input type="password" id="upassword" className="form-control mb-2" required />

                  <label className="form-label">Confirm Password: </label>
                  <div className="input-group">
                    <input
                      type="password"
                      id="uconfirm_password"
                      className="form-control mb-2"
                      required
                      pattern=".{8,}"
                      title="Password must be at least 8 characters long"
                    />
                  </div>
                  <div className="input-group-append" style={{ width: '12%', marginTop: '10px' }}>
                    <div className="input-group-text">
                      <input type="checkbox" id="showConfirmPassword" />
                    </div>
                  </div>

                  <label className="form-label">Choose files: </label>
                  <input type="file" id="choose_files" className="form-control" required multiple />

                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                  <p className="text-center m-0">
                    don't have an account sign up{' '}
                    <Link to="/">
                      <span> Login now</span>{' '}
                    </Link>
                  </p>
                  {/* </div> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- sign up end --> */}
    </>
  );
};

export default SignUp;
