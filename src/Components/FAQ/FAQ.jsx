import "./FAQ.css";
import { useState } from "react";
import Accordion from "./Accordion";
// import {
//   Accordion,
//   AccordionItem,
//   AccordionItemHeading,
//   AccordionItemButton,
//   AccordionItemPanel,
// } from "react-accessible-accordion";
// import "react-accessible-accordion/dist/fancy-example.css";
const FAQ = () => {
  const [selected, setSelected] = useState("btn1");
  const [FAQ_answer_heading, setFAQ_answer_heading] = useState(
    "What is SuccessTab?"
  );
  const [FAQ_answer_paragraph, setFAQ_answer_paragraph] = useState(
    "SuccessTAB delivers digital learning, contains volumes of pre-installed educational contents and most importantly its 100% World Class"
  );

  const resetState = () => {
    setFAQ_answer_heading("What is SuccessTab?");
    setFAQ_answer_paragraph(
      "SuccessTAB delivers digital learning, contains volumes of pre-installed educational contents and most importantly its 100% World Class"
    );
    setSelected("btn1");
  };
  return (
    <div className="faq-container">
      <div className="faq-main" id="FAQ">
        <div className="faq-heading">
          <h2>
            Frequently Asked Questions <div className="faq-marker"></div>
          </h2>
          <p>
            Here are some frequently asked questions about SuccessTab.Send us a
            mail or call us for more enquiry.
          </p>
        </div>
        <div className="faq-faq">
          <div className="faq-faq_item">
            <div
              className="faq-faq_btn"
              onClick={resetState}
              style={{
                background: selected === "btn1" ? "#DCE8FA" : "#FFFFFF",
              }}
            >
              <div className="faq-faq_btn_info">
                {selected === "btn1" ? (
                  <img src="/FAQ_selected.png" />
                ) : (
                  <img src="/FAQ_unselected.png" />
                )}
                <button>What is SuccessTab?</button>
              </div>
              <img src="/FAQ_button.png" />
            </div>
            <div
              className="faq-faq_btn"
              style={{
                background: selected === "btn2" ? "#DCE8FA" : "#FFFFFF",
              }}
              onClick={() => (
                setFAQ_answer_heading("Who uses SuccessTab?"),
                setFAQ_answer_paragraph(
                  "Secondary school students and staff are eligible to use succestab"
                ),
                setSelected("btn2")
              )}
            >
              <div className="faq-faq_btn_info">
                {selected === "btn2" ? (
                  <img src="/FAQ_selected.png" />
                ) : (
                  <img src="/FAQ_unselected.png" />
                )}
                <button>Who uses SuccessTab?</button>
              </div>
              <img src="/FAQ_button.png" />
            </div>
            <div
              className="faq-faq_btn"
              style={{
                background: selected === "btn3" ? "#DCE8FA" : "#FFFFFF",
              }}
              onClick={() => (
                setFAQ_answer_heading("How does SuccessTab work?"),
                setFAQ_answer_paragraph(
                  "It contains volumes of digital library and resources aligned to the curriculum for staff and students."
                ),
                setSelected("btn3")
              )}
            >
              <div className="faq-faq_btn_info">
                {selected === "btn3" ? (
                  <img src="/FAQ_selected.png" />
                ) : (
                  <img src="/FAQ_unselected.png" />
                )}
                <button>How does SuccessTab work?</button>
              </div>
              <img src="/FAQ_button.png" />
            </div>
            <div
              className="faq-faq_btn"
              style={{
                background: selected === "btn4" ? "#DCE8FA" : "#FFFFFF",
              }}
              onClick={() => (
                setFAQ_answer_heading("How can I get it ?"),
                setFAQ_answer_paragraph(
                  "You can get it by ordering on our website, slot.ng or any slot store."
                ),
                setSelected("btn4")
              )}
            >
              <div className="faq-faq_btn_info">
                {selected === "btn4" ? (
                  <img src="/FAQ_selected.png" />
                ) : (
                  <img src="/FAQ_unselected.png" />
                )}
                <button>How can I get it?</button>
              </div>
              <img src="/FAQ_button.png" />
            </div>
            <div
              className="faq-faq_btn"
              style={{
                background: selected === "btn5" ? "#DCE8FA" : "#FFFFFF",
              }}
              onClick={() => (
                setFAQ_answer_heading("Got more questions?"),
                setFAQ_answer_paragraph(
                  `We have a technical support team that attend to all issues that arise. You can email us at solutions@chroniclesoft.com`
                ),
                setSelected("btn5")
              )}
            >
              <div className="faq-faq_btn_info">
                {selected === "btn5" ? (
                  <img src="/FAQ_selected.png" />
                ) : (
                  <img src="/FAQ_unselected.png" />
                )}
                <button>Got more Questions</button>
              </div>
              <img src="/FAQ_button.png" />
            </div>
          </div>
          <div className="faq-faq_item_detail">
            <h1>{FAQ_answer_heading}</h1>
            <p>{FAQ_answer_paragraph}</p>
          </div>
        </div>
      </div>

      <div className="accordion">
        <Accordion />
      </div>
      {/* <div className="accordion">
        <Accordion>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                What harsh truths do you prefer to ignore?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                occaecat ut occaecat consequat est minim minim esse tempor
                laborum consequat esse adipisicing eu reprehenderit enim.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                Is free will real or just an illusion?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                In ad velit in ex nostrud dolore cupidatat consectetur ea in ut
                nostrud velit in irure cillum tempor laboris sed adipisicing eu
                esse duis nulla non.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div> */}
    </div>
  );
};

export default FAQ;
