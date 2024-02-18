// class navbar extends HTMLElement {
//     constructor() {
//         super();
//         const navRoot = this.attachShadow({mode: 'open'});
//         let nav = document.createElement('nav');
//         nav.innerHTML = `
//             <ul class="navigationitems">
//                 <li class="navigationlist" id="hometext"><a href="http://home.html">Kri</a></li>
//                 <li class="navigationlist"><a href="http://about.html">About</a></li>
//                 <li class="navigationlist"><a href="http://timeline.html">Timeline</a></li>
//                 <li class="navigationlist"><a href="http://projects.html">Projects</a></li>
//                 <li class="navigationlist"><a href="http://contact.html">Contact Me</a></li>
//             </ul>
//         `
//         navRoot.append(nav);

//     }
// }

class navBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav id="navbar">
            <ul class="navigationitems">
                <li class="navigationlist"><a href="#">About Me</a></li>
                <li class="navigationlist"><a href="#projects">Projects</a></li>
                <li class="navigationlist"><a href="#timeline">Timeline</a></li>
                <li class="navigationlist"><a href="#contact">Contact Me</a></li>
            </ul>
        </nav>
    `
    }
}
class navBarInner extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav id="navbar">
            <ul class="navigationitems">
                <li class="navigationlist"><a href="/../kriPortfolio">About Me</a></li>
                <li class="navigationlist"><a href="/../kriPortfolio/#projects">Projects</a></li>
                <li class="navigationlist"><a href="/../kriPortfolio/#timeline">Timeline</a></li>
                <li class="navigationlist"><a href="#contact">Contact Me</a></li>
            </ul>
        </nav>
    `
    }
}
class projectcards extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="cards card-container">
    <div class="card-out">
        <a href="/kriPortfolio/src/projects/universalOtt.html">
            <div class="card">
                <div class="card-img"><img src="src/asset/images/card-images/universalOtt-card.png" alt=""></div>
                <div class="info-card-context">
                    <div class="card-content">
                        <h3>IMDB Case Study</h3>
                        <h4>6th February 2024</h4>
                    </div>
                    <div class="card-details">
                        <div class="card-info">
                            <p>Case Study</p>
                            <p>User Experience</p>
                        </div>
                        <div class="card-link">
                            <button><a href="/kriPortfolio/src/projects/universalOtt.html">View Project</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </div>
    <div class="card-out">
        <a href="/kriPortfolio/src/projects/moneyBip.html">
            <div class="card">
                <div class="card-img"><img src="src/asset/images/card-images/MoneyBip.png" alt=""></div>
                <div class="info-card-context">
                    <div class="card-content">
                        <h3>MoneyBip</h3>
                        <h4>25th January 2024</h4>
                    </div>
                    <div class="card-details">
                        <div class="card-info">
                            <p>Case Study</p>
                            <p>User Experience</p>
                        </div>
                        <div class="card-link">
                            <button><a href="/kriPortfolio/src/projects/moneyBip.html">View Project</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </div>
    <div class="card-out">
        <a href="/kriPortfolio/src/projects/adTech.html">
            <div class="card">
                <div class="card-img"><img src="src/asset/images/card-images/gg-card.png" alt=""></div>
                <div class="info-card-context">
                    <div class="card-content">
                        <h3>Journey at GreedyGame</h3>
                        <h4>8th February 2024</h4>
                    </div>
                    <div class="card-details">
                        <div class="card-info">
                            <p>User Interface</p>
                            <p>User Experience</p>
                        </div>
                        <div class="card-link">
                            <button><a href="/kriPortfolio/src/projects/adTech.html">View Project</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </div>
    <div class="card-out">
        <a href="/kriPortfolio/src/projects/signal.html">
            <div class="card">
                <div class="card-img"><img src="src/asset/images/card-images/signal-card.png" alt=""></div>
                <div class="info-card-context">
                    <div class="card-content">
                        <h3>Sginal</h3>
                        <h4>17th January 2022</h4>
                    </div>
                    <div class="card-details">
                        <div class="card-info">
                            <p>Case Study</p>
                            <p>User Experience</p>
                        </div>
                        <div class="card-link">
                            <button><a href="/kriPortfolio/src/projects/signal.html">View Project</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </div>
    <div class="card-out">
        <a href="/kriPortfolio/src/projects/coherence.html">
            <div class="card">
                <div class="card-img"><img src="src/asset/images/card-images/coherence-card.png" alt=""></div>
                <div class="info-card-context">
                    <div class="card-content">
                        <h3>Coherence</h3>
                        <h4>31st March 2019</h4>
                    </div>
                    <div class="card-details">
                        <div class="card-info">
                            <p>Case Study</p>
                            <p>User Experience</p>
                        </div>
                        <div class="card-link">
                            <button><a href="/kriPortfolio/src/projects/coherence.html">View Project</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </div>
    <div class="card-out">
        <a href="/kriPortfolio/src/projects/aer.html">
            <div class="card">
                <div class="card-img"><img src="src/asset/images/card-images/aer-card.png" alt=""></div>
                <div class="info-card-context">
                    <div class="card-content">
                        <h3>AER</h3>
                        <h4>31st March 2019</h4>
                    </div>
                    <div class="card-details">
                        <div class="card-info">
                            <p>Case Study</p>
                            <p>User Experience</p>
                        </div>
                        <div class="card-link">
                            <button><a href="/kriPortfolio/src/projects/aer.html">View Project</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </div>
    <div class="card-out hidden">
        <a href="/kriPortfolio/src/projects/hamsak.html">
            <div class="card">
                <div class="card-img"><img src="src/asset/images/card-images/hamsak-card.png" alt=""></div>
                <div class="info-card-context">
                    <div class="card-content">
                        <h3>Hamsak</h3>
                        <h4>17th January 2022</h4>
                    </div>
                    <div class="card-details">
                        <div class="card-info">
                            <p>Case Study</p>
                            <p>User Experience</p>
                        </div>
                        <div class="card-link">
                            <button><a href="/kriPortfolio/src/projects/hamsak.html">View
                                    Project</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </div>
