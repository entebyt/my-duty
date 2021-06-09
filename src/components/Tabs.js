import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

export default class Tabs extends Component {
  state = {tabIndex: 0};
  render() {
    const {
      tabsContainerStyle = defaultStyles.defaultTabsContainerStyle,
      selectedTabStyle = defaultStyles.selectedTabStyle,
      tabStyle = defaultStyles.defaultTabStyle,
      tabTextStyle = defaultStyles.defaultTabTextStyle,
      tabs,
      scrollable,
    } = this.props;

    return (
      <>
        {scrollable ? (
          <ScrollView horizontal contentContainerStyle={{paddingBottom: 8}}>
            {tabs.map((tab: any, index: Number) => (
              <TouchableOpacity
                disabled={index == this.state.tabIndex}
                style={[
                  tabStyle,
                  this.state.tabIndex === index && selectedTabStyle,
                ]}
                onPress={() => {
                  this.setState({tabIndex: index});
                  tab.function(index);
                }}>
                <Text style={tabTextStyle}>{tab.title}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        ) : (
          <View style={tabsContainerStyle}>
            {tabs.map((tab, index) => (
              <TouchableOpacity
                disabled={index == this.state.tabIndex}
                style={[
                  tabStyle,
                  this.state.tabIndex === index && selectedTabStyle,
                ]}
                onPress={() => {
                  this.setState({tabIndex: index});
                  tab.function(index);
                }}>
                <Text style={tabTextStyle}>{tab.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </>
    );
  }
}
const defaultStyles = StyleSheet.create({
  defaultTabsContainerStyle: {flexDirection: 'row'},
  defaultTabStyle: {
    padding: 8,
    marginRight: 24,
    backgroundColor: '#fff',
    borderRadius: 12,
    opacity: 0.6,
  },
  selectedTabStyle: {opacity: 1},
  defaultTabTextStyle: {fontSize: 12, fontWeight: 'bold'},
});
