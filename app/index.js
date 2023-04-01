import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import users from "../assets/data/users";

const user = users[0];

export default function Page() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: user.coverImage }}
        style={styles.userCard}
      >
        <View style={styles.overlay} />
        {/*Image*/}
        <Image style={styles.userImage} src={user.avatar} />

        {/*Name & Handle*/}
        <View>
          <Text style={{ color: "white", fontSize: 22, fontWeight: "500" }}>
            {user.name}
          </Text>
          <Text style={{ color: "white" }}>@{user.handle}</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 75,
  },
  userCard: {
    backgroundColor: "gray",
    padding: 10,
    flexDirection: "row",
    alignItems: "flex-end",
    borderRadius: 10,
    overflow: "hidden",
  },
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
    borderColor: "white",
    borderWidth: 3,
    marginRight: 20,
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
    ...StyleSheet.absoluteFillObject,
  },
});
