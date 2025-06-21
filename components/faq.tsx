import {
  Microscope,
  Building2,
  Landmark,
  BriefcaseMedical,
} from "lucide-react";

const faq = [
  {
    icon: BriefcaseMedical,
    question: "Providers",
    answer:
      "Our AI-driven solutions enhance clinical efficiency and patient care in diverse healthcare settings.<br/>From real-time diagnostic support to streamlined administrative processes, our platform empowers providers to offer superior care. Features like AI-assisted imaging and predictive analytics enable providers to make faster, more accurate decisions, improving patient outcomes and operational efficiency.",
  },
  {
    icon: Building2,
    question: "Employers",
    answer:
      "Our platform helps employers reduce healthcare costs while boosting employee health and productivity.<br/>With tools for early disease detection, personalized wellness programs, and chronic disease management, employers can foster a healthier workforce. Enhanced data insights allow for tailored health strategies, improving overall workforce wellness and reducing absenteeism.",
  },
  {
    icon: Landmark,
    question: "Payors",
    answer:
      "We equip payors with the tools to enhance member satisfaction and reduce costs through smarter resource allocation.<br/>Our AI solutions provide comprehensive analytics for risk assessment and management, fraud detection, and claims processing efficiency. By integrating our technology, payers can offer personalized health plans and proactive care, improving outcomes and member engagement.",
  },
  {
    icon: Microscope,
    question: "Researchers",
    answer:
      "We support researchers at every stage—from securing funding to publishing results.<br/>Our platform facilitates robust data management, simplifies patient enrollment and engagement, and ensures compliance with regulatory standards. By leveraging our advanced analytics, researchers can uncover insights faster, driving innovations in medical research and ultimately enhancing patient care.",
  },
];

const FAQ = () => {
  return (
    <div
      id="faq"
      className="min-h-screen flex items-center justify-center px-6 py-12 xs:py-20"
    >
      <div className="max-w-screen-lg">
        <h2 className="text-3xl xs:text-4xl md:text-5xl !leading-[1.15] font-bold tracking-tight text-center">
          Who we serve
        </h2>
        <p className="mt-3 xs:text-lg text-center text-muted-foreground">
          Delivering powerful, configurable solutions for every pillar of the healthcare ecosystem.
        </p>

        <div className="mt-12 grid md:grid-cols-2 bg-background rounded-xl overflow-hidden outline outline-[1px] outline-border outline-offset-[-1px]">
          {faq.map(({ question, answer, icon: Icon }) => (
            <div key={question} className="border p-6 -mt-px -ml-px">
              <div className="h-8 w-8 xs:h-10 xs:w-10 flex items-center justify-center rounded-full bg-accent">
                <Icon className="h-4 w-4 xs:h-6 xs:w-6" />
              </div>
              <div className="mt-3 mb-2 flex items-start gap-2 text-lg xs:text-[1.35rem] font-semibold tracking-tight">
                <span>{question}</span>
              </div>
              <p className="text-sm xs:text-base">{answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
