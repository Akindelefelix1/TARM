export {Context, Provider};
import React, {createContext, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const Context = createContext();

const Provider = ({children, navigation}) => {
  const {navigate} = useNavigation();
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  const signIn = async (email, password) => {
    try {
      const response = await fetch(
        'https://api-stg.tarminternational.org/v1/auth/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({email, password}),
        },
      );

      if (response.ok) {
        const user = await response.json();
        setUser(user);
        setError('');

        return true; // Sign-in success
      } else {
        // Handle authentication error
        setError('Authentication failed');
        return false; // Sign-in failure
      }
    } catch (error) {
      // Handle network error
      console.error(error);
      setError('Network error');
      return false; // Sign-in failure
    }
  };

  const signOut = () => {
    setUser(null);
    navigate('Login');
  };

  const fetchData = () => {
    fetch('https://api-stg.tarminternational.org/v1/participants', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        if (response.ok) {
          console.log('Data fetched successfully');
        } else {
          console.error(response);
          console.error('Failed to fetch data');
        }
        return response.json();
      })
      .then(data => {
        console.log(data); // Handle the fetched data
      })
      .catch(error => {
        console.error('Error fetching data', error);
      });
  };

  const fetchEventById = eventId => {
    fetch(
      `https://api-stg.tarminternational.org/v1/events/${'64abf5f019302cd113af9cfd'}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
      .then(response => {
        if (response.ok) {
          console.log('Event fetched successfully');
        } else {
          console.error(response);
          console.error('Failed to fetch event');
        }
        return response.json();
      })
      .then(event => {
        console.log(event); // Handle the fetched event
      })
      .catch(error => {
        console.error('Error fetching event', error);
      });
  };

  return (
    <Context.Provider
      value={{user, signIn, signOut, error, fetchData, fetchEventById}}
      navigation={navigation}>
      {children}
    </Context.Provider>
  );
};

export {Context, Provider};
