import React from 'react'
import CounterButton from './CounterButton'
import { shallow, configure } from 'enzyme'
import Adapter from '@cfaester/enzyme-adapter-react-18';

configure({adapter: new Adapter()});
const wrapper = shallow(<CounterButton />)

it('should render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

it('should updateCount in state', () => {
    expect((wrapper.state())).toEqual({ count: 0 })
    wrapper.find('[id="counter"]').simulate('click')
    expect(wrapper.state()).toEqual({ count: 1 })
    wrapper.find('[id="counter"]').simulate('click')
    expect(wrapper.state()).toEqual({ count: 2 })
})
