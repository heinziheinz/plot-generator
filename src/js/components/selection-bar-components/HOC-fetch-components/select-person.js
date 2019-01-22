import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import className from 'classnames';
import styles from './input-select-title.module.css';
class PersonLoading extends React.Component {
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
          Select a hero:
        </Label>
        <Input
          type="select"
          name="selectPlanet"
          id="selectPlanet"
          className={this.classNames.inputWidth}
        >
          <option> -- Pick your hero -- </option>
        </Input>
      </FormGroup>
    );
  }
}
class PersonLoaded extends React.Component {
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
        <Label for="selectPerson" className="mr-sm-2">
          Select a hero:
        </Label>
        <Input
          type="select"
          name="selectPerson"
          id="selectPerson"
          onChange={this.props.handleOnChange}
          className={this.classNames.inputWidth}
        >
          <option> -- Pick your hero -- </option>
          {gernericTitle.map(gernericTitle => (
            <option key={gernericTitle.name}>{gernericTitle.name}</option>
          ))}
        </Input>
      </FormGroup>
    );
  }
}
export default PersonLoaded;
export { PersonLoading };
