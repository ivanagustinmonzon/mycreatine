import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Colors } from './constants/Colors';

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Welcome to MyCreatine</Text>
          <Text style={styles.subtitle}>Your personal creatine supplementation tracker</Text>
        </View>

        <View style={styles.features}>
          <Text style={styles.featureTitle}>What you'll get:</Text>
          <View style={styles.featureItem}>
            <Text style={styles.featureText}>• Personalized supplementation schedule</Text>
          </View>
          <View style={styles.featureItem}>
            <Text style={styles.featureText}>• Daily intake tracking</Text>
          </View>
          <View style={styles.featureItem}>
            <Text style={styles.featureText}>• Progress monitoring</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.button}>
          <Link href="/index" style={styles.buttonContent}>
            <Text style={styles.buttonText}>Get Started</Text>
          </Link>
        </TouchableOpacity>
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
    padding: 24,
    justifyContent: 'space-between',
  },
  header: {
    marginTop: 60,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: Colors.light.text,
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 18,
    color: Colors.light.icon,
    textAlign: 'center',
    lineHeight: 24,
  },
  features: {
    marginTop: 40,
  },
  featureTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.light.text,
    marginBottom: 16,
  },
  featureItem: {
    marginBottom: 12,
  },
  featureText: {
    fontSize: 16,
    color: Colors.light.icon,
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#4CAF50',
    borderRadius: 12,
    overflow: 'hidden',
    marginTop: 40,
  },
  buttonContent: {
    padding: 16,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
}); 