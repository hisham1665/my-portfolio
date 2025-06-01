import React from 'react'

function AboutMe() {
  return (
    <section id="about" className="py-12 px-6 md:px-20 bg-[#F0F0EC]  text-violet-700 ">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">About Me</h2>
      <div className="space-y-5 text-lg leading-relaxed text-gray-500">
        <p>
          I’m an aspiring full-stack developer with a strong foundation in the MERN stack and mobile application development using Flutter. With a passion for crafting intuitive, scalable digital experiences, I enjoy building solutions that merge modern design with functional technology. I thrive in fast-paced environments where creativity meets problem-solving, and I’m always eager to explore how code can solve real-world challenges.
        </p>
        <p>
          Beyond traditional web and mobile development, I’m currently diving into the world of artificial intelligence and machine learning. My goal is to combine robust engineering foundations with intelligent, data-driven insights so that my applications not only look great but also “think” on behalf of the user. Whether it’s building a responsive e-commerce site, a cross-platform mobile app, or experimenting with AI/ML models, I’m driven by continuous learning and a desire to deliver tangible value through code.
          </p>
      </div>
    </section>
  );
}

export default AboutMe