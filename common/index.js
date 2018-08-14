
import Vue from 'vue'

import Lheader from './header/header'
import Mheader from './header/mheader'
import Lfooter from './footer/footer'
import Mfooter from './footer/mfooter'
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
  Force,
  Mheader,
  Mfooter
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
