import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';

interface TrackingCardProps {
  date: Date;
  doseTaken: number;
  targetDose: number;
  onPress?: () => void;
}

export const TrackingCard: React.FC<TrackingCardProps> = ({
  date,
  doseTaken,
  targetDose,
  onPress,
}) => {
  const progress = (doseTaken / targetDose) * 100;
  
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <ThemedView style={styles.card}>
        <View style={styles.header}>
          <ThemedText style={styles.date}>
            {date.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}
          </ThemedText>
        </View>
        <View style={styles.content}>
          <ThemedText style={styles.doseText}>
            {doseTaken}g / {targetDose}g
          </ThemedText>
          <View style={styles.progressContainer}>
            <View style={[styles.progressBar, { width: `${progress}%` }]} />
          </View>
        </View>
      </ThemedView>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 12,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  date: {
    fontSize: 16,
    fontWeight: '600',
  },
  content: {
    gap: 8,
  },
  doseText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  progressContainer: {
    height: 8,
    backgroundColor: '#E0E0E0',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#4CAF50',
    borderRadius: 4,
  },
}); 