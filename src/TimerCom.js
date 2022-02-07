import React, { useEffect, useState } from 'react';
import { Grid, Modal, Button, Typography, Box } from "@mui/material"
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
function TimerCom() {
  const [timer, setTimer] = useState(100)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    timer > 0 && setTimeout(() => setTimer(timer - 1), 1000)
  }, [timer])
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  return (<div>
    <Button
      variant='contained'
      color='secondary'
      onClick={handleOpen}
    >
      Click me
    </Button>
    <Modal
      open={open}
      onClose={handleClose}
    >
      <Box sx={style}>
        <Typography sx={{ color: "red", fontSize: 30, textAlign: "center" }}>
          Count: <span style={{color:"black",fontSize:35,fontWeight:"bold"}}>{timer}</span>
        </Typography>
      </Box>

    </Modal>
  </div>)
}

export default TimerCom;
