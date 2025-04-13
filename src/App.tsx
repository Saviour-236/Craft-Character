import { useState } from 'react';
import './App.css'
import { Card ,Button ,Drawer } from '@mui/material';


function App() {
  const [open, setOpen] = useState(false); // state to control drawer

  return (
    <>
      <Button loading={true} onClick={() => setOpen(true)}>Open Drawer</Button>
      <Drawer anchor="top" open={open} onClose={() => setOpen(false)}>
        <div style={{ width: 250, padding: 20 }}>Hello from Drawer</div>
      </Drawer>
    </>
  );
}


export default App
