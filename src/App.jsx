/* todo:
*   [x] create custom variables / utilities
*   [ ] create mobile layout
*   [ ] create tablet layout
*   [ ] create desktop layout
*   [ ] state for form
*   [ ] set value attribute for each input */

import radioUnselected from './assets/images/icon-radio-unselected.svg'
import radioSelected from './assets/images/icon-radio-selected.svg'
import checkboxChecked from './assets/images/icon-checkbox-checked.svg'
import checkboxUnchecked from './assets/images/icon-checkbox-unchecked.svg'

function App() {
  return (
    /* background */
    <div className="min-h-dvh w-screen px-2 py-4 flex flex-col justify-center items-center bg-green-200 sm:px-5">
      {/* form */}
      <form action="/" className="p-3 flex flex-col justify-center gap-5 w-full max-w-(--form-max) bg-white rounded-2xl">
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
            </div> {/* email address */}

            {/* fake fieldset */}
            <div role="group" className="flex flex-col justify-center gap-2" aria-labelledby="query-legend">
              {/* fake legend */}
              <p className="label" id="query-legend">Query Type</p>

              <ul className="flex flex-col justify-center gap-2 sm:flex-row sm:justify-stretch"> {/*remove gap-2*/}
                <li className="input-field flex gap-1.5 w-full">
                  <img src={radioUnselected} alt="" className=""/>
                  <img src={radioSelected} alt="" className="hidden"/>
                  <input type="radio" id="general-enquiry" name="query-type"/>
                  <label htmlFor="general-enquiry" className="cursor-pointer">General Enquiry</label>
                </li>
                <li className="input-field flex gap-1.5 w-full">
                  <img src={radioUnselected} alt="" className=""/>
                  <img src={radioSelected} alt="" className="hidden"/>
                  <input type="radio" id="support-enquiry" name="query-type"/>
                  <label htmlFor="support-enquiry" className="cursor-pointer">Support Request</label>
                </li>
              </ul>
            </div>

            <div className="text-input-container">
              <label htmlFor="message" className="label">Message</label>
              <textarea name="message" id="message" cols="30" rows="8" className="input-field sm:h-[8.375rem]"></textarea>
            </div>
          </div>
        </div>

        {/* checkbox */}
        <div className="flex gap-2">
          <img src={checkboxUnchecked} alt=""/>
          <img src={checkboxChecked} alt="" className="hidden"/>
          <input type="checkbox" id="concent"/>
          <label htmlFor="concent" className="label">I consent to being contacted by the team</label>
        </div>

        <button className="font-bold text-md leading-normal text-white px-5 py-2 border-none rounded-lg bg-green-600">Submit</button>
      </form>
    </div>
  )
}

export default App
