import { Button, Drawer, List, ListItem } from '@mui/material';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { useModalState } from '../../Misc/Custom-Hooks';

const Dashboard = () => {
  const { isOpen, open, close } = useModalState();
  return (
    <div>
      <Button
        variant="contained"
        startIcon={<MenuIcon />}
        onClick={open}
        style={{ width: '25em' }}
      >
        Dashboard
      </Button>
      <Drawer
        open={isOpen}
        onClose={close}
        PaperProps={{
          sx: { width: '20em' }
        }}
      >
        <h2 style={{ paddingRight: '50px' }}>Dashboard</h2>
        <Drawer />
        <p>Hey, Username</p>
        <div
          style={{
            padding: 'auto'
          }}
        >
          <h3>List Of Notes</h3>
          <List
            sx={{
              width: '100%',
              maxWidth: 360,
              bgcolor: 'background.paper',
              position: 'relative',
              overflow: 'auto',
              maxHeight: 320
            }}
          >
            <ListItem>ListItem-1</ListItem>
            <ListItem>ListItem-2</ListItem>
            <ListItem>ListItem-3</ListItem>
            <ListItem>ListItem-4</ListItem>
            <ListItem>ListItem-5</ListItem>
            <ListItem>ListItem-6</ListItem>
            <ListItem>ListItem-7</ListItem>
            <ListItem>ListItem-9</ListItem>
            <ListItem>ListItem-10</ListItem>
            <ListItem>ListItem-11</ListItem>
            <ListItem>ListItem-12</ListItem>
            <ListItem>ListItem-13</ListItem>
            <ListItem>ListItem-14</ListItem>
            <ListItem>ListItem-15</ListItem>
          </List>
        </div>
        <Button
          onClick={close}
          variant="outlined"
          style={{
            bottom: -2,
            margin: '20px',
            position: 'fixed',
            width: '20em'
          }}
        >
          Close
        </Button>
      </Drawer>
    </div>
  );
};

export default Dashboard;
