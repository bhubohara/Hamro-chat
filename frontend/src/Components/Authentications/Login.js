import { Button, Container, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useToast } from '@chakra-ui/react'
import { BrowserRouter, useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import axios from 'axios';

const Login = () => {
    const [Show,setShow]=useState(false);

    const [email, setEmail]=useState();

   
    const [password,setPassword]=useState();
   
    const [loding,setLoading]=useState(false);
    const toast= useToast();
    const history= useHistory();
    const handleClick =()=> setShow(!Show);

   

    const submitHandler =async()=>{

        setLoading(true);
        if( !email || !password ){
            toast({
                title:"please fill the field ",
                status:"warning",
                duration:6000,
                isClosable:true,
                position:"top-right"    
            });
            setLoading(false);
            return;
        }
       
        try{
            const config  ={
                headers:{
                    "Content-type":"application/json",
                },
            };
            const {data } = await axios.post("/api/user/login",{
                email,password
            },
            config
            
            );
            toast({
                title:"Login Successful",
                status:"success",
                duration:6000,
                isClosable:true,
                position:"top-right"
            });
            localStorage.setItem("userInfo",JSON.stringify(data));
            setLoading(false);
            history.pushState('/chat')

        }catch (error){
            toast({
                title:"Error !",
                description:error.response.data.message,
                status:"error",
                duration:6000,
                isClosable:true,
                position:"top-right"

        });
        setLoading(false);
    }


    };
    
  return (
    
      <VStack spacing='7px'>
    

   <FormControl id='email' isRequired>
            <FormLabel >
                Email
            </FormLabel>
                <Input 
                    placeholder='Enter your Email Address'
                    value={email}
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
                    value={password}
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
    isLoading={loding}

    
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
