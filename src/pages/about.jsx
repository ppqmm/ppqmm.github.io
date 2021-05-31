import React from 'react';
import Layout from '../componants/Layout';
import me from '../images/me.jpg';
import location from '../images/location_on.svg';
import calendar from '../images/calendar_today.svg';
import phone from '../images/phone_iphone.svg';
import email from '../images/email.svg';
import Link from '../images/Linkedin.svg';
import be from '../images/Behance.svg';
import Information from '../componants/Information';

const skillData = [
  {
    id: 1,
    name: 'Figma',
  },
  {
    id: 2,
    name: 'Adobe Photoshop',
  },
  {
    id: 3,
    name: 'Adobe Illustrator',
  },
  {
    id: 4,
    name: 'Adobe XD',
  },
];

const educationData = [
  {
    id: 1,
    year: '2017',
    school: 'College of Art, Media and Technology (CAMT) Chiang Mai University',
    major: 'Animation and Game 3.20',
  },
  {
    id: 2,
    year: '2016',
    school: 'Mahidol University Kanchanaburi Campus, Thailand',
    major: 'Food Technology',
  },
  {
    id: 3,
    year: '2015',
    school: 'Suankularb Wittayai Saraburi School',
    major: 'Math-Sci',
  },
];

const codeskillData = [
  {
    id: 1,
    skillName: 'HTML',
  },
  {
    id: 2,
    skillName: 'CSS',
  },
  {
    id: 3,
    skillName: 'React',
  },
  {
    id: 4,
    skillName: 'JavaScript',
  },
];

const languagesData = [
  {
    id: 1,
    lang: 'Thai',
  },
  {
    id: 2,
    lang: 'English',
  },
];

const interesData = [
  {
    id: 1,
    inter: 'Music',
  },
  {
    id: 2,
    inter: 'Books',
  },
  {
    id: 3,
    inter: 'Movies',
  },
  {
    id: 4,
    inter: 'Traveling',
  },
  {
    id: 5,
    inter: 'Animation',
  },
  {
    id: 6,
    inter: 'Learning new something',
  },
];

const about = () => {
  return (
    <Layout>
      <div className=" shadow-lg border-4 rounded-3xl border-red-900 justify-start text-center ml-20 mb-20  items-center flex-row p-0  bg-white fixed h-auto ">
        <section className="mx-10 mb-10 ">
          <img className="mx-auto w-60 h-60 object-cover mt-10  " src={me} />
          <div className="mt-5 text-xl">UX/UI DESIGNER</div>
          <div className="space-y-2">
            <div className="mt-6 flex justify-start ...">
              <img className="inline  mr-2 " src={location} />
              <div className="inline">Saraburi, Thailand</div>
            </div>
            <div className="mt-2 flex justify-start">
              <img className="inline  mr-2" src={calendar} />
              <div className="inline">08 July 1997</div>
            </div>
            <div className="mt-2 flex justify-start">
              <img className="inline  mr-2" src={phone} />
              <div className="inline">0973235261</div>
            </div>
            <div className="mt-2 flex justify-start">
              <img className="inline  mr-2" src={email} />
              <div className="inline">m.natthaya008@gmail.com</div>
            </div>
            <div className="mt-2 flex justify-start">
              <img className="inline  mr-2" src={Link} />
              <a href="https://www.linkedin.com/in/pupaeng-natthaya/">
                pupaeng-natthaya
              </a>
            </div>
            <div className="mt-2 flex justify-start">
              <img className="inline  mr-2" src={be} />
              <a href="https://www.behance.net/ppq_m">ppq_m</a>
            </div>
          </div>
        </section>
      </div>
      <Information
        skillData={skillData}
        educationData={educationData}
        codeskillData={codeskillData}
        languagesData={languagesData}
        interesData={interesData}
      />
    </Layout>
  );
};

export default about;
