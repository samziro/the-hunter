import email from '../../assets/email.webp';
import logo from '../../assets/logo.png';

const Email = () => {
    return (
        <div className='email h-full bg-slate-50 dark:bg-darkCardTheme rounded shadow-sm p-6 flex flex-col md:grid grid-cols-2 gap-4 md:gap-8 justify-center items-center ' >
            <div className='flex justify-center items-center bg-contain bg-center bg-no-repeat' style={{ backgroundImage: `url(${logo})` }}>
                <img src={email} alt="email support" />
            </div>
            <div className='flex flex-col justify-center items-start gap-4 md:max-w-lg'>
                <h2 className='text-6xl font-semibold mb-4 text-darkFontHeading'>Need Assistance or Have Questions?</h2>
                <p className='text-lightFontHeading dark:text-darkFontText'>We are here to help! Whether you have questions about our services, need support with your fitness journey, or want to learn more about how we can assist you in achieving your health goals, feel free to reach out. I’ll be available to ensure you’re on track and getting the best results.</p>
                <button className='py-4 px-8 rounded cursor-pointer text-2xl text-lightFontText bg-btnDarkTheme hover:bg-[#d8a800] font-extrabold '>EMAIL NOW <a href="mailto:mailto:1thefithunter@gmail.com" className='text-[#eebd2b]'></a></button>
            </div>
        </div>
    )
}

export default Email
