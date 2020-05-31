import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, Alert} from 'react-native';

function ReactClassifierApp() {
  const [pictureState, UploadPicture] = useState('Please upload a picture');
  const uploadHandler = () => {
    return Alert.alert('Upload click');
  };
  const submitHandler = () => {
    return Alert.alert('Submit click');
  };

  return (
    <View style={styles.container}>
      <View style={{flex: 1}} />
      <View style={{flex: 16}}>
        <View style={{flex: 1, flexDirection: 'column'}}>
          <View style={{flex: 1}} />
          <View style={styles.header}>
            <Text style={styles.boldText}>Cat Or Dog Classifier</Text>
            <Text>{pictureState}</Text>
          </View>
          <View style={styles.body}>
            <Text>This is The body where links will be</Text>
          </View>
          <View style={{flex: 3, flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <Button
                style={styles.button}
                title="Upload"
                onPress={uploadHandler}
              />
            </View>
            <View style={{flex: 1}}>
              <Button
                style={styles.button}
                title="Submit"
                onPress={submitHandler}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={{flex: 1}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#7f7878',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flex: 3,
    alignItems: 'center',
    backgroundColor: 'grey',
  },
  body: {
    backgroundColor: '#afa5a5',
    flex: 11,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#c1c1c1',
  },
  boldText: {
    fontWeight: 'bold',
  },
});

export default ReactClassifierApp;
