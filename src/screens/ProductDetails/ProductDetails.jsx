import { View, Text, Dimensions, Image } from 'react-native'
import React, { useRef } from 'react'
import { AndroidView, styles } from './styles';
import HomeHeader from '../../components/HomeHeader';
import Carousel from 'react-native-snap-carousel-v4';


const sliderWidth = Dimensions.get('window').width;
const itemWidth = sliderWidth;


const ProductDetails = ({ route: { params } }) => {
  console.log(params);

  const isCarousel = useRef(null);

  const images = [
    {
      id: '123abc',
      url: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Newcastle_United_Logo.svg/1200px-Newcastle_United_Logo.svg.png'

    },
    {
      id: '456def',
      url: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/1200px-Manchester_United_FC_crest.svg.png'
    }
  ]

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