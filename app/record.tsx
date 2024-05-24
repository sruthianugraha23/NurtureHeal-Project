import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';
import { Tabs } from 'expo-router'; // Import Tabs from expo-router

const Appointments: React.FC = () => {
  const router = useRouter();

  const handleCompletedPress = () => {
    if (router && router.navigate) {
      router.navigate('completed');
    } else {
      console.error("Router or router.navigate is undefined:", router);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#DCF9E5" />
      <View style={styles.header}>
        <Text style={styles.headerText}>Appointment</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.upcomingButton]}>
          <Text style={styles.ubuttonText}>Upcoming</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.completedButton]} onPress={handleCompletedPress}>
          <Text style={styles.cbuttonText}>Completed</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.cancelledButton]}>
          <Text style={styles.cabuttonText}>Cancelled</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/images/Group6.png')} style={styles.image} />
        <Text style={styles.noAppointmentText}>No upcoming appointment</Text>
      </View>
      {/* The footer has been removed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 'auto',
    height: 'auto',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 24,
    paddingBottom: 20,
    flex: 1,
  },
  header: {
    width: 360,
    height: 70,
    backgroundColor: '#DCF9E5',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    position: 'absolute',
    zIndex: 1,
  },
  headerText: {
    fontSize: 20,
    lineHeight: 24,
    left: -100,
    fontFamily: 'Lato-Bold', // Ensure this font is loaded
    color: '#400869',
    fontWeight: 'bold',
    opacity: 1,
  },
  buttonContainer: {
    width: 320,
    height: 48,
    backgroundColor: '#F7F7F7',
    justifyContent: 'space-around',
    borderRadius: 8,
    flexDirection: 'row',
    top: 65,
    marginBottom: 200,
    padding: 4,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderWidth: 0.5,
  },
  button: {
    width: 90,
    height: 39,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    opacity: 1,
  },
  upcomingButton: {
    backgroundColor: '#8464C2',
    borderRadius: 6,
  },
  completedButton: {
    backgroundColor: '#F7F7F7',
  },
  cancelledButton: {
    backgroundColor: '#F7F7F7',
    borderRadius: 6,
  },
  ubuttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  cbuttonText: {
    color: '#000000CC',
    fontWeight: 'bold',
  },
  cabuttonText: {
    color: '#000000CC',
    fontWeight: 'bold',
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  image: {
    width: 299,
    height: 177.86,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  noAppointmentText: {
    fontSize: 16,
    color: '#696969',
  },
});

export default Appointments;
