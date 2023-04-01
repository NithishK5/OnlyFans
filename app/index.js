import { StyleSheet, View } from "react-native";
import users from "../assets/data/users";
import UserCard from "../src/components/UserCard";

export default function Page() {
  return (
    <View style={styles.container}>
      <UserCard user={users[0]} />
      <UserCard user={users[1]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 75,
  },
});
