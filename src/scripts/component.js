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
        this.innerHTML =  `
        <nav id="navbar">
            <ul class="navigationitems">
                <li class="navigationlist"><a href="#about">About</a></li>
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
        this.innerHTML =  `
        <nav id="navbar">
            <ul class="navigationitems">
                <li class="navigationlist"><a href="/../index.html">About</a></li>
                <li class="navigationlist"><a href="/../index.html#projects">Projects</a></li>
                <li class="navigationlist"><a href="/../index.html#timeline">Timeline</a></li>
                <li class="navigationlist"><a href="#contact">Contact Me</a></li>
            </ul>
        </nav>
    `
    }
}
class timeLine extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="vertical-timeline">
            <ul>
                <li>
                    <div>
                        <time>2022-Present</time>
                        <p class="work-title">UI Design</p>
                        <p class="work-company-name">GreedyGame</p>  
                        <p class="date-of-work">Feb'23-Present</p>  
                    </div>
                </li>
                <li>
                    <div>
                        <time>2022</time>
                        <p class="work-title">Graphic Design Intern</p>
                        <p class="work-company-name">GreedyGame</p>
                        <p class="date-of-work">Nov'22-Feb'23</p>
                    </div>
                </li>
                <li>
                    <div>
                        <time>2022</time>
                        <p class="work-title">Product Design Intern</p>
                        <p class="work-company-name">Alphamers</p>
                    </div>
                </li>
                <li>
                    <div>
                        <time>2020-22</time>
                        <p class="work-title">Master's in Product Design</p>
                        <p class="work-company-name">M S Ramaiah University of Applied Science</p>
                    </div>
                </li>
                <li>
                    <div>
                        <time>2021</time>
                        <p class="work-title">Design Intern</p>
                        <p class="work-company-name">Krot</p>  
                        <p class="date-of-work">Aug'21-Nov'21</p>  
                    </div>
                </li>
                <li>
                    <div>
                        <time>2019-20</time>
                        <p class="work-title">User Experience Designer</p>
                        <p class="work-company-name">Design Esthetics</p>  
                        <p class="date-of-work">Sep'19-Mar'20</p>  
                    </div>
                </li>
                <li>
                    <div>
                        <time>2016-19</time>
                        <p class="work-title">Bachelor's in Vocational Studies</p>
                        <p class="work-company-name">Digital Media and Animation</p>  
                        <p class="date-of-work">St.Joseph's University</p>
                    </div>
                </li>
                <li>
                    <div>
                        <time>2018-19</time>
                        <p class="work-title">Design Intern</p>
                        <p class="work-company-name">The Wildfire Events</p>  
                        <p class="date-of-work">Nov'18-Jan'19</p>
                    </div>
                </li>
            </ul>

        </div>
        `
    }
}
class projectcards extends HTMLElement {
    connectedCallback() {
        this.innerHTML =`
        <div class="cards card-container">
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
                        <button><a href="/kriPortfoliosrc/src/projects/moneyBip.html">View Project</a></button>
                    </div>
                </div>
            </div>
        </div>
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
                        <button><a href="/kriPortfoliosrc/src/projects/adtech.html">View Project</a></button>
                    </div>
                </div>
            </div>
        </div>
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
        <div class="card hidden">
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
            <button class="custom-button"><a href="/kriPortfolio/../index.html#projects">Back to Projects</a></button>
        </div>
        `
    }
}
class footerCustom extends HTMLElement {
    connectedCallback() {
        this.innerHTML =  `
        <footer>
            <section class="contactme" id="contact">
                <h2>Contact me</h2>
                <p>contact me at <a href="mailto:kritinvenugopal@gmail.com">kritinvenugopal@gmail.com</a></p>
                <div class="social">
                    <img src="src/asset/images/behance.png" alt="Behance">
                    <img src="src/asset/images/linkedin.png" alt="linkedin">
                </div>
            </section>
        </footer>
    `
    }
}
class footerCustomInnerPage extends HTMLElement {
    connectedCallback() {
        this.innerHTML =  `
        <footer>
            <section class="contactme" id="contact">
                <h2>Contact me</h2>
                <p>contact me at <a href="mailto:kritinvenugopal@gmail.com">kritinvenugopal@gmail.com</a></p>
                <div class="social">
                    <img src="../asset/images/behance.png" alt="Behance">
                    <img src="../asset/images/linkedin.png" alt="linkedin">
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
customElements.define('time-line', timeLine);
customElements.define('project-cards', projectcards);
customElements.define('custom-buttons', customButtons);
customElements.define('custom-back-buttons', customBackButtons);
customElements.define('custom-footer', footerCustom);
customElements.define('custom-footer-inner-page', footerCustomInnerPage);
