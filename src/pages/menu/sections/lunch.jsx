import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { LunchModal } from "../components/MenuModals/LunchModal";
import { client, urlFor } from "../../../client";
import {
  Box,
  Wrap,
  WrapItem,
  Card,
  VStack,
  Text,
  Image,
  Divider,
  Flex,
  HStack,
  Button,
  useBreakpointValue,
  Icon,
  Skeleton,
} from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";

function Lunch({ activeTab }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLunch, setSelectedLunch] = useState(null);
  const [lunch, setLunch] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const lunch = await client.fetch(
          `*[_type == "lunch"]{
            _id,
            price,
            name,
            slug,
            description,
            rating, 
            people,
            image {
              asset -> {
                url
              }
            }
          }`
        );
        setLunch(lunch);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching breakfast data:", error);
        setIsLoading(false);
      }
    };
    getProducts();
  }, []);

  const cardWidth = useBreakpointValue({
    base: "20rem",
    md: "calc((90% - 2rem) / 2)",
    lg: "calc((90% - 10rem) / 3)",
  });

  const imageWidth = useBreakpointValue({
    base: "70%",
    md: "90%",
    lg: "80%",
  });

  const fSize = useBreakpointValue({
    base: "25px",
    md: "12px",
    lg: "18px",
  });

  const buttonWidth = useBreakpointValue({
    base: "100px",
    md: "100px",
    lg: "110px",
  });

  const openModal = (lunch) => {
    setSelectedLunch(lunch);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Box padding="0 7rem">
     
      <Wrap spacing="5rem" justify="center">
        {isLoading
          ? 
            Array.from({ length: 6 }).map((_, index) => (
              <WrapItem key={`skeleton-${index}`} width={cardWidth}>
                <Card
                  zIndex={2}
                  w="18rem"
                  h="25rem"
                  boxShadow="2xl"
                  borderRadius="30px"
                  marginTop="50px"
                  overflow="visible"
                  display="flex"
                  flexDirection="column"
                  cursor="pointer"
                  _hover={{ transform: "scale(1.05)" }}
                  transition={{ duration: 10 }}
                >
                  <Flex
                    flexDir="column"
                    h="100%"
                    justifyContent="space-between"
                  >
                    <VStack
                      w="100%"
                      p="1rem"
                      justify="center"
                      flex={1}
                      spacing={4}
                      align="center"
                      marginBottom="-5rem"
                    >
                      <Skeleton w={imageWidth} h="70%" my="3rem" />

                      <Skeleton w="80%" h="1.5rem" />

                      <Skeleton w="60%" h="1rem" />
                      <Skeleton w="80%" h="1rem" />

                      <Divider
                        w="16.5rem"
                        mt="4"
                        borderWidth="1.5px"
                        borderRadius="1rem"
                        alignItems="center"
                      />
                    </VStack>
                    <HStack
                      p="2rem"
                      justifyContent="space-around"
                      align="center"
                    >
                      <Skeleton w={fSize} h="1rem" />

                      <Divider orientation="vertical" h="50px" />

                      <Skeleton w={buttonWidth} h="2rem" />
                    </HStack>
                  </Flex>
                </Card>
              </WrapItem>
            ))
          : 
            lunch.map((item) => (
              <WrapItem key={item.slug.current} width={cardWidth}>
                <Card
                  zIndex={2}
                  w="18rem"
                  h="25rem"
                  boxShadow="2xl"
                  borderRadius="30px"
                  marginTop="50px"
                  overflow="visible"
                  display="flex"
                  flexDirection="column"
                  cursor="pointer"
                  _hover={{ transform: "scale(1.05)" }}
                  transition={{ duration: 10 }}
                >
                  <Flex
                    flexDir="column"
                    h="100%"
                    justifyContent="space-between"
                  >
                    <VStack
                      w="100%"
                      p="1rem"
                      justify="center"
                      flex={1}
                      spacing={4}
                      align="center"
                      marginBottom="-5rem"
                    >
                      <Image
                        position="absolute"
                        src={urlFor(item.image).url()}
                        w={imageWidth}
                        h="70%"
                        top="3rem"
                        left="50%"
                        transform="translate(-50%, -50%)"
                        filter="drop-shadow(1px 1px 16px rgba(0, 0, 0, .3))"
                      />
                      <Box mt="8rem">
                        <Text
                          textAlign="center"
                          fontSize="20px"
                          fontWeight="bold"
                        >
                          {item.name}
                        </Text>
                      </Box>
                      <HStack>
                        <Icon as={AiFillStar} color="#FFC700" fontSize="22px" />
                        <Text fontSize="12px">{item.rating}</Text>
                        <Text fontSize="12px">( {item.people} )</Text>
                      </HStack>
                      <Divider
                        w="16.5rem"
                        mt="4"
                        borderWidth="1.5px"
                        borderRadius="1rem"
                        alignItems="center"
                      />
                    </VStack>
                    <HStack
                      p="2rem"
                      justifyContent="space-around"
                      align="center"
                    >
                      <Text fontSize={fSize} fontWeight="bold">
                        ₱ {item.price}.00
                      </Text>
                      <Divider orientation="vertical" h="50px" />
                      <Button
                        w={buttonWidth}
                        bg="#FFC700"
                        fontWeight="medium"
                        _hover={{ opacity: 0.8 }}
                        onClick={() => openModal(item, item.image)}
                        cursor={"pointer"}
                        fontSize="12px"
                      >
                        Add to Cart
                      </Button>
                    </HStack>
                  </Flex>
                </Card>
              </WrapItem>
            ))}
      </Wrap>
      {isModalOpen && activeTab === "Lunch" && (
        <LunchModal onClose={closeModal} lunch={selectedLunch} />
      )}
    </Box>
  );
}

Lunch.propTypes = {
  activeTab: PropTypes.string.isRequired,
};

export default Lunch;
