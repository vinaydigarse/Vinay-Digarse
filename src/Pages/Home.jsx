"use client";
import {
  Avatar,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import arrow from "./Images/Vector.svg";
import img1 from "./Images/Image1.png";
import img3 from "./Images/Image3.jpg";
import img4 from "./Images/Image4.jpg";

import malini from "./Images/malini.jpg";
import archana from "./Images/archana.jpg";
import deepak from "./Images/deepak.jpg";

export default function Home() {
  return (
    <Box className="container" >
      <Container
        maxW={"7xl"}
        pl={16}
        pr={16}
        position={"relative"}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            width: "30%",
            backgroundColor: "#00487C",
            borderBottomLeftRadius: "100px",
          }}
        />
        <Stack
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: "column", md: "row" }}
        >
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              fontWeight={600}
              fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
            >
              <Text
                as={"span"}
                position={"relative"}
                fontFamily="body"
                _after={{
                  width: "full",
                  height: "30%",
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  zIndex: -1,
                }}
                color={"#1E1E1E"}
                fontSize="46px"
                fontWeight={600}
                lineHeight="30px"
                letterSpacing="-0.96px"
              >
                "Unlock your potential as a{" "}
                <span
                  style={{
                    color: "#00487C",
                    fontSize: "64px",
                    fontWeight: "600px",
                    lineHeight: "30px",
                    letterSpacing: "-0.96px",
                  }}
                >
                  Mentor
                </span>{" "}
                and empower others to thrive."
              </Text>
            </Heading>

            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: "column", sm: "row" }}
            >
              <Button
                rounded={"xl"}
                size={"lg"}
                fontWeight={"bold"}
                p={6}
                gap={6}
                color={"#fff"}
                bgColor={"#00487C"}
                _hover={"#043254"}
              >
                Get Started as a Mentor
                <img src={arrow} alt="" />
              </Button>
              <Button
                rounded={"xl"}
                size={"lg"}
                fontWeight={"bold"}
                p={6}
                gap={4}
                color={"#00487C"}
                bgColor={"#fff"}
                _hover={"#043254"}
                variant="outline"
                borderColor="#00A896"
              >
                Learn More
                <img src={arrow} alt="" />
              </Button>
            </Stack>
          </Stack>
          <Flex
            flex={1}
            justify={"center"}
            align={"center"}
            position={"relative"}
            w={"full"}
          >
            <Flex
              rounded={"xl"}
              width={"full"}
              margin={"auto"}
              textAlign={"center"}
              justifyContent={"center"}
            >
              <Image
                alt={"Image"}
                fit={"cover"}
                align={"center"}
                boxShadow={"2xl"}
                w={"70%"}
                h={"100%"}
                src={img1}
              />
            </Flex>
          </Flex>
        </Stack>
      </Container>

      <Stack
        p={16}
        gap={20}
        minH={"100vh"}
        bgColor={"#f5f5f5"}
        direction={{ base: "column", md: "row" }}
      >
        <Flex flex={1} align={"center"} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <Heading
              fontWeight={600}
              letterSpacing={1}
              color={"#292F36"}
              fontSize={{ base: "36px", md: "42px", lg: "48px" }}
            >
              At Mentor Hub
            </Heading>
            <Text
              fontSize={{ base: "md", lg: "20px" }}
              color={"#1E1E1E"}
              fontWeight={400}
              lineHeight={"30px"}
              letterSpacing={"0.20px"}
            >
              we believe in the power of mentorship. We provide a platform where
              passionate individuals like you can share your expertise and make
              a positive impact on others. Whether you're an experienced
              professional, an industry expert, or a seasoned entrepreneur,
              Mentor Hub offers you the opportunity to connect with mentees,
              guide them on their journey, and shape their future.
            </Text>
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <Button
                rounded={"xl"}
                size={"lg"}
                fontWeight={"bold"}
                p={6}
                gap={4}
                color={"#ffffff"}
                bgColor={"#00487C"}
                _hover={{ bgColor: "#00487C" }}
              >
                Learn More
                <Image src={arrow} />
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            pt={10}
            pb={10}
            borderTopRightRadius={"250px"}
            borderBottomLeftRadius={"100px"}
            alt={"Login Image"}
            objectFit={"cover"}
            src={img3}
          />
        </Flex>
      </Stack>

      <Box mt={10} p={16} textAlign={"center"}>
        <Heading
          className="heading"
          fontWeight={600}
          fontSize={{ base: "36px", md: "42px", lg: "48px" }}
          letterSpacing={1}
        >
          Explore Diverse Mentorship Areas
        </Heading>
        <SimpleGrid
          border={"0px"}
          mt={10}
          gap={20}
          columns={{ base: 1, md: 3 }}
        >
          {Items.map((item) => (
            <Box border={"0px"} className="text-heading">
              <Text
                mt={5}
                fontWeight={700}
                fontSize={"20px"}
                letterSpacing={"0.50px"}
                lineHeight={"30px"}
                color={"#00487C"}
              >
                {item.label}
              </Text>
              <Text
                fontSize={{ base: "16px", lg: "20px" }}
                color={"#1E1E1E"}
                fontWeight={400}
                lineHeight={"30px"}
                letterSpacing={"0.20px"}
                mt={4}
              >
                {item.text}
              </Text>

              <Button
                rounded={"xl"}
                size={"lg"}
                fontWeight={600}
                mt={4}
                p={6}
                gap={4}
                color={"#00487C"}
                variant={"link"}
              >
                Read More
                <Image src={arrow} />
              </Button>
            </Box>
          ))}
          <Stack></Stack>
        </SimpleGrid>

        <Button
          rounded={"xl"}
          size={"lg"}
          fontWeight={"bold"}
          p={6}
          gap={4}
          color={"#ffffff"}
          bgColor={"#00487C"}
          _hover={{ bgColor: "#00487C" }}
        >
          Find your Mentor
          <Image src={arrow} />
        </Button>
      </Box>

      <Box bgColor={"#f5f5f5"} p={16}>
        <Stack p={10} direction={{ base: "column", md: "row" }}>
          <Flex flex={1} gap={20}>
            <Image src={img4} borderRadius={60} />
          </Flex>
          <Flex p={8} flex={1} align={"center"} justify={"center"}>
            <Stack spacing={6} w={"full"} maxW={"lg"}>
              <Heading
                className="heading"
                fontWeight={600}
                fontSize={{ base: "36px", md: "42px", lg: "48px" }}
                letterSpacing={1}
              >
                Join Our Community of Mentors
              </Heading>
              <Text
                fontSize={{ base: "md", lg: "20px" }}
                color={"#1E1E1E"}
                fontWeight={400}
                lineHeight={"30px"}
                letterSpacing={"0.20px"}
              >
                Becoming a mentor on Mentor Hub is quick and easy. Follow these
                simple steps to get started.
              </Text>
              <Stack direction={{ base: "column", md: "row" }} spacing={4}>
                <Button
                  rounded={"xl"}
                  size={"lg"}
                  fontWeight={"bold"}
                  p={6}
                  gap={4}
                  color={"#ffffff"}
                  bgColor={"#00487C"}
                  _hover={{ bgColor: "#00487C" }}
                >
                  Learn More
                  <Image src={arrow} />
                </Button>
              </Stack>
            </Stack>
          </Flex>
        </Stack>

        <Box
          mt={20}
          p={16}
          bgColor={"#fff"}
          borderRadius={60}
          // padding={"50px 20px 100px 20px"}
        >
          <Heading
            className="heading"
            textAlign={"center"}
            fontWeight={600}
            fontSize={{ base: "36px", md: "42px", lg: "48px" }}
            letterSpacing={1}
            m={10}
          >
            Hear from Our Mentors
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} mt={24} mb={20} spacing={10}>
            <Feature
              avatar={<Avatar src={malini} />}
              name={"Malini Sindhu"}
              location={"Chennai, India"}
              text={`Being a mentor on Mentor Hub has been an incredibly rewarding experience. I've had the opportunity to share my knowledge and guide aspiring professionals in their career journeys.`}
            />
            <Feature
              avatar={<Avatar src={archana} />}
              name={"Archana Nair"}
              location={"Kerala, India"}
              text={`"Mentor Hub has exceeded my expectations. The platform's user-friendly design and comprehensive profile customization options have allowed me to showcase my expertise and build credibility with mentees”.`}
            />
            <Feature
              avatar={<Avatar src={deepak} />}
              name={"Deepak Dinesh"}
              location={"Chennai, India"}
              text={`"As a mentor on Mentor Hub, I've been able to connect with mentees from around the world, bridging geographical boundaries. The platform's robust search functionality and categorization have made it easy for mentees to find me based on their specific needs.”`}
            />
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
}

