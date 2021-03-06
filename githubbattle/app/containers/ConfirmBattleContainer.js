var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var githubHelpers = require('../utils/githubHelpers');

var ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      isLoading: true,
      playersInfo: [],
    }
  },
  componentDidMount: function() {
    var query = this.props.location.query;
    var that = this;
    githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo]).then(function(players){
      that.setState({
        isLoading: false,
        playersInfo: [ players[0], players[1] ]
      })
    });
  },

  handleInitiateBattle: function () {
    this.context.router.push({
      pathname: '/results',
      state: {
        playersInfo: this.state.playersInfo
      }
    });

  },

  componentDidMount: function(){
    var query = this.props.location.query;
    console.log(query);
    //TODO: fetch info from github
  },

  render: function () {
    return (
      <ConfirmBattle isLoading={this.state.isLoading} playersInfo={this.state.playersInfo}
      handleInitiateBattle={this.handleInitiateBattle} />

    )
  }
});

module.exports = ConfirmBattleContainer;
