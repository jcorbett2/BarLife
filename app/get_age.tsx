import { useRouter } from 'expo-router';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { colors } from './styles/colors';

export default function GetAge() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backButtonText}>&lt; Back</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Bar Life</Text>
      <Text style={styles.tagline}>What's your date of birth?</Text>
      <TextInput style={styles.input} placeholder="Date of Birth (MM/DD/YYYY)" />

      <TouchableOpacity style={styles.button} onPress={() => router.push('/get_bio')}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 70,
    marginBottom: 20,
    color: colors.text,
    fontWeight: 'bold',
  },
  tagline: {
    fontSize: 18,
    marginBottom: 30,
    color: colors.tagline,
  },
  input: {
    width: '75%',
    height: 40,
    borderColor: colors.inputBorder,
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: colors.background,
    borderRadius: 5,
    color: colors.inputBorder,
  },
  button: {
    backgroundColor: colors.button,
    padding: 10,
    borderRadius: 5,
    width: '75%',
    alignItems: 'center',
  },
  buttonText: {
    color: colors.text,
    fontSize: 16,
  },
  backButton: {
    position: 'absolute',
    top: 25,
    left: 20,
    padding: 10,
  },
  backButtonText: {
    color: colors.text,
    fontSize: 16,
  },
});