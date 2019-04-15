import React from 'react';
import { shallow } from 'enzyme';
import PlaylistCard from './PlaylistCard';

describe('PlaylistCard', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<PlaylistCard />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});