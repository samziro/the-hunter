import Title from "./title/Title"
import { Link } from "react-scroll"

const Ready = () => {
    return (
        <div className="Ready bg-[#f3f4f6] dark:bg-darkTheme  h-full flex flex-col justify-center items-center text-center py-12 px-4 md:px-28">
            <Title Title1={"Ready to"} Title2={"Transform Your Life?"}  />
            <div className="see-more grid grid-cols-1 justify-items-center align-items-center z-10">
                      <Link to="About" smooth={true} offset={-110} duration={500}>
                        <button className="mt-8 py-4 px-8 rounded cursor-pointer text-2xl text-lightFontText bg-[#eebd2b] hover:bg-[#d8a800] font-extrabold ">
                          JOIN NOW
                        </button>
                      </Link>
                    </div>

        </div>
    )
}

export default Ready
