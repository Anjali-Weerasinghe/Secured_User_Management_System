import React from "react";
import {
  Container,
  Box,
  Text,
  Tabs,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";

import StaffSignup from "../Auth/Staff/StaffSignUp";

const StaffRegister = () => {
  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg={"white"}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontFamily="work sans" fontSize="4xl" color="black">
          Add Staff Members
        </Text>
      </Box>
      <Box
        p={4}
        bg={"white"}
        w="100%"
        color="black"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Tabs variant="soft-rounded" colorScheme="green">
          <TabPanels>
            <TabPanel>
              <StaffSignup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default StaffRegister;
