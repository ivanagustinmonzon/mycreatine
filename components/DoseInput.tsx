import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';

interface DoseInputProps {
  onDoseSubmit: (dose: number) => void;
  defaultDose?: number;
}

export const DoseInput: React.FC<DoseInputProps> = ({
  onDoseSubmit,
  defaultDose = 5,
}) => {
  const [selectedDose, setSelectedDose] = useState(defaultDose);
  const doseOptions = [3, 5, 10];

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Add Dose</ThemedText>
      <View style={styles.doseOptions}>
        {doseOptions.map((dose) => (
          <TouchableOpacity
            key={dose}
            style={[
              styles.doseButton,
              selectedDose === dose && styles.selectedDose,
            ]}
            onPress={() => setSelectedDose(dose)}
          >
            <ThemedText
              style={[
                styles.doseText,
                selectedDose === dose && styles.selectedDoseText,
              ]}
            >
              {dose}g
            </ThemedText>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => onDoseSubmit(selectedDose)}
      >
        <ThemedText style={styles.submitText}>Log Dose</ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 12,
    gap: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  doseOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  doseButton: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
  },
  selectedDose: {
    backgroundColor: '#4CAF50',
  },
  doseText: {
    fontSize: 16,
    fontWeight: '600',
  },
  selectedDoseText: {
    color: '#FFFFFF',
  },
  submitButton: {
    backgroundColor: '#4CAF50',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
}); 