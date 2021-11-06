import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQAccordion = (props) => {
  const [expanded, setExpanded] = useState(true);
  const toggleAccordion = () => {
    setExpanded(!expanded);
  };
  return (
    <div className="border-t  border-gray-300">
      <div className="max-w-screen-lg mx-auto">
        <Accordion
          expanded={expanded}
          onChange={toggleAccordion}
          elevation={0}
          sx={{ padding: 0, border: 'none' }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{ paddingTop: '25px', paddingBottom: '25px' }}
          >
            <h3 className="text-3xl font-semibold">คำถามที่พบบ่อย</h3>
          </AccordionSummary>
          <AccordionDetails sx={{ padding: 0, border: 0 }}>
            <div className="divide-y divide-gray-300">
              <div></div>
              {props.children}
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

const QuestionItem = (props) => {
  return (
    <div>
      <Accordion elevation={0} sx={{ border: 'none' }}>
        {props.children}
      </Accordion>
    </div>
  );
};

const Question = (props) => {
  return (
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      sx={{ paddingTop: '8px', paddingBottom: '8px' }}
    >
      <p className="font-bold">{props.children}</p>
    </AccordionSummary>
  );
};

const Answer = (props) => {
  return (
    <AccordionDetails sx={{ border: 'none', paddingBottom: '24px' }}>
      <div className="md:w-4/5">{props.children}</div>
    </AccordionDetails>
  );
};

export default FAQAccordion;
export { QuestionItem, Question, Answer };
