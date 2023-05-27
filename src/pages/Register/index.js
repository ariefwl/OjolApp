import React from 'react';
import {Text, View} from 'react-native';
import {Input} from '../../components';
import {colors} from '../../utils';
import {IconBack, RegisterImage} from '../../assets';

const Register = () => {
  return (
    <View style={styles.wrapper.page}>
      <IconBack width={25} height={25} />
      <RegisterImage width={170} height={106} style={styles.ilustration} />
      <Text style={styles.text.desc}>
        Mohon mengisi beberapa data untuk proses daftar anda{' '}
      </Text>

      <View style={styles.space(64)} />
      <Input placeholder="Nama Lengkap" />
      <View style={styles.space(33)} />
      <Input placeholder="E - Mail" />
      <View style={styles.space(33)} />
      <Input placeholder="Password" />
    </View>
  );
};

const styles = {
  wrapper: {
    page: {padding: 20, backgroundColor: 'white', flex: 1},
  },
  ilustration: {
    marginTop: 30,
  },
  text: {
    desc: {
      color: colors.default,
      fontSize: 14,
      fontWeight: 'bold',
      maxWidth: 200,
      marginTop: 20,
    },
  },
  space: value => {
    return {
      height: value,
    };
  },
};

export default Register;
