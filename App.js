import * as React from 'react';
import { Button, View, StyleSheet, Image, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { WebView } from 'react-native-webview';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
  <Image style={styles.logo} source={require('./pangaea.png')}/>
    <Text style={styles.title}>Welcome to the Federation of Pangaea App</Text>
    <Text style={styles.bodycontent}> To navigate swipe the drawer open </Text>
    <Text style={styles.bodycontent}> from the left </Text>
    <Text style={styles.bodycontent}> Register in the forums to participate</Text>
    <Text style={styles.bodycontent}> as a citizen of Pangaea</Text>
    <Button
      onPress={() => navigation.navigate('Forums')} title="Go To Pangaea Forums" />
  </View>
);
}

function PangaPediaScreen ({ navigation }) {
return (
  <WebView source={{ uri: 'https://pangapedia.miraheze.org/wiki/Main_Page' }}
  style={{ marginTop: 50 }}
    />
  );
}

function DemocracyScreen ({ navigation }) {
  return (
    <WebView source={{ uri: 'https://mypangaea.boards.net/board/29/economy/' }} 
    style={{ marginTop: 50 }}
    />
  );
}

function ForumsScreen({ navigation }) {
  return (
    <WebView source={{ uri: 'https://mypangaea.boards.net/page/welcome/' }}
     style={{ marginTop: 50}}
     />
  );
}

function RegisterScreen({ navigation }) {
  return (
    <WebView source={{ uri: 'https://login.proboards.com/register/7149159/' }}
    style={{ marginTop: 50}}
    />
    );
}

function LoginScreen({ navigation }) {
  return (
    <WebView source={{ uri: 'https://login.proboards.com/login/7149159' }}
    style={{ marginTop: 50}}
    />
    );
}

function PMScreen({ navigation }) {
  return (
    <WebView source={{ uri: 'https://mypangaea.boards.net/conversations/' }}
    style={{ marginTop: 50}}
    />
  );
}

function ProfileScreen({ navigation }) {
  return (
    <WebView source={{ uri: 'https://mypangaea.boards.net/conversations/' }}
    style={{ marginTop: 50}}
    />
  );
}

function PangaTVScreen({ navigation }) {
  return (
    <WebView source={{ uri: 'https://mypangaea.boards.net/page/tv/' }}
    style={{ marginTop: 50}}
    />
  );
}


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Forums" component={ForumsScreen} />
        <Drawer.Screen name="Democracy" component={DemocracyScreen} />
        <Drawer.Screen name="Register" component={RegisterScreen} />
        <Drawer.Screen name="Login" component={LoginScreen} />
        <Drawer.Screen name="Messages" component={PMScreen} />
        <Drawer.Screen name="MyProfile" component={ProfileScreen} />
        <Drawer.Screen name="PangaPedia" component={PangaPediaScreen} />
        <Drawer.Screen name="PangaTV" component={PangaTVScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    width: 300,
    height: 300,
  },
  title: {
    fontSize: 20
  },
  bodycontent: {
    fontSize: 14
  }
});
