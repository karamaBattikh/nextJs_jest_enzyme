import { mount } from 'enzyme';
import React from 'react';

import Button from '.';

describe('Button', () => {
  const wrap = mount(<Button>Button</Button>);

  test('should render Button', () => {
     expect(wrap.find('button').length).toEqual(1);
  });

  test('should render Button with label', () => {
     expect(wrap.find('button').text()).toBe('Button');
  });

  test('onClick Button', () => {
    const mockCallBack = jest.fn();

    const button = mount(<Button onClick={mockCallBack}>OK</Button>);
    button.find('button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });

  test('onClick Button disabled', () => {
    const mockCallBack = jest.fn();

    const button = mount(
      <Button onClick={mockCallBack} disabled>
        Ok
      </Button>,
    );
    button.find('button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(0);
  });
});
