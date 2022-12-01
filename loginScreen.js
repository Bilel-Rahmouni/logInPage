import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  TextInput,
  Pressable,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";

const loginScreen = () => {
  const [text, textState] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text>LOGO</Text>
      </View>

      <View style={styles.loginContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.emailInput}
            value={text}
            placeholder={"phone number or email"}
            onChangeText={(text) => setEmail(text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            value={text}
            placeholder={"password"}
            secureTextEntry={hidePassword ? true : false}
            onChangeText={(text) => setPassword(text)}
          />
          <Pressable
            style={styles.icon}
            onPress={() => setHidePassword(!hidePassword)}
          >
            <Entypo
              name={hidePassword ? "eye-with-line" : "eye"}
              size={26}
              color="black"
            />
          </Pressable>
        </View>
        <View style={styles.forgotPW}>
          <Pressable onPress={() => console.log("forgot psw")}>
            <Text style={styles.forgotPWText}>forgot password?</Text>
          </Pressable>
        </View>
        <TouchableWithoutFeedback onPress={() => console.log(email, password)}>
          <View style={styles.loginButton}>
            <Text style={styles.loginText}>Login</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.continueWith}>
        <Text>Continue with</Text>
      </View>
      <View style={styles.fbAndGoogleLoginContainer}>
        <Pressable onPress={() => console.log("facebook")}>
          <Image
            style={styles.fbAndGoogleLoginLogo}
            source={require("../assets/facebook.png")}
          />
        </Pressable>
        <Pressable onPress={() => console.log("google")}>
          <Image
            style={styles.fbAndGoogleLoginLogo}
            source={require("../assets/google.png")}
          />
        </Pressable>
        <Pressable onPress={() => console.log("email")}>
          <MaterialCommunityIcons
            name="email-outline"
            size={50}
            color="black"
          />
        </Pressable>
      </View>
    </View>
  );
};

export default loginScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    //backgroundColor: "green",
  },
  logoContainer: {
    width: "100%",
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: "blue",
  },
  loginContainer: {
    width: "100%",
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: "red",
    marginBottom: 20,
  },
  fbAndGoogleLoginContainer: {
    width: "100%",
    height: "10%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    //backgroundColor: "yellow",
    marginTop: 50,
  },
  emailInput: {
    height: 50,
    width: "100%",
    //backgroundColor: "lightblue",
  },
  textInput: {
    height: 50,
    width: "90%",
    //backgroundColor: "lightblue",
  },

  inputContainer: {
    padding: 3,
    width: "90%",
    margin: 5,
    borderWidth: 1,
    borderColor: "grey",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    //paddingBottom: 10,
    //backgroundColor: "yellow",
    borderRadius: 5,
  },
  loginButton: {
    backgroundColor: "#841584",
    width: "90%",
    padding: 15,
    display: "flex",
    alignItems: "center",
  },
  loginText: { fontSize: 16, fontWeight: "600", color: "white" },
  icon: {
    //backgroundColor: "red",
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  forgotPW: {
    width: "90%",
    //backgroundColor: "green"
  },
  forgotPWText: { fontWeight: "300", textDecorationLine: "underline" },
  fbAndGoogleLoginLogo: {
    width: 50,
    height: 50,
    borderRadius: 500,
    justifyContent: "center",
    alignItems: "center",
  },
  continueWith: {
    marginTop: 40,
    //backgroundColor: "purple"
  },
});
