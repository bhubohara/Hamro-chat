import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, Show, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const Register = () => {
    const [Show,setShow]=useState(false);
    const [name,setName]=useState();
    const [email, setEmail]=useState();

    const [confirmpassword,setConfirmPassword]=useState();
    const [password,setPassword]=useState();
    const [image,setImage]=useState();

const handleClick =()=> setShow(!Show);

    const postDetail =(image)=> { };

    const submitHandler =()=>{};
    
  return (
    
      <VStack spacing='7px'>
        <FormControl id='fname' isRequired>
            <FormLabel >
                Name
            </FormLabel>
                <Input 
                    placeholder='Enter your Name'
                    onChange={(e)=>setName(e.target.value)}>              
                </Input>
   </FormControl>

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

   <FormControl id='ConfirmPassword' isRequired>
            <FormLabel >
                Confirm Password
            </FormLabel>
            <InputGroup>
                <Input 
                type={Show ?"text":"password"}
                    placeholder='Confirm Password'
                    onChange={(e)=>setConfirmPassword(e.target.value)}>              
                </Input>
                <InputRightElement width={'10'}>
                <Button h={'8'} size={'sm'} onClick={handleClick}>

                    {Show ? "Hide":"Show"}
                </Button>
                
                </InputRightElement>
                </InputGroup>
   </FormControl>

   <FormControl id='Image' isRequired>
            <FormLabel >
               Upload Your Picture
            </FormLabel>
           
                <Input 
                type="file"
                 p={'1.5'}
                 accept="image/*"
                 onChange={(e)=> postDetail(e.target.files[0])}>              
                </Input>              
   </FormControl>
        
    <Button
    color={'blue'}
    width="50%"
    style={{marginTop:20}}
    onClick={submitHandler}

    
    >
        Submit
    </Button>
      
      </VStack>
   
  )
}

export default Register
