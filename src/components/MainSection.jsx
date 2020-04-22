import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { data } from '../data/data_all';
import MainItem from './MainItem';

const MainSection = ({ navigation }) => {
  const [listData, setListData] = useState(data);
  const [tempData, setTempData] = useState(data);
  const [searchText, setSearchText] = useState('');

  const searchRestaurant = (text) => {
    let searchData = [];
    tempData.map((res) => {
      if (res.name.indexOf(text) > -1) {
        searchData.push(res);
      }
    });
    setListData(searchData);
    setSearchText(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder='Search ...'
          style={styles.search}
          value={searchText}
          onChangeText={(value) => searchRestaurant(value)}
        />
        <TouchableOpacity
          onPress={() => setSearchText('')}
          style={styles.closeIcon}>
          <Ionicons name='ios-close' color='gray' size={20} />
        </TouchableOpacity>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={listData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <MainItem item={item} navigation={navigation} />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingBottom: 5,
  },
  listContainer: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 100,
    backgroundColor: '#f2f2f2',
    marginVertical: 10,
  },
  search: {
    flex: 1,
    marginLeft: 10,
  },
  closeIcon: {
    paddingHorizontal: 10,
  },
});

export default MainSection;