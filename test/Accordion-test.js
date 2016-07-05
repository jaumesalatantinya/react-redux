import { expect } from "chai";
import { fetch } from "isomorphic-fetch";
import Accordion from '../app/js/Accordion';


const validAccordionHTML = '<dl id="a1" class="Accordion"><dt class="Accordion-header">Section 1</dt><dd class="Accordion-content"><p>Section 1 Content...</p></dd><dt class="Accordion-header">Section 2</dt><dd class="Accordion-content"><p>Section 2 Content...</p></dd><dt class="Accordion-header">Section 3</dt><dd class="Accordion-content"><p>Section 3 Content...</p></dd><dt class="Accordion-header">Section 4</dt><dd class="Accordion-content"><p>Section 3 Content...</p></dd></dl>';

describe("Accordion Tests", () => {


    describe("Contructor", () => {
        it("Should dispatch error when no target is passed as param", () => {
            const a = new Accordion();
            expect(a.error).to.equal(true);
        });

        it("Should init Accordion.error to false when correct HTML is in the DOM", () => {
            document.body.innerHTML = validAccordionHTML;
            const a = new Accordion('#a1',0);
            expect(a.error).to.equal(false);
        });
    });
    

    describe("Validate HTML", () => {
        
        it("Should dispatch error when no Accordion is in HTML", () => {
            const a = new Accordion('#a1', 2);
            a.init();
            a.validateHtml();
            expect(a.error).to.equal(false);
        });

        it("Should dispatch error when target element has no class Accordion ", () => {
            document.body.innerHTML = '<dl id="a1"></dl>';
            const a = new Accordion('#a1', 2);
            a.init();
            a.validateHtml();
            expect(a.error).to.equal(true);
        });

        it("Should dispatch error when Accordion has no child elements", () => {
            document.body.innerHTML = '<dl id="a1" class="Accordion"></dl>';
            const a = new Accordion('#a1', 2);
            a.init();
            a.validateHtml();
            expect(a.error).to.equal(true);
        });

        it("Should dispatch error when dt and dd doesn't match", () => {
            document.body.innerHTML = '<dl id="a1" class="Accordion"><dt class="Accordion-header">Section 1</dt></dl>';
            const a = new Accordion('#a1', 2);
            a.init();
            a.validateHtml();
            expect(a.error).to.equal(true);
        });
    });


    describe("Get Panels", () => {
        it("Should fill panels with DOM elements", () => {
            document.body.innerHTML = validAccordionHTML;
            const a = new Accordion('#a1', 2);
            a.init();
            expect(a.panels.length).to.equal(4);
        });
    });


    describe("Close all panels", () => {
        it("Should remove all is-open class from panels contents and add is-close class", () => {
            document.body.innerHTML = validAccordionHTML;
            const a = new Accordion('#a1', 2);
            a.init();
            a.closeAllPanels();
            expect(a.panels[0].content.classList.contains('is-open')).to.equal(false);
            expect(a.panels[1].content.classList.contains('is-open')).to.equal(false);
            expect(a.panels[2].content.classList.contains('is-open')).to.equal(false);
            expect(a.panels[3].content.classList.contains('is-open')).to.equal(false);
            expect(a.panels[0].content.classList.contains('is-close')).to.equal(true);
            expect(a.panels[1].content.classList.contains('is-close')).to.equal(true);
            expect(a.panels[2].content.classList.contains('is-close')).to.equal(true);
            expect(a.panels[3].content.classList.contains('is-close')).to.equal(true);
        });
    });


    describe("Open Panel", () => {
        it("Should add all is-open class to panel passed as param", () => {
            document.body.innerHTML = validAccordionHTML;
            const a = new Accordion('#a1', 2);
            a.init();
            let panel = a.panels[0];
            a.openPanel(panel);
            expect(a.panels[0].content.classList.contains('is-open')).to.equal(true);
        });
    });


    describe("Load Ajax Content", () => {
        it("Should attach to the last panel content from JSON", (done) => {
            document.body.innerHTML = validAccordionHTML;
            const a = new Accordion('#a1', 2);
            a.init();
            a.loadAjaxContent('http://localhost:3000/data/users-test.json')
                .then(() => {
                    expect(a.panels[3].content.innerHTML).to.equal('<p>test1 - test1@test.com</p><p>test2 - test2@test.com</p>');
                    done();
                });
        });

        it("Should throw an error when no url is passed as param", (done) => {
            document.body.innerHTML = validAccordionHTML;
            const a = new Accordion('#a1', 2);
            a.init();
            a.loadAjaxContent()
                .catch((e)=> {
                    done();
                    expect(a.error).to.equal(true);
                });
        });

        it("Should throw an error when no valid url is passed as param", (done) => {
            document.body.innerHTML = validAccordionHTML;
            const a = new Accordion('#a1', 2);
            a.init();
            a.loadAjaxContent('http://wwww.dummy-url.com')
                .then((e) => {
                    expect(a.error).to.equal(true);
                    done();
                });
        });
    });


    describe("Dispatch Error", () => {
        it("Should do nothing when no error is passed as param", () => {
            const a = new Accordion('#a1', 2);
            a.dispatchError();
            expect(a.error).to.equal(false);
        });

        it("Should asign this.error to true when some error is passed as param", () => {
            const a = new Accordion('#a1', 2);
            a.dispatchError('Test Error');
            expect(a.error).to.equal(true);
        });

        it("Should render to HTML when there is an accordion", () => {
            document.body.innerHTML = validAccordionHTML;
            const a = new Accordion('#a1', 2);
            a.dispatchError('Test Error');
            expect(document.querySelector('#a1').innerHTML).to.equal('<div class="u-error">Test Error</div>')
        });
    });
});
