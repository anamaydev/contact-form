import { useState, useEffect, useRef} from 'react';
import { motion, AnimatePresence } from "motion/react"

import radioUnselected from './assets/images/icon-radio-unselected.svg'
import radioSelected from './assets/images/icon-radio-selected.svg'
import checkboxChecked from './assets/images/icon-checkbox-checked.svg'
import checkboxUnchecked from './assets/images/icon-checkbox-unchecked.svg'
import successIcon from './assets/images/icon-success-check.svg'

function App() {
  const [validationErrors, setValidationErrors] = useState({});
  const [queryType, setQueryType] = useState(null);
  const [consent, setConsent] = useState(false);
  const [openSuccessModal, setOpenSuccessModal] = useState(false);

  const backgroundRef = useRef(null);

  const base = {x:0};
  const shake = [0, 5, -5, 5, -5, 0];

  function closeModal(e) {
    /* close modal after the clicking background */
    if(e.target === backgroundRef.current) {
      setOpenSuccessModal(prevOpenSuccessModal => !prevOpenSuccessModal);
    }
  }

  function checkValidation(data){
    const newErrors = {};
    if(data.firstName === ''){
      newErrors['firstName'] = 'First Name is required';
    }
    if(data.lastName === ''){
      newErrors['lastName'] = 'Last Name is required';
    }
    if(data.emailAddress === ''){
      newErrors['emailAddress'] = 'Email is required';
    }
    if(data.queryType === null){
      newErrors['queryType'] = 'Please select a query type';
    }
    if(data.message === ''){
      newErrors['message'] = 'This field is required';
    }
    if(data.consent === false){
      newErrors['consent'] = 'To submit this form, please consent to being contacted';
    }

    /* update errors if exist */
    if(Object.keys(newErrors).length > 0){
      setValidationErrors(newErrors);
      return ;
    }

    // reset previous errors if
    setValidationErrors({});
    return Object.keys(newErrors).length === 0;
  }

  function handleContact(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get('first-name'),
      lastName: formData.get('last-name'),
      emailAddress: formData.get('email-address'),
      queryType: formData.get('query-type'),
      message: formData.get('message'),
      consent: formData.get('consent') === 'agreed'
    }

    const isValid = checkValidation(data);

    /* reset form upon no error */
    if(isValid){
      e.currentTarget.reset();
      setConsent(false);
      setQueryType(null);

      /* open success message modal */
      setOpenSuccessModal(prevOpenSuccessModal => !prevOpenSuccessModal);
    }
  }

  return (
    /* background */
    <div className="relative min-h-dvh w-screen px-2 py-4 flex flex-col justify-center items-center bg-green-200 sm:px-5 sm:py-0">
      {/* form */}
      <form action="/" onSubmit={handleContact} className="p-3 flex flex-col justify-center gap-5 w-full max-w-(--form-max) bg-white rounded-2xl sm:p-5">
        {/* first div */}
        <div className="flex flex-col justify-center gap-4">
          <h1 className="font-bold text-lg leading-none text-grey-900">Contact us</h1>
          <div className="flex flex-col gap-3">
            {/* name inputs */}
            <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-2 sm:justify-stretch">
              {/* first name */}
              <motion.div
                initial={base}
                animate={{x: validationErrors.firstName ? shake : 0}}
                transition={{ duration: 0.3 }}
                className="text-input-container"
              >
                <label htmlFor="first-name" className="label">First Name</label>
                <input
                  type="text"
                  id="first-name"
                  name="first-name"
                  className={`input-field ${validationErrors.firstName ? 'border-red' : ''}`}
                />
                { (validationErrors.firstName) && <p className="error-message">{validationErrors.firstName}</p> }
              </motion.div>  {/* first name */}

              {/* last name */}
              <motion.div
                initial={base}
                animate={{x: validationErrors.lastName ? shake : 0}}
                transition={{ duration: 0.3 }}
                className="text-input-container"
              >
                <label htmlFor="last-name" className="label">Last Name</label>
                <input
                  type="text"
                  id="last-name"
                  name="last-name"
                  className={`input-field ${validationErrors.lastName ? 'border-red' : ''}`}
                />
                { validationErrors.lastName && <p className="error-message">{validationErrors.lastName}</p> }
              </motion.div>  {/* last name */}
            </div>  {/* name inputs */}

            {/* email address */}
            <motion.div
              initial={base}
              animate={{x: validationErrors.emailAddress ? shake : 0}}
              transition={{ duration: 0.3 }}
              className="text-input-container"
            >
              <label htmlFor="email-address" className="label">Email Address</label>
              <input
                type="email"
                id="email-address"
                name="email-address"
                className={`input-field ${validationErrors.emailAddress ? 'border-red' : ''}`}
              />
              { validationErrors.emailAddress && <p className="error-message">{validationErrors.emailAddress}</p> }
            </motion.div> {/* email address */}

            {/* fake fieldset */}
            <div role="group" className="flex flex-col justify-center gap-2" aria-labelledby="query-legend">
              {/* fake legend */}
              <p className="label" id="query-legend">Query Type</p>

              <ul className="flex flex-col justify-center gap-2 sm:flex-row sm:justify-stretch">
                <li className="input-field flex gap-1.5 w-full relative has-checked:bg-green-200 active:bg-green-200 transition duration-200">
                  <img src={"general-enquiry" === queryType ? radioSelected : radioUnselected} alt=""/>
                  <input
                    type="radio"
                    id="general-enquiry"
                    name="query-type"
                    value="general-enquiry"
                    checked={"general-enquiry" === queryType}
                    onChange={e=>setQueryType(e.target.value)}
                    className="radio"
                  />
                  <label htmlFor="general-enquiry" className="cursor-pointer w-full">General Enquiry</label>
                </li>
                <li className="input-field flex gap-1.5 w-full relative has-checked:bg-green-200 active:bg-green-200 transition duration-200">
                  <img src={"support-enquiry" === queryType ? radioSelected : radioUnselected} alt=""/>
                  <input
                    type="radio"
                    id="support-enquiry"
                    name="query-type"
                    value="support-enquiry"
                    checked={"support-enquiry" === queryType}
                    onChange={e=>setQueryType(e.target.value)}
                    className="radio"
                  />
                  <label htmlFor="support-enquiry" className="cursor-pointer w-full">Support Request</label>
                </li>
              </ul>

              { validationErrors.queryType && <p className="error-message">{validationErrors.queryType}</p> }
            </div>

            <motion.div
              initial={base}
              animate={{x: validationErrors.message ? shake : 0}}
              transition={{ duration: 0.3 }}
              className="text-input-container"
            >
              <label htmlFor="message" className="label">Message</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="8"
                className={`input-field sm:h-[8.375rem] lg:h-[6.688rem] ${validationErrors.message ? 'border-red' : ''}`}
              ></textarea>
              { validationErrors.message && <p className="error-message">{validationErrors.message}</p> }
            </motion.div>
          </div>
        </div>

        {/* checkbox */}
        <div className="flex flex-col gap-1">
          <div className="flex gap-2 relative">
            <img src={ consent ? checkboxChecked : checkboxUnchecked} alt=""/>
            <input
              type="checkbox"
              id="consent"
              name="consent"
              value="agreed"
              checked={consent}
              onChange={e=>setConsent(e.target.checked)}
              className="absolute h-2 w-2 top-1/2 left-0.5 transform -translate-y-1/2 opacity-0 cursor-pointer"
            />
            <label htmlFor="consent" className="label">I consent to being contacted by the team</label>
          </div>
          { validationErrors.consent && <p className="error-message">{validationErrors.consent}</p> }
        </div>
        {/* submit button */}
        <button className="font-bold text-md leading-normal text-white px-5 py-2 border-none rounded-lg bg-green-600 hover:bg-grey-900 transition duration-600 cursor-pointer">Submit</button>
      </form>

      {/* success message modal */}
      <AnimatePresence>
        {
          openSuccessModal &&
          <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity: 0}}
            transition={{duration: 0.3}}
            className="absolute inset-0 flex justify-center items-center px-3"
          >
            {/* background blur */}
            <motion.div initial={{opacity:1}} ref={backgroundRef} onClick={closeModal} className="absolute inset-0 backdrop-blur-sm bg-grey-900/20 z-0"></motion.div>
            {/* modal */}
            <motion.div
              initial={{opacity:0, y:125}}
              animate={{opacity:1, y:0}}
              exit={{opacity: 0, y: 125}}
              transition={{duration: 0.6}}
              className="relative p-3 flex flex-col justify-center gap-1 bg-grey-900 rounded-xl"
            >
              <div className="flex gap-1">
                <img src={successIcon} alt=""/>
                <p className="font-bold text-md leading-normal text-white">Message Sent!</p>
              </div>
              <p className="font-normal text-sm leading-normal text-green-200">Thanks for completing the form. We’ll be in touch soon!</p>
            </motion.div>
          </motion.div> /* modal */
        }
      </AnimatePresence>
    </div>
  )
}

export default App
