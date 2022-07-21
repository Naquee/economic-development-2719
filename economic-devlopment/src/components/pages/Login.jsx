import React from 'react'
import { Input,Stack ,Button} from '@chakra-ui/react'

const Login = () => {
  return (
    <div style={{width:'50%',
    margin:'auto',
    marginTop:"6rem"
    }}>
    <p style={{fontSize:"13px"}}>LOGIN OR CREATE ACCOUNT</p>
    
    <span style={{fontSize:"13px"}}>Email address</span>
    <br />
    <Stack style={{width:"50%",margin:"auto",border:'black',height:"2rem"}} spacing={3}>
    
  <Input size='md' />
</Stack>
<br />

<Button
  size='md'
  height='2rem'
  width='50%'
  border='1px'
//   borderColor='blsck.'
  color="white"
  background='black'
>
  Continue
</Button>

    </div>
  )
}

export default Login