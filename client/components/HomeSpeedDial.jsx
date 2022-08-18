import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import FormControl from '@mui/material/FormControl';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormLabel from '@mui/material/FormLabel';
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import Switch from '@mui/material/Switch';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
// import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
// import SaveIcon from '@mui/icons-material/Save';
// import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import EventIcon from '@mui/icons-material/Event';


import CreateEvent from './CreateEvent';


const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  position: 'absolute',
  '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
    top: theme.spacing(2),
    left: theme.spacing(2),
  },
}));



export default function PlaygroundSpeedDial() {
  const [direction, setDirection] = React.useState('down');
  const [hidden, setHidden] = React.useState(false);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // const [profileOpen, setProfileOpen] = React.useState(false);
  // const handleProfileOpen = () => setProfileOpen(true);
  // const handleProfileClose = () => setProfileOpen(false);


  {/* <Profile profileOpen={profileOpen} setProfileOpen={setProfileOpen} handleProfileOpen={handleProfileOpen} handleProfileClose={handleProfileClose} /> */}

  {/* const [profileOpen, setProfileOpen] = React.useState(false);
const handleProfileOpen = () => setProfileOpen(true);
const handleProfileClose = () => setProfileOpen(false); */}


  const actions = [
    { icon: <EventIcon />, name: 'Add Event', handleClick: handleOpen }
    // { icon: <AccountCircleIcon />, name: 'Profile', handleClick: handleProfileOpen },
    // { icon: <SaveIcon />, name: 'Save' },
    // { icon: <PrintIcon />, name: 'Print' },
    // { icon: <ShareIcon />, name: 'Share', handleClick: handleOpen },
  ];

  return (
    <Box sx={{ transform: 'translateZ(0px)', flexGrow: 1 }}>
      <CreateEvent open={open} setOpen={setOpen} handleOpen={handleOpen} handleClose={handleClose} />

      <Box sx={{ position: 'relative', mt: 3, height: 320 }}>
        <StyledSpeedDial
          ariaLabel="SpeedDial playground example"
          hidden={hidden}
          icon={<SpeedDialIcon />}
          direction={direction}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={action.handleClick}
            />
          ))}
        </StyledSpeedDial>
      </Box>
    </Box>
  );
}
