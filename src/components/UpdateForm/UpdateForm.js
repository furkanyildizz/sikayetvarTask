import React, { useContext } from 'react'
import { useEffect, useState } from 'react'
import { Button, Dropdown, DropdownMenu, DropdownToggle, Modal, ModalHeader, ModalBody, ModalFooter, Label, FormGroup, Input, Form, Row, Col, Media } from 'reactstrap'
import { useForm } from "react-hook-form";
// import { confirm } from '../components/sweetalert';
import { useDispatch, useSelector } from 'react-redux';
import { MockDataService } from '../../apis/MockDataService';
import { getAllMockData } from '../../redux/MockData/action';

const UpdateForm = ({updateData}) => {

    const [loading, setloading] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
    }, [])


    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            title: updateData.title,
            body:updateData.body

        }
    });



    const onSubmit = (data) => {
        data.id=updateData.id
        data.userId=updateData.userId
        
        MockDataService.updateMockData(data.id,data).then(res=>{
            console.log("Response",res)
            dispatch(getAllMockData())
        })

        

    }



    return (

       
                <Form onSubmit={handleSubmit(onSubmit)}>

                    <FormGroup>

                        <Label for="exampleEmail">title</Label>
                        <Input
                            type="text"
                            // name="categoryId"
                            id="name"
                            name="title"
                            innerRef={register({ required: "Title Boş Olamaz" })}
                            placeholder="Başlık Giriniz"
                        />
                        <div>
                            {
                                errors.title?.message
                            }
                        </div>
                    </FormGroup>
                     <FormGroup>

                        <Label for="exampleEmail">body</Label>
                        <Input
                            type="textarea"
                            // name="categoryId"
                            id="name"
                            name="body"
                            innerRef={register({ required: "Body Boş Olamaz" })}
                            rows="5"
                            placeholder="Açıklama Giriniz"
                        />
                        <div>
                            {
                                errors.body?.message
                            }
                        </div>
                    </FormGroup>


                    <Row>
                        <Col className="">
                            <Button style={{backgroundColor:"#11CDEF",color:"white"}} className="w-25 btn-sm p-2" type="submit" color='' >
                                GÜNCELLE
                            </Button>
                        </Col>

                    </Row>
                </Form>

           
    )
}

export default UpdateForm
