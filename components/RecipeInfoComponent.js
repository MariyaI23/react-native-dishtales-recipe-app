import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { RECIPES } from "../shared/recipes";
import { baseUrl } from "../shared/baseUrl";

function RenderRecipe(props) {

    const {recipe} = props;
    if (recipe) {
        return (
          <ScrollView>
            <Card
              featuredTitle={recipe.name}
              //image={require("./images/tacos.jpg")}
              image={{ uri: baseUrl + recipe.image }}
            >
              <Icon
                name={props.favorite ? "heart" : "heart-o"}
                type="font-awesome"
                color="#f50"
                raised
                reverse
                onPress={() =>
                  props.favorite
                    ? console.log("Already set as a favorite")
                    : props.markFavorite()
                }
              />
              <Text style={{ margin: 10, fontWeight: "bold" }}>Servings: </Text>
              <Text style={{ margin: 10 }}>{recipe.servings}</Text>
              <Text style={{ margin: 10, fontWeight: "bold" }}>
                Ingredients:
              </Text>
              <Text style={{ margin: 10 }}>
                {recipe.ingredients.split(", ").join("\n")}
              </Text>
              <Text style={{ margin: 10, fontWeight: "bold" }}>
                Directions:
              </Text>
              <Text style={{ margin: 10 }}>{recipe.directions}</Text>
            </Card>
          </ScrollView>
        );
    }
    return <View />;
}

class RecipeInfo extends Component { 

    constructor(props){
        super(props);
        this.state = {
            recipes: RECIPES,
            favorite: false
        }
    }

    markFavorite() {
        this.setState({favorite: true});
    }

    static navigationOptions = {
        title: "Recipe Information"
    }

    render() {
        const recipeId = this.props.navigation.getParam("recipeId");
        const recipe = this.state.recipes.filter(recipe => recipe.id === recipeId)[0];
        return <RenderRecipe recipe={recipe} 
            favorite={this.state.favorite}
            markFavorite={() => this.markFavorite()}
        />;
    }
}

export default RecipeInfo;