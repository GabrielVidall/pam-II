import React from "react";
import {View, Text, Image, ScrollView, TextInput} from 'react-native';

const Pokemon = () => {
  return (
    <ScrollView>

    <View>
    <Text 
    style = {{
      fontSize: 45,
      alignSelf: "center",
      color: "green",
    }}
>
Maior clube do Brasil !! 
</Text>
<Image
source={{
  uri: 'https://logodownload.org/wp-content/uploads/2015/05/palmeiras-logo-4.png',

}}
  style = {{ width: 200, height: 210, alignSelf: "center"}}

  />

    </View>

    <TextInput
    style = {{
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      padding: 5,
      margin: 15,
    }}
    defaultValue="Digite aqui!"
    />
    </ScrollView>
  );
}

export default Pokemon; 
