import PropTypes from "prop-types";
import { Divider,Text, VStack} from "@chakra-ui/react";


function Title({title, fontSize}) {
    return (
      <VStack>
        <Text fontFamily="Abril-Fatface" fontSize={fontSize}>
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
    fontSize: PropTypes.number.isRequired,
};

export default Title;