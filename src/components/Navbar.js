import { Box,  Flex } from '@chakra-ui/react'
import React from 'react'
import logo from  "./img/FL-LOgo.png"

function Navbar() {
  return (
    


    <Flex as="nav" height="80px" width="100%" pt="50px" pb="0px" position="sticky" alignItems="center"  display="flex" bg="black" justify="space-between">
      <Box as="a" href="/#"><img src={logo} width="50" height="40"alt="First Love Church" id="logo" data-height-percentage="54" data-actual-width="1349" data-actual-height="1011.75"/></Box>
         
           <Box as="a" href="\salvation.html" h="50px" color="white">JESUS</Box>
           <Box as="a" href="#whoweare" h="50px" color="white">WHO WE ARE</Box>
           <Box as="a" href="\channel.html" h="50px" color="white">GLOBAL</Box>
           <Box as="a" href="\ministries.html" h="50px" color="white">GET INVOLVED</Box>
           <Box as="a" href="#giving" h="50px" color="white">GIVING</Box>
           <Box as="a" href="#events" h="50px" color="white">EVENTS</Box>
           <Box as="a" href="\music.html" h="50px" color="white">MUSIC</Box>
           <Box as="a" href="\eng.html" h="50px" color="white">BOOKS</Box>
           <Box as="a" href="\salvation.html" h="50px" color="white">OUR STORIES</Box>
           <Box as="a" href="\salvation.html" h="50px" color="white">CONNECT</Box>
           <Box as="a" href="\salvation.html" h="50px" color="white">LOCATION</Box>
         
           
     
      

    </Flex>

    
    
  )
}

export default Navbar
