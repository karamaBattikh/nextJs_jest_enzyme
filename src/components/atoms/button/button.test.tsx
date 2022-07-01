import {mount  } from 'enzyme';
import React from 'react';

import Button from '.';
 
describe('Button', () => {
  const wrap = mount(<Button label="Button" />);

  test('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.find('button').text()).toBe('Button');
  });
});