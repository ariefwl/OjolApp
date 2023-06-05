import React, {useEffect, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {Button, Input} from '../../components';
import {colors} from '../../utils';
import {IconBack, RegisterImage} from '../../assets';

const Register = () => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  const onInputChange = (value, input) => {
    setForm({
      ...form,
      [input]: value,
    });
  };

  const sendData = () => {
    console.log('data yang dikirim : ', form);
  };
  return (
    <View style={styles.wrapper.page}>
      <ScrollView>
        <IconBack width={25} height={25} />
        <RegisterImage width={170} height={106} style={styles.ilustration} />
        <Text style={styles.text.desc}>
          Mohon mengisi beberapa data untuk proses daftar anda{' '}
        </Text>

        <View style={styles.space(64)} />
        <Input
          placeholder="Nama Lengkap"
          value={form.fullName}
          onChangeText={value => onInputChange(value, 'fullName')}
        />
        <View style={styles.space(33)} />
        <Input
          placeholder="E - Mail"
          value={form.email}
          onChangeText={value => onInputChange(value, 'email')}
        />
        <View style={styles.space(33)} />
        <Input
          placeholder="Password"
          value={form.password}
          onChangeText={value => onInputChange(value, 'password')}
          secureTextEntry={true}
        />
        <View style={styles.space(80)} />
        <Button title="Daftar" onPress={sendData} />
      </ScrollView>
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
