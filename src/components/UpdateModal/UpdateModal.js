import { useContext, useEffect, useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, FormGroup, Input, Form, Media } from 'reactstrap'
import axios from 'axios';

import { Edit, Trash2 } from "react-feather";

const UpdateModal = (props) => {


  
    return (
        <div className='demo-inline-spacing'>
            <div>
                {/* <Button.Ripple color='primary' outline onClick={() => setFormModal(!formModal)}>
          Login Form
        </Button.Ripple> */}
                <Modal isOpen={props.updateModal} toggle={() => props.setupdateModal(!props.updateModal)} className='modal-dialog-centered'>
                    <ModalHeader toggle={() => props.setupdateModal(!props.updateModal)}>{props.title} Düzenle</ModalHeader>
                    <ModalBody>
                        {props.children}   
                    </ModalBody>
                    <ModalFooter>
                    </ModalFooter>
                </Modal>
            </div>

        </div>
    )
}
export default UpdateModal
