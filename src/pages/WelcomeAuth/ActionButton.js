import React from 'react';
import {Text, View} from 'react-native';
import {colors} from '../../utils';
import {Button} from '../../components';

const ActionButton = ({desc, title}) => {
  return (
    <View style={styles.wrapper.component}>
      <Text style={styles.text.desc}>{desc}</Text>
      <Button title={title} />
    </View>
  );
};

const styles = {
  wrapper: {
    component: {
      marginBottom: 43,
      maxWidth: 225,
    },
  },
  text: {
    desc: {
      color: colors.text.default,
      fontSize: 10,
      textAlign: 'center',
      marginBottom: 6,
      paddingHorizontal: '15%',
    },
  },
};

export default ActionButton;
