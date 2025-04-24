import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGeneration } from '../actions/generation.js';
import fetchStates from '../reducers/fetchStates.js';


const MINIMUM_DELAY = 300;

class Generation extends Component {



  timer = null;

  componentDidMount() {
    this.fetchNextGeneration();
  }

  componentWillUnMount(){
    clearTimeout(this.timer);
  }

  // fetchGeneration = () => {
  //   fetch('http://localhost:3000/generation')
  //     .then(response => response.json())
  //     .then(json => {
  //       console.log(json);
  //       this.props.dispatchGeneration(json.generation);
  //     })
  //     .catch(error => console.log(error));
  // };

  fetchNextGeneration = () => {
    this.props.fetchGeneration();

    let delay = new Date(this.props.generation.expiration) -
    new Date().getTime();

    if (delay < MINIMUM_DELAY){
      delay = MINIMUM_DELAY;
    }

    this.timer = setTimeout(() => this.fetchNextGeneration(), delay);
  }

  render() {
    const { generation } = this.props;

  

    if (generation.status === fetchStates.error){
      return <div>{generation.message}</div>;
    }

    return (
      <div>
        <h3>Generation {generation.generationId}. Expires on:</h3>
        <h4>{new Date(generation.expiration).toString()}</h4>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const generation = state.generation;
  return { generation };
}

// const mapDispatchToProps = dispatch => {
//   return {
//     // dispatchGeneration: generation => dispatch(
//     //   generationActionCreator(generation)
//     // ),
//     fetchGeneration: () => fetchGeneration
//   }
// };

// const fetchGeneration = () => dispatch => {
//   fetch('http://localhost:3000/generation')
//     .then(response => response.json())
//     .then(json => {
//       console.log(json);
//       dispatch(generationActionCreator(json.generation))
//     })
//     .catch(error => console.log(error));
// };

const componentConnector = connect(mapStateToProps, {fetchGeneration});

export default componentConnector(Generation);
