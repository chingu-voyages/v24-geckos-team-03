import { theme } from "@chakra-ui/core";

// we can customize our theme here
export const customTheme = {
    ...theme,
    colors: {
      ...theme.colors,
      primaryBackground: "#333",
      primaryBorder: "#555",
      logoText: "#49c3fd",
      primaryText: "#fff",
    }
};

