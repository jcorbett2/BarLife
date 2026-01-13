import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../styles/colors';
import BottomTabs from './components/BottomTabs';

export default function Friends() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.title}>Friends</Text>
        <Text style={styles.subtitle}>Placeholder page for Friends.</Text>
      </View>
      <BottomTabs active="friends" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background },
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: '700', color: colors.text },
  subtitle: { marginTop: 8, color: colors.subtitle },
})
