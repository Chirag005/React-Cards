import React, {Component} from 'react'
import Card from './cardUI';
import img1 from '../assets/ansuya.jpg';
import img2 from '../assets/samarth.jpg';
import img3 from '../assets/03.jpg';
import img4 from '../assets/04.jpg';

class cards extends Component {
    render() { 
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="row-md-1">
                        <Card imgsrc={img1} title="Ansuya A" text="Founder & CEO"/>
                    </div>
                    <div className="row-md-2">
                        <Card imgsrc={img2} title="Samarth H" text="Hon. Tech Advisor"/>
                    </div>
                    <div className="row-md-4">
                        <Card imgsrc={img3} title="Danny D" text="HR Manager"/>
                    </div>
                    <div className="row-md-5">
                        <Card imgsrc={img4} title="Matt D" text="Action Specialist"/>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default cards;