import { useEffect, useState } from 'react'
import axios from 'axios'
import Loader from './components/Loader/Loader';
import Back from './components/Back/Back';
import pic from './items/pic.jpg'
import { Typography,Button,Grid,Stack,Avatar,Link} from '@mui/material'
import './App.css'

const Main = () => {
  // const [item,setItem]=useState(null)
  // const [loading,setLoading]=useState(false)

  // const apiCall = async() => {
  //   try {
  //     const data=await axios
  //     .get(`https://jsonplaceholder.typicode.com/posts/1/comments`)
  //     .then(res => {
  //       console.log(res.data[1].body)
  //       setItem(res.data[1].body)
  //     })
  //     setLoading(true)
  //   } catch(e) {
  //     console.log(e)
  //   }
  // }

  // useEffect(() => {
  //   apiCall()
  // },[])
  return (
    <div className='Main'>
      {/* {loading?item:<span className='loader'><Loader /></span> } */}
      <Back>
        <Typography textAlign='center'>
          If you want to access the services, please download the app by clicking here
          <span style={{marginLeft: 15}}></span>
          <Button 
          variant="contained" 
          color="success" 
          size='small'>
          User
          </Button>
        </Typography>
      </Back>

      <div className="sidebar">
        <Typography 
        className='home-head' 
        textTransform='capitalize' 
        variant='h3'>
          Yogdaan
        </Typography>

        <Typography marginTop={5} marginLeft={13}>
          <Link 
          className='side-btn' 
          style={{color: 'black'}} 
          href="#" 
          underline="none"
          target='_blank' 
          rel='noopener'>
            SHG 
          </Link>
        </Typography>

        <Typography marginTop={7} marginLeft={13}>
          <Link 
          className='side-btn' 
          style={{color: 'black'}} 
          href="#" 
          underline="none" 
          target='_blank' 
          rel='noopener'>
            Bank
          </Link>
        </Typography>
      </div>

      <div className="main">
      <Stack direction='column' spacing={2}>
        <div className="member-border-6" style={{'margin-right': '100px'}}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Avatar alt="The image" src={pic} style={{
                  width: 150,
                  height: 150,
                  marginTop: 5,
                  marginLeft: 30
                }} />
              </Grid> 
              <Grid item xs={8}>
                <br /><br />
                <Typography variant='h5'>
                  We helped out people to build clean toilets on the occasion of Clean India Day
                  </Typography>
                <br />
                <Typography align='right'>
                  Anta Baran, Rajasthan
                </Typography>
                <br />
                <Typography>
                  <Link 
                  className='side-btn' 
                  style={{color: 'black'}} 
                  href="#" 
                  underline="none" 
                  target='_blank' 
                  rel='noopener'>
                    Read More
                  </Link>
                </Typography>
              </Grid> 
            </Grid>
          </div>

          <div className="member-border-6" style={{'margin-right': '100px'}}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Avatar alt="The image" src={pic} style={{
                  width: 150,
                  height: 150,
                  marginTop: 5,
                  marginLeft: 30
                }} />
              </Grid> 
              <Grid item xs={8}>
                <br /><br />
                <Typography variant='h5'>
                  We helped out people to build clean toilets on the occasion of Clean India Day
                  </Typography>
                <br />
                <Typography align='right'>
                  Anta Baran, Rajasthan
                </Typography>
                <br />
                <Typography>
                  <Link 
                  className='side-btn' 
                  style={{color: 'black'}} 
                  href="#" 
                  underline="none" 
                  target='_blank' 
                  rel='noopener'>
                    Read More
                  </Link>
                </Typography>
              </Grid> 
            </Grid>
          </div>

          <div className="member-border-6" style={{'margin-right': '100px'}}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Avatar 
                alt="The image" 
                src={pic} 
                style={{
                  width: 150,
                  height: 150,
                  marginTop: 5,
                  marginLeft: 30
                }} />
              </Grid> 
              <Grid item xs={8}>
                <br /><br />
                <Typography variant='h5'>
                  We helped out people to build clean toilets on the occasion of Clean India Day
                  </Typography>
                <br />
                <Typography align='right'>
                  Anta Baran, Rajasthan
                </Typography>
                <br />
                <Typography>
                  <Link 
                  className='side-btn' 
                  style={{color: 'black'}} 
                  href="#" 
                  underline="none" 
                  target='_blank' 
                  rel='noopener'>
                    Read More
                  </Link>
                </Typography>
              </Grid> 
            </Grid>
          </div>
        </Stack>
      </div>
    </div>
  )
}

export default Main