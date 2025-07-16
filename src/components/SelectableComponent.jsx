import { Button, Group } from '@mantine/core';
import { useState } from 'react';

export default function SelectableComponent({ tournaments, onChange }) {
    const [selectedIds, setSelectedIds] = useState([]);

    const toggleSelection = (id) => {
        const updated = selectedIds.includes(id)
            ? selectedIds.filter((tid) => tid !== id)
            : [...selectedIds, id];

        setSelectedIds(updated);
        onChange(updated);
    };

    return (
        <Group mb="md" gap="xs" wrap="wrap">
            {tournaments.map((tournament) => {
                const selected = selectedIds.includes(tournament.id);
                return (
                    <Button
                        key={tournament.id}
                        variant="light"
                        color="black"
                        radius="xl"
                        size="sm"
                        style={{
                            backgroundColor: selected ? '#071131' : '#f1f3f5',
                            color: selected ? 'white' : 'black',
                            border: 'none',
                        }}
                        onClick={() => toggleSelection(tournament.id)}
                    >
                        {tournament.name}
                    </Button>
                );
            })}
        </Group>
    );
}