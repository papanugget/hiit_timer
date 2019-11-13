import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import ClockDisplay from './components/ClockDisplay';
import FormEntry from './components/FormEntry';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      default: {
        rounds: 8,
        work: 20,
        rest: 10,
        rampup: 5
      },
      rounds: null,
      work: null,
      rest: null,
      rampup: 5
     }
     this.handleSave = this.handleSave.bind(this);
     this.handleGo = this.handleGo.bind(this);
     this.updateClock = this.updateClock.bind(this);
  }
  // function to save workout parameters
  handleSave = (e) => {
    e.preventDefault();
    console.log('save button clicked');
    // check entry fields for data
    // save fields to state
    // update clock display with calculated times
  }
  // function to run countdown timer according to saved params or default
  handleGo = (e) => {
    e.preventDefault();
    console.log('go button clicked');
    this.updateClock();
    // check for state entry updates
    // if not null use state entries
    // else use default workout params
    // update clock display with rampup / countdown
  }
  // function to update display of clock
  updateClock = () => {
    const clock = document.querySelector("#clock-display");
    console.log(clock);
    // show default tabata workout on load
    // update rounds display
    // have rampup timer before each workout
    // countdown according to calculated params
    // rampup + rounds * (worktime + rest time) = total time
  }
  render() {
    return (
      <Container maxWidth="sm" spacing={3}>
          <Grid>
            
            <Grid item xs={12}>
              <ClockDisplay updateClock={this.updateClock}/>
            </Grid>

            <Grid item xs={12}>
              <FormEntry handleSave={this.handleSave} handleGo={this.handleGo}/>
            </Grid>

        </Grid>
      </Container>
    );
  }
}

export default App;