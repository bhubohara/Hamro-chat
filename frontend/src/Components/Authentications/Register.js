import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, Show, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useToast } from '@chakra-ui/react'
import { BrowserRouter, useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import axios from 'axios';

const Register = () => {
    const [Show,setShow]=useState(false);
    const [name,setName]=useState();
    const [email, setEmail]=useState();

    const [confirmpassword,setConfirmPassword]=useState();
    const [password,setPassword]=useState();
    const [image,setImage]=useState();

    const [imgLoading,setLoading]=useState(false);
    const toast = useToast();
    const history = useHistory();

    const handleClick =()=> setShow(!Show);

  

    const postDetail =(image)=> { 
        setLoading(true);
        if (image===undefined){
            toast({
                title: 'please select an Image.',
            
                status: 'warning',
                duration: 9000,
                isClosable: true,
                position:'top-left',
              });
              return;
        }
        if (image.type==="image/jpeg" || image.type==="image/png"){
            const data = new FormData();
            data.append("file",image);
            data.append("upload_preset","Hamro_Chat");
            data.append("cloud_name","hamrochat");
            fetch("https://api.cloudinary.com/v1_1/hamrochat/image/upload",{
                method:"post",
                // mode: "no-cors",
                body:data,
            }).then((res)=>res.json())
            .then(data=>{
                setImage(data.url.toString());
               
                setLoading(false);
            })
            .catch((err)=>{
                console.log(err);
                setLoading(false);
            });
        }else{
            toast({
                title: 'Please select an Image.',
            
                status: 'warning',
                duration: 6000,
                isClosable: true,
                position:'top-left',
              });
              setLoading(false);
              return;

        }

    };

    const submitHandler=async()=>{
        setLoading(true);
        if( !name || !password || !confirmpassword){
            toast({
                title:"please fill all the field ",
                status:"warning",
                duration:6000,
                isClosable:true,
                position:"top-right"    
            });
            setLoading(false);
            return;
        }
        if (password !== confirmpassword){
            toast({
                title:"please enter same password ",
                status:"warning",
                duration:6000,
                isClosable:true,
                position:"top-right"
            });
            return;
        }
        try{
            const config  ={
                headers:{
                    "Content-type":"application/json",
                },
            };
            const {data } = await axios.post("/api/user/",{
                name,password,email,image
            },
            config
            
            );
            toast({
                title:"Registration Successful",
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

    
    isLoading={imgLoading}

    
    >
        Submit
    </Button>
      
      </VStack>
    
   
  )
}

export default Register
