import PropTypes from "prop-types";
import { Divider,Text, VStack} from "@chakra-ui/react";
import {Reveal} from "./Observer/useObserver"

function Title({title, fontSize}) {
    return (
      <VStack>
        <Reveal width="fit-content">
          <Text fontFamily="Abril-Fatface" fontSize={fontSize}>
            {title}
          </Text>
        </Reveal>
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