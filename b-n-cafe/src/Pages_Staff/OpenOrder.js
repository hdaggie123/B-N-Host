import React, { useCallback, useMemo, useState } from 'react';
import MaterialReactTable from 'material-react-table';
// import {Pool} from 'postgres-pool';
// const { Pool } = require('pg');
// const Pool = require('pg').Pool
import {
Box,
Button,
Dialog,
DialogActions,
DialogContent,
DialogTitle,
IconButton,
MenuItem,
Stack,
TextField,
Tooltip,
} from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
// import { data, states } from './makeData';

// Done:
// Order ID: '1',
// Item Name: 'Caffe Latte',
// Costomization: '23',
//Server name: '56'


// read in the open order table into the array 

//setup db connection 
// const Pool = require('pg').Pool

// const express = require('express')
// const app = express()

// const pool = new Pool({
//   user: 'csce315_903_sulemanji',
//   host: 'csce-315-db.engr.tamu.edu',
//   database: 'csce315_903_11',
//   password: ' 830007169',
//   port: 3000,
// });

export const data = [
{
    inventrory: '1',
    itemName: 'Caffe Latte',
    availability: '23',
    min_req: '56',
},
{
    inventrory: '2',
    itemName: 'Caffe Mocha',
    availability: '33',
    min_req: '45',


},
{
    inventrory: '3',
    itemName: 'White Chocolate Mocha',
    availability: '55',
    min_req: '33',

},
{
    inventrory: '4',
    itemName: 'Freshly Brewed Coffee',
    availability: '11',
    min_req: '60',
},
{
    inventrory: '5',
    itemName: 'Cinnamon Dolce Latte',
    availability: '30',
    min_req: '90',
},
{
    inventrory: '6',
    itemName: 'Skinny Vanilla Latte',
    availability: '30',
    min_req: '30',
},
{
    inventrory: '7',
    itemName: 'Caramel Macchiato',
    availability: '90',
    min_req: '90',

},
{
    inventrory: '8',
    itemName: 'Caramel Flan Latte',
    availability: '40',
    min_req: '40',
},
];


const Accounts = () => {
const [createModalOpen, setCreateModalOpen] = useState(false);
const [tableData, setTableData] = useState(() => data);
const [validationErrors, setValidationErrors] = useState({});

const handleDeleteRow = useCallback (
(row) => {
    //send api delete request here, then refetch or update local table data for re-render
    tableData.splice(row.index, 1);
    setTableData([...tableData]);
},
// array, append the row to tha array
[tableData],
);

const getCommonEditTextFieldProps = useCallback(
(cell) => {
    return {
    error: !!validationErrors[cell.id],
    helperText: validationErrors[cell.id],

    };
},
[validationErrors],
);

const columns = useMemo(
() => [
    {
    accessorKey: 'inventrory',
    header: 'Inventrory',
    enableColumnOrdering: false,
    enableSorting: false,
    size: 80,
    },
    {
    accessorKey:'itemName',
    header: 'Item Name',
    size: 140,
    enableColumnOrdering: false,
    muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
        
    }),
    },
    {
    accessorKey: 'availability',
    header: 'Availability',
    size: 140,
    enableColumnOrdering: false,
    muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
        
    }),
    },
    {
    accessorKey: 'min_req',
    header: 'Minimim Requirment',
            enableColumnOrdering: false,
    muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
        
    }),
    },
],
[getCommonEditTextFieldProps],
);

return (
<>
    <MaterialReactTable
    displayColumnDefOptions={{
        'mrt-row-actions': {
        muiTableHeadCellProps: {
            align: 'center',
        },
        size: 120,
        },
    }}
    columns={columns}
    data={tableData}
    enableColumnOrdering
    renderRowActions={({ row, table }) => (
        <Box sx={{ display: 'flex', gap: '1rem' }}>
        <Tooltip arrow placement="right" title="finish order">
            <IconButton color="error" onClick={() => handleDeleteRow(row)}>
            <CheckBoxOutlineBlankOutlinedIcon />
            </IconButton>
        </Tooltip>
        </Box>
    )}
    
    />
</>
);
};


const validateRequired = (value) => !!value.length;

export default Accounts;