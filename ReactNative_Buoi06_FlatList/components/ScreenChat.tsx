import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
const ScreenChat = () => {
    type Product = {
        id: string;
        name: string;
        shop: string;
        image: string;
      }
      const [products, setProducts] = useState<Product[]>([]);
    
      const Header: React.FC = () => {
        return (
          <View style={styles.headerContainer}>
            <TouchableOpacity>
            <Ionicons name="arrow-back-outline" size={24} color="white" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Chat</Text>
            <TouchableOpacity>
              <FontAwesome name="shopping-cart" size={24} color="white" />
            </TouchableOpacity>
          </View>
        );
      };
    
      const Footer: React.FC = () => {
        return (
          <View style={styles.footerContainer}>
            <TouchableOpacity style={styles.footerButton}>
              <FontAwesome name="home" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerButton}>
              <FontAwesome name="shopping-cart" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerButton}>
              <FontAwesome name="user" size={24} color="white" />
            </TouchableOpacity>
          </View>
        );
      };
    
      const imageMapping = {
        './assets/ca_nau_lau.png': require('../assets/ca_nau_lau.png'),
        './assets/ga_bo_toi.png': require('../assets/ga_bo_toi.png'),
        './assets/xe_can_cau.png': require('../assets/xe_can_cau.png'),
        './assets/do_choi_dang_mo_hinh.png': require('../assets/do_choi_dang_mo_hinh.png'),
        './assets/lanh_dao_gian_don.png': require('../assets/lanh_dao_gian_don.png'),
        './assets/hieu_long_con_tre.png': require('../assets/hieu_long_con_tre.png'),
        './assets/trump 1.png': require('../assets/trump 1.png'),
      };
       const getData = async ()=>{
          const response = await fetch("https://66fa554aafc569e13a9b4600.mockapi.io/api/products/products")
          const productsFetch = await response.json()
          setProducts(productsFetch)
       }
      useEffect(()=>{
        getData();
      },[])
      const renderProduct = ({ item }: { item: Product }) => (
        <View style={styles.productCard}>
          <Image source={imageMapping[item.image as keyof typeof imageMapping]} style={styles.productImage} />
          <View style={styles.productInfo}>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.shopName}>{item.shop}</Text>
          </View>
          <TouchableOpacity style={styles.chatButton}>
            <Text style={styles.chatButtonText}>Chat</Text>
          </TouchableOpacity>
        </View>
      );
    
      return (
        <SafeAreaView style={styles.safeContainer}>
          <Header />
          <View style={{padding: 10, backgroundColor: "#e5e5e5"}}>
            <Text>Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với shop!</Text>
          </View>
          <View style={styles.content}>
            <FlatList
              data={products}
              renderItem={renderProduct}
              keyExtractor={(item) => item.id}
              contentContainerStyle={styles.containerProduct}
            />
          </View>
          {/* <Footer /> */}
        </SafeAreaView>
      );
}

const styles = StyleSheet.create({
    safeContainer: {
      flex: 1, // Quan trọng để container bao phủ toàn bộ màn hình
    },
    content: {
      flex: 1, // Đảm bảo nội dung chính (FlatList) chiếm khoảng trống giữa Header và Footer
    },
    containerProduct: {
      padding: 10,
      backgroundColor: '#f8f8f8',
    },
    productCard: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 15,
      backgroundColor: '#fff',
      padding: 10,
      borderRadius: 8,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 1 },
      shadowRadius: 5,
      elevation: 3,
    },
    productImage: {
      width: 60,
      height: 60,
      borderRadius: 8,
    },
    productInfo: {
      flex: 1,
      marginLeft: 10,
    },
    productName: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    shopName: {
      fontSize: 14,
      color: '#888',
    },
    chatButton: {
      backgroundColor: '#FF3B30',
      paddingVertical: 10,
      paddingHorizontal: 15,
      // borderRadius: 5,
    },
    chatButtonText: {
      color: '#fff',
      fontSize: 14,
      fontWeight: 'bold',
    },
    headerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#00AEEF', // Màu xanh của header
      padding: 10,
    },
    headerTitle: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
    },
    // Styles cho Footer
    footerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      backgroundColor: '#00AEEF', // Màu xanh của footer
      paddingVertical: 10,
    },
    footerButton: {
      alignItems: 'center',
    },
  });
export default ScreenChat;