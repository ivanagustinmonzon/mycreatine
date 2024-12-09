import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, SafeAreaView, Platform, StatusBar } from 'react-native';
import { TrackingCard } from '../../components/TrackingCard';
import { DoseInput } from '../../components/DoseInput';
import { ThemedView } from '../../components/ThemedView';
import { ThemedText } from '../../components/ThemedText';

export default function TabOneScreen() {
  const [todaysDose, setTodaysDose] = useState(0);
  const targetDose = 5; // grams

  const handleDoseSubmit = (dose: number) => {
    setTodaysDose(prev => prev + dose);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <ThemedText style={styles.title}>My Creatine Tracker</ThemedText>
          <ThemedText style={styles.subtitle}>Track your daily intake</ThemedText>
        </View>

        <TrackingCard
          date={new Date()}
          doseTaken={todaysDose}
          targetDose={targetDose}
        />

        <ThemedView style={styles.inputSection}>
          <DoseInput onDoseSubmit={handleDoseSubmit} />
        </ThemedView>

        <View style={styles.statsContainer}>
          <ThemedView style={styles.statCard}>
            <ThemedText style={styles.statTitle}>Weekly Average</ThemedText>
            <ThemedText style={styles.statValue}>4.5g</ThemedText>
          </ThemedView>
          <ThemedView style={styles.statCard}>
            <ThemedText style={styles.statTitle}>Streak</ThemedText>
            <ThemedText style={styles.statValue}>5 days</ThemedText>
          </ThemedView>
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
  inputSection: {
    margin: 16,
    marginTop: 8,
  },
  statsContainer: {
    flexDirection: 'row',
    padding: 16,
    gap: 16,
  },
  statCard: {
    flex: 1,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
  },
  statTitle: {
    fontSize: 14,
    opacity: 0.7,
    marginBottom: 4,
    color: '#fff',
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
});
