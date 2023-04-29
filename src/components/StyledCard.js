import { Card } from "@chakra-ui/react";

const StyledCard = ({ children }) => {
  return (
    <Card w="768px" h="514px" padding="6">
      {children}
    </Card>
  );
};
export default StyledCard;
