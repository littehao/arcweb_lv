
import Vue from 'vue'

import Lheader from './header/header'
import Footer from './footer/footer'
import Footerlink from './footer/footerlink'
import Container from './container/container'
import Card from './card/card'
const  component={
  Lheader,
  Footer,
  Footerlink,
  Container,
  Card
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
