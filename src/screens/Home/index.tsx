import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import uuid from 'react-native-uuid';
import { styles } from "./styles";
import { EmptyTask } from "../../../components/EmptyTask";
import { Task } from "../../../components/Task";
import { useState } from "react";

export function Home(){

  interface taskList {
    id: any,
    taskName: string,
    isCompleted: boolean,
  }

  let idTask = uuid.v4()

  console.log(idTask)

  const [taskList, setTaskList] = useState<taskList[]>([]);
  const totalTasks = taskList.length
  const [taskName, setTaskName] = useState('')


  function createNewTask() {
    setTaskList( prevState => [ ...prevState, {
      id: idTask,
      taskName: taskName,
      isCompleted: false
    }])
    setTaskName('')
  }

  function deleteTask(id: any) {

    

  }



  return(
    <View  style={styles.container}>
      <View style={styles.inputForm} >
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={'#6B6B6B'}
          onChangeText={setTaskName}
          value={taskName}
        />
        <TouchableOpacity style={styles.button} onPress={createNewTask} >
          <Image source={require('../../../components/assets/plus.png')} />
        </TouchableOpacity>
      </View>

      <View style={styles.tasksContainer} >
        <View style={styles.infoContainer} >
            <View style={styles.info} >
              <Text style={styles.createdText} >Criadas</Text>
              <View style={styles.counterRadius} >
                <Text style={styles.counter}>{totalTasks}</Text>
              </View>
            </View>

            <View style={styles.info} >
              <Text style={styles.completedText} >Concluídas</Text>
              <View style={styles.counterRadius} >
                <Text style={styles.counter}>0</Text>
              </View>
              
            </View>
        </View>
          
        <FlatList
          data={taskList}
          keyExtractor={ item => item.id}
          renderItem={({item}) =>(
            <Task
              key={item.id}
              taskItem={item.taskName}
              isCompleted={item.isCompleted}
              onDeliteTask={deleteTask}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={ () => (
          <EmptyTask/>
        )}
        />


      </View>

    </View>
  )
}