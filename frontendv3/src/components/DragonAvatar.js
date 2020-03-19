import React, { Component } from 'react';
import { patchy, plain, skinny, slender, sporty, spotted, stocky, striped } from '../assets'

const propertyMap = {
  backgroundColor: {
    black: '#263228',
    white: '#cfd8dc',
    green: '#a5d6a7',
    blue: '#0277bd'
  },
  build: {
    slender,
    stocky,
    sporty,
    skinny
  },
  pattern: {
    plain,
    striped,
    spotted,
    patchy
  },
  size: {
    small: 100,
    medium: 140,
    large: 180,
    enormous: 220
  }
};

class DragonAvatar extends Component {

  get DragonImage(){
    const dragonPropertyMap = {};

    this.props.dragon.traits.forEach(trait => {
      const { traitType, traitValue } = trait;

      dragonPropertyMap[traitType] = propertyMap[traitType][traitValue];
    });

    const { backgroundColor, build, pattern, size} = dragonPropertyMap;

    const sizing = { width: size, height: size};

    return(
      <div className='dragon-avatar-image-wrapper'>
        <div className='dragon-avatar-image-background' style={{backgroundColor, ...sizing}}></div>
        <img src = {pattern} style = {{...sizing}} className='dragon-avatar-image-pattern'/>
        <img src = {build} style = {{...sizing}} className='dragon-avatar-image'/>
      </div>
    );
  }

  render() {
    const dragon = this.props.dragon;

    if (!dragon.dragonId) return <div></div>;

    return(
      <div>
        <span>G{dragon.generationId}. </span>
        <span>I{dragon.dragonId}. </span>
        {dragon.traits.map(trait => trait.traitValue).join(', ')}
        { this.DragonImage }
      </div>
    )
  }
}

export default DragonAvatar;
