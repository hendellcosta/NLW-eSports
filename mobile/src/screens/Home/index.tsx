import { View, Image, FlatList } from "react-native";

import logo from "../../assets/logo-nlw-esports.png";
import { Heading } from "../../components/Heading";

import { styles } from "./style";
import { GAMES } from "../../utils/games";
import { GamesSection } from "../../components/GamesSection";

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />

      <Heading 
      title="Find your duo!" 
      subtitle="Select the game you are playing..." />

      <FlatList data={GAMES} keyExtractor={item => item.id} horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.contentList} renderItem={({item}) => (
        <GamesSection data={item} />
      )}/>

    </View>
  );
}
