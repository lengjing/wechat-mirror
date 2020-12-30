import electron from 'electron';
import React from 'react';
import App, { Container } from 'next/app';

const remote = electron.remote || false;

export default class WeChat extends App {
  constructor(...args) {
    super(...args);

    if (remote) {
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}
