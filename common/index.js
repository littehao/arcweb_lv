
import Vue from 'vue'

import Lheader from './header/header'
import Footer from './footer/footer'
import Container from './container/container'
import Card from './card/card'
import Force from './force/force'
const  component={
  Lheader,
  Footer,
  Container,
  Card,
  Force
}

const common={
  install:()=>{
    Object.keys(component).forEach(key => {
      Vue.component(key, component[key]);
    });
  }
};
common.install()
//export  default common
