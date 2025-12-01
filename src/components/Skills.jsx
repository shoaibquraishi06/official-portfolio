import React from 'react'
import './Skills.css'

const skillsList = [
  { name: 'HTML', src: 'https://img.icons8.com/color/48/000000/html-5.png', alt: 'HTML5 logo' },
  { name: 'CSS', src: 'https://img.icons8.com/color/48/000000/css3.png', alt: 'CSS3 logo' },
  { name: 'JavaScript', src: 'https://img.icons8.com/color/48/000000/javascript.png', alt: 'JavaScript logo' },
  { name: 'Scss', src: 'https://img.icons8.com/color/48/000000/sass.png', alt: 'Sass logo' },
  { name: 'React', src: 'https://img.icons8.com/color/48/000000/react-native.png', alt: 'React logo' },
  { name: 'Tailwind', src: 'https://img.icons8.com/color/48/000000/tailwindcss.png', alt: 'Tailwind CSS logo' },
  { name: 'MongoDB', src: 'https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000', alt: 'MongoDB logo' },
  { name: 'Express', src: 'https://img.icons8.com/?size=100&id=PZQVBAxaueDJ&format=png&color=000000', alt: 'Express logo' },
  { name: 'Node.js', src: 'https://img.icons8.com/color/48/000000/nodejs.png', alt: 'Node.js logo' },
  { name: 'VSCode', src: 'https://img.icons8.com/color/48/000000/visual-studio-code-2019.png', alt: 'VSCode logo' }
]


const skillsList2 = [
  { name: 'Git', src: 'https://img.icons8.com/color/48/000000/git.png', alt: 'Git logo' },
  { name: 'Postman', src: 'https://img.icons8.com/color/48/000000/postman.png', alt: 'Postman logo' },
  { name: 'Figma', src: 'https://img.icons8.com/color/48/000000/figma.png', alt: 'Figma logo' },
  { name: 'Jest', src: 'https://img.icons8.com/color/48/000000/jest.png', alt: 'Jest logo' },
  { name: 'Webpack', src: 'https://img.icons8.com/color/48/000000/webpack.png', alt: 'Webpack logo' },
  { name: 'Babel', src: 'https://img.icons8.com/color/48/000000/babel.png', alt: 'Babel logo' },
  { name: 'ESLint', src: 'https://img.icons8.com/color/48/000000/eslint.png', alt: 'ESLint logo' },
  { name: 'Prettier', src: 'https://img.icons8.com/color/48/000000/prettier.png', alt: 'Prettier logo' }
]








  



function SkillRow({ items, direction = 'left', duration = 20 }) {
  const display = [...items, ...items]
  return (
    <div className={`skill-row ${direction}`} style={{ ['--dur']: `${duration}s` }}>
      <div className="track">
        <div className="track-inner">
          {display.map((s, i) => (
            <div className="skill" key={`${s.name}-${i}`}>
              <img src={s.src} alt={s.alt} />
              <h4>{s.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
        <div className="skill-top">
        <h5>My Favorite Tools</h5>
        <h4>Exploring the Tools  <span>|</span> <span>Behind My Development</span></h4>
      </div>
      <h2 className="skills-title">MY FAVORITE SKILLS</h2>
      <div className="multi-rows">
        <div className="left-shadow"></div>
        <div className="right-shadow"></div>
        <SkillRow items={skillsList} direction="right" duration={15} />
        <SkillRow items={skillsList2} direction="left" duration={15} />
        <SkillRow items={skillsList} direction="right" duration={15} />
        <SkillRow items={skillsList2} direction="left" duration={15} />
      </div>
       <div className="end-line"></div>
    </section>
  )
}

export default Skills
