import { useRouter } from 'expo-router';
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from './styles/colors';

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/diddy_chud_V2.png')}
        style={styles.logo}
      />

      <Text style={styles.appName}>Bar Life</Text>

      <Text style={styles.tagline}>Make the most of your nights out.</Text>

      <TouchableOpacity style={styles.createButton} onPress={() => router.push('/get_name')}>
        <Text style={styles.createButtonText}>+ CREATE AN ACCOUNT</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton} onPress={() => router.push('/login')}>
        <Text style={styles.loginButtonText}>LOGIN</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: colors.background,
  },
  logo: {
    width: 300,
    height: 300,
    borderRadius: 75,
    marginBottom: 20,
  },
  appName: {
    fontSize: 70,
    marginBottom: 10,
    color: colors.text,    
    fontWeight: 'bold',  
  },
  tagline: {
    fontSize: 18,
    marginBottom: 30,
    color: colors.tagline,
    textAlign: 'center',
  },
  createButton: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    width: '75%',
    alignItems: 'center',
    marginBottom: 10,
  },
  createButtonText: {
    color: colors.background,
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: colors.button,
    padding: 10,
    borderRadius: 5,
    width: '75%',
    alignItems: 'center',
    marginBottom: 10,
  },
  loginButtonText: {
    color: colors.text,
    fontSize: 16,
  },
});
