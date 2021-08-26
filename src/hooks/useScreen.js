import { useMediaQuery, useTheme } from "@material-ui/core";

export const useScreen = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  return { isSmall };
};
