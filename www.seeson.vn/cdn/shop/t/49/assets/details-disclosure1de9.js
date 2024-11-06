class DetailsDisclosure extends HTMLElement{constructor(){super(),this.mainDetailsToggle=this.querySelector("details"),this.content=this.mainDetailsToggle.querySelector("summary").nextElementSibling,this.mainDetailsToggle.addEventListener("focusout",this.onFocusOut.bind(this)),this.mainDetailsToggle.addEventListener("toggle",this.onToggle.bind(this))}onFocusOut(){setTimeout(()=>{this.contains(document.activeElement)||this.close()})}onToggle(){this.animations||(this.animations=this.content.getAnimations()),this.mainDetailsToggle.hasAttribute("open")?this.animations.forEach(animation=>animation.play()):this.animations.forEach(animation=>animation.cancel())}close(){this.mainDetailsToggle.removeAttribute("open"),this.mainDetailsToggle.querySelector("summary").setAttribute("aria-expanded",!1)}}customElements.define("details-disclosure",DetailsDisclosure);class HeaderMenu extends DetailsDisclosure{constructor(){super(),this.header=document.querySelector(".header-wrapper")}onToggle(){this.header&&(this.header.preventHide=this.mainDetailsToggle.open,document.documentElement.style.getPropertyValue("--header-bottom-position-desktop")===""&&document.documentElement.style.setProperty("--header-bottom-position-desktop",`${Math.floor(this.header.getBoundingClientRect().bottom)}px`))}}customElements.define("header-menu",HeaderMenu);
//# sourceMappingURL=/cdn/shop/t/49/assets/details-disclosure.js.map?v=153497636716254413831719468218
