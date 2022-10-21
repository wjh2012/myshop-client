import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';

const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: '아이디',
    width: 70,
    align: 'center',
    headerAlign: 'center',
  },
  {
    field: 'name',
    headerName: '이름',
    flex: 1,
    align: 'center',
    headerAlign: 'center',
  },
  {
    field: 'email',
    headerName: '이메일주소',
    flex: 1,
    align: 'center',
    headerAlign: 'center',
  },
  {
    field: 'birth',
    headerName: '생일',
    flex: 1,
    align: 'center',
    headerAlign: 'center',
  },
  {
    field: 'memberGrade',
    headerName: '등급',
    flex: 1,
    align: 'center',
    headerAlign: 'center',
  },
  {
    field: 'createdDate',
    headerName: '가입일',
    flex: 1,
    align: 'center',
    headerAlign: 'center',
  },
];

export default function MemberTable() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      headers: { 'content-Type': 'apllication.json' },
    };

    fetch('http://localhost:8080/members', requestOptions)
      .then((response) => response.json())
      .then(
        (reponse) => {
          setMembers(reponse.data);
        },
        (error) => {},
      );
  }, []);

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={members}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}
