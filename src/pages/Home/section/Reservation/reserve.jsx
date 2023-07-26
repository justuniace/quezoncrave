import Title from "../../../components/Titles";
import Confirm from "./confirmModal";

import {
  Stack,
  Center,
  Box,
  VStack,
  Text,
  HStack,
  useMediaQuery,
  Input,
  Button,
  Select,
  Flex
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import emailjs from "@emailjs/browser";
import breakPoints from "../../../theme/breakpoints";
import DatePicker from "react-datepicker";
import { useState, useEffect } from "react";
import { startOfToday } from "date-fns";
import { useToast } from "@chakra-ui/react";
import B1 from "../../../../assets/explore/explore.webp";
import "react-datepicker/dist/react-datepicker.css";

export default function Reserve() {
  const [isMobile] = useMediaQuery("(max-width: 767px)");
  //const [isTablet] = useMediaQuery("(max-width: 1023px)");

  const [emailSent, setEmailSent] = useState(false);
  const toast = useToast();
  const [startDate, setStartDate] = useState(null);
  const selectedDate = startDate ? startDate.toLocaleDateString() : "";
  const selectedTime = startDate ? startDate.toLocaleTimeString() : "";
  const [name, setName] = useState("");
  const [people, setPeople] = useState("");
  const [contact, setContact] = useState("");
  const [place, setPlace] = useState("");

  const handleConfirm = async () => {
     if (
       !name ||
       !people ||
       !selectedDate ||
       !selectedTime ||
       !contact ||
       !place
     ) {
       toast({
         position: "bottom",
         title: "Missing Fields!",
         description: "Please fill in all fields.",
         status: "error",
         duration: 1000,
         isClosable: true,
       });
       return;
     }
    const currentDate = new Date().toLocaleString();
    const templateParams = {
      currentDate: currentDate,
      name: name,
      contact: contact,
      selectedDate: selectedDate,
      selectedTime: selectedTime,
      people: people,
      place: place,
    };

    console.log("Sending email with the following data:");
    console.log(templateParams);

    try {
      const response = await emailjs.send(
        "service_v6593j8",
        "template_eaaab2b",
        templateParams,
        "_ltPXDqn6F8xD4gum"
      );
      console.log(response);
      console.log("data from response ", JSON.stringify(response));

      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast({
        title: "Reservation sent.",
        description: "Send Successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "bottom",
      });
      setContact("");
      setPeople("");
      setPlace("");
      setName("");
      setStartDate(null);

      setEmailSent(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("emailSent state:", emailSent);
    if (emailSent) {
     
      console.log("Opening Confirm modal...");
      
    }
  }, [emailSent]);

  const filterPastAndTodayDates = (date) => {
    const today = startOfToday();
    return date > today;
  };

 

  const customDatePickerInputStyles = {
    borderRadius: "5px",
    
  };

  return (
    <>
      <Box
        // mt="10rem"
        // color="black"

        w="100%"
        //h="25rem"
        position="relative"
        backgroundImage={B1}
      >
        <VStack>
          <Box ml={isMobile ? "2rem" : ""}>
            <Title
              fontSize={isMobile ? "20px" : "25px"}
              title="Reserve A Table"
            />
          </Box>

          <Center
            w={breakPoints}
            margin={isMobile ? "2rem 0" : "5rem"}
            flexDir="column"
          >
            <Box
              bg="gray.100"
              ml={isMobile ? "2rem" : ""}
              borderRadius="25px"
              h={isMobile ? "20rem" : "32rem"}
              w={isMobile ? "20rem" : "50rem"}
              boxShadow="2xl"
              _hover={{ transform: "scale(1.05)" }}
              transition={{ duration: 10 }}
            >
              <Center>
                <Stack direction={{ base: "row", md: "row" }}>
                  <VStack>
                    <Text
                      align="center"
                      mt={isMobile ? "1rem" : "2.5rem"}
                      fontSize={isMobile ? "15px" : "20px"}
                      fontWeight="medium"
                    >
                      Opening Hours
                    </Text>
                    <HStack
                      fontSize={isMobile ? "12px" : "17px"}
                      fontWeight="light"
                      mt={isMobile ? "0.5rem" : "3rem"}
                      spacing={isMobile ? "5rem" : "15rem"}
                      align="start"
                    >
                      <Text>Weekdays</Text>
                      <Text> 9:00am - 9:00pm</Text>
                    </HStack>
                    <HStack
                      mt={isMobile ? "0.5rem" : "1rem"}
                      fontSize={isMobile ? "12px" : "17px"}
                      fontWeight="light"
                      spacing={isMobile ? "5rem" : "15rem"}
                      align="start"
                    >
                      <Text>Weekends</Text>
                      <Text> 10:00am - 8:00pm</Text>
                    </HStack>
                    <Stack direction={isMobile ? "row" : "column"}>
                      <Box w="100%">
                        <VStack align="start" spacing="1rem">
                          <HStack
                            mt="3rem"
                            spacing={isMobile ? "1rem" : "2rem"}
                          >
                            <Input
                              w="100%"
                              bg="white"
                              type="text"
                              placeholder="Name"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                            />
                            <Input
                              w="100%"
                              bg="white"
                              type="text"
                              placeholder="Contact Number"
                              value={contact}
                              onChange={(e) => setContact(e.target.value)}
                            />
                          </HStack>
                          <HStack
                            justifyContent="space-around"
                            spacing={isMobile ? "1rem" : "2rem"}
                          >
                            <div
                              style={{
                                position: "relative",
                              }}
                            >
                              <DatePicker
                                customInput={
                                  <Input
                                    w="100%"
                                    bg="white"
                                    style={customDatePickerInputStyles}
                                  />
                                }
                                className="custom-date-picker"
                                showIcon
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                fixedHeight
                                filterDate={filterPastAndTodayDates}
                                placeholderText="Date"
                              />
                            </div>
                            <div
                              style={{
                                position: "relative",
                              }}
                            >
                              <DatePicker
                                customInput={
                                  <Input
                                    w="100%"
                                    bg="white"
                                    style={customDatePickerInputStyles}
                                  />
                                }
                                className="custom-date-picker"
                                showIcon
                                fixedHeight
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                showTimeSelect
                                showTimeSelectOnly
                                timeIntervals={15}
                                timeCaption="Time"
                                dateFormat="h:mm aa"
                                placeholderText="Time"
                              />
                            </div>
                          </HStack>
                          <Flex
                            w="100%"
                            justifyContent={
                              isMobile ? "center" : "space-between"
                            }
                          >
                            <Input
                              w={isMobile ? "100%" : "16rem"}
                              bg="white"
                              type="text"
                              placeholder="People"
                              value={people}
                              onChange={(e) => setPeople(e.target.value)}
                            />
                            <Select
                              w={isMobile ? "100%" : "16rem"}
                              fontWeight="light"
                              color="gray"
                              bg="white"
                              value={place}
                              onChange={(e) => setPlace(e.target.value)}
                            >
                              <option value="smoking">Smoking</option>
                              <option value="non-smoking">Non-Smoking</option>
                            </Select>
                          </Flex>
                        </VStack>
                      </Box>
                    </Stack>

                    <Button bg="#FFC700" onClick={handleConfirm} mt="2rem">
                      Reserve Now
                    </Button>
                  </VStack>
                </Stack>
              </Center>
            </Box>
          </Center>
        </VStack>
      </Box>
      {emailSent && (
        <Confirm
          onClose={() => {
            setEmailSent(false);
          }}
        />
      )}
    </>
  );
}

Reserve.propTypes = {
  onClose: PropTypes.func.isRequired,
};
