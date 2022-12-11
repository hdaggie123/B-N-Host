import React, { useCallback, useMemo, useState } from 'react';
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
// import { data, states } from './makeData';

// import React, {Component} from 'react';
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://barnesandnoblecsce315-backend.onrender.com/inventory'
})

//////// ADDING RAWAN's CODE //////

const SalesHistory = () => {
    const [createModalOpen, setCreateModalOpen] = useState(false);
    const [setData, data] = useState({});
    const [tableData, setTableData] = useState(() => data);
    const [validationErrors, setValidationErrors] = useState({});
    
    const handleCreateNewRow = (values) => {
    tableData.push(values);
    setTableData([...tableData]);
    };

    const handleSaveRowEdits = async ({ exitEditingMode, row, values }) => {
        if (!Object.keys(validationErrors).length) {
            tableData[row.index] = values;
            //send/receive api updates here, then refetch or update local table data for re-render
            setTableData([...tableData]);
            exitEditingMode(); //required to exit editing mode and close modal
        }
    };

    const handleDeleteRow = useCallback(
        (row) => {
            //send api delete request here, then refetch or update local table data for re-render
            tableData.splice(row.index, 1);
            setTableData([...tableData]);
        },
        [tableData],
    );

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
                            [cell.id]: `${cell.column.columnDef.header} is required`,});
                    
                    } else {
                        delete validationErrors[cell.id];
                        setValidationErrors({...validationErrors,});
                    }
                },
            };
        },
        [validationErrors],
    );

    const columns = useMemo(
        () => [
            {
                accessorKey: 'inventoryID',
                header: 'Inventory ID',
                enableColumnOrdering: false,
                enableSorting: false,
                enableEditing:false,
                size: 80,
            },
            {
                accessorKey:'inventoryItem',
                header: 'Item Name',
                size: 140,
                enableColumnOrdering: false,
                muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
                    ...getCommonEditTextFieldProps(cell),
                }),
            },
            {
                accessorKey: 'inventoryAmount',
                header: 'Inventory Amount',
                size: 140,
                enableColumnOrdering: false,
                muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
                    ...getCommonEditTextFieldProps(cell),
                }),
            },
            {
                accessorKey: 'minReq',
                header: 'Minimim Requirement', enableColumnOrdering: false,
                muiTableBodyCellEditTextFieldProps: ({ cell }) => ({...getCommonEditTextFieldProps(cell),
                }),
            },
        ],
        [getCommonEditTextFieldProps],
    );
}

const CreateNewAccountModal = ({ open, columns, onClose, onSubmit }) => {
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
                Create New Account
            </Button>
            </DialogActions>
        </Dialog>
    );
};

export default class InventoryList extends React.ComponentComponent {

    state = {
        inventory: []
    }

    constructor() {
        super();
        this.getInventory();
    }

    getInventory = async () => {
        let data = await api.get('/').then(({data}) => data);
        this.setState({ inventory:data })
    }

    createInventoryItem = async () => {
        let res = await api.post('/', { inventory_item: "TEST", inventory_amount: 5, minimum_requirement: 4 })
        console.log(res)
        this.getInventory();
    }

    deleteInventoryItem = async (inventory_id) => {
        let data = await api.delete('/' + inventory_id)
        this.getInventory();
    }

    updateInventory = async(inventory_id, val1, val2, val3) => {
        let data = await api.patch('/' + inventory_id, {inventory_item: val1, inventory_amount: val2, minimum_requirement: val3 })
        this.getInventory()
    }

    // //////// ADDING RAWAN's CODE //////

    // SalesHistory = () => {
    //     const [createModalOpen, setCreateModalOpen] = useState(false);
    //     const [setData, data] = useState({});
    //     const [tableData, setTableData] = useState(() => data);
    //     const [validationErrors, setValidationErrors] = useState({});
        
    //     const handleCreateNewRow = (values) => {
    //     tableData.push(values);
    //     setTableData([...tableData]);
    //     };

    //     const handleSaveRowEdits = async ({ exitEditingMode, row, values }) => {
    //         if (!Object.keys(validationErrors).length) {
    //             tableData[row.index] = values;
    //             //send/receive api updates here, then refetch or update local table data for re-render
    //             setTableData([...tableData]);
    //             exitEditingMode(); //required to exit editing mode and close modal
    //         }
    //     };

