import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from "enzyme";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

test("testar input-name", () => {
   let wrapper = mount(<Form/>);
    wrapper.find({className: "inputNamn"})
});

test("testar input-email", () => {
   let wrapper = mount(<Form/>);
    wrapper.find({className: "inputMail"})
});