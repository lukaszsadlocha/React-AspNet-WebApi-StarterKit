/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');

var PrivacyPage = React.createClass({
  render() {
    return (
      <div className="container">
        <h2>Privacy Policy</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat tortor fermentum mi
          fermentum dignissim. Nullam vel ipsum ut ligula elementum lobortis. Maecenas aliquam, massa laoreet
          lacinia pretium, nisi urna venenatis tortor, nec imperdiet tellus libero efficitur metus. Fusce
          semper posuere ligula, et facilisis metus bibendum interdum. Mauris at mauris sit amet sem pharetra
          commodo a eu leo. Nam at est non risus cursus maximus. Nam feugiat augue libero, id consectetur
          tortor bibendum non. Quisque nec fringilla lorem. Nullam efficitur vulputate mauris, nec maximus leo
          dignissim id.
        </p>
      </div>
    );
  }
});

module.exports = PrivacyPage;
