
import Footer from '../components/Footer/Footer';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';

const Default = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Default;