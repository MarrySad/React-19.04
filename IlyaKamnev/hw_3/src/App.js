import React from 'react';
import ReactDom from 'react-dom';

import Menu from './Menu';
import Login from './Login';
//import Text from './text';

class App extends React.Component {
  render() {
    let menuItems = [
      { href: '/', title: 'Главная' },
      { href: '/about', title: 'О нас' },
      { href: '/service', title: 'Услуги' },
      { href: '/contacts', title: 'Контакты' },
    ];

    return <div>
      <h1>Первое приложение на React</h1>
      <p>Hello React</p>
      <Menu items={menuItems} titleMenu="Основное меню сайта"/>
      <Login/>
      
    </div>
  }
}

ReactDom.render(<App/>, document.getElementById('root'));