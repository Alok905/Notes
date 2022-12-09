import React from 'react';
import { List, ListItem } from '@mui/material';

const RecentNotesList = () => {
  return (
    <div
      style={{
        alignItems: 'center'
      }}
    >
      <h3>List Of Notes</h3>
      <List
        sx={{
          width: '100%',
          maxWidth: 360,
          bgcolor: 'rgb(250, 250, 250)',
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
  );
};

export default RecentNotesList;
