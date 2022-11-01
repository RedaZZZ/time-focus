import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  Platform,
  SafeAreaView,
  FlatList,
} from 'react-native';
import { Colors } from '../utils/Colors';
import { fontSizes, spacing } from '../utils/sizes';

export const FocusHistory = ({ history }) => {
   if (!history || !history.length) return <Text style={styles.title}> no Focus task done !  </Text>;
  const renderItem = ({ item }) => <Text style={styles.item}>- {item}</Text>;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Focus items history : </Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};
const styles = StyleSheet.create({
  container:{
    flex: 1,
      padding: spacing.md,
  },
  item: {
    color: Colors.white,
    fontSize: fontSizes.md,
    paddingTop: spacing.sm,
  },
  title: {
    color: Colors.white,
    fontSize: fontSizes.md,
    padding: spacing.md,
    fontWeight: 'bold',
  },
});
