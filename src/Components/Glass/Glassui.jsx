import { cn } from '../../utils'
import styles from './glass.module.css'
const GlassUi = () => {
    return (
        <div>
              <div className = {cn( "card flex flex-col justify-center items-center -rotate-3 bg-gradient-br from-orange-400 to-purple-400  ")}>
            <h2 className="bg-gradient-to-r from-gray-800 via-gray-500 to-gray-800 bg-clip-text font-display text-2xl font-extrabold leading-tight text-transparent mt-20 sm:text-2xl sm:leading-tight">
                Blogs With More
              </h2>

              <h2 className="bg-gradient-to-r from-gray-800 via-gray-500 to-gray-800 bg-clip-text font-display text-3xl font-extrabold leading-tight text-transparent mt-[-10px] sm:text-4xl sm:leading-tight">
                10k
              </h2>
            <p></p>
          </div>
            

        </div>
    )
}
export default GlassUi