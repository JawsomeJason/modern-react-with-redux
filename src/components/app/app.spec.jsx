/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from '../../../test/test_helper';

import App from '.';

const Component = App;

describe('App', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Component />);
  });

  it('should render', () => expect(component).to.exist);
});
