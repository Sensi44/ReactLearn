// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
// React-router - библиотека
// 1. прочитав текущий URL - понять какой компонент/ы отобразить пользователю
// 2. Когда пользователь переходит на URL убрать ненужные компоненты
// , сменить URL так чтобы он был правильным и включить нужные компоненты
// /people/1 - people

// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
// В текущем проекте используем версию 5, документация:
// https://v5.reactrouter.com/web/guides/quick-start
// Изучить также:
// https://www.youtube.com/watch?v=0auS9DNTmzE&list=PLiZoB8JBsdznY1XwBcBhHL9L7S_shPGVE

// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// <Router>
//    <Route path='/people' component={NewTest} />
//    <Route path='/people' component={NewTest33} /> // будут отображены оба
//    <Route path='/planets' component={NewTest2} />
//  </Router>

// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
// Передача пропсов:
// <Route
//   path='/test'
//   render={(props) => <Item text='Hello' test='3' {...props} />}
// />

// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
// Link - Ссылки делать через компонент Link
// import { Link } from 'react-router-dom';
// <Link to='/home'>home</Link>

// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
// exact={true}
// <Route path='/' render={() => <h2>Welcome</h2>} exact />
// Проверять или нет на соответствие точному пути а не на содержание пути
// '/' !== '/planets' - exact={true}
// '/' === '/planets' - exact={false}

// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
