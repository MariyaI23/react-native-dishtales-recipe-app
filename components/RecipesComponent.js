import React, { Component} from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { RECIPES } from "../shared/recipes";
import { baseUrl } from "../shared/baseUrl";

class Recipes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            recipes: RECIPES
        };
    }

    static navigationOptions = {
        title: "Recipes"
    };

    render() {
      const { navigate } = this.props.navigation;
      const renderRecipeItem = ({ item }) => {
        return (
          <ListItem
            title={item.name}
            subtitle={item.directions}
            onPress={() => navigate("RecipeInfo", { recipeId: item.id})}
            //leftAvatar={{ source: require("./images/crepes.jpg") }}
            leftAvatar={{source: {uri: baseUrl + item.image}}}
          />
        );
      };

      return (
        <FlatList
          data={this.state.recipes}
          renderItem={renderRecipeItem}
          keyExtractor={(item) => item.id.toString()}
        />
      );
    }
}

export default Recipes;