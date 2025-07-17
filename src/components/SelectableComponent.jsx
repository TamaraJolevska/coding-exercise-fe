import { Button, Group } from '@mantine/core';
import { useState } from 'react';
import '../App.css'

export default function SelectableComponent({ tournaments, onChange }) {
    const [selectedIds, setSelectedIds] = useState([]);

    const toggleSelection = (id) => {
        const updated = selectedIds.includes(id)
            ? selectedIds.filter((tid) => tid !== id)
            : [...selectedIds, id];

        setSelectedIds(updated);
        console.log("Selected tournament IDs:", Array.from(updated));
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
                            backgroundColor: selected ? 'var(--color-button)' : 'var(--mantine-color-gray-1)',
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