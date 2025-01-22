import { View, Text, TextInput, Pressable, FlatList, Animated } from 'react-native';
import React, { useState, useEffect } from 'react';

interface Salad {
  id: number;
  title: string;
  status: boolean; // Mengubah 'statue' menjadi 'status'
}

const API_URL = 'https://678cfcedf067bf9e24e8e397.mockapi.io/Users/Search'; // Ganti dengan URL MockAPI Anda

const Search = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [salad, setSalad] = useState<Salad[]>([]);
  const [editId, setEditId] = useState<number>(0);
  const [editTitle, setEditTitle] = useState<string>('');

  const rotateAnim = useState(new Animated.Value(0))[0];
  const textAnim = useState(new Animated.Value(0))[0];

  useEffect(() => {
    // Mengambil data dari API saat komponen pertama kali dimuat
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setSalad(data))
      .catch(error => console.error('Error fetching data:', error));

    const rotate = Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 4000,
        useNativeDriver: true,
      })
    );
    rotate.start();

    Animated.timing(textAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();

    return () => rotate.stop();
  }, [rotateAnim]);

  const handleDelete = (deleteId: number) => {
    if (deleteId !== 0) {
      fetch(`${API_URL}/${deleteId}`, { method: 'DELETE' })
        .then(() => {
          const updatedSalad = salad.filter(item => item.id !== deleteId);
          setSalad(updatedSalad);
        })
        .catch(error => console.error('Error deleting salad:', error));
    }
  };

  const handleEdit = () => {
    if (editTitle.trim() === '') {
      return;
    } else {
      const updatedSalad = { id: editId, title: editTitle, status: false };

      // Mengirim perubahan ke API
      fetch(`${API_URL}/${editId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedSalad),
      })
        .then(response => response.json())
        .then(data => {
          setSalad(prev =>
            prev.map(item =>
              item.id === editId ? { ...item, title: editTitle } : item
            )
          );
          setEditId(0);
          setEditTitle('');
        })
        .catch(error => console.error('Error editing salad:', error));
    }
  };

  const handleStartEdit = (editId: number, currentTitle: string) => {
    setEditId(editId);
    setEditTitle(currentTitle);
  };

  const filteredSalads = salad.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={{ flex: 1, backgroundColor: '#FFBF00', padding: 20 }}>
      <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 20, textAlign: 'center', color: '#333' }}>
        Temukan solusi terbaik untuk kebutuhan Anda
      </Text>

      <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
        <Animated.Image
          source={{ uri: 'https://citrariasya.wordpress.com/wp-content/uploads/2016/09/evidence-search.jpg' }}
          style={{
            width: 80,
            height: 90,
            transform: [
              { rotate: rotateAnim.interpolate({ inputRange: [0, 1], outputRange: ['0deg', '360deg'] }) }
            ],
          }}
        />
      </View>

      <Animated.Text
        style={{
          fontSize: 16,
          color: '#333',
          fontWeight: '600',
          marginBottom: 10,
          textAlign: 'center',
          opacity: textAnim,
        }}
      >
        Hidup Sehat Mengonsumsi makanan bergizi yang mencakup sayuran, buah-buahan yang segar
      </Animated.Text>

      <TextInput
        style={{
          borderColor: '#ccc',
          backgroundColor: 'white',
          color: '#333',
          paddingHorizontal: 15,
          paddingVertical: 10,
          borderWidth: 1,
          borderRadius: 8,
          fontSize: 16,
          marginBottom: 20,
        }}
        placeholder="Cari salad"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <FlatList
        data={filteredSalads}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: '#fff',
              padding: 15,
              marginBottom: 10,
              borderRadius: 8,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.1,
              shadowRadius: 3,
              elevation: 2,
            }}>
            {item.id === editId ? (
              <TextInput
                style={{
                  flex: 1,
                  borderColor: '#ccc',
                  color: '#333',
                  backgroundColor: 'white',
                  padding: 10,
                  borderWidth: 1,
                  borderRadius: 8,
                  fontSize: 16,
                }}
                value={editTitle}
                onChangeText={setEditTitle}
              />
            ) : (
              <Text style={{ color: '#333', fontSize: 18, flex: 1 }}>{item.title}</Text>
            )}

            <View style={{ flexDirection: 'row', marginLeft: 10 }}>
              {item.id === editId ? (
                <Pressable
                  style={{
                    backgroundColor: '#007bff',
                    paddingHorizontal: 15,
                    paddingVertical: 10,
                    borderRadius: 8,
                    marginRight: 8,
                  }}
                  onPress={handleEdit}>
                  <Text style={{ color: 'white', fontSize: 16 }}>Save</Text>
                </Pressable>
              ) : (
                <Pressable
                  style={{
                    backgroundColor: '#ffc107',
                    paddingHorizontal: 15,
                    paddingVertical: 10,
                    borderRadius: 8,
                    marginRight: 8,
                  }}
                  onPress={() => handleStartEdit(item.id, item.title)}>
                  <Text style={{ color: 'white', fontSize: 16 }}>Edit</Text>
                </Pressable>
              )}
              <Pressable
                style={{
                  backgroundColor: '#dc3545',
                  paddingHorizontal: 15,
                  paddingVertical: 10,
                  borderRadius: 8,
                }}
                onPress={() => handleDelete(item.id)}>
                <Text style={{ color: 'white', fontSize: 16 }}>Delete</Text>
              </Pressable>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Search;
