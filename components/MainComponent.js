import React, { Component } from 'react';
import Recipes from './RecipesComponent';
//import { RECIPES } from '../shared/recipes';
import RecipeInfo from './RecipeInfoComponent';
import Home from "./HomeComponent";
import About from "./AboutComponent";
import Contact from "./ContactComponent";
import { View, Platform, StyleSheet, Image } from 'react-native';
import { createStackNavigator } from "react-navigation-stack";
import { Icon } from "react-native-elements";
//import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";

const RecipesNavigator = createStackNavigator(
  {
    Recipes: {
      screen: Recipes,
      navigationOptions: () => ({
        headerLeft: (
          <Icon name="spoon" type="font-awesome" iconStyle={styles.stackIcon} />
        ),
        headerRight: (
          <Image
            style={{ width: 80, height: 50, margin: 20 }}
            source={require("./images/dish-tales-logo.jpg")}
          />
        ),
      }),
    },
    RecipeInfo: {
      screen: RecipeInfo,
      navigationOptions: () => ({
        headerRight: (
          <Image
            style={{ width: 80, height: 50, margin: 20 }}
            source={require("./images/dish-tales-logo.jpg")}
          />
        ),
      }),
    },
  },
  {
    initialRouteName: "Recipes",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#f58742",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff",
      },
    },
  }
);

const HomeNavigator = createStackNavigator(
  {
    Home: { screen: Home },
  },
  {
    defaultNavigationOptions: () => ({
      headerStyle: {
        backgroundColor: "#f58742",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff",
      },
      headerLeft: (
        <Icon name="home" type="font-awesome" iconStyle={styles.stackIcon} />
      ),
      headerRight: (
        <Image
          style={{ width: 80, height: 50, margin: 20 }}
          source={require("./images/dish-tales-logo.jpg")}
        />
      ),
    }),
  }
);

const AboutNavigator = createStackNavigator(
  {
    About: { screen: About },
  },
  {
    defaultNavigationOptions: () => ({
      headerStyle: {
        backgroundColor: "#f58742",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff",
      },
      headerLeft: (
        <Icon name="info" type="font-awesome" iconStyle={styles.stackIcon} />
      ),
      headerRight: (
        <Image
          style={{ width: 80, height: 50, margin: 20 }}
          source={require("./images/dish-tales-logo.jpg")}
        />
      ),
    }),
  }
);

const ContactNavigator = createStackNavigator(
  {
    Contact: { screen: Contact },
  },
  {
    defaultNavigationOptions: () => ({
      headerStyle: {
        backgroundColor: "#f58742",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff",
      },
      headerLeft: (
        <Icon
          name="address-card"
          type="font-awesome"
          iconStyle={styles.stackIcon}
        />
      ),
      headerRight: (
        <Image
          style={{ width: 80, height: 50, margin: 20 }}
          source={require("./images/dish-tales-logo.jpg")}
        />
      ),
    }),
  }
);


const MainNavigator = createBottomTabNavigator(
  {
    Home: { screen: HomeNavigator },
    Recipes: { screen: RecipesNavigator },
    About: { screen: AboutNavigator},
    Home: { screen: HomeNavigator,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({tintColor}) => (
          <Icon name="home" type="font-awesome" color={tintColor} size={24} />
        )
      }
     },
    Recipes: { screen: RecipesNavigator,
      navigationOptions: {
        tabBarLabel: "Recipes",
        tabBarIcon: ({tintColor}) => (
          <Icon name="spoon" type="font-awesome" color={tintColor} size={24} />
        )
      }
     },
    About: { screen: AboutNavigator,
      navigationOptions: {
        tabBarLabel: "About",
        tabBarIcon: ({tintColor}) => (
          <Icon name="info" type="font-awesome" color={tintColor} size={24} />
        )
      }
     },
    Contact: { screen: ContactNavigator,
      navigationOptions: {
        tabBarLabel: "Contact",
        tabBarIcon: ({tintColor}) => (
          <Icon name="address-card" type="font-awesome" color={tintColor} size={24} />
        )
      }
     },
  },
  {
    tabBarOptions: {
      activeTintColor: "#e91e63",
      activeBackgroundColor: "#fff",
      style: {
        backgroundColor: "#f5e0d3",
      },
      labelStyle: {
        fontSize: 18,
      },
    },
  }
);

const AppNavigator = createAppContainer(MainNavigator);


class Main extends Component {
    /*constructor(props) {
        super(props);
        this.state = {
            recipes: RECIPES,
            selectedRecipe: null
        };
    }*/

    //onRecipeSelect(recipeId) {
        //this.setState({selectedRecipe: recipeId})
   // }

    render() {
        return ( 
        <View
            style={{
                flex: 1,
                paddingTop: Platform.OS === "ios" ? 0 : Expo.Constants.statusBarHeight
            }}
        >

            <AppNavigator />
           {/* <Recipes 
                recipes={this.state.recipes} 
                onPress={recipeId => this.onRecipeSelect(recipeId)}
            />
            <RecipeInfo
                recipe={this.state.recipes.filter(recipe => recipe.id === this.state.selectedRecipe)[0]}
           />*/}
        </View>
        )
    }
}

const styles = StyleSheet.create({
  stackIcon: {
    marginLeft: 10,
    color: "#fff",
    fontSize: 24
  }
})

export default Main;