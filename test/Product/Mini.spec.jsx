import React from 'react';
import { shallow } from 'enzyme';
import Mini from '../../components';

describe('<Mini />', () => {
  const props = {
    image:
      'https://asda.scene7.com/is/image/Asda/5054532217318?hei=289&wid=218&qlt=85&fmt=pjpg&resmode=sharp&op_usm=1.1,0.5,0,0&defaultimage=default_details_George_rd',
    name: 'London Chic Scuba Dress',
    link:
      '/george/womens/dresses/london-chic-scuba-dress/GEM362216,default,pd.html?cgid=D1M1G20C1',
    price: 20,
    rating: {
      value: 0.5,
      total: 10,
    },
  };

  const component = shallow(<Mini {...props} />);

  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
