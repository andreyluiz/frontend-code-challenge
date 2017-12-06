import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import Info from '.';

chai.use(chaiEnzyme());

describe('<Info />', () => {
  it('default render', () => {
    const wrapper = shallow(<Info />);
    const body = wrapper.find('div').at(1);
    const footer = wrapper.find('div').at(3);
    expect(body.find('h2')).to.have.text('Advertisement title');
    expect(body.find('h2')).to.have.attr('title', 'Advertisement title');
    expect(footer.find('h2')).to.have.text('0 €');
    expect(footer.find('span').at(0)).to.have.text('0 Zimmer');
    expect(footer.find('span').at(1)).to.have.text('ab 0 m²');
  });

  it('test title prop', () => {
    const wrapper = shallow(<Info title="Megaboga" />);
    const body = wrapper.find('div').at(1);
    const footer = wrapper.find('div').at(3);
    expect(body.find('h2')).to.have.text('Megaboga');
    expect(body.find('h2')).to.have.attr('title', 'Megaboga');
    expect(footer.find('h2')).to.have.text('0 €');
    expect(footer.find('span').at(0)).to.have.text('0 Zimmer');
    expect(footer.find('span').at(1)).to.have.text('ab 0 m²');
  });

  it('test price prop', () => {
    const wrapper = shallow(<Info price={956} />);
    const body = wrapper.find('div').at(1);
    const footer = wrapper.find('div').at(3);
    expect(body.find('h2')).to.have.text('Advertisement title');
    expect(body.find('h2')).to.have.attr('title', 'Advertisement title');
    expect(footer.find('h2')).to.have.text('956 €');
    expect(footer.find('span').at(0)).to.have.text('0 Zimmer');
    expect(footer.find('span').at(1)).to.have.text('ab 0 m²');
  });

  it('test numberOfRooms prop', () => {
    const wrapper = shallow(<Info numberOfRooms={4} />);
    const body = wrapper.find('div').at(1);
    const footer = wrapper.find('div').at(3);
    expect(body.find('h2')).to.have.text('Advertisement title');
    expect(body.find('h2')).to.have.attr('title', 'Advertisement title');
    expect(footer.find('h2')).to.have.text('0 €');
    expect(footer.find('span').at(0)).to.have.text('4 Zimmer');
    expect(footer.find('span').at(1)).to.have.text('ab 0 m²');
  });

  it('test space prop', () => {
    const wrapper = shallow(<Info space={24} />);
    const body = wrapper.find('div').at(1);
    const footer = wrapper.find('div').at(3);
    expect(body.find('h2')).to.have.text('Advertisement title');
    expect(body.find('h2')).to.have.attr('title', 'Advertisement title');
    expect(footer.find('h2')).to.have.text('0 €');
    expect(footer.find('span').at(0)).to.have.text('0 Zimmer');
    expect(footer.find('span').at(1)).to.have.text('ab 24 m²');
  });
});
