import React, { useState } from 'react';
import { View, Text, StyleSheet, Vibration } from 'react-native';
import { Countdown } from '../components/Countdown';
import { RoundedButton } from '../components/RoundedButton';
import { spacing } from '../utils/sizes';
import { Colors } from '../utils/Colors';

export const Timing = ({onChangeTime}) => {
  return (
<View style={styles.buttonWrapper}>
<View >
      <RoundedButton size={75} title= '10' onPress= {() => onChangeTime(10)}/>
  </View>
<View >
      <RoundedButton size={75} title= '15' onPress= {() => onChangeTime(15)}/>
  </View>
<View >
      <RoundedButton size={75} title= '20' onPress= {() => onChangeTime(20)}/>
  </View>

  </View>
  )
 
  
  

};

const styles = StyleSheet.create({
buttonWrapper :{
  flex: 0.1,
  paddingTop: spacing.lg,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-around',
},

  
});
