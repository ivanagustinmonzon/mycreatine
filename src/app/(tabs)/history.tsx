import React from 'react';
import { StyleSheet, ScrollView, View, SafeAreaView, Platform, StatusBar } from 'react-native';
import { TrackingCard } from '../components/TrackingCard';
import { ThemedText } from '../components/ThemedText';

// Mock data - in a real app, this would come from a database or storage
const mockHistory = [
  { date: new Date(), doseTaken: 5, targetDose: 5 },
  { date: new Date(Date.now() - 86400000), doseTaken: 3, targetDose: 5 },
  { date: new Date(Date.now() - 2 * 86400000), doseTaken: 5, targetDose: 5 },
  { date: new Date(Date.now() - 3 * 86400000), doseTaken: 5, targetDose: 5 },
  { date: new Date(Date.now() - 4 * 86400000), doseTaken: 0, targetDose: 5 },
];

export default function HistoryScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <ThemedText style={styles.title}>History</ThemedText>
          <ThemedText style={styles.subtitle}>Your creatine tracking history</ThemedText>
        </View>

        <View style={styles.historyList}>
          {mockHistory.map((record, index) => (
            <TrackingCard
              key={index}
              date={record.date}
              doseTaken={record.doseTaken}
              targetDose={record.targetDose}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    padding: 16,
    paddingTop: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#fff',
  },
  subtitle: {
    fontSize: 16,
    opacity: 0.7,
    color: '#fff',
  },
  historyList: {
    paddingBottom: 16,
  },
}); 