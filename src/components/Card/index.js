import React from 'react';
import {View, Text} from 'react-native';
import style from './style';

const Card = ({cardTitle, children}) => {
  return (
    <View style={style.cardContainer}>
      <View style={style.card}>
        <View style={style.cardHeader}>
          <Text style={style.cardHeaderText}>{cardTitle}</Text>
        </View>
        <View style={style.cardContent}>{children}</View>
      </View>
    </View>
  );
};

export default Card;
