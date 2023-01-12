'use client';

import React from "react";
import { Flex, Box, Text, Heading, Button, HStack,  Icon, StackProps, Stack, Center } from "@chakra-ui/react";
import {checkIcon} from '../Icons/Icons'
export const ListItem = (props: StackProps) =>{
    const { children, ...rest } = props
    return(
        <HStack as="li" spacing="20px" {...rest}>
            <Icon as={checkIcon} w="22px" h="22px"/>
            <Text>{children}</Text>
        </HStack>
    )
}
export function MyCard() {
    return (
        <Center>
        <Box maxWidth="994px" mt="-256px" borderRadius="12px" overflow="hidden" boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)">
            <Flex>
                <Box color="#171923" bg="#F0EAFB" p="48px" textAlign="center">
                    <Text fontWeight="800" fontSize="24px">
                        Premium PRO
                    </Text>
                    <Heading fontWeight="800" fontSize="60px" mt="16px">
                        $400
                    </Heading>
                    <Text fontWeight="500" fontSize="18px" mt="8px">
                        billed just once
                    </Text>
                    <Button colorScheme="purple" size="lg" w="282px" mt="24px">
                        Get Started
                    </Button>
                </Box>
                <Box p="60px" fontSize="18px" bg="white">
                    <Text textAlign="left">
                        Access these features when you get this pricing package for your business.
                    </Text>
                    <Stack as="ul" spacing="20px" pt="24px">
                        <ListItem>International calling and messaging API</ListItem>
                        <ListItem>Additional phone numbers</ListItem>
                        <ListItem>Automated messages via Zapier</ListItem>
                        <ListItem>24/7 support and consulting</ListItem>
                    </Stack>

                </Box>
            </Flex>
        </Box>
        </Center>
    )
}