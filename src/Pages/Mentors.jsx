import {
  Box,
  Flex,
  Image,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  Text,
} from "@chakra-ui/react";
import React from "react";
import image1 from "./Images/Photo (2).jpg";
import image2 from "./Images/Photo (3).jpg";
import image3 from "./Images/Photo (4).jpg";
import image4 from "./Images/Photo (5).jpg";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const Mentors = () => {
  return (
    <Box pt={20}>
      <Text
        textAlign={"center"}
        fontWeight={600}
        letterSpacing={1}
        color={"#292F36"}
        fontSize={{ base: "36px", md: "42px", lg: "48px" }}
      >
        Our Mentors
      </Text>

      <Box maxW="7xl" mx={"auto"} p={20}>
        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={{ base: 5, lg: 8 }}>
          {Mentor_Data.map((data) => (
            <Stat
              textAlign={"center"}
            >
              <Image w={"100%"} borderRadius={"3xl"} src={data.image} />

              <Box>
                <Text
                  mt={2}
                  fontWeight={400}
                  fontSize={"20px"}
                  color={"#00487c"}
                  lineHeight={"30px"}
                  letterSpacing={"0.20px"}
                  isTruncated
                >
                  {data.name}
                </Text>
                <Text
                  fontSize={"16px"}
                  fontWeight={400}
                  lineHeight={"24px"}
                  color={"#00A896"}
                  letterSpacing={"0.16px"}
                >
                  {data.position}
                </Text>
              </Box>
              <Flex gap={4} mt={6} justifyContent={"center"}>
                <FaFacebook cursor={"pointer"} />
                <FaTwitter cursor={"pointer"} />
                <FaLinkedin cursor={"pointer"} />
              </Flex>
            </Stat>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Mentors;

const Mentor_Data = [
  { image: `${image1}`, name: "Shalini", position: "Softwere Developer" },
  { image: `${image2}`, name: "Rekha Sekar", position: "Manager" },
  { image: `${image3}`, name: "Deepak", position: "UX Designer" },
  { image: `${image4}`, name: "naveen", position: "Architect" },
  { image: `${image4}`, name: "Naveen", position: "Tester" },
  { image: `${image3}`, name: "Deepak", position: "Developer" },
  { image: `${image2}`, name: "Shalini", position: "Content Writer" },
  { image: `${image1}`, name: "Rekha Sekar", position: "Analist" },
];
