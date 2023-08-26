"use client";

import {
  Box,
  Flex,
  IconButton,
  Stack,
  Collapse,
  Popover,
  PopoverTrigger,
  useDisclosure,
  MenuList,
  MenuItem,
  Menu,
  MenuButton,
  Image,
} from "@chakra-ui/react";

import { GiHamburgerMenu } from "react-icons/gi";
import Signup from "../Pages/Signup";
import logo from "../Pages/Images/logo.jpg";
export default function WithSubnavigation() {
  const { isOpen } = useDisclosure();

  return (
    <Box>
      <Flex
        minH={"60px"}
        py={{ base: 4 }}
        px={{ base: 14 }}
        align={"center"}
        position="fixed"
        top={0}
        w="100%"
        zIndex={999}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <MobileNav />
        </Flex>
        <Flex
          flex={{ base: 2 }}
          justify={{ base: "space-between", md: "space-between" }}
        >
          <Flex>
            <Image src={logo} w={"80px"} h={"40px"} />
          </Flex>
          <Flex textAlign={"center"} display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
          >
            <Signup />
          </Stack>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  return (
    <Box>
      <Stack direction={"row"} spacing={4}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={"hover"} placement={"bottom-start"}>
              <PopoverTrigger>
                <Box
                  as="a"
                  p={2}
                  color={"#1e1e1e"}
                  href={navItem.href}
                  fontSize={"20px"}
                  fontWeight={600}
                  _hover={{
                    color: "#00487C",
                    textDecoration: "none",
                  }}
                >
                  {navItem.label}
                </Box>
              </PopoverTrigger>
            </Popover>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

const MobileNav = () => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<GiHamburgerMenu />}
        variant="outline"
      />
      <MenuList>
        {NAV_ITEMS.map((navItem) => (
          <MenuItem key={navItem.label}>{navItem.label}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/aboutUs",
  },
  {
    label: "Mentors",
    href: "/mentors",
  },
  {
    label: "Sessions",
    href: "/sessions",
  },
];
