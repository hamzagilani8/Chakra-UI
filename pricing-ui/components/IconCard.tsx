import React, { ElementType } from 'react'
import { Box, HStack, Icon, StackProps, Text } from "@chakra-ui/react"
import { shieldStarIcon, priceTagIcon, returnIcon } from "../Icons/Icons"

interface iconCardProps extends StackProps {
    icon: ElementType;
}

function FeaturesList(props: iconCardProps) {
    const { icon, children, ...rest } = props
    return (
        <HStack {...rest} spacing="24px">
            <Icon as={icon} boxSize="48px" />
            <Text textAlign="left" fontSize="18px" fontWeight="700">
                {children}
            </Text>
        </HStack>
    )
}

export const IconCard = () => {
    return (
        <Box maxWidth="1024px" m="auto" pt="60px" pb="32px">
        <HStack px="48px" spacing="20px">
            <FeaturesList icon={shieldStarIcon}>
                30 days money back Guarantee
            </FeaturesList>
            <FeaturesList icon={priceTagIcon}>
                No setup fees
                100% hassle-free
            </FeaturesList>
            <FeaturesList icon={returnIcon}>
                No monthly subscription
                Pay once and for all
            </FeaturesList>
        </HStack>
        </Box>
    )
}