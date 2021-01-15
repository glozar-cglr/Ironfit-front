import {useEffect} from 'react';
import { Form } from './Signin/SigninElements';
import {useLocation} from 'react-router-dom';


export default function ScrollToTop() {
    const {pathname} = useLocation()

    useEffect (
        () => {
    window.scrollTo(0, 0);
    },
    [pathname]
    );

    return null;
}