import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../styles/colors';
import BottomTabs from './components/BottomTabs';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <TouchableOpacity style={styles.notificationButton} onPress={() => {}}>
        <Ionicons name="notifications-outline" size={30} color={colors.text} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.profileButton} onPress={() => {}}>
        <Ionicons name="person-circle-outline" size={35} color={colors.text} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.addFriendButton} onPress={() => {}}>
        <Ionicons name="person-add-outline" size={24} color={colors.text} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.heartButton} onPress={() => {}}>
        <Ionicons name="heart-outline" size={24} color={colors.text} />
      </TouchableOpacity>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.hero}>
          <Text style={styles.title}>Bar Life</Text>
          <Text style={styles.subtitle}>Make every night legendary.</Text>
          <TouchableOpacity style={styles.vibeButton} onPress={() => {}}>
            <Text style={styles.buttonText}>+ Post a vibe</Text>
          </TouchableOpacity>
          <View style={styles.favoriteRow}>
            <Text style={styles.favText}>Your Favorite Bars</Text>
            <TouchableOpacity style={styles.allBarsButton} onPress={() => {}}>
              <Text style={styles.allBarsText}>ALL BARS ></Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.FavButton} onPress={() => {}}>
            <Text style={styles.buttonText}>+ Add favorite bars</Text>
          </TouchableOpacity>
          <View style={styles.dealsContainer}>
            <Text style={styles.dealsText}>Drinks Deals/Events Tonight</Text>
          </View>
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
  subtitle: { fontSize: 18, color: colors.subtitle, marginBottom: 20 },
  vibeButton: { backgroundColor: colors.button, paddingVertical: 10, paddingHorizontal: 20, borderRadius: 5, marginVertical: 10},
  FavButton: { backgroundColor: colors.button, paddingVertical: 10, paddingHorizontal: 20, borderRadius: 5, marginVertical: 10, width: '55%', alignItems: 'center' },
  buttonText: { color: colors.buttonText, fontSize: 16, fontWeight: '600' },
  favText: { fontSize: 18, color: colors.text },
  favoriteRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginTop: 50, marginBottom: 10 },
  allBarsButton: { backgroundColor: 'transparent' },
  allBarsText: { color: colors.button, fontSize: 16, fontWeight: '600' },
  dealsContainer: { alignSelf: 'flex-start', width: '100%', marginTop: 20 },
  dealsText: { fontSize: 18, color: colors.text, marginTop: 40 },  
  notificationButton: { position: 'absolute', top: 60, left: 20, zIndex: 1 },
  profileButton: { position: 'absolute', top: 60, right: 20, zIndex: 1 },
  addFriendButton: { position: 'absolute', top: 120, right: 20, zIndex: 1 },
  heartButton: { position: 'absolute', top: 160, right: 20, zIndex: 1 },  content: { marginTop: 28 },
})
