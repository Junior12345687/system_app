import React, { useState } from 'react';
import { View, Text, Button, Image } from 'react-native';
import * as FaceDetector from 'expo-face-detector';

const App = () => {
  const [face, setFace] = useState(null);

  const detectFaces = async () => {
    const faces = await FaceDetector.detectFacesAsync(
      require('./assets/profile.jpg')
    );
    setFace(faces[0]);
  };

  return (
    <View>
      <Text>Face Detection</Text>
      <Button title="Detect Faces" onPress={detectFaces} />
      {face && (
        <View>
          <Text>Face detected:</Text>
          <Image
            source={require('./assets/profile.jpg')}
            style={{ width: 200, height: 200 }}
          />
          <Text>
            Bounding box: {JSON.stringify(face.bounds)}
          </Text>
          <Text>
            Landmarks: {JSON.stringify(face.landmarks)}
          </Text>
        </View>
      )}
    </View>
  );
};

export default App;