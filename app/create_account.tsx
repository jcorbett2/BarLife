import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { colors } from './styles/colors';

export default function CreateAccount() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [bio, setBio] = useState('');
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    // Request permission
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert('Permission needed', 'Camera roll permissions are required to select a profile picture.');
      return;
    }

    // Launch image picker
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1], // Square aspect ratio for profile pictures
      quality: 0.8,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleCreate = () => {
    if (!name || !username || !email || !phone || !dob || !password || !confirmPassword || !bio || !image) {
      Alert.alert('Error', 'Please fill in all fields and select a profile picture.');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }
    // Here you could save the data to your backend or state management
    console.log('Account created:', { name, username, email, phone, dob, password, bio, image });
    // Navigate to login or home
    router.push('/login');
  };

  return (
    <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backButtonText}>&lt; Back</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Bar Life</Text>
      <Text style={styles.tagline}>Create your account</Text>

      <Text style={styles.label}>Full Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Your Full Name"
        value={name}
        onChangeText={setName}
      />
      <Text style={styles.label}>Username</Text>
      <TextInput
        style={styles.input}
        placeholder="Your Username"
        value={username}
        onChangeText={setUsername}
      />
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Your Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <Text style={styles.label}>Phone Number</Text>
      <TextInput
        style={styles.input}
        placeholder="Your Phone Number"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />
      <Text style={styles.label}>Date of Birth</Text>
      <TextInput
        style={styles.input}
        placeholder="Date of Birth (MM/DD/YYYY)"
        value={dob}
        onChangeText={setDob}
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Text style={styles.label}>Confirm Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <Text style={styles.label}>Bio</Text>
      <TextInput
        style={styles.bioInput}
        placeholder="Bio"
        value={bio}
        onChangeText={setBio}
        multiline
        numberOfLines={4}
      />

      <TouchableOpacity style={styles.imagePickerBox} onPress={pickImage}>
        <Text style={styles.imagePickerText}>
          {image ? 'Change Profile Picture' : 'Tap to Select Profile Picture'}
        </Text>
        {image && <Text style={styles.selectedText}>✓ Image Selected</Text>}
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleCreate}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton} onPress={() => router.push('/login')}>
        <Text style={styles.loginButtonText}>Already have an account?</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    alignItems: 'center',
    padding: 20,
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
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: colors.text,
    width: '75%',
  },
  input: {
    width: '75%',
    height: 40,
    borderColor: colors.inputBorder,
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: colors.background,
    borderRadius: 5,
    color: colors.inputBorder,
  },
  bioInput: {
    width: '75%',
    height: 100,
    borderColor: colors.inputBorder,
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    paddingTop: 10,
    backgroundColor: colors.background,
    borderRadius: 5,
    color: colors.inputBorder,
    textAlignVertical: 'top',
  },
  imagePickerBox: {
    width: 200,
    height: 200,
    borderWidth: 2,
    borderColor: colors.inputBorder,
    borderStyle: 'dashed',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    backgroundColor: colors.background,
  },
  imagePickerText: {
    color: colors.inputBorder,
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  selectedText: {
    color: colors.button,
    fontSize: 14,
    marginTop: 10,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: colors.button,
    padding: 10,
    borderRadius: 5,
    width: '75%',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: colors.text,
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: colors.text,
    padding: 10,
    borderRadius: 5,
    width: '75%',
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: colors.background,
    fontSize: 16,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    padding: 10,
    zIndex: 1,
  },
  backButtonText: {
    color: colors.text,
    fontSize: 16,
  },
});
