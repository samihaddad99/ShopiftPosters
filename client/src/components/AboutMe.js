/**
 * Author: Sami Haddad
 * Date Created: 8/23/2022
 * Last Modified: 8/24/2022
 */

import React from 'react'
import ReactDOM from 'react-dom'

export default function AboutMe() {
    return <div className="AboutSection">
        <h2 className="heading">About Me</h2>
        <p className=" BodyText text-2xl">
          
          <img className="pfp" width="300" height="300" src={require('./imgs/pfp.png')} alt="Me"></img>
          Hello and Welcome to my PERN (Postgresql/Express/React/Node) stack website!
          Feel free to play around with the Database (from the tabs above).
          My name is Sami Haddad
          I'm an under-graduate student
          currently attending Sheridan College at the Software Development
          and Network Engineer program.
          Some of my hobbies include playing piano, making music,
          and programming.
          I have recently taken interest in Video Game design
          on my free-time,
          and I enjoy experimenting with Unreal Engine.
          I also enjoy diving deep into lower-level languages,
          because they help me understand computer fundamentals.
        </p>
      </div>
}