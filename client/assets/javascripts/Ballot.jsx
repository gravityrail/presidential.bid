require('babel/polyfill');
import $ from 'jquery';

import React from 'react';
import ReactDOM from 'react-dom';
import Relay from 'react-relay';

class AppHomeRoute extends Relay.Route {
  static queries = {
    candidates: () => Relay.QL`
      query {
        candidates(parties: ["foo"])
      }
    `,
  };

  // static fragments = {
  //   viewer: () => Relay.QL`
  //     fragment on Viewer {
  //       # Can return an array of candidates
  //       candidates
  //     }
  //   `
  // };

  static routeName = 'AppHomeRoute';
}

let CandidateList = React.createClass({
  propTypes: {
    candidates: React.PropTypes.array,
  },

  // getDefaultProps: function() {
  //   return {
  //     candidates: [
  //       {name: 'foo', slogan: 'bar'},
  //       {name: 'Dan', slogan: 'guy'},
  //       {name: 'Scott', slogan: 'also a guy'},
  //     ],
  //   };
  // },

  render: function() {
    console.log(this.props);
    return (<ul>
      {
        this.props.candidates.map( function( candidate ) {
          return <li key={candidate.__dataID__}>{candidate.name}: {candidate.slogan}</li>;
        }
      )}
    </ul>);
  },
});

CandidateList = Relay.createContainer(CandidateList, {
  fragments: {
    candidates: () => Relay.QL`
      fragment on Candidate @relay(plural: true) {
        name,
        slogan
      }
    `,
  },
});

$(function onLoad() {
  if ($('#content').length > 0) {
    ReactDOM.render((
      <Relay.RootContainer
          Component={CandidateList}
          route={new AppHomeRoute({partyNames: ['republican', 'democrat']})}
          renderLoading={function() {
            return <div>Loading...</div>;
          }}
          renderFailure={function(error, retry) {
            return (
              <div>
                <p>{error.message}</p>
                <p><button onClick={retry}>Retry?</button></p>
              </div>
            );
          }}
        />
    ), document.getElementById('content'));
  }
});
