// ** React Imports
import { Fragment, useState, memo, useContext, useEffect } from 'react'

// ** Third Party Components
import ReactPaginate from 'react-paginate'
import { ChevronDown } from 'react-feather'
import DataTable from 'react-data-table-component'
import { Card, CardHeader, CardTitle, Input, Label, Row, Col, Button, CardBody } from 'reactstrap'
import { FiArrowLeftCircle,FiArrowRightCircle } from "react-icons/fi";

import './MyDatatable.css'
// excel ile dışa aktar

const MyDatatable = ({ columns, data, title, dataLength, }) => {


  // ** States
  const [currentPage, setCurrentPage] = useState(1)
  const [rowsPerPage, setRowsPerPage] = useState(6)
  const [searchValue, setSearchValue] = useState('')
  const [filteredData, setfilteredData] = useState(data)
  


  //Filtreye göre ayarlar

  let pagesVisited = (currentPage - 1) * rowsPerPage;
  if (pagesVisited > data.length) {
    pagesVisited = 0
    setCurrentPage(1)
  }
  // ** Function to handle filter
  
  // ** Function to handle Pagination and get data
  const handlePagination = page => {
    setCurrentPage(page.selected + 1)
  }


  // ** Custom Pagination
  const CustomPagination = () => {
    let count = 0;

        count = Math.ceil(dataLength / rowsPerPage)


    return (
      <ReactPaginate
      previousLabel={""}
      nextLabel={<FiArrowRightCircle />}
      breakLabel='...'
      pageCount={count || 1}
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
      activeClassName='active'
      forcePage={currentPage !== 0 ? currentPage - 1 : 0}
      onPageChange={page => handlePagination(page)}
      pageClassName={'page-item'}
      nextLinkClassName={'page-link'}
      nextClassName={'page-item next'}
      previousClassName={'page-item prev'}
      previousLinkClassName={'page-link'}
      pageLinkClassName={'page-link'}
      breakClassName='page-item'
      breakLinkClassName='page-link'
      containerClassName={
        'pagination react-paginate separated-pagination pagination-sm justify-content-end pr-1 mt-1'
      }
    />
    )
  }
 

  // ** Table data to render
  const dataToRender = () => {
      
      const dataToMap =data
      const displayPosts =  dataToMap.slice(pagesVisited, currentPage * rowsPerPage)
      return displayPosts;

  }

  

  return (
    <Fragment>
      <Card>
        <CardBody>
          <DataTable
            noTableHead
            noHeader
            pagination
            
            responsive
            striped
            paginationServer
            className='react-dataTable'
            columns={columns}
            sortIcon={<ChevronDown size={10} />}
            paginationComponent={CustomPagination}
            data={dataToRender()}
          />
        </CardBody>

      </Card>
    </Fragment>
  )
}

export default memo(MyDatatable)