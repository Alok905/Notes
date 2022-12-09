import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';

const DashboardBtn = ({ open }) => {
  return (
    <>
      <Button
        variant="contained"
        startIcon={<MenuIcon />}
        onClick={open}
        style={{ width: '25em' }}
      >
        Dashboard
      </Button>
    </>
  );
};

export default DashboardBtn;
