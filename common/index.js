
import Vue from 'vue'

import Lheader from './header/header'
import Lfooter from './footer/footer'
import Footerlink from './footer/footerlink'
import Container from './container/container'
import Card from './card/card'
import Force from './force/force'
const  component={
  Lheader,
  Lfooter,
  Footerlink,
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
