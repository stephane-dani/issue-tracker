/** @format */

import { Box, Card } from "@radix-ui/themes";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const LoadingNewIssuePage = () => {
  return (
    <Box className="max-w-xl space-y-3">
      <Skeleton height="2rem" />
      <Skeleton height="20rem" />
    </Box>
  );
};

export default LoadingNewIssuePage;
