import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import ListingScreen from "../../screens/listingScreen/ListingScreen";
import ListingEditScreen from "../../screens/listingEditScreen/ListingEditScreen";
import Account from "../../screens/account/Account";
import FeedNavigator from "../feed/FeedNavigator";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: "tomato",
      activeTintColor: "white",
      inactiveBackgroundColor: "grey",
      inactiveTintColor: "white"
    }}
  >
    <Tab.Screen name="FeedNavigator" component={FeedNavigator}/>
    <Tab.Screen name="ListingEditScreen" component={ListingEditScreen}/>
    <Tab.Screen name="Account" component={Account}/>

  </Tab.Navigator>
)
export default AppNavigator;