import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Image
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import Octicons from '@expo/vector-icons/Octicons';
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Feather';  // You'll need to install this package

const windowWidth = Dimensions.get('window').width;
type Product = {
    id: string;
    name: string;
    price: number;
    discount: number;
    rating: number;
    reviews: number;
    image: string;
    };
const products:Product[] = [
  {
    id: '1',
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: 69900,
    discount: 39,
    rating: 4,
    reviews: 15,
    image: "../assets/giacchuyen.png" 
  },
  {
    id: '2',
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: 69900,
    discount: 39,
    rating: 4,
    reviews: 15,
    image: "../assets/daynguon.png"
  },
  {
    id: '3',
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: 69900,
    discount: 39,
    rating: 4,
    reviews: 15,
    image: "../assets/dauchuyendoipsps2.png"
  },
  {
    id: '4',
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: 69900,
    discount: 39,
    rating: 4,
    reviews: 15,
    image: "../assets/dauchuyendoi.png"
  },
  {
    id: '5',
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: 69900,
    discount: 39,
    rating: 4,
    reviews: 15,
    image: "../assets/carbusbtops2.png"
  },
  {
    id: '6',
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: 69900,
    discount: 39,
    rating: 4,
    reviews: 15,
    image: "../assets/daucam.png"
  },
];
const imageMapping = {
    "../assets/giacchuyen.png": require('../assets/giacchuyen.png'),
    "../assets/daynguon.png": require('../assets/daynguon.png'),
    "../assets/dauchuyendoipsps2.png": require('../assets/dauchuyendoipsps2.png'),
    "../assets/dauchuyendoi.png": require('../assets/dauchuyendoi.png'),
    "../assets/carbusbtops2.png": require('../assets/carbusbtops2.png'),
    "../assets/daucam.png": require('../assets/daucam.png'),
}
const StarRating = ({ rating }:{rating:number}) => {
  return (
    <View style={styles.ratingContainer}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Icon
          key={star}
          name="star"
          size={14}
          color={star <= rating ? '#FCD34D' : '#D1D5DB'}
        />
      ))}
    </View>
  );
};
const Header = () => {
  return(
    <View style={styles.header}>
                <TouchableOpacity style={{marginRight:10}}>
                  <Ionicons name="arrow-back-outline" size={24} color="white" />
                </TouchableOpacity>
                <View style={styles.searchContainer}>
                  <TextInput
                    style={styles.searchInput}
                    placeholder="Dây cáp usb"
                    placeholderTextColor="#666"
                  />
                  <Octicons name="search" size={24} color="black"  style={styles.searchIcon} />
                </View>
                <View style={styles.cartContainer}>
                  <MaterialCommunityIcons name="cart-check" size={24} color="black" />
                  <View style={styles.cartBadge}>
                    <Text style={styles.cartBadgeText}>1</Text>
                  </View>
                </View>
                <TouchableOpacity>
                  <Feather name="more-horizontal" size={24} color="black" />
                </TouchableOpacity>
              </View>
  )
}
const ProductCard = ({ item }:{item:Product}) => (  
  <View style={styles.card}>
    <View style={[styles.productImage]} >
      <Image source={imageMapping[item.image as keyof typeof imageMapping]} />
    </View>
    <Text numberOfLines={2} style={styles.productName}>
      {item.name}
    </Text>
    <View style={styles.ratingRow}>
      <StarRating rating={item.rating} />
      <Text style={styles.reviewCount}>({item.reviews})</Text>
    </View>
    <View style={styles.priceRow}>
      <Text style={styles.price}>{item.price.toLocaleString()}₫</Text>
      <Text style={styles.discount}>-{item.discount}%</Text>
    </View>
  </View>
);

export default function ScreenUSB() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCard item={item} />}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#38BDF8',
  },
  searchContainer: {
    flex: 1,
    marginHorizontal: 10,
    position: 'relative',
  },
  searchInput: {
    backgroundColor: 'white',
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 16,
  },
  searchIcon: {
    position: 'absolute',
    right: 12,
    top: '50%',
    transform: [{ translateY: -10 }],
  },
  cartContainer: {
    marginRight: 10,
    position: 'relative',
  },
  cartBadge: {
    position: 'absolute',
    right: -6,
    top: -6,
    backgroundColor: '#EF4444',
    borderRadius: 10,
    width: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartBadgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  listContent: {
    padding: 8,
  },
  row: {
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
    width: (windowWidth - 32) / 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  productImage: {
    height: 120,
    objectFit: 'contain',
    borderRadius: 4,
    marginBottom: 8,
  },
  productName: {
    fontSize: 14,
    marginBottom: 4,
    lineHeight: 18,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
  },
  reviewCount: {
    marginLeft: 4,
    color: '#666',
    fontSize: 12,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  discount: {
    color: '#EF4444',
    fontSize: 12,
  },
});