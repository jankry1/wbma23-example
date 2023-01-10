import { StatusBar } from 'expo-status-bar';
import { FlatList, Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={mediaArray}
        renderItem = {(item) => {
          return (
            <TouchableOpacity>
              <Image
              style={{width:100, height:100}}
              source={{uri: item.thumbnail}}
              />
              <View>
                <Text>{item.title}</Text>
                <Text>{item.description}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
        />
      <StatusBar style="auto" />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
