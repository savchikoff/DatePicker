import React from 'react';
import TestComponent from './TestComponent';

export default {
	title: 'TestComponent',
};

export function Primary() {
  return <TestComponent theme="primary" />
}

export function Secondary() {
  return <TestComponent theme="secondary" />
}
