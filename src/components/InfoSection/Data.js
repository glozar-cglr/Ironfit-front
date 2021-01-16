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
    description: 'Find a local trainer near you, customize each session to meet your fitness goals and train either online or in person.',
    buttonLabel: 'Get started',
    href: '/signup',
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
    headLine: 'Choose the trainer according to your target and your budget',
    description: 'You can have different trainers according to your objectives, or change whenever you want! With our Premium Subscription the sky is the limit!',
    buttonLabel: 'Learn More',
    href: '/signup',
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
    headLine: 'Train online or face to face',
    description: 'Pandemic times? Do not worry! IronFitness trainers are ready to assist your training online!',
    buttonLabel: 'I want to start!',
    href: '/signup',
    imgStart: false,/* Para poner la columnas en orden inverso poner true*/
    img: img3,
    alt: 'Workout',
    dark: false,
    primary: false,
    darkText: true
};

