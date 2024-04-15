import React from "react";
import {Helmet} from "react-helmet";

const About = () => {
  return (
    <div>
        <Helmet>
            <title>About</title>
        </Helmet>
        <div className="w-11/12 mx-auto mt-10 animate__animated animate__fadeInDown">
      <h2 className="mt-10 text-6xl text-center font-bold">
        ReStates: Your Trusted Partner in Real Estate
      </h2>
     
      <div className="mt-5 text-lg font-normal">
        <p>
          At ReStates, we're passionate about guiding you through every step of
          your real estate journey. Whether you're a first-time homebuyer, a
          seasoned investor, or looking to sell your current property, we
          understand the significance of finding the perfect place to call home,
          or maximizing your return on investment.
        </p>
        <p className="mt-3 text-5xl text-center font-bold">Here's what sets us apart:</p>
        <ul className="mt-2">
          <li>
            <p>
              <span className="font-bold">Local Expertise:</span> Our team of experienced agents boasts a deep
              understanding of the USA market, ensuring you receive informed and
              personalized guidance.
            </p>
          </li>
          <li>
            <p>
            <span className="font-bold">Unwavering Commitment:</span> We prioritize building strong relationships
              with our clients. Your goals are our goals, and we're dedicated to
              exceeding your expectations.
            </p>
          </li>
          <li>
            <p>
            <span className="font-bold">Data-Driven Approach:</span> We leverage market insights and strategic
              negotiation tactics to secure the best possible outcome for you.
            </p>
          </li>
          <li>
            <p>
            <span className="font-bold">Seamless Experience:</span> We provide a streamlined and stress-free
              experience, keeping you informed and involved throughout the
              process.
            </p>
          </li>
        </ul>

        <p className="mt-3 text-5xl text-center font-bold">We believe in:</p>
        <ul className="mt-2">
            <li><p><span className="font-bold">Transparency:</span>
Open communication is paramount. We'll keep you informed every step of the way.</p></li>
            <li><p><span className="font-bold">Integrity:</span> We uphold the highest ethical standards, ensuring a trustworthy and reliable experience.</p></li>
            <li><p><span className="font-bold">Results:</span> We're driven by achieving your goals and exceeding your expectations.</p></li>
        </ul>
      </div>
      <p className="text-4xl font-bold text-center mt-2">We look forward to partnering with you!</p>
    </div>
    </div>
  );
};

export default About;
