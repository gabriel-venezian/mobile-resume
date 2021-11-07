import React from 'react';
import Card from './components/Card';
import profilePicture from './assets/profile.jpeg';
import Icon from 'react-native-vector-icons/Feather';
import {
  StyleSheet,
  View,
  Image,
  Text,
  Alert,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  function handleSocialMedia(socialMedia) {
    switch (socialMedia) {
      case 'github':
        Alert.alert('GitHub', 'https://github.com/gabriel-venezian');
        break;
      case 'instagram':
        Alert.alert('Instagram', 'https://www.instagram.com/gah_venezian/');
        break;
      case 'linkedin':
        Alert.alert(
          'LinkedIn',
          'https://www.linkedin.com/in/gabriel-venezian/',
        );
        break;
    }
  }

  return (
    <>
      <View style={style.body}>
        <View style={style.headerContainer}>
          <Image
            source={profilePicture}
            alt={"Gabriel Venezian's profile picture."}
            style={style.profilePicture}
          />
          <Text style={style.userName}>GABRIEL VENEZIAN</Text>
          <Text style={style.userOccupation}>Front-end Developer</Text>
          <View style={style.socialMediaIcons}>
            <TouchableOpacity onPress={() => handleSocialMedia('github')}>
              <Icon name="github" size={35} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleSocialMedia('instagram')}>
              <Icon name="instagram" size={35} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleSocialMedia('linkedin')}>
              <Icon name="linkedin" size={35} />
            </TouchableOpacity>
          </View>
        </View>
        <Card cardTitle="WORK EXPERIENCE">
          <Text style={style.cardContentTitle}>Integration Technician</Text>
          <Text style={style.cardContentText}>Napp Solutions – Full-time</Text>
          <Text style={style.cardContentText}>Mar 2021 – Present</Text>
          <Text style={style.cardContentTitle}>IT Apprentice</Text>
          <Text style={style.cardContentText}>DPA BRASIL – Apprenticeship</Text>
          <Text style={style.cardContentText}>Jun 2020 – Mar 2021</Text>
        </Card>
        <Card cardTitle="PERSONAL INFO">
          <Text style={style.cardContentText}>
            <Text style={style.personalInfoTitle}>Phone </Text>
            +55 19 3542-9971
          </Text>
          <Text style={style.cardContentText}>
            <Text style={style.personalInfoTitle}>Mobile </Text>
            +55 19 9 9661-8086
          </Text>
          <Text style={style.cardContentText}>
            <Text style={style.personalInfoTitle}>E-mail </Text>
            gabriel.venezian@hotmail.com
          </Text>
          <Text style={style.cardContentText}>
            <Text style={style.personalInfoTitle}>Location </Text>
            Araras, São Paulo
          </Text>
        </Card>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#E7E7E7',
  },
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  profilePicture: {
    width: 250,
    height: 250,
    borderRadius: 120,
  },
  userName: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10,
  },
  userOccupation: {
    color: '#939393',
    fontSize: 20,
  },
  socialMediaIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginTop: 10,
  },
  cardContentTitle: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  personalInfoTitle: {
    fontWeight: 'bold',
  },
});

export default App;
