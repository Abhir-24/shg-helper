import React from 'react'
import '../../App.css'
import Back from '../Back/Back'
import pic from '../../items/pic.jpg'
import { Typography,TextField,Button,ButtonGroup,Avatar } from '@mui/material'
import { Stack } from '@mui/system'
const Admin = () => {
  return (
    <div className='Admin'>
        <Back>
          <Stack marginLeft={145} direction="row" spacing={2}>
          <Typography align='right'>
            Admin ID
          </Typography>
          <Avatar alt="Remy Sharp" src={pic} />
          
          </Stack>
        </Back>
        <div className="admin-input">
          <TextField 
          className='id-field' 
          id="outlined-basic" 
          size='small' label="🔎Search By Id" 
          placeholder='Search' 
          variant="outlined" />
          <span className="text-space"></span>
          <ButtonGroup 
          size='normal' 
          variant="outlined" 
          aria-label="outlined button group">
            
          <Button className='btn-hvr'>User</Button>
          <Button>SHG</Button>
          <Button>Bank</Button>
          </ButtonGroup>
        </div>

    </div>
  )
}

export default Admin