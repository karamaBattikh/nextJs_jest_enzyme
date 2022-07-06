import { mount } from 'enzyme';
import React from 'react';

import Button from '.';

describe('Button', () => {
  const wrap = mount(<Button label="Button" />);

  test('should render Button', () => {
    expect(wrap);
    expect(wrap.find('button').length).toEqual(1);
  });

  test('should render Button with label', () => {
    expect(wrap);
    expect(wrap.find('button').text()).toBe('Button');
  });

  test('onClick Button', () => {
    const mockCallBack = jest.fn();

    const button = mount(<Button onClick={mockCallBack} label="Ok!" />);
    button.find('button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });


  test('onClick Button disabled', () => {
    const mockCallBack = jest.fn();

    const button = mount(<Button onClick={mockCallBack} label="Ok!" disabled />);
    button.find('button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(0);
  });
});
