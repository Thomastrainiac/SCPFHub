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

  import { seo, data } from "config";
  
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
                url: `${seo.canonical}bighead.svg`,
                width: "350px",
                height: "350px",
                alt: "avatar bigheads",
              },
            ],
          }}
        />

        {/* <Box borderRadius="10px" borderWidth="1px">
          <Text>asd</Text>
        </Box> */}

        {posts.map((value, _) => (
            <>
                <Heading marginTop="20px" fontSize="3xl" marginLeft="20px" key={value.title}>{value.title}</Heading>
                {value.data.map((obj, _) => (

                    <Box
                    key={obj.name}
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
                        <Heading fontSize="2xl">{obj.name}</Heading>
                        <Text width="70%">{obj.description}</Text>
                        <Box bg="#08c738">
                            {obj.staus}
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
  