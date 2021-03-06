var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
} = React;

var Colors = require('../constants/Colors');
var BackgroundCoverImageView = require('../views/BackgroundCoverImageView');

var BackgroundCoverView = React.createClass({

  propTypes: {
    imageName: React.PropTypes.string.isRequired,
  },

  render: function() {
    return (
      <View style={styles.backgroundContainer}>
        <BackgroundCoverImageView imageName={this.props.imageName} />
        <View style={styles.metaContainer}>
          {this.props.children}
        </View>
      </View>
    );
  },

});

var styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
  },
  metaContainer: {
    flex: 1,
    opacity: 0.9,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
  },
});

module.exports = BackgroundCoverView;
