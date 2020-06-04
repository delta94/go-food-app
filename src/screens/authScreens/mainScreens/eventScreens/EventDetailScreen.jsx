import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Image,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Linking,
} from 'react-native';
import MapPreview from '../../../../components/MapPreview';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { formatDate } from '../../../../utils/formatDate';
import Colors from '../../../../constants/Colors';
import OfficialLogo from '../../../../components/Icon/OfficialLogo';
import UnOfficialLogo from '../../../../components/Icon/UnOfficialLogo';

const EventDetailScreen = ({ navigation }) => {
  const event = navigation.getParam('event');

  const renderAddress = address => {
    let returnData = '';

    address.forEach((item, index) => {
      if (index === address.length - 1) returnData = returnData + item;
      else returnData = returnData + item + ', ';
    });

    return returnData;
  };

  const coordinates = { longitude: event.longitude, latitude: event.latitude };

  return (
    <ScrollView
      style={styles.container}
      alwaysBounceVertical={false}
      bounces={false}
      showsVerticalScrollIndicator={false}
    >
      <StatusBar hidden={true} />
      <View>
        <ImageBackground
          style={styles.backgroundImg}
          source={{ uri: event.image_url }}
        >
          <View style={styles.backgroundContainer}>
            {event.is_official ? <OfficialLogo /> : <UnOfficialLogo />}
            <Text style={styles.eventName}>{event.name}</Text>
          </View>
        </ImageBackground>
        <Ionicons
          name="md-arrow-round-back"
          size={30}
          color="white"
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        />
        <View style={styles.afterContainer}>
          <View style={styles.eventBookmark}>
            <View
              style={{
                padding: 20,
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
                backgroundColor: '#fff',
              }}
            >
              <Text style={styles.labelTxt}>Are You Interested ?</Text>
            </View>
            <View style={styles.BookmarkBtn}>
              <TouchableOpacity style={styles.leftBtn}>
                <Text style={{ color: '#fff', fontFamily: 'open-sans' }}>
                  I'm In !!
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.rightBtn}>
                <Text style={{ color: '#fff', fontFamily: 'open-sans' }}>
                  Nah !!
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.eventInfo}>
            <View style={{}}>
              <Text style={styles.labelTxt}>Time</Text>
              <Text>{formatDate(event.time_start)}</Text>
            </View>
            <View style={{ marginTop: 15 }}>
              <Text style={styles.labelTxt}>Description</Text>
              <Text>{event.description}</Text>
              <TouchableOpacity>
                <Text
                  style={{
                    color: '#6FDDFF',
                    marginTop: 7,
                    fontFamily: 'open-sans',
                    fontSize: 15,
                  }}
                  onPress={() => Linking.openURL(event.event_site_url)}
                >
                  View on Web >
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ marginTop: 15 }}>
              <Text style={styles.labelTxt}>Location</Text>
              <TouchableOpacity>
                <MapPreview style={styles.mapImg} coordinates={coordinates} />
              </TouchableOpacity>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 10,
                }}
              >
                <AntDesign name="enviromento" size={35} color="gray" />
                <Text
                  style={{ marginLeft: 10, color: '#9FACB9', lineHeight: 20 }}
                >
                  {renderAddress(event.location.display_address)}
                </Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 20,
                }}
              >
                <Text style={styles.labelTxt}>Attendee(s)</Text>
                <Text style={styles.labelTxt}>
                  {event.attending_count} person(s)
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    left: 0,
    top: 0,
  },
  backButton: {
    position: 'absolute',
    left: screenWidth * 0.085,
    marginTop: (10 * screenHeight) / 300,
  },
  backgroundContainer: {
    width: screenWidth * 0.85,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    bottom: 20,
  },
  backgroundImg: {
    width: '100%',
    height: screenHeight / 3.5,
    display: 'flex',
    alignItems: 'center',
  },
  afterContainer: {
    marginTop: 10,
    marginBottom: 15,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  eventName: {
    paddingTop: 30,
    color: 'white',
    fontSize: 25,
    fontFamily: 'open-sans-bold',
    lineHeight: 20,
  },
  eventBookmark: {
    width: screenWidth * 0.85,
    shadowColor: 'gray',
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
    elevation: 5,
  },
  eventInfo: {
    width: screenWidth * 0.85,
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 20,
    borderRadius: 20,
    shadowColor: 'gray',
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
    elevation: 5,
  },
  BookmarkBtn: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  labelTxt: {
    color: '#44566c',
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    marginBottom: 5,
  },
  leftBtn: {
    width: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#39B54A',
    height: 50,
    borderBottomLeftRadius: 20,
  },
  rightBtn: {
    width: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D32323',
    height: 50,
    borderBottomRightRadius: 20,
  },
  mapImg: {
    marginVertical: 10,
    width: '100%',
    height: 300,
  },
});

export default EventDetailScreen;
