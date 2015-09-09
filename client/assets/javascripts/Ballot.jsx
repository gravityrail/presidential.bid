import $ from 'jquery';

import React from 'react';

var CandidateList = React.createClass({
  getDefaultProps: function() {
    return {
      candidates: [
        {name: "foo", slogan: "bar"},
        {name: "Dan", slogan: "guy"},
        {name: "Scott", slogan: "also a guy"}
      ]
    };
  },

  render: function(){
    return <ul>
      {
        this.props.candidates.map( function(candidate) {
        return <li>{candidate.name}: {candidate.slogan}</li>
      }
    )}
    </ul>;
  }
});

$(function onLoad() {
  if ($('#content').length > 0) {
    React.render((
        <CandidateList/>
    ), document.getElementById('content'));
  }
});
