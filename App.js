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

  const getWeather = async (latitude, longitude) => {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );

    setIsLoading(false);
    setTemp(data.main.temp);
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

  return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} />;
};

export default App;
