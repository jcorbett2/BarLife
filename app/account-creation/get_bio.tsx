import { useRouter } from 'expo-router';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { colors } from '../styles/colors';

export default function GetBio() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backButtonText}>&lt; Back</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Bar Life</Text>
      <Text style={styles.tagline}>Tell us about yourself</Text>
      <TextInput
        style={styles.bioInput}
        placeholder="Enter your bio..."
        multiline
        numberOfLines={6}
      />

      <TouchableOpacity style={styles.button} onPress={() => router.push('/main-app/home_screen')}>
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
  bioInput: {
    width: '75%',
    height: 150,
    borderColor: colors.inputBorder,
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingTop: 10,
    backgroundColor: colors.background,
    borderRadius: 5,
    color: colors.inputBorder,
    textAlignVertical: 'top',
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