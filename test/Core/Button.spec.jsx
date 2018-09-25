import React from 'react';
import { shallow } from 'enzyme';
import Button from '../../components/Core/Button';

describe('<Button />', () => {
  const component = shallow(<Button text="Some Text" />);

  it('should render a button with text', () => {
    expect(component).toMatchSnapshot();
  });
});
