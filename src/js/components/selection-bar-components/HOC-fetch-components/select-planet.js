import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import className from 'classnames';
import styles from './input-select-title.module.css';
class PlanetLoading extends React.Component {
  constructor(props) {
    super(props);
    this.classNames = {
      inputWidth: className(styles.inputWidth)
    };
  }
  render() {
    return (
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="selectPlanet" className="mr-sm-2">
          Select a backdrop:
        </Label>
        <Input
          type="select"
          name="selectPlanet"
          id="selectPlanet"
          className={this.classNames.inputWidth}
        >
          <option> -- Pick your backdrop -- </option>
        </Input>
      </FormGroup>
    );
  }
}
class PlanetLoaded extends React.Component {
  constructor(props) {
    super(props);
    this.classNames = {
      inputWidth: className(styles.inputWidth)
    };
  }
  render() {
    const gernericTitle = this.props.gernericTitle;
    return (
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="selectPlanet" className="mr-sm-2">
          Select a backdrop:
        </Label>
        <Input
          type="select"
          name="selectPlanet"
          id="selectPlanet"
          onChange={this.props.handleOnChange}
          className={this.classNames.inputWidth}
        >
          <option> -- Pick your backdrop -- </option>
          {gernericTitle.map(planet => (
            <option key={planet.name}>{planet.name}</option>
          ))}
        </Input>
      </FormGroup>
    );
  }
}
export default PlanetLoaded;
export { PlanetLoading };
