import { Stack, Button } from '@mantine/core';
import {useState} from "react";
import {
    IconBallFootball,
    IconBallBasketball,
    IconIceSkating,
    IconBallBaseball,
    IconBallAmericanFootball
} from '@tabler/icons-react';

const iconMap = {
    1: <IconBallFootball size={16} />,
    2: <IconBallBasketball size={16} />,
    3: <IconIceSkating size={16} />,
    4: <IconBallBaseball size={16} />,
    5: <IconBallAmericanFootball size={16} />
};

export default function SidebarComponent({ sports, onChange }) {
    const [selectedIds, setSelectedIds] = useState([]);

    const toggleSelection = (id) => {
        const updated = selectedIds.includes(id)
            ? selectedIds.filter((tid) => tid !== id)
            : [...selectedIds, id];

        setSelectedIds(updated);
        onChange(updated);
    };

    return (
        <Stack gap="2px">
            {sports.map((sport) => {
                const selected = selectedIds.includes(sport.id);
                const icon = iconMap[sport.id];
                return (
                    <Button
                        key={sport.id}
                        variant="light"
                        color="white"
                        radius="xl"
                        size="sm"
                        leftSection={icon}
                        style={{
                            backgroundColor: selected ? '#071131' : '#ffffff',
                            color: selected ? 'white' : 'black',
                            border: 'none',
                        }}
                        justify="flex-start"
                        onClick={() => toggleSelection(sport.id)}
                    >
                        {sport.name}
                    </Button>
                );
            })}
        </Stack>
    );
}