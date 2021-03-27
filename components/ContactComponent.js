import React, { Component } from "react";
import { ScrollView, Text } from "react-native";
import { Card } from "react-native-elements";


class Contact extends Component {

    static navigationOptions = {
    title: "Contact Us",
  };

    render() {
        return (
          <ScrollView>
            <Card title="Contact Us" wrapperStyle={{ margin: 10 }}>
                <Text>
                    Our Address:
                </Text>
                <Text>
                    1 Cooking Way
                </Text>
                <Text>
                    Chicago, IL 60085
                </Text>
                <Text>
                    U.S.A.
                </Text>
            </Card>
          </ScrollView>
        );
    }
}

export default Contact;