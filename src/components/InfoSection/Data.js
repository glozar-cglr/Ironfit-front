import img1 from "../../images/svg-1.svg"
import img2 from "../../images/svg-2.svg"
import img3 from "../../images/svg-3.svg"

export const homeobjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Personalized Training',
    headLine: 'Connect with a local personal trainer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    buttonLabel: 'Get started',
    imgStart: false,/* Para poner la columnas en orden inverso poner true*/
    img: img1,
    alt: 'Workout',
    dark: true,
    primary: true,
    darkText: false
};

export const homeobjTwo = {
    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Premium Subscription',
    headLine: 'Connect with a local personal trainer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    buttonLabel: 'Learn More',
    imgStart: true,/* Para poner la columnas en orden inverso poner true*/
    img: img2,
    alt: 'Otro-workout',
    dark: false,
    primary: false,
    darkText: true
};

export const homeobjThree = {
    id: 'signup',
    lightBg: true,
    lightText: false,
    lightTextDesc: true,
    topLine: 'Achieve Your Fitness Goals',
    headLine: 'Train Online of face to face',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    buttonLabel: 'Start Now',
    href: '/signup',
    imgStart: false,/* Para poner la columnas en orden inverso poner true*/
    img: img3,
    alt: 'Workout',
    dark: false,
    primary: false,
    darkText: true
};

