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
        <nav>
            <ul class="navigationitems">
                <li class="navigationlist" id="hometext"><a href="home.html">Kri</a></li>
                <li class="navigationlist"><a href="#">About</a></li>
                <li class="navigationlist"><a href="#">Timeline</a></li>
                <li class="navigationlist"><a href="#">Projects</a></li>
                <li class="navigationlist"><a href="#">Contact Me</a></li>
            </ul>
        </nav>
    `
    }
}

// const navTemplate = document.createElement('template');
// navTemplate.innerHTML = `
//  <nav>
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
