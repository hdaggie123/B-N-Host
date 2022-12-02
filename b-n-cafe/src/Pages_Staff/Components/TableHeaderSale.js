import React from 'react'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableSortLabel from '@material-ui/core/TableSortLabel'
import EditIcon from '@mui/icons-material/Edit';


export default function TableHeader(props){
    const {valueToOrderBy, orderDirection, handleRequestSort} =props
    const createSortHandler = (property) => (event) => 
    {
        handleRequestSort(event,property)
    }
    return(
        <TableHead>
            <TableRow>
                <TableCell key="inventory_id">
                    <TableSortLabel 
                        active={valueToOrderBy === "inventory_id ID "}
                        direction ={valueToOrderBy === "inventory_id" ? orderDirection:'asc'}
                        onClick ={createSortHandler("inventory_id")}
                    >
                        Inventory ID 
                    </TableSortLabel>
                </TableCell>

                <TableCell key="receipt_id">
                    <TableSortLabel 
                        active={valueToOrderBy === "receipt_id"}
                        direction ={valueToOrderBy === "receipt_id" ? orderDirection:'asc'}
                        onClick ={createSortHandler("receipt_id")}
                    >
                        Receipt Id
                    </TableSortLabel>
                </TableCell>
                <TableCell key="item_name">
                    <TableSortLabel 
                        active={valueToOrderBy === "item_name"}
                        direction ={valueToOrderBy === "item_name" ? orderDirection:'asc'}
                        onClick ={createSortHandler("item_name")}
                    >
                        Item
                    </TableSortLabel>
                </TableCell>
                <TableCell key="Size">
                    <TableSortLabel 
                        active={valueToOrderBy === "Size"}
                        direction ={valueToOrderBy === "Size" ? orderDirection:'asc'}
                        onClick ={createSortHandler("Size")}
                    >
                        Size 
                    </TableSortLabel>
                </TableCell>

                <TableCell key="Price">
                    <TableSortLabel 
                        active={valueToOrderBy === "Price"}
                        direction ={valueToOrderBy === "Price" ? orderDirection:'asc'}
                        onClick ={createSortHandler("Price")}
                    >
                        Price 
                    </TableSortLabel>
                </TableCell>

                <TableCell key="date">
                    <TableSortLabel 
                        active={valueToOrderBy === "date"}
                        direction ={valueToOrderBy === "date" ? orderDirection:'asc'}
                        onClick ={createSortHandler("date")}
                    >
                        Date 
                    </TableSortLabel>
                </TableCell>
                    <TableCell key="edit">
                        <EditIcon />
                    </TableCell>

                


            </TableRow>


        </TableHead>
    )
}