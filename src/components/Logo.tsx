import { FC, useMemo } from 'react';

import { Image } from '@chakra-ui/react';

import LogoBlack from '../assets/logo_black.svg';
import LogoWhite from '../assets/logo_white.svg';

interface LogoProps {
  height?: string;
  variant?: 'black' | 'white';
  width?: string;
}

const Logo: FC<LogoProps> = ({
  height = '50px',
  variant = 'white',
  width = '100px',
}) => {
  const logoUrl = useMemo<string>(
    () => (variant === 'white' ? LogoWhite : LogoBlack),
    [variant],
  );

  return <Image height={height} src={logoUrl} width={width} />;
};

export default Logo;
