import PropTypes from "prop-types";
import { Divider,Text, VStack} from "@chakra-ui/react";


function Title({title}) {
    return (
      <VStack>
        <Text fontFamily="body" fontSize="30px">
          {title}
        </Text>
        <Divider
          borderWidth="2px"
          borderRadius="1rem"
          borderColor="#FFC700"
          w="5rem"
        />
      </VStack>
    );
}
Title.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Title;