import {
    Box,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link as ChakraLink
  } from "@chakra-ui/react";
  import { NextSeo } from "next-seo";
  import { getAllFilesFrontMatter } from "@/lib/posts";

  import { seo } from "config";
  

  function bgColor(text) {
    if (text === "Live") {
      return("#08c738")
    }else if (text === "Not Started") {
      return("#ba2f3c")
    }else if (text === "In Progress") {
      return("#b7c92c")
    }
  }

  const Area27 = ({ posts }) => {

    const title = "Area-27";
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
                url: `${seo.canonical}safari-pinned-tab.svg`,
                width: "350px",
                height: "350px",
                alt: "avatar bigheads",
              },
            ],
          }}
        />

        {posts.map((value, _) => (
            <>
                <Heading marginTop="20px" fontSize="3xl" marginLeft="20px" key={value.title}>{value.title}</Heading>
                {value.data.map((obj, _) => (

                    <Box 
                    key={obj.name}
                    display="flex"
                    flexDirection="row"
                    marginLeft="40px"
                    marginTop="20px"
                    marginBottom="20px"
                    paddingLeft="20px"
                    paddingRight="20px"
                    paddingTop="10px"
                    paddingBottom="10px"
                    borderRadius="5px"
                    borderWidth="2px"
                    boxShadow="lg">
                        <Box width="73%">
                          <Heading fontSize="2xl">{obj.name}</Heading>
                          <Text width="70%">{obj.description}</Text>
                        </Box>
                        <Box bg={bgColor(obj.status)} borderRadius="10px" width="20%" height="10%" mb="40px" mt="40px">
                          <Text textAlign="center" pb="2px" pt="2px">{obj.status}</Text>
                        </Box>
                    </Box>
                ))}
            </>
        ))}

      </>
    );
  };
  
  export async function getStaticProps() {
    const posts = await getAllFilesFrontMatter("roadmap/a27");
  
    return { props: { posts } };
  }

  export default Area27;
  