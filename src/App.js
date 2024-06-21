import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import { faEnvelope, faMapPin, faPhone } from '@fortawesome/free-solid-svg-icons';

function App() {

  return (
    <div className="App">
      { /* Header */}
      <Navbar />

      { /* Hero */}

      <div className='flex flex-col-reverse md:flex-row justify-evenly gap-10 md:gap-0 p-10'>
        <div className='left flex justify-center flex-col gap-3'>
          <h2 className='text-4xl font-semibold '>Hi! I am <span className='text-darkGreen'>Janber Christian Calamba</span></h2>
          <p className='text-xl font-light'>I love to create websites, and program code.</p>
          <div className='flex flex-col items-center md:flex-row md:justify-center gap-10 pt-4'>
            <div className='text-4xl flex gap-5 items-center'>
              <a href='https://www.facebook.com/mnyetttt' target='_blank' rel="noreferrer" className='hover:text-darkGreen'><FontAwesomeIcon icon={faFacebook} /></a>
              <a href='https://github.com/mnyet' target='_blank' rel="noreferrer" className='hover:text-darkGreen'><FontAwesomeIcon icon={faGithub} /></a>
              <a href='https://www.linkedin.com/in/janber-christian-calamba-4b3b3927b/' target='_blank' rel="noreferrer" className='hover:text-darkGreen'><FontAwesomeIcon icon={faLinkedin} /></a>
            </div>
            <div className='text-md flex items-center gap-5'>
              <a href='/#contact' className='bg-darkGreen p-3 rounded-md hover:bg-lightGreen'>Contact me</a>
              <a href='https://drive.google.com/drive/folders/1c_6thwPhghSMR7peq_UIq9tmTP2C-eJI?usp=sharing' target='_blank' rel="noreferrer" className='bg-darkGreen p-3 rounded-md hover:bg-lightGreen'>Download CV</a>
            </div>
          </div>

        </div>
        <div className='right flex justify-center'>
          <img className="h-auto w-full" src={require('./img/code.png')} alt=''></img>
        </div>
      </div>

      { /* Separator eme */}

      <div className='bg-darkGreen mt-20 py-14 px-5'>
        <h3 className='text-2xl italic'>"Code is like humor. When you have to explain it, it’s bad." - Cory House</h3>
      </div>

      { /* About Self */}

      <div className='flex flex-col items-center mt-20 mb-20'>
        <h3 className='text-5xl font-bold' id="about">About me</h3>
        <p className='w-10/12 md:w-6/12 mt-12 text-center text-lg'>I am a graduate from Our Lady of Fatima University - Valenzuela Campus studying Information Technology. As i learn through the years i found out that i really excel in problem solving thru coding, i just enjoy the ways of finding solutions to certain problems in code. And from that point, i decided that i would be choosing web/software development as my career.</p>
        <div className='grid items-start gap-7 grid-cols-2 mt-12 w-10/12 md:w-6/12'>
          <h4 className='text-xl font-semibold text-left'>Name:</h4>
          <p className='text-right'>Janber Christian O. Calamba</p>
          <h4 className='text-xl font-semibold text-left'>Gender:</h4>
          <p className='text-right'>Male</p>
          <h4 className='text-xl font-semibold text-left'>Birthday:</h4>
          <p className='text-right'>December 27, 2002</p>
          <h4 className='text-xl font-semibold text-left'>MBTI:</h4>
          <p className='text-right'>INTJ-T 6w5</p>
          <h4 className='text-xl font-semibold text-left'>Interests:</h4>
          <p className='text-right'>Aone Takanobu and The Color Green 🌲</p>
        </div>
        <h3 className='text-4xl font-semibold mt-10' id="about">Skills</h3>
        <p className='py-5'>Coming soon! ^w^</p>
        <a className='hover:text-darkGreen font-bold' href='https://bear-web-portfolio.vercel.app/about' target='_blank' rel='noreferrer'>refer to old site while this is wip.</a>
      </div>

      { /* Projects */}

      <div className='flex flex-col items-center bg-darkGreen pt-20' id='projects'>
        <h3 className='text-5xl font-bold drop-shadow-lg'>Projects</h3>
        <ProjectCard />
      </div>

      { /* Contact Me */}

      <div className='flex flex-col items-center pb-20'>
        <h3 className='text-5xl font-bold pt-20' id='contact'>Contact Me</h3>
        <div className=' flex justify-evenly gap-3 flex-col text-lg pt-20 w-fit md:flex-row'>
          <div className='md:w-1/2 w-full p-5 flex flex-col gap-5'>
            <a href='mailto:calambajanber@gmail.com' className='flex gap-5 items-center hover:text-darkGreen cursor-pointer'>
              <FontAwesomeIcon className='text-xl' icon={faEnvelope} />
              <p>calambajanber@gmail.com</p>
            </a>
            <div className='flex gap-5 items-center'>
              <FontAwesomeIcon className='text-xl' icon={faPhone} />
              <p>+63 966 557 6270</p>
            </div>
            <div className='flex gap-5 items-center'>
              <FontAwesomeIcon className='text-xl' icon={faMapPin} />
              <p>Metro Manila, Philippines</p>
            </div>
          </div>
          <div className='md:w-1/2 w-full p-5 flex flex-col gap-5'>
            <a href='https://www.facebook.com/mnyetttt' target='_blank' rel="noreferrer"
              className='flex gap-5 items-center hover:text-darkGreen cursor-pointer'>
              <FontAwesomeIcon className='text-xl' icon={faFacebook} />
              <p>Calamba Janber</p>
            </a>
            <a href='https://www.linkedin.com/in/janber-christian-calamba-4b3b3927b/' target='_blank' rel="noreferrer"
              className='flex gap-5 items-center hover:text-darkGreen cursor-pointer'>
              <FontAwesomeIcon className='text-xl' icon={faLinkedin} />
              <p>Janber Christian Calamba</p>
            </a>
            <a href='https://github.com/mnyet' target='_blank' rel="noreferrer"
              className='flex gap-5 items-center hover:text-darkGreen cursor-pointer'>
              <FontAwesomeIcon className='text-xl' icon={faGithub} />
              <p>mnyet</p>
            </a>
          </div>
        </div>
      </div>

      { /* Footer */}
      <div className='p-5 bg-darkerGray'>
        <div>Powered by ReactJS with TailwindCSS | &copy; Calamba 2024</div>
      </div>
    </div>
  );
}

export default App;
