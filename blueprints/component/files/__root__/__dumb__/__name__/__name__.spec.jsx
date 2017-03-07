/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from '../../../test/test_helper';

import <%= pascalEntityName %> from '.';

const Component = <%= pascalEntityName %>;

describe('<%= pascalEntityName %>', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Component />);
  });

  it('should render', () => expect(component).to.exist);
});
