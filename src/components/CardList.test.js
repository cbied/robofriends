import React from 'react'
import Cardlist from './CardList'
import { shallow, configure } from 'enzyme'
import Adapter from '@cfaester/enzyme-adapter-react-18';

configure({adapter: new Adapter()});

const filteredRobots = [
    {
        id: 1,
        name: 'Mom',
        username: 'yourMom',
        email: 'yourMom@gmail.com'
    }
]

it('should render without crashing', () => {
    expect(shallow(<Cardlist robots={filteredRobots}/>)).toMatchSnapshot()
})