import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Colors } from './constants/Colors';

export default function IntroductionScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to MyCreatine</Text>
        <Text style={styles.subtitle}>Choose your supplementation phase</Text>
        
        <View style={styles.optionsContainer}>
          <TouchableOpacity style={styles.option}>
            <Link href="/setup/loading" style={styles.optionContent}>
              <Text style={styles.optionTitle}>Loading Phase</Text>
              <Text style={styles.optionDescription}>
                Start with a higher dose to saturate your muscles (5-7 days)
              </Text>
            </Link>
          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>
            <Link href="/setup/maintaining" style={styles.optionContent}>
              <Text style={styles.optionTitle}>Maintaining Phase</Text>
              <Text style={styles.optionDescription}>
                Continue with a regular dose to maintain creatine levels
              </Text>
            </Link>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: Colors.light.text,
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: Colors.light.icon,
    textAlign: 'center',
    marginBottom: 40,
  },
  optionsContainer: {
    gap: 20,
  },
  option: {
    backgroundColor: Colors.light.background,
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  optionContent: {
    padding: 20,
  },
  optionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.light.text,
    marginBottom: 8,
  },
  optionDescription: {
    fontSize: 16,
    color: Colors.light.icon,
    lineHeight: 22,
  },
}); 