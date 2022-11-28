import React from 'react'
import '../../App.css'
import Back from '../Back/Back'
import pic from '../../items/pic.jpg'
import check from '../../items/check.png'
import { Typography,Button,Stack,Avatar,Link} from '@mui/material'


const Success = () => {
  return (
    <div className='Success'>
      <Back>
            <Typography textAlign='center'>
                If you want to access the services, please download the app by clicking here
                <span style={{marginLeft: 15}}></span>
                <Button variant="contained" color="success" size='small'>
                  User
                </Button>
            </Typography>
        </Back>

        <div 
        className="member-border-5" 
        style={{textAlign: 'center'}}
        >
          <Stack direction='column' spacing={2}>
          <Typography>SHG ID: jkwanksvdjvfdbhvc</Typography>
          <Avatar 
          alt="The image" 
          src={pic} 
          style={{
                  width: 100,
                  height: 100,
                  marginLeft: 185
                }} />
          <br />
          <Typography>
          <Avatar 
          alt="The image" 
          src={check} 
          style={{
                  width: 70,
                  height: 70,
                  marginLeft: 200
                }} />
          <span>Congrats !</span>
          </Typography>
          <Typography>You have been Registered Successfully</Typography>
          </Stack>
        </div>

        <Typography marginLeft={85}>
          Click 
          <Link 
          href="#" 
          underline="always" 
          marginLeft={0.5} 
          marginRight={0.5} 
          target='_blank' 
          rel='noopener'
          >
            here
          </Link>
          to Login from Homepage
        </Typography>

    </div>
  )
}

export default Success