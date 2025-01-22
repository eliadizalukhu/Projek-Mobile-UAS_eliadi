import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Detail = () => {
  // Contoh data produk statis
  const product = {
    name: 'Salad Sayur dan Salad Buah',
    description: 'Beli 1 gratis 1, hanya bulan ini! Buruan, sebelum kehabisan.',
    price: 10000,
    image1: 'https://img.okezone.com/content/2021/01/11/298/2342690/resep-salad-sayur-saus-mayo-untuk-menu-sarapan-sehat-dan-praktis-I9i5Mw2zxK.jpg',
    image2: 'https://cdn.manisdansedap.com/img_thumb_list/2023/10/07-whatsapp-image-2023-10-07-at-0946132_15_6520ca76d46dd.jpeg', // Ganti dengan URL gambar yang sesuai
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Detail Produk</Text>
      
      <View style={styles.productDetail}>
        {/* Gambar pertama */}
        <Image 
          source={{ uri: product.image1 }} 
          style={styles.productImage} 
          resizeMode="cover" 
        />
        {/* Gambar kedua */}
        <Image 
          source={{ uri: product.image2 }} 
          style={styles.productImage} 
          resizeMode="cover" 
        />
        <Text style={styles.productName}>{product.name}</Text>
        <Text>{product.description}</Text>
        <Text>Harga: Rp{product.price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  productDetail: {
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#98FB98',
    alignItems: 'center', 
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10, 
  },
  productImage: {
    width: '100%', 
    height: 200, 
    borderRadius: 8, 
    marginBottom: 10, 
  },
});

export default Detail;
