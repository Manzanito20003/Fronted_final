import React, { useRef } from 'react';
import { View } from 'react-native';
import { Camera } from 'expo-camera';

export default function CameraComponent() {
  const cameraRef = useRef(null);

  const handleCameraReady = async () => {
    await cameraRef.current?.preview?.resume();
  };

  const handleTakePicture = async () => {
    const photo = await cameraRef.current?.takePictureAsync();
    console.log(photo);
  };

  return (
    <View style={{ flex: 1 }}>
        
      <Camera
        ref={cameraRef}
        style={{ flex: 1 }}
        onCameraReady={handleCameraReady}
      />
      <Button icon="camera" title="Take Picture"onPress={handleTakePicture}>
  Press me</Button>


    </View>
  );
}
