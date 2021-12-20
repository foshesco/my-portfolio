import sixhundred from '../images/600.jpg';
import albatross from '../images/golf.PNG';
import acftpreview from '../images/acftpreview.gif';
import golfpreview from '../images/golfpreview.gif';

export const projects = [
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
        id: 0,
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
        id: 1,
    }
]
