import { Redirect } from "expo-router";

const Home = () => {
  const isSignedIn = false;
  if (isSignedIn) {
    return <Redirect href="/(root)/(tabs)/home" />;
  }
  return <Redirect href="/(auth)/welcome" />;
};

export default Home;
