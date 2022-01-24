import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { User } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
    Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText, Row, Col
} from 'reactstrap';
import { getAllMockDataById, getUserById } from '../redux/MockData/action';
import '../assets/css/ProfileDetail.css'

import ReactMapboxGl, { Layer, Feature, Marker } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';



const ProfileDetail = () => {




    const { id } = useParams()
    const dispatch = useDispatch()

    const user = useSelector(state => state.mockDataReducers.userData)
    useEffect(() => {
        dispatch(getUserById(id))

    }, []);
    const Map = ReactMapboxGl({
        accessToken:
            'pk.eyJ1IjoiYWhsYWxyb29uZXkiLCJhIjoiY2t5cmlodnphMHU3YjJ2bzN3MDBrMmoxYiJ9.BgPNzyyPYbiK7pmq7UhVyQ'
    });




    return (
        <Container>
            <div className='shadow' style={{ marginTop: "10%", marginBottom: "15%" }}>
                <Card className='profilecard'>
                    <CardBody>
                        <Row className='mt-2'>
                            <Col lg="6" md="6" s="12">
                                <p style={{ fontWeight: 400, fontSize: "1.5rem", color: "#32325D" }}>{user.name}</p>
                                <p style={{ marginBottom: "20px" }} color='#32325D'>{user.address?.city}</p>
                                <Row>
                                    <Col style={{ fontSize: "0.9rem" }} lg="4" md="4" xs="4" style={{ color: "#ADB5BD" }}>
                                        <p>Username</p>
                                        <p>Email</p>
                                        <p>Phone</p>
                                        <p>Website</p>
                                        <p>Company</p>
                                    </Col>
                                    <Col style={{ fontSize: "0.9rem" }} lg="8" md="8" xs="8">
                                        <p>{user.username}</p>
                                        <p>{user.email}</p>
                                        <p>{user.phone}</p>
                                        <p>{user.website}</p>
                                        <p>Company</p>

                                    </Col>
                                </Row>
                            </Col>
                            <Col lg="6" md="6" s="12">
                                <Map
                                    style="mapbox://styles/mapbox/streets-v11"
                                    zoom={[8]}
                                    containerStyle={{
                                        height: '100%',
                                        width: '100%'
                                    }}
                                >
                                    <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                                        <Marker coordinates={[user.address?.geo.lat,user.address?.geo.lng ]} />
                                    </Layer>
                                </Map>
                            </Col>
                        </Row>
                        <Row >
                            <Col>
                                <p style={{ marginTop: "6%", color: "#525F7F",paddingTop:"4%",borderTop:"2px solid #E9ECEF"}} className='text-center'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Ut ea nostrum numquam officiis quas commodi dolores nobis eaque veniam quos impedit sit,
                                    eligendi architecto cum vitae minima suscipit cupiditate iure ratione asperiores rerum atque aperiam deserunt est.
                                </p>
                                <p className='text-center mt-5 mb-5'>
                                    <a style={{ color: "#4A90E2", textDecoration: "none" }} href='/'>Show More</a>
                                </p>
                            </Col>
                        </Row>


                    </CardBody>
                </Card>
            </div>
        </Container>
    )

};

export default ProfileDetail;
