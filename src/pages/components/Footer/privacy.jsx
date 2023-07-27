import { Box, Text, VStack } from "@chakra-ui/react";

import breakPoints from "../../theme/breakpoints";

function PrivacyPolicy() {
  
  return (
    <Box w={breakPoints} margin="auto" paddingBlockStart="10rem">
      <Box maxW="60rem" margin="auto" mb="7rem">
        <Text
          fontWeight="bold"
          fontFamily="inter"
          textAlign={"justify"}
          fontSize="1.2rem"
        >
          Privacy Policy for Quezon Crave
        </Text>
        <VStack gap="1rem" marginTop="2rem">
          <Text>
            This Privacy Policy governs the manner in which Quezon Crave
            collects, uses, maintains, and discloses information collected from
            users of the https://quezon.vercel.app/ This Privacy Policy applies
            to the Site and all products and services offered by Quezon Crave.
          </Text>
          <VStack w="100%" align="start">
            <Text fontFamily="inter" fontWeight="semibold">
              Information Collection for Delivery Purposes
            </Text>
            <Text>
              Quezon Crave may collect limited personal information from Users
              solely for the purpose of facilitating delivery services. This
              information may include the User`s name, delivery address, contact
              number, and any additional details required for smooth and
              efficient delivery.
            </Text>
          </VStack>
          <VStack w="100%" align="start">
            <Text fontFamily="inter" fontWeight="semibold">
              Use of Collected Information
            </Text>
            <Text>
              The information collected for delivery purposes will be used
              solely for the following:
            </Text>
            <Text>
              Facilitating the delivery of orders placed on the Site to the
              specified delivery address.
            </Text>
            <Text>
              Contacting Users regarding order status and delivery updates.
            </Text>
            <Text>
              Improving customer service by addressing delivery-related
              inquiries and concerns.
            </Text>
          </VStack>
          <VStack w="100%" align="start">
            <Text fontFamily="inter" fontWeight="semibold">
              How We Protect Your Information
            </Text>
            <Text>
              Quezon Crave adopts appropriate data collection, storage, and
              processing practices, and security measures to protect against
              unauthorized access, alteration, disclosure, or destruction of the
              collected delivery information.
            </Text>
          </VStack>
          <VStack w="100%" align="start">
            <Text fontFamily="inter" fontWeight="semibold">
              Sharing Your Information
            </Text>
            <Text>
              Quezon Crave will not sell, trade, or rent any personal
              identification information collected for delivery purposes to
              others. The information will only be shared with third-party
              delivery partners solely for the purpose of fulfilling delivery
              services.
            </Text>
          </VStack>
          <VStack w="100%" align="start">
            <Text fontFamily="inter" fontWeight="semibold">
              Retention of Information
            </Text>
            <Text>
              Quezon Crave retains the collected delivery information for a
              limited period necessary to complete the delivery process and
              provide customer support. After the required retention period, the
              information will be securely deleted or anonymized.
            </Text>
          </VStack>
          <VStack w="100%" align="start">
            <Text fontFamily="inter" fontWeight="semibold">
              Changes to This Privacy Policy
            </Text>
            <Text>
              Quezon Crave has the discretion to update this Privacy Policy at
              any time. When we do, we will revise the updated date at the
              bottom of this page. We encourage Users to frequently check this
              page for any changes to stay informed about how we are handling
              their delivery information. You acknowledge and agree that it is
              your responsibility to review this Privacy Policy periodically and
              become aware of modifications.
            </Text>
          </VStack>
          <VStack w="100%" align="start">
            <Text fontFamily="inter" fontWeight="semibold">
              Your Acceptance of These Terms
            </Text>
            <Text>
              By using this Site and providing delivery information, you signify
              your acceptance of this Privacy Policy. If you do not agree to
              this Privacy Policy, please refrain from providing delivery
              information on our Site. Your continued use of the Site and
              provision of delivery information following the posting of changes
              to this Privacy Policy will be deemed your acceptance of those
              changes.
            </Text>
          </VStack>
          <VStack w="100%" align="start">
            <Text fontFamily="inter" fontWeight="semibold">
              Cookies and Tracking Technologies
            </Text>
            <Text>
              We use cookies and other tracking technologies to improve your
              experience on our website and to understand how you use our
              services. You may disable cookies in your browser settings,
              although some parts of our website may not function properly if
              cookies are disabled.
            </Text>
          </VStack>
          <VStack w="100%" align="start">
            <Text fontFamily="inter" fontWeight="semibold">
              Changes to the Privacy Policy:
            </Text>
            <Text>
              This privacy policy may be updated periodically to reflect changes
              to the Pansol`s website’s information collection, use, and
              protection practices.
            </Text>
          </VStack>
          <VStack w="100%" align="start">
            <Text fontFamily="inter" fontWeight="semibold">
              Contact Information
            </Text>
            <Text>
              If you have any questions or concerns about our Privacy Policy or
              your dealings with this Site, please email us at
              quezoncrave@gmail.com.
            </Text>
          </VStack>
        </VStack>
        <Text fontWeight={"bold"} mt="5rem">
          Effective Date: [August 2025]
        </Text>
      </Box>
    </Box>
  );
}

export default PrivacyPolicy;
