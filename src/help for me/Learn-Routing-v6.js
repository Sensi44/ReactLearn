// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
// React-router - библиотека
// 1. прочитав текущий URL - понять какой компонент/ы отобразить пользователю
// 2. Когда пользователь переходит на URL убрать ненужные компоненты
// , сменить URL так чтобы он был правильным и включить нужные компоненты
// /people/1 - people

// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
// Изучаем по этому:
// https://www.youtube.com/watch?v=0auS9DNTmzE&list=PLiZoB8JBsdznY1XwBcBhHL9L7S_shPGVE

// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
// Стартовое правильно подключение
// import { BrowserRouter } from 'react-router-dom';

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

/// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
// import { Routes, Route, Link } from 'react-router-dom';

// <Routes>
//   <Route path='/' element={<HomePage />} />
//   <Route path='/about' element={<About />} />
//   <Route path='/BlogPage' element={<BlogPage />} />
//   <Route path='*' element={<NotFoundPage />} />
// </Routes>

// * - любой путь который не прописан
// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
// Передача пропсов:
// <Route path='*' element={<NotFoundPage length='23.5' />} />

// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
// Link - Ссылки делать через компонент Link
// import { Link } from 'react-router-dom';
// <Link to='/home'>home</Link>

// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
// exact={true} - в текущей версии включён по умолчанию.
// <Route path='/' render={() => <h2>Welcome</h2>} exact />
// Проверять или нет на соответствие точному пути а не на содержание пути
// '/' !== '/planets' - exact={true}
// '/' === '/planets' - exact={false}

// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
