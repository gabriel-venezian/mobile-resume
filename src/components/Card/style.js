import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  cardContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  card: {
    width: '70%',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#939393',
    marginTop: 10,
    padding: 10,
    backgroundColor: '#FFF',
  },
  cardHeaderText: {
    fontWeight: 'bold',
  },
  cardContentText: {
    color: '#939393',
  },
});

export default style;
