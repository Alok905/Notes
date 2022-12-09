import { Button, Drawer } from '@mui/material';
import React from 'react';
import { useModalState } from '../../Misc/Custom-Hooks';
import DashboardBtn from './DashboardBtn';
import RecentNotesList from './RecentNotesList';
import CloseIcon from '@mui/icons-material/Close';
import Searchbar from './Searchbar';

const Dashboard = () => {
  const { isOpen, open, close } = useModalState();
  return (
    <div>
      <DashboardBtn open={open} />
      <Drawer
        open={isOpen}
        onClose={close}
        PaperProps={{
          sx: { width: '20em' }
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <h2 style={{ paddingRight: '50px' }}>Hey, Username</h2>
          <Button
            startIcon={<CloseIcon />}
            size="small"
            onClick={close}
            color="secondary"
          />
        </div>
        <Searchbar />
        <RecentNotesList />

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
