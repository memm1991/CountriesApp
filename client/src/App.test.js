import React from 'react'
// import { render, screen } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect'
// import App from './App';
import Activity from './Components/Activity'
import Enzyme,{mount} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './Reducers'



Enzyme.configure({ adapter: new Adapter() });

describe('<Activity> unit test',()=>{
  const mockstore= createStore(reducer)
  const getwrapper=()=> mount(
    <Provider store={mockstore}>
       <Activity/>
    </Provider>
  )
 it('it should render a form',()=>{
   const wrapper=getwrapper()
   expect(wrapper.find('form')).toHaveLength(1)
 })
 it('it should render all select',()=>{
 const wrapper=getwrapper()

 expect(wrapper.find('select')).toHaveLength(3)
 })
})

