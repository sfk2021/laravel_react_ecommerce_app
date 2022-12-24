import Home from '../components/frontend/Home';
import About from '../components/frontend/About';
import Contact from '../components/frontend/Contact';
import Page403 from '../components/errors/Page403';
import Page404 from '../components/errors/Page404';
import Register from '../components/frontend/auth/Register';
import Login from '../components/frontend/auth/Login';
// import ViewCategory from '../components/frontend/collections/ViewCategory';
// import ViewProduct from '../components/frontend/collections/ViewProduct';
// import ProductDetail from '../components/frontend/collections/ProductDetail';
// import Cart from '../components/frontend/Cart';
// import Checkout from '../components/frontend/Checkout';
// import Thankyou from '../components/frontend/Thankyou';

const publicRoutesList = [
    { path: '/', exact: true, name: 'Home', element: Home },
    { path: '/about', exact: true, name: 'About', element: About },
    { path: '/contact', exact: true, name: 'Contact', element: Contact },
    { path: '/403', exact: true, name: 'Page403', element: Page403 },
    { path: '/404', exact: true, name: 'Page404', element: Page404 },
    { path: '/login', exact: true, name: 'Login', element: Login },
    { path: '/register', exact: true, name: 'Register', element: Register },
    // { path: '/collections', exact: true, name: 'ViewCategory', element: ViewCategory },
    // { path: '/collections/:slug', exact: true, name: 'ViewProduct', element: ViewProduct },
    // { path: '/collections/:category/:product', exact: true, name: 'ProductDetail', element: ProductDetail },
    // { path: '/cart', exact: true, name: 'Cart', element: Cart },
    // { path: '/checkout', exact: true, name: 'Checkout', element: Checkout },
    // { path: '/thank-you', exact: true, name: 'Thankyou', element: Thankyou },
];

export default publicRoutesList;