import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import { HelpingHand, Map } from 'lucide-react'
const features = [
  {
    name: 'Explore Job Opportunities',
    description:
      'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
    icon: Map,
  },
  {
    name: "Unlock Your Feature",
    description:
      'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
    icon: LockClosedIcon,
  },
  {
    name: 'Clear and Consise Key Points',
    description:
      'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Backed By Awesome References',
    description:
      'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
    icon: HelpingHand,
  },
]

export default function Feature() {
  return (
    <div>
      <section className="bg-white dark:bg-transparent">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
          <div className="  dark:bg-gradient-to-r from-purple-500 to-blue-900 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
            <a
              href="#"
              className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2"
            >
              <svg
                className="w-2.5 h-2.5 mr-1.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 14"
              >
                <path d="M11 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm8.585 1.189a.994.994 0 0 0-.9-.138l-2.965.983a1 1 0 0 0-.685.949v8a1 1 0 0 0 .675.946l2.965 1.02a1.013 1.013 0 0 0 1.032-.242A1 1 0 0 0 20 12V2a1 1 0 0 0-.415-.811Z" />
              </svg>
              Jobs
            </a>
            <h1 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">
              💼 Explore Internships -  New Grad roles
            </h1>
            <p className="text-lg font-normal text-gray-400 dark:text-gray-100 mb-6">
              Embark on a journey of growth and opportunity as you explore internships and new grad roles, paving the way for a promising future filled with learning, experience, and success.
            </p>
            <div className=" flex  max-w-fit space-x-4 bg-gradient-to-r from-orange-500 via-yellow-500 to-purple-700 p-[2px] rounded-lg">
              <a
                href={`/jobs`}
                className="rounded-lg border bg-white px-8 py-3 text-sm text-stone-700 shadow-lg transition-all"
              >
                Explore More
                <svg
                  className="w-3.5 h-3.5 ml-2 inline"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>

            </div>


          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 dark:bg-gradient-to-r from-purple-500 to-blue-400 text-gray-700 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
              <a
                href="#"
                className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 mb-2"
              >
                <svg
                  className="w-2.5 h-2.5 mr-1.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <path d="M17 11h-2.722L8 17.278a5.512 5.512 0 0 1-.9.722H17a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM6 0H1a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V1a1 1 0 0 0-1-1ZM3.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM16.132 4.9 12.6 1.368a1 1 0 0 0-1.414 0L9 3.55v9.9l7.132-7.132a1 1 0 0 0 0-1.418Z" />
                </svg>
                Design
              </a>
              <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
                Inefficient utilization of existing learning resources
              </h2>
              <p className="text-lg font-normal text-gray-400 dark:text-gray-200 mb-4">
                How can we optimize the use of already available educational resources and make them more accessible and effective for learners?
              </p>
              <a
                href="#"
                className="text-blue-600 dark:text-black hover:underline font-medium text-lg inline-flex items-center"
              >
                Read more
                <svg
                  className="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
            <div className="bg-gray-50 dark:bg-gradient-to-r from-blue-500 to-purple-400 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
              <a
                href="#"
                className="bg-purple-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2"
              >
                <svg
                  className="w-2.5 h-2.5 mr-1.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"
                  />
                </svg>
                Code
              </a>
              <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
                Get Exclusive Notes from A2SV Resource
              </h2>
              <p className="text-lg font-normal text-gray-400 dark:text-gray-200 mb-4">
                Notes sharing involves distributing educational materials to a wide audience, while quiz assessment evaluates learners' understanding through questions, reinforcing learning and identifying areas for improvement
              </p>
              <a
                href="#"
                className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center"
              >
                Read more
                <svg
                  className="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
    // <div className="bg-white py-24 sm:py-32">
    //   <div className="mx-auto max-w-7xl px-6 lg:px-8">
    //     <div className="mx-auto max-w-2xl lg:text-center">
    //       <h2 className="text-base font-semibold leading-7 text-indigo-600">Why Us?</h2>
    //       <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
    //        Get our books - Elevate your knowledge
    //       </p>
    //       <p className="mt-6 text-lg leading-8 text-gray-600">
    //         Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
    //         pulvinar et feugiat blandit at. In mi viverra elit nunc.
    //       </p>
    //     </div>
    //     <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
    //       <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
    //         {features.map((feature) => (
    //           <div key={feature.name} className="relative pl-16 border-2 border-stone-900 rounded-lg bg-gradient-to-t from-gray-200 via-transparent to-purple-500 ">
    //             <dt className="text-base font-semibold leading-7 text-gray-900">
    //               <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
    //                 <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
    //               </div>
    //               {feature.name}
    //             </dt>
    //             <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
    //           </div>
    //         ))}
    //       </dl>
    //     </div>
    //   </div>
    // </div>
  )
}
