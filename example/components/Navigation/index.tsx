import * as React from 'react';
import { DropdownMenu, Heading } from '../../../dist';

export function Navigation() {
  return (
    <>
      <Heading as="h2" size="5xl">
        Navigation
      </Heading>
      <Heading as="h3" size="4xl">
        Dropdown Menu
      </Heading>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          Trigger
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Item onSelect={() => console.log('cut')}>
            Cut
          </DropdownMenu.Item>
          <DropdownMenu.Item onSelect={() => console.log('copy')}>
            Copy
          </DropdownMenu.Item>
          <DropdownMenu.Item onSelect={() => console.log('paste')}>
            Paste
          </DropdownMenu.Item>
          <DropdownMenu.Arrow />
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </>
  );
}
