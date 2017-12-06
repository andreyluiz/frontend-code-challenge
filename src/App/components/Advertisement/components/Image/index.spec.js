import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import Image from '.';

chai.use(chaiEnzyme());

describe('<Image />', () => {
  it('default render', () => {
    const wrapper = shallow(<Image />);
    expect(wrapper.find('img')).to.not.have.attr('src');
    expect(wrapper.find('img')).to.have.attr('alt', 'Thumbnail');
    expect(wrapper.find('img')).to.have.attr('width', '100%');
    expect(wrapper.find('img')).to.have.attr('height', 'auto');
    expect(wrapper.children().length).to.equal(1);
  });

  it('test thumbnail prop', () => {
    const wrapper = shallow(<Image thumbnail="erledigt" />);
    expect(wrapper.find('img')).to.have.attr('src', 'erledigt');
  });

  it('test purpose prop', () => {
    const wrapper = shallow(<Image purpose={<h1>Hello</h1>} />);
    expect(wrapper.find('h1')).to.exist;
    expect(wrapper.children().length).to.equal(2);
  });
});
