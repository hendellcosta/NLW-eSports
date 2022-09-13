import { TouchableOpacity, TouchableOpacityProps, ImageBackground, ImageSourcePropType, Text } from 'react-native';

import { styles } from './style';
import { LinearGradient } from 'expo-linear-gradient';
import { THEME } from '../../theme';

export interface GamesSectionProps extends TouchableOpacityProps  {
    id: string,
    name: string,
    ads: string,
    cover: ImageSourcePropType
}

interface Props {
    data: GamesSectionProps
}

export function GamesSection({data, ...rest}: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
        <ImageBackground style={styles.cover} source={data.cover}>

        <LinearGradient colors={THEME.COLORS.FOOTER} style={styles.footer}>
            <Text style={styles.name}>
                {data.name}
            </Text>

            <Text style={styles.ads}>
                {data.ads} ads's.
            </Text>
        </LinearGradient>
        </ImageBackground>
    </TouchableOpacity>
  );
}