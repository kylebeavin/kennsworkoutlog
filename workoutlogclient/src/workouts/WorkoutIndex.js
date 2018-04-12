import React from 'react';
import WorkoutCreate from './WorkoutCreate';

class WorkoutIndex extends React.Component {
    render() {
        return(
            <div><WorkoutCreate token= {this.props.token}/></div>
        );
    }
}

export default WorkoutIndex;