const Items = [
  {
    label: "Business and Entrepreneurship",
    text: "Dive into the world of business and entrepreneurship. Our mentors in this area can provide valuable insights on topics like business strategy, marketing, finance, startups, leadership, and innovation",
    href: "/",
  },
  {
    label: "Arts and Creativity",
    text: "Unleash your creative potential with our mentors in the arts and creativity. Whether you're passionate about visual arts, writing, music, photography, or performing arts, our mentors can provide you with the necessary guidance and inspiration.",
    href: "/",
  },
  {
    label: "Technology",
    text: "Enhance your skills in the ever-evolving field of technology. Our technology mentors can guide you in areas such as software development, web design, data science, cybersecurity, artificial intelligence, and more",
    href: "/",
  },
];

const Feature = ({ name, location, text, avatar }) => {
  return (
    <Stack>
      <Flex gap={4}>
        <Box
          w={16}
          h={16}
          gap={10}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          mb={1}
        >
          {avatar}
        </Box>
        <Box textAlign={"left"}>
          <Text
            color={"#00487C"}
            fontSize={"20px"}
            fontWeight={400}
            lineHeight={"30px"}
            letterSpacing={"0.20px"}
          >
            {name}
          </Text>
          <Text
            color={"#00A896"}
            fontSize={"16px"}
            fontWeight={400}
            lineHeight={"24px"}
            letterSpacing={"0.16px"}
          >
            {location}
          </Text>
        </Box>
      </Flex>
      <Text
        color={"#1E1E1E"}
        fontSize={"16px"}
        fontWeight={400}
        lineHeight={"24px"}
        letterSpacing={"0.16px"}
      >
        {text}
      </Text>
    </Stack>
  );
};
