import * as React from 'react';
import { useState } from 'react';
import { Text, Dialog, Button } from '../../../../dist';

export function SurfacesDialog() {
  const [open, setOpen] = useState(false);

  const closeDialog = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    alert('submit');
  };

  return (
    <>
      <Button
        type="button"
        onClick={() => setOpen(true)}
      >
        Open Dialog
      </Button>
      <Dialog.Root open={open} onClose={closeDialog}>
        <Dialog.Content>
          <Dialog.Title>Dialog</Dialog.Title>
          <Text>Dialog content</Text>
        </Dialog.Content>
        <Dialog.Footer>
          <Dialog.Button
            type="button"
            onClick={closeDialog}
          >
            Cancel
          </Dialog.Button>
          <Dialog.Button
            type="button"
            onClick={handleSubmit}
          >
            Submit
          </Dialog.Button>
        </Dialog.Footer>
      </Dialog.Root>
    </>
  );
}
