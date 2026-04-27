import { View, Text, Image} from "react-native";

const logoImg = require("@/assets/images/emoji4.png")

export default function Index() {
  return (
    <View style={{ flex: 1, backgroundColor: "black" , padding: 50}}>

      <View style={{ width: 200, height: 200, backgroundColor: "yellow", padding: 50}} ></View>

      <View style={{ width: 200, height: 200, backgroundColor: "green", padding: 50}} ></View>
      <Text>
        <Text style={{color:"white"}}>Shifat</Text>
      </Text>
      <Image source={logoImg} style={{width: 200, height: 200}}/>
    </View>
  );
}
 