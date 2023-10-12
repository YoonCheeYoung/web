import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from '@chakra-ui/react';

export function CustomTableContainer({ data, columnNames }) {
    return (
        <TableContainer>
            <Table size='sm'>
                <Thead>
                    <Tr>
                        {columnNames.map((columnName, index) => (
                            <Th key={index}>{columnName}</Th>
                        ))}
                    </Tr>
                </Thead>
                <Tbody>
                    {data && data.length > 0 ? (
                        data.map((item, index) => (
                            <Tr key={index}>
                                {columnNames.map((columnName, columnIndex) => (
                                    <Td key={columnIndex} style={{ whiteSpace: 'pre-wrap' }}>{item[columnName]}</Td>

                                ))}
                            </Tr>
                        ))
                    ) : (
                        <Tr>
                            <Td colSpan={columnNames.length}>No data available</Td>
                        </Tr>
                    )}
                </Tbody>
            </Table>
        </TableContainer>
    );
}

export default CustomTableContainer;
