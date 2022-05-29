import { FC } from 'react';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    // ... color definitions
  },
  fonts: {
    heading: 'proxima-nova',
    body: 'Roboto',
  },
  typography: {
    // ... typography definitions
  },
});

export const EquipUIProvider: FC<BaseWithChildren> = ({ children }) => (
  <ChakraProvider resetCSS theme={theme}>
    {children}
  </ChakraProvider>
);
