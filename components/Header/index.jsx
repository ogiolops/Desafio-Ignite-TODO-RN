import { styles } from "./styles";
import { View, Image } from 'react-native';

export function Header(){
  return(
    <View style={styles.headerContainer} >
      <Image style={styles.image} source={require('../../components/assets/Logo.png')} />
    </View>
  )
}