import React from 'react';
import Mini from '../components/Product';

import { minies } from '../public/mock';

export default function App() {
  return minies.map(props => <Mini key={props.id} {...props} />);
}
