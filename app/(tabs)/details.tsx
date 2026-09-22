import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function DetailsScreen() {
  const { sectionId } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Section Details for: {sectionId}</Text>
      <Text style={styles.subtitle}>[Details Screen logic and schedule layout to be implemented by group member]</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
  },
});