import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../styles/colors';
import BottomTabs from './components/BottomTabs';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.hero}>
          <Text style={styles.title}>Bar Life</Text>
          <Text style={styles.subtitle}>Make every night legendary.</Text>
        </View>
      </ScrollView>

      <BottomTabs active="home" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background },
  container: { padding: 20, paddingBottom: 120 },
  hero: { alignItems: 'center', marginTop: 24 },
  title: { fontSize: 50, fontWeight: '700', marginTop: -20, color: colors.text, },
  subtitle: { fontSize: 18, color: '#918f8fff' },
  content: { marginTop: 28 },
})
