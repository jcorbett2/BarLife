import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import BottomTabs from './components/BottomTabs'

export default function Vibes() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.title}>Vibes</Text>
        <Text style={styles.subtitle}>Placeholder page for Vibes.</Text>
      </View>
      <BottomTabs active="vibes" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: '700' },
  subtitle: { marginTop: 8, color: '#444' },
})
