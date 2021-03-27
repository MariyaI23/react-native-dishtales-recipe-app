import React, { Component } from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import { Card } from "react-native-elements";
//import { RECIPES } from "../shared/recipes";
import { BREAKFASTS } from "../shared/featuredBreakfasts";
import { LUNCHES } from "../shared/featuredLunches";
import { DINNERS } from "../shared/featuredDinners";
import { baseUrl } from "../shared/baseUrl";


function RenderItem({item}) {
    if (item) {
        return (
          <Card
            featuredTitle={item.name}
            //image={require("./images/strawberry-breakfast-pastries.jpg")}
            image={{uri: baseUrl + item.image}}
          >
            
            <Text style={{ margin: 10, fontWeight: "bold" }}>Servings: </Text>
            <Text style={{margin: 10}}>{item.servings}</Text>
            <Text style={{ margin: 10, fontWeight: "bold" }}>Ingredients:</Text>
            <Text style={{ margin: 10 }}>
              {item.ingredients.split(", ").join("\n")}
            </Text>
            <Text style={{ margin: 10, fontWeight: "bold" }}>Directions: </Text>
            <Text style={{margin: 10}}>{item.directions}</Text>
          </Card>
        );
    }
    return <View />
}

class Home extends Component {
     constructor(props) {
         super(props);
         this.state={
            // recipes: RECIPES,
             breakfasts: BREAKFASTS,
             lunches: LUNCHES,
             dinners: DINNERS
         }
     }

    static navigationOptions = {
        title: "Home"
    }



    render() {
        return (
          <ScrollView>
            <View style={styles.featuredItem}>
              <Text style={styles.featuredText}>Featured Breakfast</Text>
            </View>
            <RenderItem
              item={
                this.state.breakfasts.filter(
                  (breakfast) => breakfast.featured
                )[0]
              }
            />
            <View style={styles.featuredItem}>
              <Text style={styles.featuredText}>Featured Lunch</Text>
            </View>
            <RenderItem
              item={this.state.lunches.filter((lunch) => lunch.featured)[0]}
            />
            <View style={styles.featuredItem}>
              <Text style={styles.featuredText}>Featured Dinner</Text>
            </View>
            <RenderItem
              item={this.state.dinners.filter((dinner) => dinner.featured)[0]}
            />
          </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
  featuredItem: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
    margin: 20,
    padding: 20,
    backgroundColor: "#f5e0d3",
  },
  featuredText: {
    fontSize: 20,
    fontWeight: "400",
  },
});

export default Home