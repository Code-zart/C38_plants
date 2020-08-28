import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBView, MDBIcon } from 'mdbreact';

const HomePageCards = () => {
  return (
      <div id="HomPageCardDeck">
      <div >

      <MDBCol md='4'>
        <MDBCard narrow id="Card1">
          <MDBView cascade>
            <MDBCardImage
              hover
              overlay='white-slight'
              className='card-img-top'
              src='https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg'
              alt='food'
            />
          </MDBView>

          <MDBCardBody>
            <h5 className='pink-text'>
              <MDBIcon icon='utensils' /> Culinary
            </h5>

            <MDBCardTitle className='font-weight-bold'>
              Cheat day inspirations
            </MDBCardTitle>

            <MDBCardText>
              Sed ut perspiciatis unde omnis iste natus sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </MDBCardText>

            <MDBBtn color='unique'>Button</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
   
    </div>
          <div id="HomePageCard">
         
            <MDBCol md='4'>
              <MDBCard narrow id="Card1">
                <MDBView cascade>
                  <MDBCardImage
                    hover
                    overlay='white-slight'
                    className='card-img-top'
                    src='https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg'
                    alt='food'
                  />
                </MDBView>
      
                <MDBCardBody>
                  <h5 className='pink-text'>
                    <MDBIcon icon='utensils' /> Culinary
                  </h5>
      
                  <MDBCardTitle className='font-weight-bold'>
                    Cheat day inspirations
                  </MDBCardTitle>
      
                  <MDBCardText>
                    Sed ut perspiciatis unde omnis iste natus sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam.
                  </MDBCardText>
      
                  <MDBBtn color='unique'>Button</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
        
          </div>
                <div id="HomePageCard">
                  <MDBCol md='4'>
                    <MDBCard n id="Card1">
                      <MDBView cascade>
                        <MDBCardImage
                          hover
                          overlay='white-slight'
                          className='card-img-top'
                          src='https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg'
                          alt='food'
                        />
                      </MDBView>
            
                      <MDBCardBody>
                        <h5 className='pink-text'>
                          <MDBIcon icon='utensils' /> Culinary
                        </h5>
            
                        <MDBCardTitle className='font-weight-bold'>
                          Cheat day inspirations
                        </MDBCardTitle>
            
                        <MDBCardText>
                          Sed ut perspiciatis unde omnis iste natus sit voluptatem
                          accusantium doloremque laudantium, totam rem aperiam.
                        </MDBCardText>
            
                        <MDBBtn color='unique'>Button</MDBBtn>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </div>
                </div>
            
      
  )
}

export default HomePageCards;
