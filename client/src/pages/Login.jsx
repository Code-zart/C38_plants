import React from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBBtn,
  MDBIcon,
  MDBModalFooter
} from 'mdbreact';

const Login = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="8">
          <MDBCard id="logIn">
            <MDBCardBody className="mx-4">
              <div className="text-center">
                <h3 className="purple-text mb-5">
                  <strong>Log In</strong>
                </h3>
              </div>
              <MDBInput
                label="Your e-mail"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Your password"
                group
                type="password"
                validate
                containerClass="mb-0"
              />
              <p className="font-small purple-text d-flex justify-content-end pb-3">
                Forgot
                <a href="#!" className="purple-text ml-1">
                  Password?
                </a>
              </p>
              <div className="text-center mb-3">
                <MDBBtn
                  type="button"
                  gradient="purple"
                  rounded
                  className="btn-block z-depth-1a"
                >
                  Log in
                </MDBBtn>
              </div>
              <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">
                or Log in with:
              </p>
              <div className="row my-3 d-flex justify-content-center">
                <MDBBtn
                  type="button"
                  gradient="purple"
                  rounded
                  className="mr-md-3 z-depth-1a"
                >
                  <MDBIcon
                    fab
                    icon="facebook-f"
                    className="white-text text-center"
                  />
                </MDBBtn>
                <MDBBtn
                  type="button"
                  gradient="purple"
                  rounded
                  className="mr-md-3 z-depth-1a"
                >
                  <MDBIcon fab icon="twitter" className="white-text" />
                </MDBBtn>
                <MDBBtn
                  type="button"
                  gradient="purple"
                  rounded
                  className="z-depth-1a"
                >
                  <MDBIcon fab icon="google-plus-g" className="white-text" />
                </MDBBtn>
              </div>
            </MDBCardBody>
            <MDBModalFooter className="mx-1 pt-3 mb-2">
              <p className="font-small grey-text d-flex justify-content-start">
                Not a member?
                <a href="/signup" className="purple-text ml-1">
                  Sign Up
                </a>
              </p>
            </MDBModalFooter>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Login;
