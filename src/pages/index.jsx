import {
  Box,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link as ChakraLink
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import NextImage from "next/image";

import { seo, data } from "config";

const Projects = [
  { title: "Area-27", path: "/area27", color: "linear(to-l, #92c6f0, #3291df)", hover: "#3291df" },
  { title: "Area-47", path: "/area47", color: "linear(to-l, #bc55cf, #b000cf)", hover: "#b000cf"}
]

const Home = () => {
  const color = useColorModeValue("telegram.500", "telegram.400");

  const title = "Home";
  const description = seo.description;

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={seo.canonical}
        openGraph={{
          title,
          description,
          images: [
            {
              url: `${seo.canonical}favicon/android-chrome-512x512.png`,
              width: "350px",
              height: "350px",
              alt: "avatar bigheads",
            },
          ],
        }}
      />
      
      <Box display="flex" justifyContent="center" marginTop="30px">
        <NextImage src="/scpflogo.png" height="200" width="200"/>
      </Box>

      <Box display="flex" justifyContent="center" textAlign="center" flexDir="column">
        <Heading fontWeight="700">
          <Text as="span" color={color}>SCPF</Text>{" "}
          Hub
        </Heading>
        <Heading fontSize="2xl" fontWeight="600">
          Development Home for Bulk Games' SCPF</Heading>
      </Box>

      <Heading textAlign="center" marginTop="20px">Choose a project</Heading>

      <Box display="flex" justifyContent="center" textAlign="center" marginTop="20px" marginBottom="100px">

        {Projects.map((item, index) => (
          <ChakraLink href={item.path} _focus={{ outline: "none" }} key={index}>
            <Button bgGradient={item.color} color="white" mx="2" _hover={{ bg: `${item.hover}` }}>
              {item.title}
            </Button>
          </ChakraLink>
        ))}

      </Box>
    </>
  );
};

export default Home;
