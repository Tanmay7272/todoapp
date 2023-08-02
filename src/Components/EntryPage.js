import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, FlatList,Image ,ScrollView} from 'react-native';

const EntryPage = () => {

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleTaskChange = (text) => {
    setNewTask(text);
  };

  const handleTaskSubmit = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleTaskDelete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const renderTask = ({ item, index }) => (
    <View style={styles.taskContainer}>
      <Text style={styles.taskText}>{item}</Text>
      <TouchableOpacity onPress={() => handleTaskDelete(index)}>
      <Image source={require('./delete.png')} style={styles.deleteButton}/>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.quotetext}>Time Management{'\n'}Begins with Planning</Text>
      </View>
      <View style={styles.textfield}>
        <TextInput
          placeholder='enter task'
          style={styles.input}
          value={newTask}
          onChangeText={handleTaskChange}
        />
      </View>
      <TouchableOpacity style={styles.buttondesign} onPress={handleTaskSubmit}>
        <Text style={styles.textdesign}>SUBMIT</Text>
      </TouchableOpacity>
      
      <ScrollView style={styles.taskList}>
        <FlatList
          data={tasks}
          renderItem={renderTask}
          keyExtractor={(item, index) => index.toString()}
        />
      </ScrollView>
     
    </View>
  );
};

export default EntryPage


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  heading: {
    alignItems: 'center',
    marginVertical: 20,
  },
  quotetext: {
    color:'#131723',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily:'EduSABeginner-SemiBold'
  },
  textfield: {
    marginBottom: 10,
  },
  input: {
    borderColor: '#131723',
    borderWidth: 2,
    padding: 10,
    fontSize: 16,
    borderRadius: 40,
  },
  buttondesign:{
      alignItems: 'center',
      backgroundColor:"#131723",
      width:200,
      height:50,
      borderColor:'#5FEAD1',
      borderWidth: 2,
      borderRadius:40,
      justifyContent:'center',
      marginLeft:55
       
  },
  textdesign: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  taskList: {
    flex: 1,
    marginTop: 20,
    
  },
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 5,
    borderBottomColor: '#fff',
    backgroundColor:'#131723',
    borderRadius:40,
  },
  taskText: {
    fontSize: 16,
    color:'#5FEAD1',
    fontWeight:'bold',
  },
  deleteButton: {
    height:30,
    width:30,
  },
});

