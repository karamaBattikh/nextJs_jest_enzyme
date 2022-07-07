import { shallow } from 'enzyme';
import React from 'react';

import HomeScreen from '.';

describe('Screen Home', () => {
  test('Should render successfully', () => {
    const wrapper = shallow(<HomeScreen />);
    expect(wrapper.exists()).toEqual(true);
  });
});
