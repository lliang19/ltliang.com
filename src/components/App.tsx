import { FC } from 'react';

import { Flex, Heading, IconButton, Text, Tooltip } from '@chakra-ui/react';
import { HiOutlineDocumentText } from 'react-icons/hi';

import Logo from './Logo';

const App: FC = () => {
  return (
    <Flex
      alignItems="center"
      background="#d8c0c2"
      flexDirection="column"
      height="100vh"
      justifyContent="center"
      width="100vw"
    >
      <Heading as="h1" fontWeight={500} marginBottom="16px">
        Hi there!
      </Heading>
      <Logo variant="black" />
      <Text fontSize="18px" margin="16px 0">
        My site is currently under construction, but here&apos;s my resume for
        now.
      </Text>
      <Tooltip borderRadius="12px" label="Resume">
        <IconButton
          isRound
          aria-label="document-icon-button"
          as="a"
          href="/resume.pdf"
          icon={<HiOutlineDocumentText fontSize="20px" />}
          target="_blank"
        />
      </Tooltip>
    </Flex>
  );
};

export default App;
