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

                <TableCell key="item_name">
                    <TableSortLabel 
                        active={valueToOrderBy === "item_name"}
                        direction ={valueToOrderBy === "item_name" ? orderDirection:'asc'}
                        onClick ={createSortHandler("item_name")}
                    >
                        Item
                    </TableSortLabel>
                </TableCell>
                <TableCell key="amount_hand">
                    <TableSortLabel 
                        active={valueToOrderBy === "amount_hand"}
                        direction ={valueToOrderBy === "amount_hand" ? orderDirection:'asc'}
                        onClick ={createSortHandler("amount_hand")}
                    >
                        Amount in hand
                    </TableSortLabel>
                </TableCell>
                <TableCell key="min_requirement">
                    <TableSortLabel 
                        active={valueToOrderBy === "min_requirement"}
                        direction ={valueToOrderBy === "min_requirement" ? orderDirection:'asc'}
                        onClick ={createSortHandler("min_requirement")}
                    >
                        Minimum Requirement 
                    </TableSortLabel>
                </TableCell>
                    <TableCell key="edit">
                        <EditIcon />
                    </TableCell>

                


            </TableRow>


        </TableHead>
    )
}