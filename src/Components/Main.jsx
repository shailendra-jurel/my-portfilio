import About from './About.jsx';
import Certification from './Certification.jsx';
import Contact from './Contact.jsx';
import Home from './Home.jsx';
import Project from './Project.jsx';

import './Main.css';

function Main() {
    return (
        <div>
            <Home />
            <About />
            <Certification />
            <Project />
            <Contact />
        </div>
    )
}
export default Main;