import { View, Text, Dimensions, Image, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import { AndroidView, styles } from './styles';
import HomeHeader from '../../components/HomeHeader';
import Carousel from 'react-native-snap-carousel-v4';
import { Avatar } from 'react-native-paper/lib/commonjs';


const sliderWidth = Dimensions.get('window').width;
const itemWidth = sliderWidth;



const ProductDetails = ({ route: { params } }) => {
  console.log(params);

  const isCarousel = useRef(null);

  const name = 'Premier League Gear';
  const price = '15.99';
  const stock = 10;
  const description = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus ratione excepturi sunt commodi amet est iure possimus, quis officiis minima optio eum nisi nam vero distinctio totam sapiente. Sit, animi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, error. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ullam consequuntur omnis nulla ducimus corrupti? Dolor ipsam maxime atque repudiandae.';

  const [quantity, setQuantity] = useState(1);

  const images = [
    {
      id: '123abc',
      url: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Newcastle_United_Logo.svg/1200px-Newcastle_United_Logo.svg.png'

    },
    {
      id: '456def',
      url: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/1200px-Manchester_United_FC_crest.svg.png'
    }
  ];

  const minusQty = () => {
    if (quantity <= 1) return;
    setQuantity((value) => value - 1);
  };

  const plusQty = () => {
    if (stock <= quantity) return;
    setQuantity((value) => value + 1);
  };

  return (
    <View style={[AndroidView, styles.page]}>
      <HomeHeader back={true} />

      <Carousel
        layout='stack'
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        ref={isCarousel}
        data={images}
        renderItem={CarouselCardItems}
      />

      <View style={styles.productContainer}>
        <Text
          numberOfLines={2}
          style={styles.productName}
        >
          {name}
        </Text>

        <Text style={styles.productPrice}>
          ${price}
        </Text>

        <Text
          numberOfLines={8}
          style={styles.productDescription}
        >
          {description}
        </Text>

        <View style={styles.qtyContainer}>
          <Text style={styles.qtyTitle}>
            Quantity
          </Text>

          <View style={styles.qtyIconContainer}>
            <TouchableOpacity onPress={minusQty}>
              <Avatar.Icon
                icon={'minus'}
                style={styles.qtyIcons}
                size={25}
              />
            </TouchableOpacity>

            <Text style={styles.qty}>
              {quantity}
            </Text>

            <TouchableOpacity onPress={plusQty}>
              <Avatar.Icon
                icon={'plus'}
                style={styles.qtyIcons}
                size={25}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const CarouselCardItems = ({ item, index }) => (
  <View style={[styles.imageContainer, { width: itemWidth }]} key={index}>
    <Image
      source={{ uri: item.url }}
      style={[styles.image, { width: itemWidth }]}
    />

  </View>
)

export default ProductDetails;