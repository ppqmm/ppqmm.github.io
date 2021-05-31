import React from 'react';

const Information = ({
  skillData,
  educationData,
  codeskillData,
  languagesData,
  interesData,
}) => {
  return (
    <div
      style={{
        marginLeft: '440px',
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#002F6C',
        fontFamily: 'sans-serif',
        marginRight: '80px',
      }}
    >
      Hello
      <div
        style={{
          fontSize: '20px',
        }}
      >
        Natthaya Mongkolupathum
      </div>
      <p
        style={{
          fontSize: '14px',
          fontWeight: 'normal',
          color: '#333333',
          marginTop: '10px',
        }}
      >
        I was an intern in UX/UI Design position at Artisan Digital Asia, and I
        was interested in web design, desktop, mobile application, landing page
        etc, which led me to digital art. I am studying coding CSS, HTML,
        JavaScript and React to gain skills. The ability to work for myself. I
        am currently looking for a challenging position and can learn design
        skills. And create creativity in order to develop UX / UI design skills.
      </p>
      <div className="flex flex-row">
        <div className="mt-4">
          <div
            className="w-32"
            style={{ fontSize: '16px', borderBottom: '3px solid #FBC02D ' }}
          >
            Educations
          </div>

          {/* {educationData.map((edu) => {
            return (
              <div key={edu.id}>
                <li
                  className="list-disc mt-2 font-medium"
                  style={{ color: '#333333', fontSize: '14px' }}
                >
                  {edu.year}
                </li>

                <div
                  className="font-medium"
                  style={{
                    color: '#333333',
                    fontSize: '14px',
                    marginLeft: '18px',
                  }}
                >
                  {edu.school}
                </div>

                <div
                  className="mt-0.5 font-light"
                  style={{
                    color: '#333333',
                    fontSize: '14px',
                    marginLeft: '18px',
                  }}
                >
                  {edu.major}
                </div>
              </div>
            );
          })} */}

          <li
            className="list-disc mt-2 font-medium"
            style={{ color: '#333333', fontSize: '14px' }}
          >
            2017
          </li>

          <div style={{ marginLeft: '18px' }}>
            <div
              className="font-medium"
              style={{ color: '#333333', fontSize: '14px' }}
            >
              College of Art, Media and Technology
              <p>(CAMT) Chiang Mai University</p>
            </div>

            <div
              className="mt-0.5 font-light"
              style={{ color: '#333333', fontSize: '14px' }}
            >
              Animation and Game 3.20
            </div>
          </div>

          {/* <li
            className="list-disc mt-2 font-medium"
            style={{ color: '#333333', fontSize: '14px' }}
          >
            2016
          </li>

          <div style={{ marginLeft: '18px' }}>
            <div
              className="font-medium"
              style={{ color: '#333333', fontSize: '14px' }}
            >
              Mahidol University Kanchanaburi
              <p>Campus, Thailand</p>
            </div>

            <div
              className="mt-0.5 font-light"
              style={{ color: '#333333', fontSize: '14px' }}
            >
              Food Technology
            </div>
          </div> */}

          <li
            className="list-disc mt-2 font-medium"
            style={{ color: '#333333', fontSize: '14px' }}
          >
            2015
          </li>

          <div style={{ marginLeft: '18px' }}>
            <div
              className="font-medium"
              style={{ color: '#333333', fontSize: '14px' }}
            >
              Suankularb Wittayai Saraburi School
            </div>
            <div
              className="mt-0.5 font-light"
              style={{ color: '#333333', fontSize: '14px' }}
            >
              Math-Sci 3.55
            </div>
          </div>

          <div
            className="w-16 mt-4"
            style={{ fontSize: '16px', borderBottom: '3px solid #FBC02D ' }}
          >
            Skills
          </div>
          <div
            className="font-normal mt-2"
            style={{ color: '#333333', fontSize: '14px' }}
          >
            {skillData.map((data) => {
              return <p key={data.id}>{data.name}</p>;
            })}
          </div>
        </div>

        <div className="mt-4 ml-16">
          <div
            className="w-28"
            style={{ fontSize: '16px', borderBottom: '3px solid #FBC02D ' }}
          >
            Code skills
          </div>
          <div
            className="font-normal mt-2"
            style={{ color: '#333333', fontSize: '14px' }}
          >
            {codeskillData.map((code) => {
              return <p key={code.id}>{code.skillName}</p>;
            })}
          </div>
          <div
            className="w-28 mt-4"
            style={{ fontSize: '16px', borderBottom: '3px solid #FBC02D ' }}
          >
            Languages
          </div>
          <div
            className="font-normal mt-2"
            style={{ color: '#333333', fontSize: '14px' }}
          >
            {languagesData.map((languages) => {
              return <p key={languages.id}>{languages.lang}</p>;
            })}
          </div>

          <div
            className="w-24 mt-4"
            style={{ fontSize: '16px', borderBottom: '3px solid #FBC02D ' }}
          >
            Interests
          </div>
          <div
            className="font-normal mt-2"
            style={{ color: '#333333', fontSize: '14px' }}
          >
            {interesData.map((interest) => {
              return <p key={interest.id}>{interest.inter}</p>;
            })}
          </div>

          <div />
        </div>
        <div className="mt-4 ml-36">
          <div
            className="w-28"
            style={{ fontSize: '16px', borderBottom: '3px solid #FBC02D ' }}
          >
            Experience
          </div>
          <div
            className="mt-2 font-medium"
            style={{ color: '#333333', fontSize: '14px' }}
          >
            Internship at Artisan Digital Asia | July
            <p>2020 - March 2021</p>
          </div>

          <div style={{ marginLeft: '10px' }}>
            <li
              className=" mt-2 font-normal"
              style={{ color: '#333333', fontSize: '14px' }}
            >
              Dashboard project, Use an ant design
              <div style={{ marginLeft: '20px' }}>
                <p>framework for both mobile and</p>
                <p>desktop designs.</p>
              </div>
            </li>
            <li
              className="mt-2 font-normal"
              style={{ color: '#333333', fontSize: '14px' }}
            >
              Pharmacare Plus project, Use an ant
              <div style={{ marginLeft: '20px' }}>
                <p>design framework for both mobile and </p>
                <p>desktop design.</p>
              </div>
            </li>
            <li
              className="mt-2 font-normal"
              style={{ color: '#333333', fontSize: '14px' }}
            >
              Council of Engineers project, Use an
              <div style={{ marginLeft: '20px' }}>
                apb.io framework for design work.
              </div>
            </li>
            <li
              className="mt-2 font-normal"
              style={{ color: '#333333', fontSize: '14px' }}
            >
              TRYPT Landing page project.
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Information;
