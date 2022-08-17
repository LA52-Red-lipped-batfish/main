import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'max-content',
  height: 'max-content',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const CreateEvent = ({ open, setOpen, handleOpen, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <form action='http://localhost:8080/api' method='post'>
          <div className=' border border-dark p-3 mt-5' style={{ width: '400px' }}>
            <div className='d-flex justify-content-start flex-column'>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Event Name</label>
                <input type="text" name='event' className="form-control" id="exampleFormControlInput1" placeholder="event name" />
                <label htmlFor="exampleFormControlInput1" className="form-label">Location</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="location" />
                <label htmlFor="exampleFormControlInput1" className="form-label">Date</label>
                <input className='form-control' type="date" name="date" id="" />
                <label htmlFor="exampleFormControlInput1" className="form-label">Time</label>
                <input className='form-control' type="time" name="" id="" />
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" name='email' className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />

              </div>

              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1 " className="form-label mt-3">Description</label>
                <textarea name='description' className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                <div className='d-flex justify-content-center'>
                  <button className='btn btn-lg btn-primary mt-3' type="submit">SUBMIT</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </Box>

    </Modal>
  );
};

export default CreateEvent;