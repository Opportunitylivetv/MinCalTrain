'use strict';

var React = require('react-native');
var {
  AppRegistry,
  Navigator,
} = React;

var Routes = require('../constants/Routes');
var DepartureSelectView = require('../views/DepartureSelectView');
var ArrivalSelectView = require('../views/ArrivalSelectView');
var TimesView = require('../views/TimesView');

var INITIAL_ROUTE = Routes.SELECT_DEPARTURE;

var MinCalTrain = React.createClass({

  _renderScene: function(route, navigator) {
    switch (route.id) {
      case Routes.SELECT_DEPARTURE:
        return <DepartureSelectView navigator={navigator} />;
      case Routes.SELECT_ARRIVAL:
        return <ArrivalSelectView navigator={navigator} />;
      case Routes.TIMES:
        return <TimesView navigator={navigator} />;
    }
    throw new Error('No route found for ' + route.id);
  },

  render: function() {
    return (
      <Navigator
        initialRoute={Routes.getRouteForID(INITIAL_ROUTE)}
        renderScene={this._renderScene}
      />
    );
  },

});

AppRegistry.registerComponent('MinCalTrain', () => MinCalTrain);