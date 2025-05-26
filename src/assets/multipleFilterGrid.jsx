 /*  import * as React from 'react';
import { DataGrid,  GridLogicOperator } from '@mui/x-data-grid';
import { TextField, Button, Stack } from '@mui/material';


export default function DoubleFilterGrid({rows, columns}) {
  const [filter1, setFilter1] = React.useState('');
  const [filter2, setFilter2] = React.useState('');
  const [filterModel, setFilterModel] = React.useState({
    items: [
      { id: 1, field: 'χρωμα', operator: 'contains', value: '' },
      { id: 2, field: 'παχος',  operator: '>=',       value: '' },
    ],
    logicOperator: GridLogicOperator.And,
  });

  const applyFilters = () => {
    
    setFilterModel({
      items: [
        { id: 1, field: 'χρωμα', operator: 'contains', value: filter1 },
        { id: 2, field: 'παχος',  operator: '>=',       value: filter2 },
      ],
      logicOperator: GridLogicOperator.And,
    });
  };

  return (
    <div style={{ height: 400, width: '100%' }}>
      <Stack direction="row" spacing={2} mb={1}>
        <TextField
          label="Name contains…"
          value={filter1}
          onChange={(e) => setFilter1(e.target.value)}
          size="small"
        />
        <TextField
          label="Age ≥"
          value={filter2}
          onChange={(e) => setFilter2(e.target.value)}
          size="small"
          type="number"
        />
        <Button variant="contained" onClick={applyFilters}>
          Apply
        </Button>
      </Stack>
      <DataGrid
        rows={rows}
        columns={columns}
        filterModel={filterModel}
        onFilterModelChange={(model) => setFilterModel(model)}
      />
    </div>
  );
}*/
