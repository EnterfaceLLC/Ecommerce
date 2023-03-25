//* REACT IMPORT //
import React from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'

//* COMPONENT IMPORT //
import HomeHeader from '../../../components/HomeHeader';
import Loader from '../../../components/Loader';
import ProductListHeader from '../../../components/ProductListHeader';
import ProductListItem from '../../../components/ProductListItem';

//* STYLE IMPORT //
import { AndroidView, styles } from './styles';
import { colors } from '../../../themes/colors';

//* REACT NATIVE PAPER //
import { Avatar, Button } from 'react-native-paper/lib/commonjs';


//* ADMIN PANEL CODE //
const products = [
  {
    name: 'Tottenham Products',
    price: 15.99,
    stock: 10,
    _id: 'qrs456',
    images: [
      { url: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/Tottenham_Hotspur.svg/1200px-Tottenham_Hotspur.svg.png' }
    ],
  },
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
    name: 'Man. Untd. Products',
    price: 15.99,
    stock: 20,
    _id: '456def',
    images: [
      { url: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/1200px-Manchester_United_FC_crest.svg.png' }
    ],
  },
];

const AdminPanel = ({ navigation }) => {
  const Loading = false;

  const navigationHandler = () => {

  };

  const deleteProductHandler = (id) => {
    console.log(`Deleting ${id}`);
  };

  return (
    <View style={[AndroidView, styles.page]}>
      <HomeHeader back={true} />

      <View style={styles.header}>
        <Text style={styles.headerText}>AdminPanel</Text>
      </View>

      {Loading ?
        (<Loader />)
        :
        (
          <>
            <View style={styles.section}>

            </View>

            <View>
              <View style={styles.section2}>
                <ButtonBox
                  icon={'clipboard-plus-outline'}
                  text={'Product'}
                  handler={navigationHandler}
                />
                <ButtonBox
                  icon={'format-list-bulleted-square'}
                  text={'All Orders'}
                  handler={navigationHandler}
                  reverse={true}
                />
                <ButtonBox
                  icon={'plus-circle-outline'}
                  text={'Category'}
                  handler={navigationHandler}
                />
              </View>
            </View>

            <ProductListHeader />
            <ScrollView>
              <View>
                {
                  products.map((item, index) => (
                    <ProductListItem
                      key={item._id}
                      i={index}
                      image={item.images[0].url}
                      price={item.price}
                      name={item.name}
                      category={item.category}
                      stock={item.stock}
                      navigation={navigation}
                      deleteHandler={deleteProductHandler}
                    />
                  ))
                }
              </View>
            </ScrollView>
          </>
        )}
    </View>
  );
};

const ButtonBox = ({ icon, text, handler, reverse = false, loading = false }) => {
  return (
    <TouchableOpacity
      style={[
        styles.buttonBox,
        { backgroundColor: reverse ? colors.accent : colors.dark }
      ]}
      onPress={() => handler(text)}
      disabled={loading}
    >
      <Avatar.Icon
        style={styles.icons}
        size={50}
        color={'white'}
        icon={icon}
      />
      <Text style={styles.iconText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default AdminPanel;
