import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

type TabKey = 'clans' | 'friends' | 'home' | 'vibes' | 'more'

export default function BottomTabs({ active }: { active: TabKey }) {
  const router = useRouter()

  const tabs: { key: TabKey; label: string; icon: string; route?: string }[] = [
    { key: 'clans', label: 'Clans', icon: 'people-outline', route: '/main-app/clans' },
    { key: 'friends', label: 'Friends', icon: 'person-add-outline', route: '/main-app/friends' },
    { key: 'home', label: 'Home', icon: 'home-outline', route: '/main-app' },
    { key: 'vibes', label: 'Vibes', icon: 'flame', route: '/main-app/vibes' },
    { key: 'more', label: 'More', icon: 'ellipsis-horizontal', route: '/main-app/more' },
  ]

  return (
    <View style={styles.container} pointerEvents="box-none">
      <View style={styles.tabBar}>
        {tabs.map((t) => {
          const isActive = t.key === active
          return (
            <TouchableOpacity
              key={t.key}
              style={styles.tab}
              activeOpacity={0.75}
              onPress={() => {
                if (t.route) router.push(t.route)
              }}
            >
              <Ionicons name={t.icon as any} size={22} color={isActive ? '#0a84ff' : '#222'} />
              <Text style={[styles.label, isActive && styles.labelActive]}>{t.label}</Text>
            </TouchableOpacity>
          )
        })}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#ddd',
    paddingTop: 8,
    paddingBottom: 12,
    paddingHorizontal: 8,
    width: '100%',
    maxWidth: 900,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 11,
    color: '#222',
    marginTop: 4,
  },
  labelActive: {
    color: '#0a84ff',
    fontWeight: '600',
  },
})
