/* todo:
*   [x] create custom variables / utilities
*   [ ] create mobile layout
*   [ ] create tablet layout
*   [ ] create desktop layout
*   [ ] state for form
*   [ ] set value attribute for each input */

import radioUnselected from './assets/images/icon-radio-unselected.svg'
import radioSelected from './assets/images/icon-radio-selected.svg'

function App() {
  return (
    /* background */
    <div className="min-h-dvh w-screen bg-green-200">
      {/* form */}
      <form action="/" className="p-5 flex flex-col justify-center gap-5 bg-white rounded-2xl">
        {/* first div */}
        <div className="flex flex-col justify-center gap-4">
          <h1 className="font-bold text-lg leading-none text-grey-900">Contact us</h1>
          <div className="flex flex-col gap-3">
            {/* name inputs */}
            <div className="flex flex-col justify-center gap-3">
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

              <ul className="flex flex-col justify-center gap-2"> {/*remove gap-2*/}
                <li className="input-field flex gap-1.5">
                  <img src={radioUnselected} alt="" className=""/>
                  <img src={radioSelected} alt="" className="hidden"/>
                  <input type="radio" id="general-enquiry" name="query-type"/>
                  <label htmlFor="general-enquiry" className="cursor-pointer">General Enquiry</label>
                </li>
                <li className="input-field flex gap-1.5">
                  <img src={radioUnselected} alt="" className=""/>
                  <img src={radioSelected} alt="" className="hidden"/>
                  <input type="radio" id="support-enquiry" name="query-type"/>
                  <label htmlFor="support-enquiry" className="cursor-pointer">Support Request</label>
                </li>
              </ul>
            </div>

            <div className="text-input-container">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" cols="30" rows="8" className="input-field"></textarea>
            </div>
          </div>
        </div>

      </form>
    </div>
  )
}

export default App
