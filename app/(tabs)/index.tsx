import { router } from 'expo-router';
import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';

const fourthYearSections = [
  { id: '4a', name: 'BSIT 4A' },
  { id: '4b', name: 'BSIT 4B' },
  { id: '4c', name: 'BSIT 4C' },
  { id: '4d', name: 'BSIT 4D' },
  { id: '4e', name: 'BSIT 4E' },
  { id: '4f', name: 'BSIT 4F' },
  { id: '4g', name: 'BSIT 4G' },
  { id: '4h', name: 'BSIT 4H' },
  { id: '4i', name: 'BSIT 4I' },
];

export default function HomeScreen() {
  
  useEffect(() => {
    console.log('The Portal screen rendered');
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.headerTitle}>4th Year Student Portal</Text>
      <Text style={styles.subTitle}>Choose your section to know your schedule</Text>

      {fourthYearSections.map((section) => (
        <TouchableOpacity
          key={section.id}
          style={styles.sectionCard}
          activeOpacity={0.7}
          onPress={() => router.push(`/details?sectionId=${section.id}`)}
        >
          <Text style={styles.sectionText}>{section.name}</Text>
          <Text style={styles.arrowText}>View Schedule →</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#F4F6F9',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1A1A1A',
    textAlign: 'center',
    marginBottom: 6,
  },
  subTitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 24,
  },
  sectionCard: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0056B3',
  },
  arrowText: {
    fontSize: 14,
    color: '#28A745',
    fontWeight: '500',
  },
});