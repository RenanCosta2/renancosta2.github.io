import React from 'react';
import { MdEmail } from 'react-icons/md';
import { FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';

export function Profile() {
  return (
    <section className='profile'>
      <img className='profile-img' src="/images/profile.jpg" alt="Profile" />
      <h1 className='profile-name'>Renan Costa</h1>
      <h2 className='profile-role'>Analista de Dados</h2>

      <div className="profile-infos">
        <a className="profile-infos-item" href="mailto:renanleitedacosta@gmail.com">
          <MdEmail /> 
          renanleitedacosta@gmail.com
        </a>

        <a 
          className="profile-infos-item" 
          href="https://www.linkedin.com/in/f-renan-costa/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaLinkedin /> 
          LinkedIn
        </a>

        <a 
          className="profile-infos-item" 
          href="https://github.com/RenanCosta2" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaGithub /> 
          GitHub
        </a>

        <span className="profile-infos-item">
          <FaMapMarkerAlt /> 
          Fortaleza, Ceará, Brasil
        </span>
      </div>

    </section>
  );
}