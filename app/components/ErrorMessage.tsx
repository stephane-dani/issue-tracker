/** @format */

import { Text } from "@radix-ui/themes";
import { PropsWithChildren } from "react";

const ErrorMessage = ({ children }: PropsWithChildren) => {
  if (!children) return null;

  return (
    <Text as="p" color="red">
      {children}
    </Text>
  );
};

export default ErrorMessage;
