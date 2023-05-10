import React from 'react'
import {
  Tooltip, Box, Tag, Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
const ChainUi = () => {
  const CustomCard = React.forwardRef(({ children, ...rest }, ref) => (
    <Box p='1'>
      <Tag ref={ref} {...rest} bg="#f8f8f8">
        {children}
      </Tag>
    </Box>
  ))


  return (
    <>

      <div className=" p-3 d-flex justify-content-center align-content-center" >

        <div className="row" style={{ width: '100%' }}>
          <div className="d-flex col-12 col-md-12 hh-grayBox ">

            <div className="order-tracking completed">
              <span className="is-complete"></span>
              <Tooltip bg="none" label={<><TableContainer bg="white" color="black">
                <Table variant='simple'>

                  <Thead>
                    <Tr>
                      <Th>To convert</Th>
                      <Th>into</Th>

                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>inches</Td>
                      <Td>millimetres (mm)</Td>

                    </Tr>
                    <Tr>
                      <Td>feet</Td>
                      <Td>centimetres (cm)</Td>

                    </Tr>
                    <Tr>
                      <Td>yards</Td>
                      <Td>metres (m)</Td>

                    </Tr>
                  </Tbody>

                </Table>
              </TableContainer></>} >
                <CustomCard><p>SUPER ADMIN<br /><span>Mon, June 24</span></p></CustomCard>
              </Tooltip>

            </div>
            <div className="order-tracking completed">
              <span className="is-complete"></span>
              <p>FARM INSPECTION<br /><span>Tue, June 25</span></p>
            </div>
            <div className="order-tracking completed ">
              <span className="is-complete"></span>
              <p>HARVESTOR<br /><span>Fri, June 28</span></p>
            </div>
            <div className="order-tracking completed">
              <span className="is-complete"></span>
              <p>EXPORTER<br /><span>Fri, June 28</span></p>
            </div>
            <div className="order-tracking">
              <span className="is-complete"></span>
              <p>IMPORTER<br /><span>Fri, June 28</span></p>
            </div>
            <div className="order-tracking">
              <span className="is-complete"></span>
              <p>PROCESSOR<br /><span>Fri, June 28</span></p>
            </div>
            <div className="order-tracking">
              <span className="is-complete"></span>
              <p>REACHED<br /><span>Fri, June 28</span></p>
            </div>

          </div>
        </div>

      </div>
    </>
  )
}

export default ChainUi