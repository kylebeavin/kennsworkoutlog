import React from 'react';
// import { Container, Row, Col } from 'reactstrap';
import WorkoutIndex from '../workouts/WorkoutIndex';

const Splash = (props) => {
    return (
      <div>
          <WorkoutIndex token= {props.token}/>
      </div>
    );
}

export default Splash;