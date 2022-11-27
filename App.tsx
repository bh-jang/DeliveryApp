import * as React from 'react';
import {NavigationContainer, ParamListBase} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {Modal, Pressable, Text, View} from 'react-native';
import {useCallback} from 'react';

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};
type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
type DetailsScreenProps = NativeStackScreenProps<ParamListBase, 'Details'>;

function HomeScreen({navigation}: HomeScreenProps) {
  // const onClick = useCallback(() => {
  //   navigation.navigate('Details');
  // }, [navigation]);

  const [show, setShow] = React.useState(false);
  const [show2, setShow2] = React.useState(false);

  const onClick = () => {
    setShow(true);
  };

  const onClick2 = () => {
    setShow2(true);
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Pressable onPress={onClick}>
        <Text>Modal Click</Text>
      </Pressable>
      <Pressable onPress={onClick2}>
        <Text>RN Modal Click</Text>
      </Pressable>
      {show && (
        <View
          style={{
            backgroundColor: 'yellow',
            position: 'absolute',
            flex: 1,
            width: '90%',
            height: '90%',
          }}>
          <Text>Modal</Text>
        </View>
      )}
      <Modal visible={show2}>
        <View>
          <Text>RN Modal</Text>
        </View>
      </Modal>
    </View>
  );
}

function DetailsScreen({navigation}: DetailsScreenProps) {
  const onClick = useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Pressable onPress={onClick}>
        <Text>Details Screen</Text>
      </Pressable>
    </View>
  );
}
const Stack = createNativeStackNavigator<RootStackParamList>();
function App() {
  return (
    // react-navigation
    // screen당 Stack.Screen ( screen = Page )
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Overview'}}
        />
        <Stack.Screen name="Details">
          {props => <DetailsScreen {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
