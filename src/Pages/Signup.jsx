import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Select,
  Stack,
  Text,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { RxAvatar } from "react-icons/rx";
import arrow from "./Images/Vector.svg";
const categories = [
  {
    id: 1,
    name: "Electronics",
    subcategories: ["Mobiles", "Laptops", "Accessories"],
  },
  { id: 2, name: "Clothing", subcategories: ["Men", "Women", "Kids"] },
  // Add more categories as needed
];

function Signup() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  const handleCategoryChange = (event) => {
    const categoryId = event.target.value;
    const selectedCat = categories.find(
      (cat) => cat.id === parseInt(categoryId)
    );
    setSelectedCategory(selectedCat);
    setSelectedSubcategory(null);
  };

  const handleSubcategoryChange = (event) => {
    const subcategory = event.target.value;
    setSelectedSubcategory(subcategory);
  };

  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<OverlayOne />);

  return (
    <Box>
      <Button
        color={"#00A896"}
        as={"a"}
        gap={2}
        p={4}
        size={"sm"}
        fontSize={"16px"}
        rounded={"xl"}
        fontWeight={600}
        letterSpacing={"0.20px"}
        bgColor={"#fff"}
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
      >
        <RxAvatar />
        Sign Up
      </Button>

      <Modal size={"4xl"}  isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalCloseButton />
          <ModalBody p={20}>
            <Text
              color={"#00487C"}
              fontSize={"20px"}
              fontWeight={400}
              lineHeight={"30px"}
              letterSpacing={"0.20px"}
            >
              Personal Information :
            </Text>

            <Stack mt={8} direction={{ base: "column", md: "row" }}>
              <Box
                border={"0px"}
                flex={1}
                // h={300}
                textAlign={"center"}
                w={150}
                alignItems={"center"}
                margin={"auto"}
                justifyContent={"center"}
              >
                <Image
                  borderRadius={"16px"}
                  h={"100%"}
                  alt={"Login Image"}
                  objectFit={"cover"}
                  src={
                    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
                  }
                />
                <Text
                  textAlign={"left"}
                  color={"#00487C"}
                  fontSize={"20px"}
                  fontWeight={400}
                  lineHeight={"30px"}
                  letterSpacing={"0.20px"}
                  mt={4}
                >
                  Upload Photo
                </Text>
              </Box>

              <Flex p={8} flex={1} align={"center"} justify={"center"}>
                <Stack spacing={4} w={"full"} maxW={"md"}>
                  <Input
                    placeholder="Full Name"
                    type="name"
                    border={"0.25px #00A896 solid"}
                    borderRadius={"10px"}
                  />

                  <Input
                    placeholder="Email"
                    type="email"
                    border={"0.25px #00A896 solid"}
                    borderRadius={"10px"}
                  />

                  <Input
                    placeholder="Phone Number"
                    type="number"
                    border={"0.25px #00A896 solid"}
                    borderRadius={"10px"}
                  />

                  <Input
                    placeholder="DOB"
                    type="date"
                    border={"0.25px #00A896 solid"}
                    borderRadius={"10px"}
                  />
                </Stack>
              </Flex>
            </Stack>

            <Box mt={8}>
              <Text
                color={"#00487C"}
                fontSize={"20px"}
                fontWeight={400}
                lineHeight={"30px"}
                letterSpacing={"0.20px"}
              >
                Areas of Expertise :
              </Text>

              <Flex mt={4} gap={10} p={8}>
                <Select
                  border={"0.25px #00A896 solid"}
                  borderRadius={"10px"}
                  onChange={handleCategoryChange}
                >
                  <option value={null}>Select Category....</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </Select>

                <Select
                  onChange={handleSubcategoryChange}
                  disabled={!selectedCategory}
                  border={"0.25px #00A896 solid"}
                  borderRadius={"10px"}
                >
                  <option value={null}>Subcategory...</option>
                  {selectedCategory &&
                    selectedCategory.subcategories.map((subcategory) => (
                      <option key={subcategory} value={subcategory}>
                        {subcategory}
                      </option>
                    ))}
                </Select>
              </Flex>
            </Box>

            <Box>
              <Text
                color={"#00487C"}
                fontSize={"20px"}
                fontWeight={400}
                lineHeight={"30px"}
                letterSpacing={"0.20px"}
              >
                Availability :
              </Text>

              <Flex gap={10}>
                <Box w={"50%"} p={8}>
                  <Select border={"0.25px #00A896 solid"} borderRadius={"10px"}>
                    <option>Available Days :</option>
                  </Select>
                </Box>
                <Box w={"50%"}></Box>
              </Flex>
            </Box>

            <Box>
              <Text
                color={"#00487C"}
                fontSize={"20px"}
                fontWeight={400}
                lineHeight={"30px"}
                letterSpacing={"0.20px"}
              >
                About Experience :
              </Text>
              <Textarea
                mt={8}
                h={200}
                border={"0.25px #00A896 solid"}
                borderRadius={"10px"}
              ></Textarea>
            </Box>
            <Box textAlign={"center"}>
              <Button
                mt={8}
                rounded={"xl"}
                size={"lg"}
                fontWeight={"bold"}
                p={6}
                gap={4}
                fontSize={"18px"}
                color={"#fff"}
                bgColor={"#00487C"}
                _hover={"#043254"}
              >
                Register
                <img src={arrow} alt="" />
              </Button>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default Signup;

// <Button
//   color={"#00A896"}
//   as={"a"}
//   gap={2}
//   p={4}
//   size={"sm"}
//   fontSize={"16px"}
//   rounded={"xl"}
//   fontWeight={600}
//   letterSpacing={"0.20px"}
//   bgColor={"#fff"}
// >
//   <RxAvatar />
//   Sign Up
// </Button>;

// ("use client");

// import {
//   Button,
//   Checkbox,
//   Flex,
//   Text,
//   FormControl,
//   FormLabel,
//   Heading,
//   Input,
//   Stack,
//   Image,
// } from '@chakra-ui/react'

// export default function SplitScreen() {
//   return (

//   )
// }
// {selectedCategory && <Box mt={4}></Box>}
// {selectedCategory.subcategories.map((subcategory) => (
//     <option key={subcategory} value={subcategory}>
//       {subcategory}
//     </option>
//   ))}
