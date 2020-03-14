import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  SafeAreaView
} from 'react-native';
import ScrollableTabView, {
  DefaultTabBar
} from 'react-native-scrollable-tab-view';
import All from '../components/All';
import Menu from '../components/Menu';
import Popular from '../components/Popular';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <ImageBackground
          source={require('../../assets/images/header.png')}
          style={styles.imageBackground}>
          <Text style={styles.headerTitle}>HOME</Text>
        </ImageBackground>
      </View>
      <View style={styles.tabBar}>
        <ScrollableTabView
          style={styles.tabBarContent}
          initialPage={0}
          tabBarActiveTextColor='green'
          tabBarTextStyle={{ fontFamily: 'open-sans', fontSize: 15 }}
          renderTabBar={() => (
            <DefaultTabBar underlineStyle={styles.underline} />
          )}>
          <All tabLabel='All' navigation={navigation} />
          <Menu tabLabel='Menu' navigation={navigation} />
          <Popular tabLabel='Popular' navigation={navigation} />
        </ScrollableTabView>
      </View>
    </SafeAreaView>
  );
};

const screenWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  header: {
    marginTop: 31,
    position: 'absolute'
  },
  tabBar: {
    flex: 1,
    marginTop: screenWidth * 0.3,
    paddingHorizontal: 30
  },
  tabBarContent: {
    marginTop: 20
  },
  underline: {
    backgroundColor: 'green',
    borderWidth: null
  },
  imageBackground: {
    width: screenWidth * 0.55,
    height: screenWidth * 0.45,
    alignItems: 'center'
  },
  headerTitle: {
    color: 'white',
    marginTop: 20,
    fontFamily: 'open-sans-bold',
    fontSize: 25
  }
});

export default HomeScreen;