import { useRouter } from 'expo-router';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { colors } from './styles/colors';

export default function Signup() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
              <Text style={styles.backButtonText}>&lt; Back</Text>
            </TouchableOpacity>

    
    <Text style={styles.Header}>Login</Text>
    
    <Text style={styles.userText}>Username</Text>
    <TextInput style={styles.userInput} placeholder="Enter username..." />

    <Text style={styles.passwordText}>Password</Text>
    <TextInput style={styles.passwordInput} placeholder="Enter password..." secureTextEntry />

    <TouchableOpacity style={styles.loginButton} onPress={() => router.push('/')}>
        <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

    <TouchableOpacity style={styles.forgotPasswordButton} onPress={() => console.log('Forgot password pressed')}>
        <Text style={styles.forgotPasswordText}>Forgot Password</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.createAccountButton} onPress={() => router.push('/get_name')}>
        <Text style={styles.createButtonText}>+ Create Account</Text>
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
  Header: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 100,
    color: colors.text,
  },
  userInput: {
    width: "75%",
    height: 40,
    borderColor: colors.inputBorder,
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: colors.background,
    color: colors.inputBorder,
  },
  passwordInput: {
    width: "75%",
    height: 40,
    borderColor: colors.inputBorder,
    borderWidth: 1,
    marginBottom: 200,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: colors.background,
    color: colors.inputBorder,
  },
  loginButton: {
    width: "75%",
    height: 40,
    backgroundColor: colors.button,
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
  },
  createAccountButton: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    width: '75%',
    alignItems: 'center',
    marginBottom: 20,
  },
  userText: {
    fontSize: 18,
    marginBottom: 10,
    color: colors.text,
    width: '75%',
  },
  passwordText: {
    fontSize: 18,
    marginBottom: 10,
    color: colors.text,
    width: '75%',
  },
  loginButtonText: {
    color: colors.text,
    fontSize: 16,
  },
  createButtonText: {
    color: colors.background,
    fontSize: 16,
  },
  backButton:{
    position: 'absolute',
    top: 25,
    left: 10,
    padding: 10,
  },
  backButtonText: {
    color: colors.text,
    fontSize: 16,
  },
  forgotPasswordButton: {
    marginBottom: 40,
    marginTop: 10,
    padding: 5,
  },
  forgotPasswordText: {
    color: colors.tagline,
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});
