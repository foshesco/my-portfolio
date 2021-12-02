import sixhundred from '../images/600.jpg';
import albatross from '../images/golf.PNG';
import acftpreview from '../images/acftpreview.gif';
import golfpreview from '../images/golfpreview.gif';

export const projects = [
    {
        title: 'ACFT Calc',
        description: "ACFT Calc is a simple calculator designed to calculate the new Army Combat Fitness Test score. This app was deployed on the iOS app store and had 100+ downloads but has since been removed.",
        image: sixhundred,
        previewImg: acftpreview,
        tags: ['React Native'],
        source: 'https://github.com/foshesco/acft-app',
        visit: 'https://github.com/foshesco/acft-app',
        id: 0,
    },
    {
        title: 'Albatross Valley',
        description: "Albatross Valley is a basic website layout featuring API calls fetching the top golfers in the world, light/dark mode, and a responsive layout.",
        image: albatross,
        previewImg: golfpreview,
        tags: ['React', 'JavaScript'],
        source: 'https://github.com/foshesco/albatrossvalley',
        visit: 'https://github.com/foshesco/albatrossvalley',
        id: 1,
    },
    {
        title: 'ACFT Grader',
        description: "Building off of the ACFT Calc app, ACFT Grader is an app designed to help soldiers who grade the ACFT. This app features rules, scoring standards, and the calculator all in one.",
        image: 'https://golfweek.usatoday.com/wp-content/uploads/sites/87/2019/10/usatsi_12533119.jpg',
        tags: ['React', 'JavaScript'],
        source: 'https://github.com/foshesco/acft-grader-app',
        visit: 'https://github.com/foshesco/acft-grader-app',
        id: 1,
    },
    {
        title: 'E-Commerce',
        description: "E-Commerce is a responsive app built using HTML, JS, and CSS.",
        image: 'https://golfweek.usatoday.com/wp-content/uploads/sites/87/2019/10/usatsi_12533119.jpg',
        tags: ['React', 'JavaScript'],
        source: 'https://github.com/foshesco/my-site',
        visit: 'https://github.com/foshesco/my-site',
        id: 1,
    }]