import React from 'react'
import '../../App.css'
import Back from '../Back/Back'
import pic from '../../items/pic.jpg'
import { Typography,TextField,Button,ButtonGroup,Grid,Stack,Avatar } from '@mui/material'

const SHG = () => {
  return (
    <div className='SHG'>
      <Back>
      <Stack 
      marginLeft={145} 
      direction="row" 
      spacing={2}
      >
        <Typography>
        <Typography align='right'>User ID</Typography>
        <Typography align='right'>SHG ID</Typography>
        </Typography>
        <Avatar alt="Remy Sharp" src={pic} />
      </Stack>
      </Back>

      <div className="shg-input options">
        <ButtonGroup 
        size='normal' 
        variant="outlined" 
        aria-label="outlined button group"
        >
          <Button>Add to Forum</Button>
          <Button>Approved</Button>
          <Button>Requests</Button>
          <Button>SHG Details</Button>
        </ButtonGroup>
      </div>

      <div className="shg-input">
      <Grid container spacing={2}>
        <Grid item xs={4}>   
        <div className="member-border">
          <Stack spacing={2}>
          <Typography variant='h6'>
            <span className='sih-members'>SIH Members</span>
            </Typography> 
          <Typography>SIH Members</Typography> 
          <Typography>SIH Members</Typography> 
          <Typography>SIH Members</Typography> 
          </Stack>
        </div>      
        </Grid>
        <Grid item xs={7}>
          <div className="member-border-2">
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Avatar 
                alt="The image" 
                src={pic} 
                style={{
                  width: 200,
                  height: 200,
                }} />
              </Grid> 
              <Grid item xs={8}>
              <Typography variant='h6'>
                <span className='sih-members'>User Details</span>
                </Typography> 
              <br /><br /><br /><br />
              <TextField 
              className='id-field' 
              id="outlined-basic" 
              label="Request Details Description" 
              placeholder='Enter Details' 
              variant="outlined" />
              <br /><br /><br />
              <TextField 
              className='id-field' 
              id="outlined-basic" 
              label="Added Document and Images" 
              placeholder='Enter Details' 
              variant="outlined" 
              />
              <div className="buttons">
                <Button variant="contained" color="success">
                  Approve
                </Button>
                <span style={{'margin': 'auto 25px'}}></span>
                <Button variant="contained" color="error">
                  Reject
                </Button>
              </div>
              </Grid> 
            </Grid>
          </div>
        </Grid>
      </Grid>
      </div>
    </div>
  )
}

export default SHG