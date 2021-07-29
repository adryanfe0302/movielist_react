import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Home from '../component/Home'


Enzyme.configure({ adapter: new Adapter() });

describe('home component', () => {
    beforeAll(() => {
        global.fetch = jest.fn();
        //window.fetch = jest.fn(); if running browser environment
    });
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Home />);
    });
    afterEach(() => {
        wrapper.unmount();
    });
    it('the title should not be empty', () => {
        const text = wrapper.find('.ant-card-meta-title')
        expect(text).not.toBe('')
    })
    it("must render a loading before api call success", () => {
        expect(wrapper.find(".spinner").exists()).toBeTruthy();
    });
})
