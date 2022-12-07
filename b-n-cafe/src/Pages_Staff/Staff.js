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

import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';


export const data = [
    {
      order_id: '1',
      itemName: 'Caffe Latte',
      customizations: '23',
      min_req: '56',
    },
    {
        order_id: '2',
      itemName: 'Caffe Mocha',
      customizations: '33',
      min_req: '45',


    },
    {
        order_id: '3',
      itemName: 'White Chocolate Mocha',
      customizations: '55',
      min_req: '33',

    },
    {
        order_id: '4',
      itemName: 'Freshly Brewed Coffee',
      customizations: '11',
      min_req: '60',
    },
    {
        order_id: '5',
      itemName: 'Cinnamon Dolce Latte',
      customizations: '30',
      min_req: '90',
    },
    {
        order_id: '6',
      itemName: 'Skinny Vanilla Latte',
      customizations: '30',
      min_req: '30',
    },
    {
        order_id: '7',
      itemName: 'Caramel Macchiato',
      customizations: '90',
      min_req: '90',

    },
    {
        order_id: '8',
      itemName: 'Caramel Flan Latte',
      customizations: '40',
      min_req: '40',
    },
  ];
  
/**
 * 
 * @returns shows all of the staff information in a table
 */
const Accounts = () => {
  const [tableData, setTableData] = useState(() => data);
  const [validationErrors, setValidationErrors] = useState({});


  const handleCheckRow = useCallback(
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
      };
    },
    [validationErrors],
  );

  const columns = useMemo(
    () => [
      {
        accessorKey: 'order_id',
        header: 'Order Id',
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
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        accessorKey: 'customizations',
        header: 'Customizations',
        size: 140,
        enableColumnOrdering: false,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        accessorKey: 'min_req',
        header: 'Server',
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

        renderRowActions={({ row, table }) => (
          <Box 
          display="flex"
          justifyContent="center"
          alignItems="center"
          >
            <Tooltip arrow placement="right" title="Done">
              <IconButton color="inherit" onClick={() => handleCheckRow(row)}>
                <CheckBoxOutlineBlankOutlinedIcon />
              </IconButton>
            </Tooltip>
          </Box>
        )}

        renderTopToolbarCustomActions={() => (
          <h1
            color="secondary"
            variant="contained"
          >
            View open Orders Here: 
          </h1>
        )}

      />
    </>
  );
};

export default Accounts;
