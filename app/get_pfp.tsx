import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from './styles/colors';

export default function GetProfilePicture() {
  const router = useRouter();
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

  const handleNext = () => {
    // Here you could save the image to your backend or state management
    console.log('Selected image:', image);
    // For now, just navigate to the next screen (you'll need to create this)
    router.push('/'); // Navigate to home/dashboard
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backButtonText}>&lt; Back</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Bar Life</Text>
      <Text style={styles.tagline}>Choose your profile picture</Text>

      <TouchableOpacity style={styles.imagePickerBox} onPress={pickImage}>
        <Text style={styles.imagePickerText}>
          {image ? 'Change Profile Picture' : 'Tap to Select Profile Picture'}
        </Text>
        {image && <Text style={styles.selectedText}>✓ Image Selected</Text>}
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, !image && styles.buttonDisabled]}
        onPress={handleNext}
        disabled={!image}
      >
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
    color: colors.tagline,
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
  },
  buttonDisabled: {
    backgroundColor: colors.inputBorder,
    opacity: 0.6,
  },
  buttonText: {
    color: colors.text,
    fontSize: 16,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    padding: 10,
  },
  backButtonText: {
    color: colors.text,
    fontSize: 16,
  },
});
