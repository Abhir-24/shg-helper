import React from 'react'
import '../../App.css'
import Back from '../Back/Back'
import pic from '../../items/pic.jpg'
import { Typography,TextField,Button,Grid,Stack,Avatar,Table,TableBody,TableHead,TableCell,TableContainer,TableRow,Paper } from '@mui/material'

const SHG = () => {
  return (
    <div className='SHG-Registration'>
        <Back>
            <Typography textAlign='center'>
                If you want to access the services, please download the app by clicking here
                <span style={{marginLeft: 15}}></span>
                <Button variant="contained" color="success" size='small'>
                  User
                </Button>
            </Typography>
        </Back>

        <div className="reg-head">
            <Typography variant='h4'>SHG Registration</Typography>
        </div>

        <div className="member-border-3">
            <Stack direction='column' spacing={2}>
            <div className="member-border-4">
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Avatar 
                alt="The image" 
                src={pic} 
                style={{
                  width: 200,
                  height: 200,
                  marginTop: 5,
                  marginLeft: 30
                }} />
              </Grid> 
              <Grid item xs={6}>
              <TextField 
              className='reg-field' 
              size='small' 
              id="outlined-basic" 
              label="SHG Name" 
              placeholder='Enter SHG Name' 
              variant="outlined" 
              />
              <br /><br />
              <TextField 
              className='reg-field-small' 
              size='small' 
              id="outlined-basic" 
              label="State" 
              placeholder='Enter State' 
              variant="outlined" 
              />
              <span style={{marginLeft: 10}}></span> 
              <TextField 
              className='reg-field-small' 
              size='small' 
              id="outlined-basic" 
              label="District" 
              placeholder='Enter District' 
              variant="outlined" 
              />
              <span style={{marginLeft: 10}}></span>
              <TextField 
              className='reg-field-small' 
              size='small' 
              id="outlined-basic" 
              label="Block" 
              placeholder='Enter Block' 
              variant="outlined" 
              />
              <br /><br />
              <TextField 
              className='reg-field' 
              size='small' 
              id="outlined-basic" 
              label="Panchayat Name" 
              placeholder='Enter Panchayat Name' 
              variant="outlined" 
              />
              <br /><br />
              <TextField 
              className='reg-field' 
              size='small' 
              id="outlined-basic" 
              label="Village Name" 
              placeholder='Enter Village Name' 
              variant="outlined" 
              />
              <br /><br />
              <TextField 
              className='reg-field' 
              size='small' 
              id="outlined-basic" 
              label="Date of Fermentation" 
              placeholder='Enter Date of Fermentation' 
              variant="outlined" 
              />
              <br /><br />
              </Grid> 
            </Grid>
          </div>
          <br /><br />
          <Typography >Member Details</Typography>

          <div className="member-border-4">
            <TableContainer component={Paper}>
              <Table 
              sx={{ minWidth: 250 }} 
              size="small" 
              aria-label="a dense table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell><h4>User ID</h4></TableCell>
                    <TableCell align="right"><h4>Father/Husband Name</h4></TableCell>
                    <TableCell align="right"><h4>Designation</h4></TableCell>
                    <TableCell align="right"><h4>Social Category</h4></TableCell>
                    <TableCell align="right"><h4>Gender</h4></TableCell>
                    <TableCell align="center"><h4>Wallet No.</h4></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {/* Dynamic Rendering Eg: https://codesandbox.io/s/verjjb?file=/demo.tsx */}
                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell>User ID</TableCell>
                    <TableCell align="center">Kishan Kumar</TableCell>
                    <TableCell align="center">Professor</TableCell>
                    <TableCell align="center">Middle Class</TableCell>
                    <TableCell align="center">Male</TableCell>
                    <TableCell align="center">hjwdbdhfhdbs54sdbshcdsh</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>

            <Typography>
              SHG Past Details <span style={{marginLeft: 50}}>(An SHG must be formed six months before the official Registration)</span>
            </Typography>

            <Button 
            variant="contained" 
            color="success" 
            size='medium' 
            style={{width: 200, 
                  marginLeft: 350,
                  marginTop: 50}}>
                  Approve
            </Button>
          </Stack>
        </div>
    </div>
  )
}

export default SHG