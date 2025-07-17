import { TextInput } from "@mantine/core";
import { IconSearch } from '@tabler/icons-react';
import '../App.css'

export function SearchBoxComponent({ value, onChange }) {
    return (
      <TextInput
        placeholder="Search for matches"
        value={value}
        leftSection={<IconSearch size={16} color="var(--color-button)" />}
        radius="md"
        onChange={(e) => onChange(e.target.value)}
        variant="filled"
        mb="md"
        styles={{
            placeholder: {
                color: "var(--color-text)"
            }
        }}
      />
    );
}