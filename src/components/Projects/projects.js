import React, { Component } from 'react';
import './projects.css';

class Projects extends Component {
  render() {
    return (
        <div>
            <h1>Projects</h1>
                <div class ="project">
                    <h3> Food Delivery Web Application </h3>

                    My team and I built a database by modelling the customers, restaurants, drivers, and orders.
                    <br></br>
                    <br></br>
                    We then created the SQL queries needed to access the needed data from the database.
                    <br></br>
                    <br></br>
                    Finally, we implemented functionality including user accounts, ordering food, and leaving reviews.
                    <br></br>
                    <br></br>

                    <h4> Technologies: MySQL, Node.js with Express, Vue.js, Git </h4>
                </div>
                
                <div class ="project">
                    <h3> Discord Server Bot </h3>

                    Discord is a voice chat application where rooms are open for multiple people to join in at any time.
                    <br></br>
                    <br></br>
                    A problem my friends and I had was that we didn't know who entered a voice room without checking.
                    <br></br>
                    <br></br>
                    I created this bot to give an auditory greeting so we would know who joined the voice room.
                    <br></br>
                    <br></br>
                    I also implemented a mute feature for this bot for when the people in the voice room needed to focus.
                    <br></br>
                    <br></br>

                    <h4> Technologies: Node.js </h4>
                </div>
                
                <div class ="project">
                  <h3> Water Fountain Tracker </h3>

                  Often times at UBC I would need drinking water but wouldn't know where to get any near me.
                  <br></br>
                  <br></br>
                  To save time, I made to this project to find the closest water fountain to my current location.
                  <br></br>
                  <br></br>
                  I started by representing water fountains and their locations using OOP in Java.
                  <br></br>
                  <br></br>
                  I then created a GUI using JavaFX allowing users to create, remove, and view the water fountains.

                  <h4> Technologies: JavaFX, JUnit, Git </h4>
                </div>
        </div>
    );
  }
}

export default Projects;
