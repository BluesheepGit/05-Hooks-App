import React from "react";
import {HooksApp} from "../HooksApp";
import { shallow} from 'enzyme';





describe('pruebas realizadas en HooksApp',()=>{
   test('debe coinsidir con el snapshot',()=>{
    const wrapper= shallow(<HooksApp/>);


    expect(wrapper).toMatchSnapshot();
   });

});