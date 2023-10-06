import { Github } from "lucide-react"

const OSSection = () => {
    return (
        <div className="mt-20 border-t border-gray-200 bg-white/10 py-20 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur">
    
    
        <div>
          <div className="mx-auto max-w-md text-center sm:max-w-xl">
            <h2 className="bg-gradient-to-r from-gray-800 via-gray-500 to-gray-800 bg-clip-text font-display text-4xl font-extrabold leading-tight text-transparent sm:text-5xl sm:leading-tight">
             Proudly open-source
            </h2>
            <p className="mt-5 text-gray-500 sm:text-lg">
              Our source code is available on GitHub - feel free to read, review,
              or contribute to it however you want!
            </p>
          </div>
          <div className="flex items-center justify-center py-10">
            <a
              href="https://github.com/Kinfe123/a2sv_notes"
              target="_blank"
              rel="noreferrer"
            >
            <div className="mx-auto flex max-w-fit space-x-4">
              
                <a
                    className="flex items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 shadow-lg transition-all hover:border-gray-800"
                    href="https://github.com/Kinfe123"
                    target="_blank"
                    rel="noreferrer"
                >
                    <Github classNameName="h-5 w-5 text-black" />
                    <p className="text-sm text-slate-900">Star on GitHub</p>
                </a>
            </div>
              {/* <!-- <div className="flex items-center">
                <div className="flex h-10 items-center space-x-2 rounded-md border border-gray-600 bg-gray-800 p-4">
                  <Github className="h-5 w-5 text-white" />
                  <p className="font-medium text-white">Star</p>
                </div>
                <div className={styles.label}>
                  <CountingNumbers
                    value={stars}
                    className="font-display font-medium text-white"
                  />
                </div>
              </div> --> */}
            </a>
          </div>
        </div>
      </div>
    )
}

export default OSSection