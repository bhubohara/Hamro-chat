import { Button, Container, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const Login = () => {
    const [Show,setShow]=useState(false);

    const [email, setEmail]=useState();

   
    const [password,setPassword]=useState();
   

    const handleClick =()=> setShow(!Show);

   

    const submitHandler =()=>{};
    
  return (
    
      <VStack spacing='7px'>
    

   <FormControl id='email' isRequired>
            <FormLabel >
                Email
            </FormLabel>
                <Input 
                    placeholder='Enter your Email Address'
                    onChange={(e)=>setEmail(e.target.value)}>              
                </Input>
   </FormControl>

   <FormControl id='password' isRequired>
            <FormLabel >
                Password
            </FormLabel>
            <InputGroup>
                <Input 
                type={Show ?"text":"password"}
                    placeholder='Password'
                    onChange={(e)=>setPassword(e.target.value)}>              
                </Input>
                <InputRightElement width={'10'}>
                <Button h={'8'} size={'sm'} onClick={handleClick}>

                    {Show ? "Hide":"Show"}
                </Button>
                
                </InputRightElement>
                </InputGroup>
   </FormControl>

 
        
    <Button
    color={'blue'}
    width="50%"
    style={{marginTop:20}}
    onClick={submitHandler}

    
    >
        Login
    </Button>
    <Button 
    variant="solid"
    colorScheme='red'
    width="50%"
    onClick={()=>{
        setEmail("guest@example.com");
        setPassword("112233");
    }}
    
    >
        Guest User
    </Button>
      
      </VStack>
   
  )
}
export default Login
