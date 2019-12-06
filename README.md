# userAvatar

# React Native User Avatar

## Note : Any wrong prop(s) or value passed to the component leads to the default value(s).
For more detail refer below guide.

## Installation

`npm install --save react-native-avatar-generator` or `yarn add react-native-avatar-generator`

## Usage
## How to use ? :thinking:	

```jsx
import React from 'react';
import {View, StyleSheet} from 'react-native';
import UserAvatar from 'react-native-avatar-generator';

 export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      
        <UserAvatar
          size={100}
          fontWeight="bold"
          color="#FFFFFF"
          backgroundColor="red"
          firstName="Rakesh"
          lastName="Vanam"
        />
        
        <View style={{margin: 10}}>
          <UserAvatar
            size={50}
            fontWeight="noraml"
            color="white"
            backgroundColor="#0033CC"
            firstName="John"
            lastName="Doe"
          />
        </View>

        <UserAvatar
          imageSource={require('./images/avatar.png')}
          showImage={true}
          size={70}
        />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

```

#  Props :)
### Hey you can get more props for your userAvatar component and customize it with your choice of filter.

### List of props that you can use :-
**#**|**Props**|**Expected Value**|**Default Value**|**Example**
-----|-----|-----|-----|-----
1|imageSource|Any valid require('../image.png') path|*U* userAvatar|imageSource={require('./images/avatar.png')}
2|showImage|true or false|false|showImage={true}
3|size|Any valid number without any unit|50|size=100
4|backgroundColor|Any valid color in hex code or color name |orange|backgroundColor=#FF5733
5|color|Any valid color in hex code or color name|#FFFFFF|color=red
6|fontWeight|normal | bold | normal|fontEeight=normal
7|firstName|Any valid First Name|U|firstName=Rakesh
8|lastName|Any valid Last Name|U|lastName=Vanam

### Screenshots :
![screenshots](screenshots/screenshots.png)




