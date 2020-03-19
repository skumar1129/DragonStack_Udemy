import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchDragon } from '../actions/dragon.js';
import DragonAvatar from './DragonAvatar.js'



class Dragon extends Component {





  // fetchDragon = () => {
  //   fetch('http://localhost:3000/dragon/new')
  //     .then(response => response.json())
  //     .then(json => {
  //       console.log(json);
  //       this.setState({dragon: json.dragon});
  //     })
  //     .catch(error => console.error(error));
  // }

  render() {

    return (
      <div>
        <Button onClick={this.props.fetchDragon}>New Dragon</Button>
        <DragonAvatar dragon={this.props.dragon}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const dragon = state.dragon;
  return {dragon};
}

const componentConnector = connect(mapStateToProps, {fetchDragon});

export default componentConnector(Dragon);
