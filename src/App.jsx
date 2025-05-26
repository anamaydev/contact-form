/* todo:
*   [x] create custom variables / utilities
*   [x] create mobile layout
*   [x] create tablet layout
*   [x] create desktop layout
*   [ ] state for form
*   [ ] set value attribute for each input */

import { useState, useEffect } from 'react';

import radioUnselected from './assets/images/icon-radio-unselected.svg'
import radioSelected from './assets/images/icon-radio-selected.svg'
import checkboxChecked from './assets/images/icon-checkbox-checked.svg'
import checkboxUnchecked from './assets/images/icon-checkbox-unchecked.svg'

function App() {
  const [validationErrors, setValidationErrors] = useState({});

  useEffect(() => {
    console.log(`No of Errors: ${Object.keys(validationErrors).length}`);
  },[validationErrors])

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

    if(Object.keys(newErrors).length > 0){
      console.log('--- Errors ---');
      console.log(newErrors);
      setValidationErrors(newErrors);
      return ;
    }

    // resetting previous errors if
    setValidationErrors({});
    console.log('validationErrors has been reset.');

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

    console.log('--- Data ---');
    console.log(data);

    const isValid = checkValidation(data);

    if(isValid){
      e.currentTarget.reset();
    }
  }

  return (
    /* background */
    <div className="min-h-dvh w-screen px-2 py-4 flex flex-col justify-center items-center bg-green-200 sm:px-5">
      {/* form */}
      <form action="/" onSubmit={handleContact} className="p-3 flex flex-col justify-center gap-5 w-full max-w-(--form-max) bg-white rounded-2xl">
        {/* first div */}
        <div className="flex flex-col justify-center gap-4">
          <h1 className="font-bold text-lg leading-none text-grey-900">Contact us</h1>
          <div className="flex flex-col gap-3">
            {/* name inputs */}
            <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-2 sm:justify-stretch">
              {/* first name */}
              <div className="text-input-container">
                <label htmlFor="first-name" className="label">First Name</label>
                <input
                  type="text"
                  id="first-name"
                  name="first-name"
                  className="input-field"
                />
                { (validationErrors.firstName) && <p className="error-message">{validationErrors.firstName}</p> }
              </div>  {/* first name */}

              {/* last name */}
              <div className="text-input-container">
                <label htmlFor="last-name" className="label">Last Name</label>
                <input
                  type="text"
                  id="last-name"
                  name="last-name"
                  className="input-field"
                />
                { validationErrors.lastName && <p className="error-message">{validationErrors.lastName}</p> }
              </div>  {/* last name */}
            </div>  {/* name inputs */}

            {/* email address */}
            <div className="text-input-container">
              <label htmlFor="email-address" className="label">Email Address</label>
              <input
                type="email"
                id="email-address"
                name="email-address"
                className="input-field"
              />
              { validationErrors.emailAddress && <p className="error-message">{validationErrors.emailAddress}</p> }
            </div> {/* email address */}

            {/* fake fieldset */}
            <div role="group" className="flex flex-col justify-center gap-2" aria-labelledby="query-legend">
              {/* fake legend */}
              <p className="label" id="query-legend">Query Type</p>

              <ul className="flex flex-col justify-center gap-2 sm:flex-row sm:justify-stretch"> {/*remove gap-2*/}
                <li className="input-field flex gap-1.5 w-full">
                  <img src={radioUnselected} alt="" className=""/>
                  <img src={radioSelected} alt="" className="hidden"/>
                  <input type="radio" id="general-enquiry" name="query-type" value="general-enquiry" />
                  <label htmlFor="general-enquiry" className="cursor-pointer">General Enquiry</label>
                </li>
                <li className="input-field flex gap-1.5 w-full">
                  <img src={radioUnselected} alt="" className=""/>
                  <img src={radioSelected} alt="" className="hidden"/>
                  <input type="radio" id="support-enquiry" name="query-type" value="support-enquiry"/>
                  <label htmlFor="support-enquiry" className="cursor-pointer">Support Request</label>
                </li>
              </ul>

              { validationErrors.queryType && <p className="error-message">{validationErrors.queryType}</p> }
            </div>

            <div className="text-input-container">
              <label htmlFor="message" className="label">Message</label>
              <textarea name="message" id="message" cols="30" rows="8" className="input-field sm:h-[8.375rem]"></textarea>
              { validationErrors.message && <p className="error-message">{validationErrors.message}</p> }
            </div>
          </div>
        </div>

        {/* checkbox */}
        <div className="flex flex-col gap-1">
          <div className="flex gap-2">
            <img src={checkboxUnchecked} alt=""/>
            <img src={checkboxChecked} alt="" className="hidden"/>
            <input type="checkbox" id="consent" name="consent" value="agreed"/>
            <label htmlFor="consent" className="label">I consent to being contacted by the team</label>
          </div>
          { validationErrors.consent && <p className="error-message">{validationErrors.consent}</p> }
        </div>

        <button className="font-bold text-md leading-normal text-white px-5 py-2 border-none rounded-lg bg-green-600">Submit</button>
      </form>
    </div>
  )
}

export default App
