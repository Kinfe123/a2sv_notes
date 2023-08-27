
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import {Helmet} from 'react-helmet'
import countries from "countries-list"
import {useState} from 'react'
import { supabase } from "../configs/supabaseClient"
export default function Contact() {


  // const [countries , setCountries]
  const [loading , setLoading] = useState(false)
  const [checked , setChecked] = useState(false)
  const [responseMsg , setResponseMsg] = useState("")
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "Ethiopia",
    street: "",
    city: "",
    state: "",
    about: ""
  })



const countryCodes = Object.keys(countries.countries);

const countryNames = countryCodes.map(code => countries.countries[code].name);

// console.log(formValues)
const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    
    try {
      const { data, error } = await supabase
      .from('contact_message')
      .insert([
        { first_name: formValues.firstName ,
         last_name: formValues.lastName ,
         email: formValues.email ,
         country: formValues.country,
         state: formValues.state ,
         street: formValues.street ,
         city: formValues.city ,
         about: formValues.about
       }
      ])
      .select()
 
      setLoading(false)
      setResponseMsg(" ✅ We have successfully received your input, Thanks we will get back to you as soon as possible! :) ")


    }
    catch(e) {
      setResponseMsg("❌ Sorry , We have not received your input, Please try again ! :(")
      console.log(e)
      setLoading(false)
    }
    setTimeout(() => {

      setResponseMsg("")

    } , 5000)





}

  return (
    <div>
    <Helmet>
            <meta charSet="utf-8" />
            <title>Contact Us - We Farm</title>
              <link rel="canonical" href="https://a2sv-notes.vercel.app/contact" />
      </Helmet>


    <form>




      <div className="mt-32 space-y-12 self-center max-w-2xl m-auto">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className=" font-semibold leading-7 text-gray-900 text-2xl">Contact Us.</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600 text-base" >
            Feel free to reach out us - Please make sure to fill the forms
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">

              {/*<div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">workcation.com/</span>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="janesmith"
                  />
                </div>
              </div>*/}
            </div>




            <div className="col-span-full">
              <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                Tell Us About Yourself
              </label>

            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12 max-w-2xl m-auto">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                First name
              </label>
              <div className="mt-2">
                <input
                  value={formValues.firstName}
                  onChange = {(e) => setFormValues({...formValues , firstName : e.target.value})}
                  type="text"

                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  value={formValues.lastName}
                  onChange={(e) => setFormValues({...formValues , lastName:e.target.value})}
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formValues.email}
                  onChange={(e) => setFormValues({...formValues , email:e.target.value})}
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                Country
              </label>
              <div className="mt-2">
                <select
                  value={formValues.country}
                  id="country"
                  onChange={(e) => setFormValues({...formValues , country: e.target.value})}
                  name="country"
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >

                {countryNames.map((country) => {
                  // console.log(country)
                  return (
                    <option key={country} className="text-gray-900">{country}</option>


                    )
                })}
                  {/*<option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>*/}
                </select>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                Street address
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="street-address"
                  value={formValues.street}
                  onChange={(e) => setFormValues({...formValues , street:e.target.value})}
                  id="street-address"
                  autoComplete="street-address"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                City
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="city"
                  value={formValues.city}
                  onChange={(e) => setFormValues({...formValues , city:e.target.value})}
                  id="city"
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                State / Province
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  value={formValues.state}
                  onChange={(e) => setFormValues({...formValues , state:e.target.value})}
                  name="region"
                  id="region"
                  autoComplete="address-level1"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="max-w-2xl  col-span-full">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                About
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  value={formValues.about}
                  onChange={(e) => setFormValues({...formValues , about:e.target.value})}
                  rows={4}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
            </div>


          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Notifications</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            We'll always let you know about important changes, but you pick what else you want to hear about.
          </p>

          <div className="mt-10 space-y-10">
            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-gray-900">By Email</legend>
              <div className="mt-6 space-y-6">
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="comments"
                      name="comments"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="comments" className="font-medium text-gray-900">
                      Mail You
                    </label>
                    <p className="text-gray-500">Get notified with our products.</p>
                  </div>
                </div>

                <div className="relative flex gap-x-3">


                </div>
              </div>
            </fieldset>

          </div>
        </div>
      </div>

      <div className="max-w-2xl m-auto mt-6 flex items-start justify-start flex-col  gap-y-8">
            
               <button
                    disabled={!formValues.about}
                    onClick={handleSubmit}
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                > {loading ? <div className="flex flex-row gap-1">
                   <p>Submiting...</p> 
                   <div role="status">
                                        <svg
                                            aria-hidden="true"
                                            className="mx-2 inline w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
                                            viewBox="0 0 100 101"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                            fill="currentColor"
                                            />
                                            <path
                                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                            fill="currentFill"
                                            />
                                        </svg>
                                        <span className="sr-only">Loading...</span>
                                        </div>
                </div>:  <p> Submit 🔥</p> }


                 
                </button>

                {responseMsg && <p>{responseMsg} </p>}

               




      </div>
    </form>

  </div>
  )
}
