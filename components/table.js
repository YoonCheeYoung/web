// components/DataTable.js

import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption } from "@chakra-ui/react";

function DataTable({ data }) {
  return (
    <div style={{ maxHeight: '40px',maxWidth:'40px', overflowY: 'scroll' }}>
      <Table variant="simple" width = "10%" height = "10%">
        <TableCaption>JSON Data Table</TableCaption>
        <Thead>
          <Tr>
            {Object.keys(data[0]).map((key) => (
              <Th key={key}>{key}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item, index) => (
            <Tr key={index}>
              {Object.values(item).map((value, index) => (
                <Td key={index}>{value}</Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>
  );
}

export default DataTable;
