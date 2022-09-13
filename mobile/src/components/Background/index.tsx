import { ImageBackground } from 'react-native';

import { style } from './style';
import background from '../../assets/background-galaxy.png'

interface Props {
children: React.ReactNode
}

export function Background( {children}: Props) {
  return (
    <ImageBackground source={background} defaultSource={background} style={style.container}>
      {children}
    </ImageBackground>
  );
}