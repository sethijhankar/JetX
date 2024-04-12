import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function BasicAccordion() {
  return (
    <div className='pb-24 px-5'>
      <Accordion className='mb-5 pb-5'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
         className='questions'>
          <Typography>What is the turnaround time for label printing orders?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Turnaround times vary depending on the complexity and quantity of your order. We aim for fast and efficient service and will provide an estimated delivery date with your order confirmation
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='mb-5'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          className='questions'
        >
          <Typography>Are your labels eco-friendly and sustainable?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes, we offer eco-friendly label options, including materials and inks. We are committed to reducing our environmental footprint and can discuss sustainable label choices with you.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='mb-5'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          className='questions'
        >
          <Typography>How do I place an order for labels?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Placing an order is easy. You can do it online through our website or contact our customer service team for personalized assistance.  
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='mb-5 pb-5'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          className='questions'
        >
          <Typography>What file formats do you accept for label artwork?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          We accept various file formats, including PDF, AI, EPS, and high-resolution JPG. Our design team can assist in optimizing your artwork for printing.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='mb-5 pb-5'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          className='questions'
        >
          <Typography>What is the minimum order quantity for custom labels?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          We understand that different customers have different needs. Our minimum order quantity depends on the label type and size, but we work with small and large orders to accommodate your requirements.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>  
  );
}