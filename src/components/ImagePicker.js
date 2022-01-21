import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const IamgePickerComp = () => {
  const [imageUri, setImageUri] = useState();
  const chooseImage = () => {
    let options = {
      storageOptions: {
        path: 'image',
        mediaType: 'photo',
      },

      quality: 1,
      includeBase64: true,
    };

    // launchCamera(options, response => {
    //   if (response.didCancel) {
    //     alert('Image selection cancel');
    //   } else if (response.errorCode == 'permission') {
    //     alert('permission not satisfied');
    //   } else if (response.errorCode == 'others') {
    //     alert(response.errorMessage);
    //   } else {
    //     setImageUri(response);
    //   }
    // });

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        alert('Image selection cancel');
      } else if (response.errorCode == 'permission') {
        alert('permission not satisfied');
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
      } else {
        setImageUri(response.assets[0].base64);
      }
    });
  };
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        onPress={chooseImage}
        style={{backgroundColor: '#595959', padding: 10, borderRadius: 10}}>
        <Text style={{color: '#fff', fontWeight: '600', fontSize: 18}}>
          Choose Image
        </Text>
      </TouchableOpacity>
      <Image
        source={{uri: 'data:image/png;base64,' + imageUri}}
        style={{
          width: 300,
          height: 300,
          borderWidth: 1,
          borderColor: '#000',
          marginTop: 10,
        }}
      />
    </View>
  );
};

export default IamgePickerComp;
