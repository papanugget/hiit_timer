import React from 'react';
import Container from '@material-ui/core/Container';
import ClockDisplay from './components/ClockDisplay';

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
  }
  render() {
    return (
      <Container maxWidth="sm">
        <ClockDisplay />
      </Container>
    );
  }
}

export default App;