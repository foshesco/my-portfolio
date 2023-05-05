import eaglize from '../images/eaglize.png';
import ryze from '../images/ryze.png';
import sixhundred from '../images/600.jpg';
import albatross from '../images/golf.PNG';
import eaglizePreview from '../images/eaglizepreview.gif';
import ryzePreview from '../images/ryze.gif';
import acftpreview from '../images/acftpreview.gif';
import golfpreview from '../images/golfpreview.gif';

export const projects = [
    {
        title: 'RYZE Golf',
        description: "RYZE Golf is a full stack app where a user can search a database of over 20,000 golf courses, create a profile, make posts, and more. This app has a Node/Express backend and React/Material UI frontend.",
        image: ryze,
        alt: 'RYZE Golf logo',
        previewImg: ryzePreview,
        prevAlt: 'RYZE Golf preview',
        tags: ['MongoDB', 'Express', 'React', 'Node'],
        source: 'https://github.com/foshesco/ryze-golf',
        visit: 'https://github.com/foshesco/ryze-golf',
        site: 'https://ryzegolf.com',    
        id: 0
    },
    {
        title: 'Eaglize',
        description: "Eaglize is an application featuring USPS API calls fetching Address Validation and City & State Lookups, light/dark mode, and a responsive layout.",
        image: eaglize,
        alt: 'Eaglize Logo',
        previewImg: eaglizePreview,
        prevAlt: 'Eaglize preview',
        tags: ['React', 'JavaScript'],
        source: 'https://github.com/foshesco/address-validation',
        visit: 'https://github.com/foshesco/address-validation',
        site: 'https://eaglize.netlify.app',    
        id: 1
    },
    {
        title: 'ACFT Calc',
        description: "ACFT Calc is a simple calculator designed to calculate the new Army Combat Fitness Test score. This app was deployed on the iOS app store and had 100+ downloads but has since been removed.",
        image: sixhundred,
        alt:'ACFT Calc Logo',
        previewImg: acftpreview,
        prevAlt: 'ACFT Calc preview',
        tags: ['React Native'],
        source: 'https://github.com/foshesco/acft-app',
        visit: 'https://github.com/foshesco/acft-app',
        id: 2,
    },
    {
        title: 'Albatross Valley',
        description: "Albatross Valley is a basic website layout featuring API calls fetching the top golfers in the world, light/dark mode, and a responsive layout.",
        image: albatross,
        alt: 'Albatross Valley Logo',
        previewImg: golfpreview,
        prevAlt: 'Albatross Valley preview',
        tags: ['React', 'JavaScript'],
        source: 'https://github.com/foshesco/albatrossvalley',
        visit: 'https://github.com/foshesco/albatrossvalley',
        id: 3,
    }
]
