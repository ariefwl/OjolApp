import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Text} from 'react-native';
import {colors} from '../../../utils';

const Button = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.wrapper.component} onPress={onPress}>
      <Text style={styles.text.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  wrapper: {
    component: {
      backgroundColor: colors.default,
      borderRadius: 25,
      paddingVertical: 13,
    },
  },
  text: {
    title: {
      color: 'white',
      fontSize: 12,
      fontWeight: 'bold',
      textTransform: 'uppercase',
      textAlign: 'center',
    },
  },
};

export default Button;
