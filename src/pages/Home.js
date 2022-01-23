import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Button, Col, Row } from 'reactstrap';
import MyDatatable from '../components/Datatable/MyDatatable';
import CustomNavbar from '../components/Navbar/CustomNavbar';
import Navbar from '../components/Navbar/CustomNavbar';
import '../assets/css/Home.css'
import { MockDataService } from '../apis/MockDataService';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getAllMockData, getUserById } from '../redux/MockData/action';
import UpdateModal from '../components/UpdateModal/UpdateModal';
import UpdateForm from '../components/UpdateForm/UpdateForm';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
const Home = () => {

  const dispatch = useDispatch()
  const mockData = useSelector(state=>state.mockDataReducers.mockData)
  const [updateModal, setupdateModal] = useState(false);
  const [updateData, setupdateData] = useState();
  const history= useHistory()

  useEffect(() => {
    dispatch(getAllMockData())
  }, []);
  

  const updateMockData=(data)=>{
    setupdateData(data)
    setupdateModal(true)
  }

  const detailMockData=(data)=>{
    dispatch(getUserById(data.userId))
    history.push(`post/${data.id}`)
  }

  const deleteMockData=(id)=>{
    console.log(id);
    Swal.fire({
      title: 'Silmek İstediğinize Emin Misiniz',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Evet, sil',
      cancelButtonText:"Vazgeç",
      

    }).then((result) => {
      if (result.isConfirmed) {
        MockDataService.deleteMockData(id).then(res=>{
          if(res.status==200){
            Swal.fire(
              'Silindi',
              'Post silindi',
              'success'
            )
          }
          else{
            Swal.fire(
              'Başarısız',
              'Postunuz silinemedi',
              'error'
            )
          }
         
          console.log("Response",res);
        })
      
      }
    })
  }
  const dataColumns = [
    {
        selector: "title",
        sortable: true,
        maxWidth: "60%",
    },
    {
        maxWidth: "40%",

        cell: (a) => {
            return (
              <Row>
                <Col>
                <div className='buttonsdiv'>
                <Button style={{backgroundColor:"#5E72E4"}}  className='btn btn-primary m-1 mt-4 ' onClick={()=>detailMockData(a)}>Detay</Button>
                <Button style={{backgroundColor:"#2DCE89"}}  className='btn btn-primary m-1 mt-4' onClick={()=>updateMockData(a)}>Düzenle</Button>
                <Button style={{backgroundColor:"#FB6340"}}  className='btn btn-primary m-1 mt-4 ' onClick={()=>deleteMockData(a.id)}>Sil</Button>
                </div>
                </Col>
              </Row>
                

            );
        },
    },

];


  

  return(
    <div>
      <Container>
        <div className='shadow homedatatable' style={{marginTop:"8%",marginBottom:"8%"}}>
        <MyDatatable  columns={dataColumns} data={mockData} dataLength={mockData.length} ></MyDatatable>
        <UpdateModal setupdateModal={setupdateModal} updateModal={updateModal} data={updateData}>
          <UpdateForm updateData={updateData}></UpdateForm>
        </UpdateModal>

        </div>

      </Container>
  </div>
  )
  
};

export default Home;
