import React from 'react'
import Card from './Card'
import { shallow, configure } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';

configure({adapter: new Adapter()});

it('should render without crashing', () => {
    expect(shallow(<Card />)).toMatchSnapshot();
})