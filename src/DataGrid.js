import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

export default function BasicColumnsGrid() {
  return (
    <Box sx={{ height: 750, width: '100%' }}>
      <DataGrid
        columns={[
            { field: 'id' , headerName: "ID" ,  width: 50  }, 
            { field: 'teamName' , headerName: "TEAM NAME" ,  width: 160  }, 
            { field: 'Teacher' , headerName: "TEACHER" ,  width: 200  }, 
            { field: 'Time' , headerName: "TIME" ,  width: 120  }, 
            { field: 'Dayes' , headerName: "DAYES" ,  width: 120  }, 
            { field: 'Zona' , headerName: "ZONA" ,  width: 80  }, 
            { field: 'price' , headerName: "PRICE" ,  width: 120  }
        ]
        
        }
        rows={[
          {
            id: 1,
            teamName: 'Frontend J5' ,
            Teacher: 'Jalol Imamadinov' ,
            Time: '03/02/01' ,
            Dayes: '09/02/01' ,
            Zona: 9 ,
            price: 750000
          },
          {
            id: 2,
            teamName: 'Node.js 185' ,
            Teacher: 'Jalol Imamadinov' ,
            Time: '03/02/01' ,
            Dayes: '09/02/01' ,
            Zona: 6 ,
            price: 750000
          }
        ]}
      />
    </Box>
  );
}