    //     const handleDeleteRow = useCallback(
    //         (row) => {
    //             //send api delete request here, then refetch or update local table data for re-render
    //             tableData.splice(row.index, 1);
    //             setTableData([...tableData]);
    //         },
    //         [tableData],
    //     );

    //     const getCommonEditTextFieldProps = useCallback(
    //         (cell) => {
    //             return {
    //                 error: !!validationErrors[cell.id],
    //                 helperText: validationErrors[cell.id],
    //                 onBlur: (event) => {
    //                     const isValid =
    //                     cell.column.id === 'minReq'
    //                         ? validateAge(+event.target.value)
    //                         : validateRequired(event.target.value);
                    
    //                     if (!isValid) {
    //                         //set validation error for cell if invalid
    //                         setValidationErrors({
    //                             ...validationErrors,
    //                             [cell.id]: `${cell.column.columnDef.header} is required`,});
                        
    //                     } else {
    //                         delete validationErrors[cell.id];
    //                         setValidationErrors({...validationErrors,});
    //                     }
    //                 },
    //             };
    //         },
    //         [validationErrors],
    //     );

    //     const columns = useMemo(
    //         () => [
    //             {
    //                 accessorKey: 'inventoryID',
    //                 header: 'Inventory ID',
    //                 enableColumnOrdering: false,
    //                 enableSorting: false,
    //                 enableEditing:false,
    //                 size: 80,
    //             },
    //             {
    //                 accessorKey:'inventoryItem',
    //                 header: 'Item Name',
    //                 size: 140,
    //                 enableColumnOrdering: false,
    //                 muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
    //                     ...getCommonEditTextFieldProps(cell),
    //                 }),
    //             },
    //             {
    //                 accessorKey: 'inventoryAmount',
    //                 header: 'Inventory Amount',
    //                 size: 140,
    //                 enableColumnOrdering: false,
    //                 muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
    //                     ...getCommonEditTextFieldProps(cell),
    //                 }),
    //             },
    //             {
    //                 accessorKey: 'minReq',
    //                 header: 'Minimim Requirement', enableColumnOrdering: false,
    //                 muiTableBodyCellEditTextFieldProps: ({ cell }) => ({...getCommonEditTextFieldProps(cell),
    //                 }),
    //             },
    //         ],
    //         [getCommonEditTextFieldProps],
    //     );
    // }

    // CreateNewAccountModal = ({ open, columns, onClose, onSubmit }) => {
    //     const [values, setValues] = useState(() =>
    //         columns.reduce((acc, column) => {
    //             acc[column.accessorKey ?? ''] = '';
    //             return acc;
    //         }, {}),
    //     );
        
    //     const handleSubmit = () => {
    //     //put your validation logic here
    //         onSubmit(values);
    //         onClose();
    //     };

    //     return (
    //         <Dialog open={open}>
    //             <DialogTitle textAlign="center" >Add a New item </DialogTitle>
    //             <DialogContent>
    //             <form onSubmit={(e) => e.preventDefault()}>
    //                 <Stack
    //                 sx={{
    //                     width: '100%',
    //                     minWidth: { xs: '300px', sm: '360px', md: '400px' },
    //                     gap: '1.5rem',
    //                 }}
    //                 >
    //                 {columns.map((column) => (
    //                     <TextField
    //                     key={column.accessorKey}
    //                     label={column.header}
    //                     name={column.accessorKey}
    //                     onChange={(e) =>
    //                         setValues({ ...values, [e.target.name]: e.target.value })
    //                     }
    //                     />
    //                 ))}
    //                 </Stack>
    //             </form>
    //             </DialogContent>
    //             <DialogActions sx={{ p: '1.25rem' }}>
    //             <Button color="error" onClick={onClose}>Cancel</Button>
    //             <Button color="success" onClick={handleSubmit} variant="contained">
    //                 Create New Account
    //             </Button>
    //             </DialogActions>
    //         </Dialog>
    //     );
    // };

    render() {
        return (
            <>
            <MaterialReactTable displayColumnDefOptions={{'mrt-row-actions': { muiTableHeadCellProps: { align: 'center',},size: 120,},}}
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
                        alignItems="center">
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
                    variant="contained">
                    Add an Item 
                    </Button>
                )}/>
                <CreateNewAccountModal
                    columns={columns}
                    open={createModalOpen}
                    onClose={() => setCreateModalOpen(false)}
                    onSubmit={handleCreateNewRow}/>
            </>
        )
    }
}