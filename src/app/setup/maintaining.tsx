import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '../constants/Colors';
import { Link } from 'expo-router';

export default function MaintainingPhaseSetup() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Maintaining Phase Setup</Text>
      <Text style={styles.description}>
        During the maintaining phase, you'll take 3-5g of creatine daily.
        This is the recommended dose for long-term creatine supplementation.
      </Text>

      <TouchableOpacity style={styles.button}>
        <Link href="/(tabs)" style={styles.buttonContent}>
          <Text style={styles.buttonText}>Start Tracking</Text>
        </Link>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.light.text,
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: Colors.light.icon,
    lineHeight: 24,
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#4CAF50',
    borderRadius: 12,
    overflow: 'hidden',
    marginHorizontal: 20,
  },
  buttonContent: {
    padding: 16,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
}); 