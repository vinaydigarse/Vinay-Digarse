"use client";

import {
  Box,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from "../Pages/Images/logo.jpg";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box>
      <Container align={"center"} as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid templateColumns={"1fr 1fr 1fr"} spacing={8}>
          <Stack spacing={6}>
            <Image src={logo} w={100} h={50} />

            <Stack direction={"row"} spacing={6}>
              <SocialButton label={"Twitter"} href={"#"}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={"YouTube"} href={"#"}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={"Instagram"} href={"#"}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={"flex-start"}>
            <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
              Pages
            </Text>
            <Box as="a" href={"#"}>
              About us
            </Box>
            <Box as="a" href={"#"}>
              Mentors
            </Box>
            <Box as="a" href={"#"}>
              Sessions
            </Box>
            <Box as="a" href={"#"}>
              Sign Up
            </Box>
          </Stack>
          <Stack align={"flex-start"}>
            <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
              Connect
            </Text>
            <Box as="a" href={"#"}>
              <Text>123, Main Street</Text>
              <Text> City, State 123456</Text>
            </Box>
            <Box as="a" href={"#"}>
              connect@mentorhub.com
            </Box>
            <Box as="a" href={"#"}>
              98765-43210
            </Box>
          </Stack>
        </SimpleGrid>
        <Text mt={10}>© 2023 Mentor Hub. All rights reserved.</Text>
      </Container>
    </Box>
  );
}
