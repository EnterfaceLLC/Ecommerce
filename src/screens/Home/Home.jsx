//* REACT IMPORTS //
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/native'

//* STYLE IMPORTS //
import { AndroidView, styles } from './styles';

//* REACT NATIVE PAPER IMPORTS //
import { Avatar, Button } from 'react-native-paper';
import { colors } from '../../themes/colors';

//* COMPONENT IMPORTS //
import HomeHeader from '../../components/HomeHeader';
import SearchModal from '../../components/SearchModal';
import ProductCard from '../../components/ProductCard';
import Footer from '../../components/Footer';

//* HOME CODE //
const categories = [
  { type: 'Premier', _id: '123' },
  { type: 'NFL', _id: '456' },
  { type: 'MLS', _id: '789' },
  { type: 'NBA', _id: '987' },
  { type: 'MLB', _id: '654' },
  { type: 'NCAA', _id: '321' }
];

const products = [
  {
    name: 'Chelsea Products',
    price: 15.99,
    stock: 15,
    _id: '123xyz',
    images: [
      { url: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/270px-Chelsea_FC.svg.png' }
    ],
  },
  {
    name: 'New Castle Products',
    price: 15.99,
    stock: 20,
    _id: '123abc',
    images: [
      { url: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Newcastle_United_Logo.svg/1200px-Newcastle_United_Logo.svg.png' }
    ],
  },
  {
    name: 'Manchester United Products',
    price: 15.99,
    stock: 20,
    _id: '456def',
    images: [
      { url: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/1200px-Manchester_United_FC_crest.svg.png' }
    ],
  },
];

const Home = () => {

  const [category, setCategory] = useState('');
  const [activeSearch, setActiveSearch] = useState(false);
  const [search, setSearch] = useState("");

  const navigate = useNavigation();

  const selectCategory = (_id) => {
    setCategory(_id);
  };

  const addToCart = (id) => {
    console.log('Adding to cart', id);
  };

  return (
    <>
      {activeSearch && (
        <SearchModal
          search={search}
          setSearch={setSearch}
          setActiveSearch={setActiveSearch}
          products={products}
        />
      )}

      <View style={[{ AndroidView }, styles.page]}>

        <HomeHeader />

        <View style={styles.headContain}>
          <View>
            <Text style={styles.headerText}>Our</Text>
            <Text style={[styles.headerText, { fontWeight: '500' }]}>Products</Text>
          </View>

          <TouchableOpacity onPress={() => setActiveSearch((v) => !v)}>
            <Avatar.Icon
              style={styles.icons}
              icon='magnify'
              size={40}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.section2}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ alignItems: 'center' }}
          >
            {
              categories.map((item, index) => (
                <Button
                  key={item._id}
                  style={[
                    styles.button,
                    { backgroundColor: category === item._id ? colors.accent : 'lightgrey' }
                  ]}
                  onPress={() => selectCategory(item._id)}
                >
                  <Text
                    style={[
                      styles.buttonText,
                      { color: category === item._id ? 'white' : 'black' }
                    ]}
                  >
                    {item.type}
                  </Text>
                </Button>
              ))
            }
          </ScrollView>
        </View>

        <View style={{ flex: 1 }}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {products.map((item, index) => (
              <ProductCard
                stock={item.stock}
                name={item.name}
                price={item.price}
                image={item.images[0]?.url}
                addToCart={addToCart}
                id={item._id}
                key={item._id}
                i={index}
                navigate={navigate}
              />
            ))}
          </ScrollView>
        </View>
      </View>

      <Footer activeRoute={'Home'} />
    </>
  );
};

export default Home;
