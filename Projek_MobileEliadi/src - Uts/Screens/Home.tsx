import { useLinkProps } from '@react-navigation/native';
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from './router';

type HomeProps = {
  navigation: NativeStackNavigationProp<StackParamList, 'Home'>;
};

const Home: React.FC<HomeProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>Toko Salad Sukabumi</Text>
          <Image
            source={{ uri: 'https://thumbs.dreamstime.com/z/salad-lettering-typography-hand-drawn-modern-brush-calligraphy-bar-vegan-menu-design-poster-card-print-banner-vector-154858771.jpg?ct=jpeg' }}
            style={styles.profil}
          />
        </View>
        <TextInput
          style={styles.search}
          placeholder="Halo...Selamat Datang"
          testID="search-input"
        />
        <View style={styles.search}>
          <TouchableOpacity onPress={() => navigation.navigate('Search')}><Text style={styles.search}>Cari</Text>
          </TouchableOpacity>
          </View>
        <View style={styles.banner}>
          <Image
            source={{ uri: 'https://s.alicdn.com/@sc04/kf/H9f84e6fe9d344c89b789ea3aff0fed535.jpg_720x720q50.jpg' }}
            style={styles.bannerImage}
          />
          <Text style={styles.bannerText}>Diskon Spesial Hari Ini!</Text>
          <View style={styles.promoBadge}>
          <TouchableOpacity onPress={() => navigation.navigate('Detail2')}><Text style={styles.promoText}>Promo</Text>
          </TouchableOpacity>
          </View>
        </View>
        <View style={styles.scrollmenu}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          </ScrollView>
        </View>
        <View style={styles.cards}>
          <View style={styles.card}>
            <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
              <Image
                source={{ uri: 'https://cdn.manisdansedap.com/img_thumb_list/2023/10/07-whatsapp-image-2023-10-07-at-0946132_15_6520ca76d46dd.jpeg' }}
                style={styles.cardImage}
                testID="promo-image"
              />
              <Text style={styles.cardTitle}>Salad Buah</Text>
              <Text style={styles.cardPrice}>Rp25.000</Text>
              <View style={styles.addButton}>
                <Text style={styles.addButtonText}>+</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.card}>
            <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
              <Image
                source={{ uri: 'https://img.okezone.com/content/2021/01/11/298/2342690/resep-salad-sayur-saus-mayo-untuk-menu-sarapan-sehat-dan-praktis-I9i5Mw2zxK.jpg' }}
                style={styles.cardImage}
              />
              <Text style={styles.cardTitle}>Salad sayur</Text>
              <Text style={styles.cardPrice}>Rp20.000</Text>
              <View style={styles.addButton}>
                <Text style={styles.addButtonText}>+</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.card}>
            <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
              <Image
                source={{ uri: 'https://www.ruparupa.com/blog/wp-content/uploads/2021/12/Screen-Shot-2021-12-23-at-17.02.58.png' }}
                style={styles.cardImage}
              />
              <Text style={styles.cardTitle}>minuman</Text>
              <Text style={styles.cardPrice}>Rp22.000</Text>
              <View style={styles.addButton}>
                <Text style={styles.addButtonText}>+</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.card}>
            <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
              <Image
                 source={{ uri: 'https://cdngnfi2.sgp1.digitaloceanspaces.com/gnfi/uploads/articles/buah-buahan-8a171c1ec2f3f94597e4f8c2a50a64d0.jpg' }}
                style={styles.cardImage}
              />
              <Text style={styles.cardTitle}>Buah Asli</Text>
              <Text style={styles.cardPrice}>Rp15.000</Text>
              <View style={styles.addButton}>
                <Text style={styles.addButtonText}>+</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      {/* Removed the navbar section */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFA500',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
  },
  profil: {
    width: 70,
    height: 70,
    borderRadius: 25,
  },
  search: {
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    marginHorizontal: 15,
    paddingHorizontal: 10,
    height: 40,
    marginVertical: 10,
  },
  banner: {
    margin: 15,
    borderRadius: 10,
    overflow: 'hidden',
  },
  bannerImage: {
    width: '100%',
    height: 180,
  },
  bannerText: {
    color: 'black',
    fontSize: 28,
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 15,
    left: 15,
  },
  promoBadge: {
    position: 'absolute',
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 10,
    top: 10,
    left: 10,
  },
  
  promoText: {
    color: 'white',
    fontSize:12,
    fontWeight: 'bold',
  },
  scrollmenu: {
    marginHorizontal: 15,
    marginVertical: 10,
  },
  menuButton: {
    backgroundColor: '#fff',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginRight: 10,
  },
  menuButtonActive: {
    backgroundColor: '#4CAF50',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginRight: 10,
  },
  menuButtonText: {
    color: '#333',
  },
  menuButtonTextActive: {
    color: '#fff',
  },
  cards: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  card: {
    backgroundColor: '#fff',
    width: '48%',
    borderRadius: 10,
    marginBottom: 15,
    padding: 10,
  },
  cardImage: {
    width: '100%',
    height: 120,
    borderRadius: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
  cardPrice: {
    color: '#4CAF50',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 5,
  },
  addButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 20,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 10,
    bottom: 10,
  },
  addButtonText: {
    color: 'white',
    fontSize: 18,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 60,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderColor: '#e0e0e0',
  },
  navIcon: {
    width: 26,
    height: 26,
  },
});

export default Home;
