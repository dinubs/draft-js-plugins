import React, { Component } from 'react';

export default class TwitterButton extends Component {

  componentDidMount() {
    const twitterbutton = this.refs.twitterbutton;
    const twitterscript = document.createElement('script');
    twitterscript.src = '//platform.twitter.com/widgets.js';
    twitterscript.id = 'twitter-wjs';
    twitterscript.onload = this.renderWidget;
    twitterbutton.parentNode.appendChild(twitterscript);
  }

  componentWillUnmount() {
    const elem = document.getElementById('twitter-wjs');
    if (elem !== undefined) {
      elem.parentNode.removeChild(elem);
    }
  }

  renderWidget = () => {
    const text = this.props.text ? this.props.text : '';
    const size = this.props.size ? this.props.size : 'default';
    window.twttr.widgets.createShareButton(
      this.props.url,
      this.refs.twitterbutton,
      {
        text,
        size,
      }
    );
  };

  render() {
    return <div ref="twitterbutton" />;
  }
}
