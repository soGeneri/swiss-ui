import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ConfirmDialog } from './ConfirmDialog';
import { Button } from '../Button';

const meta: Meta<typeof ConfirmDialog> = {
  title: 'Components/ConfirmDialog',
  component: ConfirmDialog,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'danger', 'warning', 'success'],
    },
    showCancelButton: {
      control: 'boolean',
    },
    confirmDisabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ConfirmDialog>;

const DangerConfirm = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="destructive" onClick={() => setOpen(true)}>Delete Item</Button>
      <ConfirmDialog
        open={open}
        onOpenChange={setOpen}
        variant="danger"
        title="Delete Resume"
        description="Are you sure you want to delete this resume? This action cannot be undone."
        confirmLabel="Delete"
        onConfirm={() => console.log('Deleted!')}
      />
    </>
  );
};

export const Danger: Story = {
  render: () => <DangerConfirm />,
};

const WarningConfirm = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="warning" onClick={() => setOpen(true)}>Reset Form</Button>
      <ConfirmDialog
        open={open}
        onOpenChange={setOpen}
        variant="warning"
        title="Reset Changes"
        description="This will discard all your unsaved changes. Are you sure?"
        confirmLabel="Reset"
        onConfirm={() => console.log('Reset!')}
      />
    </>
  );
};

export const Warning: Story = {
  render: () => <WarningConfirm />,
};

const SuccessConfirm = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="success" onClick={() => setOpen(true)}>Submit Application</Button>
      <ConfirmDialog
        open={open}
        onOpenChange={setOpen}
        variant="success"
        title="Submit Application"
        description="Your application is ready to submit. Would you like to proceed?"
        confirmLabel="Submit"
        onConfirm={() => console.log('Submitted!')}
      />
    </>
  );
};

export const Success: Story = {
  render: () => <SuccessConfirm />,
};

const DefaultConfirm = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Save Changes</Button>
      <ConfirmDialog
        open={open}
        onOpenChange={setOpen}
        variant="default"
        title="Save Changes"
        description="Would you like to save your changes before leaving?"
        confirmLabel="Save"
        onConfirm={() => console.log('Saved!')}
      />
    </>
  );
};

export const Default: Story = {
  render: () => <DefaultConfirm />,
};

const WithError = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="destructive" onClick={() => setOpen(true)}>Show Error</Button>
      <ConfirmDialog
        open={open}
        onOpenChange={setOpen}
        variant="danger"
        title="Delete Failed"
        description="There was an issue deleting this item."
        errorMessage="Error: Cannot delete item that has associated records. Please remove dependencies first."
        confirmLabel="Try Again"
        onConfirm={() => console.log('Retry!')}
      />
    </>
  );
};

export const WithErrorMessage: Story = {
  render: () => <WithError />,
};

const SingleButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Show Notice</Button>
      <ConfirmDialog
        open={open}
        onOpenChange={setOpen}
        variant="success"
        title="Success!"
        description="Your resume has been saved successfully."
        confirmLabel="OK"
        showCancelButton={false}
        onConfirm={() => console.log('Acknowledged!')}
      />
    </>
  );
};

export const SingleButtonOnly: Story = {
  render: () => <SingleButton />,
};

const CustomLabels = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Custom Labels</Button>
      <ConfirmDialog
        open={open}
        onOpenChange={setOpen}
        variant="default"
        title="Discard Draft?"
        description="You have unsaved changes that will be lost."
        confirmLabel="Yes, discard"
        cancelLabel="No, keep editing"
        onConfirm={() => console.log('Discarded!')}
        onCancel={() => console.log('Cancelled!')}
      />
    </>
  );
};

export const CustomLabelsExample: Story = {
  render: () => <CustomLabels />,
};

const AllVariants = () => {
  const [openDefault, setOpenDefault] = useState(false);
  const [openDanger, setOpenDanger] = useState(false);
  const [openWarning, setOpenWarning] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);

  return (
    <div className="flex gap-4">
      <Button onClick={() => setOpenDefault(true)}>Default</Button>
      <Button variant="destructive" onClick={() => setOpenDanger(true)}>Danger</Button>
      <Button variant="warning" onClick={() => setOpenWarning(true)}>Warning</Button>
      <Button variant="success" onClick={() => setOpenSuccess(true)}>Success</Button>

      <ConfirmDialog
        open={openDefault}
        onOpenChange={setOpenDefault}
        variant="default"
        title="Default Confirmation"
        description="This is the default variant."
        onConfirm={() => {}}
      />
      <ConfirmDialog
        open={openDanger}
        onOpenChange={setOpenDanger}
        variant="danger"
        title="Danger Confirmation"
        description="This is the danger variant."
        onConfirm={() => {}}
      />
      <ConfirmDialog
        open={openWarning}
        onOpenChange={setOpenWarning}
        variant="warning"
        title="Warning Confirmation"
        description="This is the warning variant."
        onConfirm={() => {}}
      />
      <ConfirmDialog
        open={openSuccess}
        onOpenChange={setOpenSuccess}
        variant="success"
        title="Success Confirmation"
        description="This is the success variant."
        onConfirm={() => {}}
      />
    </div>
  );
};

export const AllVariantsShowcase: Story = {
  render: () => <AllVariants />,
};
