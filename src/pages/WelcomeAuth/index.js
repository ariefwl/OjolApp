import React from 'react';
import {Image, Text, View} from 'react-native';
import ActionButton from './ActionButton';
import {colors} from '../../utils';
import {Auth} from '../../assets';

const WelcomeAuth = () => {
  return (
    <View style={styles.wrapper.page}>
      <Image source={Auth} style={styles.wrapper.ilustrasi} />
      <Text style={styles.text.welcome}>Selamat Datang di O - JOL</Text>
      <ActionButton
        desc="Silahkan masuk, jika anda sudah memiliki akun"
        title="Masuk"
      />
      <ActionButton
        desc="atau silahkan daftar jika anda belum memiliki akun"
        title="Daftar"
      />
    </View>
  );
};

const styles = {
  wrapper: {
    page: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      backgroundColor: 'white',
    },
    ilustrasi: {
      width: 250,
      height: 220,
      marginBottom: 10,
    },
  },
  text: {
    welcome: {
      fontSize: 18,
      fontWeight: 'bold',
      color: colors.default,
      marginBottom: 76,
    },
  },
};

export default WelcomeAuth;
