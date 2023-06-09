import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";

export default function UserCard({ user }) {
  return (
    <ImageBackground source={{ uri: user.coverImage }} style={styles.userCard}>
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
  );
}

const styles = StyleSheet.create({
  userCard: {
    backgroundColor: "gray",
    padding: 10,
    flexDirection: "row",
    alignItems: "flex-end",
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 5,
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
