import React,{ useState } from 'react'
import TableCell from '@material-ui/core/TableCell'
import TableHeader from '/Users/rawanalzubaidi/react-12/src/components/TableHeaderSale.js'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TablePagination from '@material-ui/core/TablePagination'
import { TableContainer } from '@material-ui/core'
import EditIcon from '@mui/icons-material/Edit';
import SearchBar from "material-ui-search-bar";
import { makeStyles } from '@material-ui/styles'
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

// TODO: read in the database inventory into the rowInformation array.
const rowInformation = [
    { "inventory_id":1,"receipt_id":2,"item_name":"Caffe Latte","Size":"Tall","Price":2.25,"date":"2022/11/22"},
    { "inventory_id":55,"receipt_id":2,"item_name":"Caffe Mocha","Size":"Venti","Price":2.25,"date":"2022/11/21"},
    { "inventory_id":2,"receipt_id":32,"item_name":"White Chocolate Mocha","Size":"Grande","Price":2.25,"date":"2022/11/22"},
    { "inventory_id":3,"receipt_id":30,"item_name":"Caffe","Size":"Grande","Price":2.25,"date":"2022/11/22"}

]

function descendingComparator(a,b,orderBy){
    if (b[orderBy]< a[orderBy]){
        return -1
    }
    if (b[orderBy]> a[orderBy]){
        return 1
    }
    return 0
}
const useStyles = makeStyles({
    table:{
        minWidth:650
    }
});

function getComparator(order,orderBy){
    return order === "desc" 
    ? (a,b) => descendingComparator(a,b,orderBy)
    : (a,b) => -descendingComparator(a,b,orderBy)

}

const sortedRowInformation = (rowArray, comparator) => {
    const stabilizedRowArray = rowArray.map((el,index) =>[el,index])
    stabilizedRowArray.sort((a,b) => {
        const order =comparator(a[0],b[0])
        if (order !==0) return order
        return a[1] -b[1]
    })
    return stabilizedRowArray.map((el) => el[0])
}

export default function TableContent(){
    const [orderDirection, setOrderDirection] = React.useState('asc')
    const [valueToOrderBy, setValueToOrderBy] = React.useState('name')
    const [page,setPage] = React.useState(0)
    const [rowsPerPage, setRowsPerPage] = React.useState(1)
    const handleRequestSort = (event, property) => {
        const isAscending = (valueToOrderBy === property && orderDirection === 'asc')
        setValueToOrderBy(property)
        setOrderDirection(isAscending  ? 'desc' :'asc')

    }
    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const  handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value),10)
        setPage(0)
    }

    return(
        <>
        <SearchBar className= "search-feild"
            onChange={() => console.log('onChange')}
            onRequestSearch={() => console.log('onRequestSearch')}
            style={{
                maxWidth: 200
            }}
            />
            <TableContainer>
                <Table>
                    <TableHeader 
                        valueToOrderBy ={valueToOrderBy}
                        orderDirection = {orderDirection}
                        handleRequestSort  ={ handleRequestSort}
                        />  
                        {
                        sortedRowInformation(rowInformation, getComparator(orderDirection,valueToOrderBy))
                            .map((item,index) =>(
                                <TableRow key= {index}>
                                    <TableCell>
                                        {item.inventory_id}
                                    </TableCell>
                                    <TableCell>
                                        {item.receipt_id}
                                    </TableCell>
                                    <TableCell>
                                        {item.item_name}
                                    </TableCell>
                                    <TableCell>
                                        {item.Size}
                                    </TableCell>
                                    <TableCell>
                                        {item.Price}
                                    </TableCell>
                                    <TableCell>
                                        {item.date}
                                    </TableCell>
                                    
                                </TableRow>
                            ))}
                </Table>
            </TableContainer>
            {/* <TablePagination>
                rowsPerPageOptions{[1,2]}
                component = "div"
                count = {rowInformation.length}
                rowsPerPage ={rowsPerPage}
                page={page}
                onChangePage ={handleChangePage}
                nChangeRowsPerPage= {handleChangeRowsPerPage}
            </TablePagination> */}
        </>
    )
}