var assign = require('object-assign');
var React = require('react-native');
var {
  ScrollView,
  StyleSheet,
  Text,
  View,
} = React;

var AppViews = require('../views/AppViews');
var {
  HeaderSpacer,
} = AppViews;
var Colors = require('../constants/Colors');
var Emoji = require('../constants/Emoji');
var Routes = require('../constants/Routes');
var StationSelectView = require('../views/StationSelectView');
var TripActions = require('../actions/TripActions');
var TripStore = require('../stores/TripStore');
var Stations = require('../constants/Stations');

var ArrivalSelectView = React.createClass({

  propTypes: {
    navigator: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      <View>
        <HeaderSpacer />
        <View style={styles.departingContainer}>
          {this.renderDeparting()}
        </View>
        <View style={styles.callToAction}>
          <Text style={styles.callToActionText}>
            Arriving to?
          </Text>
          <Text style={styles.emojiText}>
            {Emoji.LOVE_HOTEL}
            {Emoji.END}
          </Text>
        </View>
        <StationSelectView
          omitStation={TripStore.getDepartureStationID()}
          onStationSelect={(stationID) => {
            TripActions.selectArrival(stationID);
            this.props.navigator.push(
              Routes.getRouteForID(Routes.TIMES)
            );
          }}
        />
      </View>
    );
  },

  renderDeparting: function() {
    var departureID = TripStore.getDepartureStationID();
    return (
      <Text style={styles.departingText}>
        Sweet, you{"'"}re leaving from
        {' ' + Stations.getStationName(departureID)}
      </Text>
    );
  },

});

var styles = StyleSheet.create({
  departingContainer: {
    backgroundColor: Colors.DEEPER,
    padding: 12,
    paddingTop: 12,
    paddingBottom: 12
  },
  departingText: {
    fontSize: 12,
    color: '#DDD'
  },
  emojiText: {
    fontSize: 20,
    position: 'absolute',
    right: 10,
    top: -6
  },
  callToAction: {
    backgroundColor: Colors.DEEPER,
    padding: 12,
    flex: 1,
    paddingTop: 0,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  callToActionText: {
    color: '#111'
  },
});

module.exports = ArrivalSelectView;