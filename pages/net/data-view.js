import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Button } from '@mui/material/';

const mockUserData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', age: 30 },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 28 },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', age: 35 },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', age: 25 },
    { id: 5, name: 'Eve Wilson', email: 'eve@example.com', age: 40 },
  ];
  
  function EditableTable() {
    const [editingRow, setEditingRow] = useState(null);
    const [data, setData] = useState(mockUserData);
  
    const handleEditClick = (rowIndex) => {
      setEditingRow(rowIndex);
    };
  
    const handleSaveClick = () => {
      // Update the data and exit edit mode
      const updatedData = [...data];
      // Implement your data update logic here
      setData(updatedData);
      setEditingRow(null);
    };
  
    const handleCancelClick = () => {
      // Exit edit mode without saving changes
      setEditingRow(null);
    };
  
    return (
      <Table>
        {/* <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead> */}
        {/* <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow key={row.id}>
              <TableCell>
                {editingRow === rowIndex ? <input value={row.name} /> : row.name}
              </TableCell>
              <TableCell>
                {editingRow === rowIndex ? <input value={row.email} /> : row.email}
              </TableCell>
              <TableCell>
                {editingRow === rowIndex ? <input value={row.age} /> : row.age}
              </TableCell>
              <TableCell>
                {editingRow === rowIndex ? (
                  <>
                    <Button onClick={handleSaveClick}>Save</Button>
                    <Button onClick={handleCancelClick}>Cancel</Button>
                  </>
                ) : (
                  <Button onClick={() => handleEditClick(rowIndex)}>Edit</Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody> */}
      </Table>
    );
  }
  
  export default EditableTable;