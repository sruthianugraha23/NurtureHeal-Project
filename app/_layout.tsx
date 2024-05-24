import React from 'react';
import { Tabs } from 'expo-router';
import { Image } from 'react-native';
import { useFonts } from 'expo-font';
import { FontAwesome } from '@expo/vector-icons';

export default function MainLayout() {
  const [fontsLoaded] = useFonts({
    'Lato-Bold': require('../assets/fonts/Lato-Bold.ttf'),
    'Lato-SemiBold':require('../assets/fonts/Lato-SemiBold.ttf'),
    ...FontAwesome.font,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../assets/images/home.png')}
              style={{ tintColor: color, width: size, height: size }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="appointment"
        options={{
          tabBarLabel: 'Appointment',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../assets/images/appointment.png')}
              style={{ tintColor: color, width: size, height: size }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="record"
        options={{
          tabBarLabel: 'Records',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../assets/images/record.png')}
              style={{ tintColor: color, width: size, height: size }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: 'Health Profile',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../assets/images/profile.png')}
              style={{ tintColor: color, width: size, height: size }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="completed"
      
        options={{
          tabBarButton: () => null,  // This hides the tab bar button
        }}
        listeners={{
          tabPress: e => {
            e.preventDefault();  // Prevent the tab from showing up in the tab bar
          },
        }}
      />
      <Tabs.Screen
        name="cancelled"
      
        options={{
          tabBarButton: () => null,  // This hides the tab bar button
        }}
        listeners={{
          tabPress: e => {
            e.preventDefault();  // Prevent the tab from showing up in the tab bar
          },
        }}
      />

    </Tabs>
    
  
  );
}
