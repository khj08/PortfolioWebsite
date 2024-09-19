import React from 'react'

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend Developer</h3>

      <div className="skills__box">
        <div className="skills__group">

          <div className="skills__data">
            <i class='bx bx-badge-check'></i>
            <div>
            <h3 className="skills_name">HTML</h3>
            <span className="skills__level">BASIC</span>
            </div>     
          </div>

          <div className="skills__data">
            <i class='bx bx-badge-check'></i>
            <div>
            <h3 className="skills_name">CSS</h3>
            <span className="skills__level">ADVANCED</span>
            </div>     
          </div>

          <div className="skills__data">
            <i class='bx bx-badge-check'></i>
            <div>
            <h3 className="skills_name">JAVASCRIPT</h3>
            <span className="skills__level">INTERMEDIATE</span>
            </div>     
          </div>

        </div>

        <div className="skills__group">

          <div className="skills__data">
            <i class='bx bx-badge-check'></i>
            <div>
            <h3 className="skills_name">BOOTSTRAP</h3>
            <span className="skills__level">INTERMEDIATE</span>
            </div>     
          </div>

          <div className="skills__data">
            <i class='bx bx-badge-check'></i>
            <div>
            <h3 className="skills_name">GIT</h3>
            <span className="skills__level">INTERMEDIATE</span>
            </div>     
          </div>

          <div className="skills__data">
            <i class='bx bx-badge-check'></i>
            <div>
            <h3 className="skills_name">REACT</h3>
            <span className="skills__level">INTERMEDIATE</span>
            </div>     
          </div>

        </div>

      </div>
    </div>
  )
}

export default Frontend;