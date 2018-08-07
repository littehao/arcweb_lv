
import Vue from 'vue'

import Header from './header/header'
import Footer from './footer/footer'
import Container from './container/container'
import Card from './card/card'
const  component={
  Header,
  Footer,
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
