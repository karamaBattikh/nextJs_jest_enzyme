import { mount  } from 'enzyme';
import React from 'react';

import Input from '.';

describe('Button', () => {
  test('should render Input', () => {
    const wrapper = mount(<Input />);
    const input = wrapper.find('input').length;
    expect(input).toEqual(1);
  });

  test('should insert value in components state with the events value', () => {
    let testState = 'battikh';

    const wrapper = mount(
      <Input
        name="lastName"
        value={testState}
        onChange={(e) => {
          testState = (e.target as HTMLInputElement).value;
        }}
      />,
    );
    const input = wrapper.find('input');
    expect(input.prop('value')).toEqual('battikh');
    wrapper.find('input').simulate('change', { target: { value: 'karama' } });
    expect(testState).toEqual('karama');
    wrapper.find('input').simulate('change', { target: { value: 1 } });
    expect(testState).toEqual(1);
  });

 
});
