import Checkbox from 'expo-checkbox';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import { styles } from './styles';

type Props = {
  taskItem: string,
  isCompleted: boolean,
  onDeliteTask: any,
  onConcludedTask: () => void,
}

export function Task({taskItem, isCompleted, onDeliteTask, onConcludedTask}: Props){
  return(
    <View style={styles.container}>
      <Checkbox
          value={isCompleted}
          style={styles.checkbox}
          color={isCompleted ? '#5E60CE' : undefined}
          onValueChange={onConcludedTask}
      />
      <Text style={isCompleted ? styles.taskCompleted : styles.task}  >{taskItem}</Text>
      
      <TouchableOpacity onPress={onDeliteTask} >
        <Image style={styles.image} source={require('../assets/trash.png')} />
      </TouchableOpacity>
      
    </View>
  )
}