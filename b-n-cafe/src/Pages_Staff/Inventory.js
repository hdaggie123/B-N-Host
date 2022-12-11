import React, { useCallback, useEffect, useMemo, useState } from 'react';
import MaterialReactTable from 'material-react-table';
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
Checkbox,
} from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import './manager.css';
import axios from 'axios';
import { resolveBreakpointValues } from '@mui/system/breakpoints';

const api = axios.create({
    baseURL: 'https://barnesandnoblecsce315-backend.onrender.com'
})

const Inventory = () => {
const [createModalOpen, setCreateModalOpen] = useState(false);
const [data, setData] = useState({});
const [tableData, setTableData] = useState([]);

useEffect(() => {
    fetch("https://barnesandnoblecsce315-backend.onrender.com/inventory")
    .then((data) => data.json())
    .then((data) => setTableData(data))
}, [])
console.log(tableData)
const [validationErrors, setValidationErrors] = useState({});

const handleCreateNewRow = (values) => {
    api.post("/inventory", values)
    .then(res => {
        let dataToAdd = [...data];
        dataToAdd.push(values);
        setData(dataToAdd);
        // resolve()
        // setErrorMessages([])
        // setIsError(false)
    })
    tableData.push(values);
    setTableData([...tableData]);
};

const handleSaveRowEdits = async ({ exitEditingMode, row, values }) => {
    api.put("/inventory/"+values.inventory_id, values)
        .then(res => {
            const dataUpdate = [...data];
            const index = row.tableData.inventory_id;
            dataUpdate[index] = values;
            setData([...dataUpdate]);
        })
if (!Object.keys(validationErrors).length) {
    tableData[row.index] = values;
    //send/receive api updates here, then refetch or update local table data for re-render
    setTableData([...tableData]);
    exitEditingMode(); //required to exit editing mode and close modal
}
};

const handleDeleteRow = 
(row) => {
    const id = row.id+1;
    console.log(id);
    api.delete("/inventory/"+id)
    // .then(res => {
    //     // const dataDelete = [...data];
    //     // const index = row.tableData.id;
    //     // dataDelete.splice(index, 1);
    //     // setData([...dataDelete]);
    // })
    //send api delete request here, then refetch or update local table data for re-render
    tableData.splice(row.index, 1);
    setTableData([...tableData]);
};
// [tableData],
// );

const getCommonEditTextFieldProps = useCallback(
(cell) => {
    return {
    error: !!validationErrors[cell.id],
    helperText: validationErrors[cell.id],
    onBlur: (event) => {
        const isValid =
        cell.column.id === 'minReq'
            ? validateAge(+event.target.value)
            : validateRequired(event.target.value);
        if (!isValid) {
        //set validation error for cell if invalid
        setValidationErrors({
            ...validationErrors,
            [cell.id]: `${cell.column.columnDef.header} is required`,
        });
        } else {

        delete validationErrors[cell.id];
        setValidationErrors({
            ...validationErrors,
        });
        }
    },
    };
},
[validationErrors],
);

const columns = useMemo(
() => [
    {
    accessorKey: 'inventory_id',
    header: 'Inventory ID',
    enableColumnOrdering: false,
    enableSorting: false,
    enableEditing:false,
    size: 80,
    },
    {
    accessorKey:'inventory_item',
    header: 'Item Name',
    size: 140,
    enableColumnOrdering: false,
    muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
        ...getCommonEditTextFieldProps(cell),
    }),
    },
    {
    accessorKey: 'inventory_amount',
    header: 'Availability',
    size: 140,
    enableColumnOrdering: false,
    muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
        ...getCommonEditTextFieldProps(cell),
    }),
    },
    {
    accessorKey: 'minimum_requirement',
    header: 'Minimim Requirment',
            enableColumnOrdering: false,
    muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
        ...getCommonEditTextFieldProps(cell),
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
    editingMode="modal" //default
    enableColumnOrdering
    enableEditing
    onEditingRowSave={handleSaveRowEdits}
    renderRowActions={({ row, table }) => (
        <Box 
        display="flex"
        justifyContent="center"
        alignItems="center"
        >
        <Tooltip arrow placement="left" title="Edit">
            <IconButton onClick={() => table.setEditingRow(row)}>
            <Edit />
            </IconButton>
        </Tooltip>
        <Tooltip arrow placement="right" title="Delete">
            <IconButton color="error" onClick={() => handleDeleteRow(row)}>
            <Delete />
            </IconButton>
        </Tooltip>
        </Box>
    )}
    renderTopToolbarCustomActions={() => (
        <Button
        color="success"
        onClick={() => setCreateModalOpen(true)}
        variant="contained"
        >
        Add an Item 
        </Button>
    )}
    />
    <CreateNewAccountModal
    columns={columns}
    open={createModalOpen}
    onClose={() => setCreateModalOpen(false)}
    onSubmit={handleCreateNewRow}
    />
</>
);
};

//Accounts of creating a mui dialog modal for creating new rows
export const CreateNewAccountModal = ({ open, columns, onClose, onSubmit }) => {
const [values, setValues] = useState(() =>
columns.reduce((acc, column) => {
    acc[column.accessorKey ?? ''] = '';
    return acc;
}, {}),
);

const handleSubmit = () => {
//put your validation logic here
onSubmit(values);
onClose();
};

return (
<Dialog open={open}>
    <DialogTitle textAlign="center" >Add a New item </DialogTitle>
    <DialogContent>
    <form onSubmit={(e) => e.preventDefault()}>
        <Stack
        sx={{
            width: '100%',
            minWidth: { xs: '300px', sm: '360px', md: '400px' },
            gap: '1.5rem',
        }}
        >
        {columns.map((column) => (
            <TextField
            key={column.accessorKey}
            label={column.header}
            name={column.accessorKey}
            onChange={(e) =>
                setValues({ ...values, [e.target.name]: e.target.value })
            }
            />
        ))}
        </Stack>
    </form>
    </DialogContent>
    <DialogActions sx={{ p: '1.25rem' }}>
    <Button color="error" onClick={onClose}>Cancel</Button>
    <Button color="success" onClick={handleSubmit} variant="contained">
        Add new item
    </Button>
    </DialogActions>
</Dialog>
);
};

const validateRequired = (value) => !!value.length;
const validateAge = (age) => age >= 18 && age <= 50;

export default Inventory;
