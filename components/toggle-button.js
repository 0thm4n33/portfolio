import {
  IconButton,
  useColorModeValue,
  useColorMode,
  Box,
} from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import LanguageButton from './language-button';

export default function ToggleButton() {
  const { toggleColorMode } = useColorMode();
 
  return (
    <Box display={'flex'} gap='0.5'>
      <IconButton
        icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
        onClick={toggleColorMode}
        colorScheme={useColorModeValue('purple', 'orange')}
      />
    </Box>
  );
}
