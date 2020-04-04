import React from 'react'
import {Modal, Button} from 'react-bootstrap'
const Groups = () => {
        return (

            <div class="group-boarding inv-bg">


                {/* <h3> Hello there! </h3>
                <p> Currently this page is a Work In Progress, </p>
                <p> Visit back soon for more updates! </p> */}

                <div>
                    <button> Create Group </button>
                </div>

                {/* If new User,  Tell us about yourself*/}

                <form>
                    <input id="name" name="name" placeHolder="toon name"/>
                </form>
                
                <select id="species" name="species">
                    <option value="bear">Bear</option>
                    <option value="cat">Cat</option>
                    <option value="dog">Dog</option>
                    <option value="duck">Duck</option>
                    <option value="horse">Horse</option>
                    <option value="monkey">Monkey</option>
                    <option value="mouse">Mouse</option>
                    <option value="pig">Pig</option>
                    <option value="rabbit">Rabbit</option>
                    <option value="deer">Deer</option>
                    <option value="crocodile">Crocodile</option>
                </select>

                <select id="color" name="color">
                    <option value="red">Red</option>
                    <option value="orange">Orange</option>
                    <option value="yellow">Yellow</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="purple">Purple</option>
                    <option value="black">Black</option>
                    <option value="white">White</option>
                    <option value="brown">Brown</option>
                </select>
                
            </div>
        )
}

export default Groups;