</div>
<div class="custom-button-container">
    <button class="custom-button" id="view-more-btn"><a>View More Projects</a></button>
</div>
`
    }
}

class customButtons extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="custom-button-container">
            <button class="custom-button"><a href="#">View More Projects</a></button>
        </div>
        `
    }
}
class customBackButtons extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="custom-button-container back-button">
            <button class="custom-button"><a href="/kriPortfolio/index.html#projects">Back to Projects</a></button>
        </div>
        `
    }
}
class footerCustom extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <section class="contactme" id="contact">
                <h2>Contact me</h2>
                <p>contact me at <a href="mailto:kritinvenugopal@gmail.com">kritinvenugopal@gmail.com</a></p>
                <div class="social">
                <a href="https://www.behance.net/KritinV"><img src="src/asset/images/behance.png" alt="Behance"></a>
                <a href="https://www.behance.net/KritinV"><img src="src/asset/images/linkedin.png" alt="linkedin"></a>
                </div>
            </section>
        </footer>
    `
    }
}
class footerCustomInnerPage extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <section class="contactme" id="contact">
                <h2>Contact me</h2>
                <p>contact me at <a href="mailto:kritinvenugopal@gmail.com">kritinvenugopal@gmail.com</a></p>
                <div class="social">
                    <a href="https://www.behance.net/KritinV"><img src="../asset/images/behance.png" alt="Behance"></a>
                    <a href="https://www.behance.net/KritinV"><img src="../asset/images/linkedin.png" alt="linkedin"></a>
                </div>
            </section>
        </footer>
    `
    }
}
// const navTemplate = document.createElement('template');
// navTemplate.innerHTML = `
//  <nav id="navbar">
//     <ul class="navigationitems">
//         <li class="navigationlist" id="hometext"><a href="http://home.html">Kri</a></li>
//         <li class="navigationlist"><a href="http://about.html">About</a></li>
//         <li class="navigationlist"><a href="http://timeline.html">Timeline</a></li>
//         <li class="navigationlist"><a href="http://projects.html">Projects</a></li>
//         <li class="navigationlist"><a href="http://contact.html">Contact Me</a></li>
//     </ul>
//  </nav>
// `
// class navBar extends HTMLElement {
//     constructor() {
//         super();
//         const navRoot = this.attachShadow({mode: 'open'});
//         let clone = navTemplate.content.cloneNode(true);
//         navRoot.append(clone);

//     }
// }
customElements.define('page-navbar', navBar);
customElements.define('inner-page-navbar', navBarInner);
customElements.define('project-cards', projectcards);
customElements.define('custom-buttons', customButtons);
customElements.define('custom-back-buttons', customBackButtons);
customElements.define('custom-footer', footerCustom);
customElements.define('custom-footer-inner-page', footerCustomInnerPage);
