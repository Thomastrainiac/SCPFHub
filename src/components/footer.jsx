import { Box, Button, Icon, Link as ChakraLink, Text } from "@chakra-ui/react";
import { Image } from "next/image"
import { FaTwitter, FaDiscord } from "react-icons/fa";
import { SiRoblox } from "react-icons/si";

import { MAX_WIDTH } from "config";

// Fell free to add your social media accounts!
const socialAccounts = [
  { icon: FaTwitter, path: "https://Twitter.com/BulkGames", title: "Twitter" },
  { icon: FaDiscord, path: "https://discord.gg/scpf", title: "Discord" },
  { icon: SiRoblox, path: "https://www.roblox.com/groups/2760782/Special-Containment-Procedures-Foundation-SCPF#!/about", title: "Roblox" }
];

const Footer = () => {
  return (
    <Box as="footer">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDir="column"
        textAlign="center"
        minH="4rem"
        px={[4, 6, 10, 14, 20]}
        maxW={MAX_WIDTH}
        mx="auto"
      >
        <Box py="2">
          {socialAccounts.map((item, index) => (
            <ChakraLink
              href={item.path}
              aria-label={item.title}
              mx="2"
              _focus={{ outline: "none" }}
              key={index}
              isExternal
            >
              <Button aria-label={item.title}>
                <Icon as={item.icon} w="6" h="6" />
              </Button>
            </ChakraLink>
          ))}
        </Box>
        <Box py="2">
          <Text>
            Built with{" "}
            <span role="img" aria-label="red heart">
              ❤️
            </span>
          </Text>
        </Box>
        <Text marginBottom={"20px"} fontWeight={"600"}>
          Created by: Aaron Long
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
