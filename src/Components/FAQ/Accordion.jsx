import Collapsible from "react-collapsible";
import "./Accordion.css";

const Accordion = () => {
  return (
    <div>
      <Collapsible tabIndex={0} open={true} trigger="What is SuccessTab?">
        <p>
          SuccessTAB delivers digital learning, contains volumes of
          pre-installed educational contents and most importantly its 100% World
          Class
        </p>
      </Collapsible>

      <Collapsible transitionTime={400} trigger="Who uses SuccessTab?">
        <p>
          Primary, Secondary school students and staff are eligible to use
          succestab.
        </p>
      </Collapsible>

      <Collapsible trigger="How does SuccessTab work?">
        <p>
          It contains volumes of digital library and resources aligned to the
          curriculum for staff and students.
        </p>
      </Collapsible>

      <Collapsible trigger="How can I get it?">
        <p>
          You can get it by ordering on our website, slot.ng or any slot store.
        </p>
      </Collapsible>

      <Collapsible trigger="Got more questions?">
        <p>
          We have a technical support team that attend to all issues that arise.
          You can email us at solutions@chroniclesoft.com
        </p>
      </Collapsible>
    </div>
  );
};

export default Accordion;
