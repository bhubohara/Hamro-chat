import React from "react";
import { Box, Container, Tab, TabPanel, TabPanels,Tabs,TabList,  Text } from'@chakra-ui/react';
import Login from "../Components/Authentications/Login";
import Register from "../Components/Authentications/Register";

const Home =()=>{
    return(

        <Container maxW= 'xl' centerContent>
            <Box
            d="flex"
            justifyContent="center"
            p={3}
            bg={"blue.100"}
            w="100%"
            m="50px 0 15px 0"
            borderRadius="md"
            borderWidth="2px"

            >
                <Text fontSize="5xl" fontFamily={"heading"} justifyContent={"center"} textAlign={"center"} >
                    Hamro Chat
                    
                    </Text>
            </Box>

            <Box  d="flex"
            justifyContent="center"
            p={3}
            bg={"blue.100"}
            w="100%"
            m="10px 0 10px 0"
            borderRadius="md"
            borderWidth="2px" >
                    <Tabs variant='soft-rounded' colorScheme='green'>
                    <TabList>
                        <Tab width="50%">Login</Tab>
                        <Tab width="50%">Sign Up</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                      <Login/>
                        </TabPanel>
                        <TabPanel>
                       <Register/>
                        </TabPanel>
                    </TabPanels>
                    </Tabs>
       
            </Box>
        
       
        
        </Container>
    )
}

export default Home