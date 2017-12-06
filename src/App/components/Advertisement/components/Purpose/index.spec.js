import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import Purpose from '.';

chai.use(chaiEnzyme());

describe('<Purpose />', () => {
  it('default render', () => {
    const wrapper = shallow(<Purpose />);
    expect(wrapper.find('span')).to.have.text('Kaufen');
  });

  it('test purpose prop', () => {
    const kaufen = shallow(<Purpose purpose={1} />);
    expect(kaufen.find('span')).to.have.text('Kaufen');

    const mieten = shallow(<Purpose purpose={0} />);
    expect(mieten.find('span')).to.have.text('Mieten');
  });
});
