
import React from 'react'
import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors } from '../utils/Colors';
import { TextInput } from 'react-native-paper'
import {RoundedButton} from '../components/RoundedButton';
import {spacing} from '../utils/sizes'
export const Focus = ({addSubject}) => {
  const [subject, setSubject] = useState(null);
  
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={setSubject}
          label="Enter your focus subject here.."
        />
        <View style={styles.button}>
          <RoundedButton  title= "+" size={50} onPress={ () => addSubject(subject)}/>
        </View>
      
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
  },
   textInput:{
    flex: 1,
    marginRight: spacing.sm,
    
  },
  button:{
 justifyContent: 'center',
  },
  inputContainer: {
    padding: spacing.lg,
    justifyContent: 'top',
    flexDirection: 'row',
  },
 
 
})