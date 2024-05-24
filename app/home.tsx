import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';

const Home: React.FC = () => {
  const router = useRouter();

  const handleBookNowPress = () => {
    router.push('/appointment');
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#DCF9E5" />
      <View style={styles.content}>
        <Text style={styles.welcomeText}>Welcome to Our App</Text>
        <TouchableOpacity style={styles.bookNowButton} onPress={handleBookNowPress}>
          <Text style={styles.bookNowButtonText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#400869',
  },
  bookNowButton: {
    backgroundColor: '#8464C2',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  bookNowButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Home;
