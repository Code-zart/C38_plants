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

const Signup = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="8">
          <MDBCard id="logIn">
            <MDBCardBody  className="mx-4">
              <div className="text-center">
                <h3 className="purple-text mb-5">
                  <strong>Sign Up</strong>
                </h3>
              </div>
              <MDBInput
                label="Your Username"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
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

              <div className="text-center mb-3">
                <MDBBtn
                  type="button"
                  gradient="green"
                  rounded
                  className="btn-block z-depth-1a"
                >
                  Sign Up
                </MDBBtn>
              </div>
              <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">
                or Sign up with:
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
                Already a member?
                <a href="/login" className="purple-text ml-1">
                  Log In
                </a>
              </p>
            </MDBModalFooter>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Signup;
