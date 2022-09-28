import {
  IconButton,
  useColorModeValue,
  useColorMode,
  Box
} from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

export default function ToggleButton() {
  const { toggleColorMode } = useColorMode();
  return (
    <Box>
      <IconButton
        icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
        onClick={toggleColorMode}
        colorScheme={useColorModeValue('purple', 'orange')}
      ></IconButton>
    </Box>
  );
}
