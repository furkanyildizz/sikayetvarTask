import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { User } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText
} from 'reactstrap';
import { getAllMockDataById, getUserById } from '../redux/MockData/action';

const PostDetail = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const post = useSelector(state => state.mockDataReducers.mockDataById)
  const user = useSelector(state => state.mockDataReducers.userData)
  useEffect(() => {
    dispatch(getAllMockDataById(id))
    dispatch(getUserById(post.userId))
    
  }, [post.length]);


  

  return (
    <Container>
      <div className='shadow' style={{marginTop:"15%",marginBottom:"15%"}}>
        <Card>
          {/* <CardHeader className='text-center'>Post Detayı</CardHeader> */}
          <CardBody>
            <CardTitle  className='text-center'> <span style={{fontWeight:"800"}}>Title</span>
            <p >{post.title}</p>
            </CardTitle>

            <CardText className='text-center'><span style={{fontWeight:"800"}}>Body</span>
            <p >{post.body}</p>
            <span style={{fontWeight:"800"}}>User</span>           <br></br> <a href={`/profile/${user.id}`} >{user.name}</a>


            </CardText>
          </CardBody>
        </Card>
      </div>
    </Container>
  )

};

export default PostDetail;
