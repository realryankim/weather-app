import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import * as Location from 'expo-location';
import { Alert } from 'react-native';
import axios from 'axios';
import Weather from './Weather';

const API_KEY = 'c3da3cc3c1a642a9b8c321ff373ca94c';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [temp, setTemp] = useState(0);
  const [condition, setCondition] = useState('');
  const [location, setLocation] = useState('');

  const getWeather = async (latitude, longitude) => {
    const {
      data,
      data: { weather, name },
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );

    setCondition(weather[0].main);
    setLocation(name);
    setTemp(data.main.temp);
    setIsLoading(false);
  };

  const getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("Can't find you.", 'So sad');
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <Weather
      temp={Math.round(temp)}
      condition={condition}
      location={location}
    />
  );
};

export default App;
