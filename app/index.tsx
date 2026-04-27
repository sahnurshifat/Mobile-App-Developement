import { View, Text, Image, ScrollView, ImageBackground} from "react-native";

const logoImg = require("@/assets/images/emoji4.png")
const bgImg = require("@/assets/images/emoji1.png")

export default function Index() {
  return (
    <ScrollView style= {{flex:1}}>
    <View style={{ flex: 2, backgroundColor: "black" , padding: 50}}>
      <ImageBackground source={bgImg} style = {{flex: 1, justifyContent: "center", alignContent: "center"}}/>

      <View style={{ width: 200, height: 200, backgroundColor: "yellow"}} >
      </View>

      <View style={{ width: 200, height: 200, backgroundColor: "green", margin: 50}} >
      </View>
      <Text>
        <Text style={{color:"white"}}>Shifat</Text>
      </Text>
      <Image source={logoImg} style={{width: 200, height: 200}}/>
       <Image source={{uri:"https://picsum.photos/200"}} style={{width: 200, height: 200}}/>
    </View>
</ScrollView>
  );

}
 