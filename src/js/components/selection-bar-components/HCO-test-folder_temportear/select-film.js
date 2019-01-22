import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import className from 'classnames';
import styles from './input-select-title.module.css';
class FilmTitleLoading extends React.Component {
  //TODO: Hier scheint keine Handle vorhanden zu sein, der das onCHange, um das onChange event bazufangen.
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
          Select a story:
        </Label>
        <Input
          type="select"
          name="selectPlanet"
          id="selectPlanet"
          className={this.classNames.inputWidth}
        >
          <option> -- Pick your filmplot -- </option>
        </Input>
      </FormGroup>
    );
  }
}
class FilmTitleLoaded extends React.Component {
  constructor(props) {
    super(props);
    this.classNames = {
      inputWidth: className(styles.inputWidth)
    };
  }

  render() {
    console.log(this.props.gernericTitle);
    const gernericTitle = this.props.gernericTitle;
    return (
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="selectPlanet" className="mr-sm-2">
          Select a story:
        </Label>
        <Input
          type="select"
          name="selectPlanet"
          id="selectPlanet"
          onChange={this.props.handleOnChange}
          className={this.classNames.inputWidth}
        >
          <option> -- Pick your filmplot -- </option>
          {gernericTitle.map(genericTitle => (
            <option key={genericTitle.title}>{genericTitle.title}</option>
          ))}
        </Input>
      </FormGroup>
    );
  }
}
export default FilmTitleLoaded;
export { FilmTitleLoading };
