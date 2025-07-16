import {Paper, Table} from '@mantine/core';
import '@mantine/core/styles.layer.css';

export function TableComponent({ matches }) {
    const rows = matches.map((match) => (
        <Table.Tr key={match.id}>
            <Table.Td>{match.start_time}</Table.Td>
            <Table.Td>{match.status.charAt(0).toUpperCase() + match.status.slice(1).toLowerCase()}</Table.Td>
            <Table.Td>{match.home_team}</Table.Td>
            <Table.Td>{match.away_team}</Table.Td>
            <Table.Td>{match.home_score || '-'}</Table.Td>
            <Table.Td>{match.away_score || '-'}</Table.Td>
        </Table.Tr>
    ));

    return (
        <Paper withBorder p="sm" radius="md">
            <Table highlightOnHover>
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>Start time</Table.Th>
                        <Table.Th>Status</Table.Th>
                        <Table.Th>Home team</Table.Th>
                        <Table.Th>Away team</Table.Th>
                        <Table.Th>Home score</Table.Th>
                        <Table.Th>Away score</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{rows}</Table.Tbody>
            </Table>
        </Paper>
    );
}