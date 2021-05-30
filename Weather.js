import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const weatherOptions = {
  Haze: {
    iconName: 'weather-cloudy',
    gradient: ['#4DA0B0', '#D39D38'],
    title: 'Haze',
    subTitle: 'Is umbrella with you?',
  },
  Drizzle: {
    iconName: 'weather-rainy',
    gradient: ['#89F7FE', '#66A6FF'],
    title: 'Drizzle',
    subTitle: 'Is umbrella with you?',
  },
  Rain: {
    iconName: 'weather-rainy',
    gradient: ['#00C6EB', '#005BEA'],
    title: 'Rain',
    subTitle: 'Is umbrella with you?',
  },
  Snow: {
    iconName: 'weather-snowy',
    gradient: ['#7DE2FC', '#B9B6E5'],
    title: 'Snow',
    subTitle: 'Ready for sliding',
  },
  Atmosphere: {
    iconName: 'weather-hail',
    gradient: ['#89F7F#', '#66A6FF'],
    title: 'Atmosphere',
    subTitle: 'Enjoy outside',
  },
  Clear: {
    iconName: 'weather-sunny',
    gradient: ['#FF7300', '#FFF253'],
    title: 'Clear',
    subTitle: 'Enjoy outside',
  },
  Clouds: {
    iconName: 'weather-cloudy',
    gradient: ['#D7D2CC', '#304352'],
    title: 'Clouds',
    subTitle: 'Enjoy outside',
  },
  Mist: {
    iconName: 'weather-hail',
    gradient: ['#4DA0B0', '#D39D38'],
    title: 'Mist',
    subTitle: 'Is umbrella with you?',
  },
  Dust: {
    iconName: 'weather-hail',
    gradient: ['#4DA0B0', '#D39D38'],
    title: 'Dust',
    subTitle: 'Wear a mask',
  },
  Thunderstorm: {
    iconName: 'weather-lightning-rainy',
    gradient: ['#bdc3c7', '#2c3e50'],
    title: 'Thunderstorm',
    subTitle: "Just don't go outside",
  },
};

const Weather = ({ temp, condition, location }) => {
  return (
    <LinearGradient
      // Background Linear Gradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle='light-content' />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName}
          size={96}
          color='white'
        />
        <Text style={styles.temp}>{temp}℃</Text>
        <Text style={styles.location}>{location}</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subTitle}>
          {weatherOptions[condition].subTitle}
        </Text>
      </View>
    </LinearGradient>
  );
};

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    'Thunderstorm',
    'Drizzle',
    'Rain',
    'Snow',
    'Atmosphere',
    'Clear',
    'Clouds',
    'Haze',
    'Mist',
    'Dust',
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  temp: {
    fontSize: 42,
    color: 'white',
  },

  location: {
    fontSize: 24,
    color: 'white',
  },

  halfContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    color: 'white',
    fontSize: 44,
    fontWeight: '300',
    marginBottom: 10,
  },

  subTitle: {
    color: 'white',
    fontWeight: '600',
    fontSize: 24,
  },
  textContainer: {
    alignItems: 'flex-start',
  },
});

export default Weather;
