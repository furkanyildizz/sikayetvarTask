import React from 'react';
import { Container } from 'react-bootstrap';
import { Col, Row } from 'reactstrap';
import './CustomFooter.css'
import {SocialMediaIconsReact} from 'social-media-icons-react';


const CustomFooter = () => {
  return(
    <div>
        <Container>
        <Row className='pt-4 pb-4' style={{borderBottom:"1px solid rgba(0, 0, 0, 0.1)"}}>
            <Col lg="6" md="6">
            <span className='thanks'>Thank you for supporting us!</span>
            <p style={{color:"#32325D"}} className='mt-2'>Let's get in touch on any of these platforms.   </p>
            </Col>
            <Col lg="6" md="6" >
                <div className='iconsdiv'>
            <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" icon="twitter" iconColor="rgba(255,255,255,1)" backgroundColor="#1DA1F2" url="https://twitter.com/" size="32" />
            <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" icon="facebook" iconColor="rgba(255,255,255,1)" backgroundColor="#3B5999" url="https://www.facebook.com/" size="32" />
            <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" icon="dribbble" iconColor="rgba(255,255,255,1)" backgroundColor="#EA4C89" url="https://www.instagram.com/" size="32" />
            <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" icon="github" iconColor="rgba(255,255,255,1)" backgroundColor="#222222" url="https://github.com/" size="32" />
            </div>
            </Col>
        </Row> 
        <Row className='pt-4 pb-4'>
            <Col lg="6" xs="6">
            <p className='footerdate '>© 2018 <span style={{color:"#00CDAC"}}>Şikayetvar</span> </p>
            </Col>
            <Col lg="6" xs="6" style={{textAlign:"right",color:"#8898AA"}}>
            Posts
            </Col>
        </Row> 
        </Container>
    </div>
  ) 
};

export default CustomFooter;
