/**
 *  Plot generator Main File
 */
import React from 'react';
import SelectionBar from './../components/selection-bar';
import FilmPlotContainer from './../components/filmplot-container';
import className from 'classnames';
import styles from './plot-generator.module.css';
//TODO: unten: import nur zu Testzwecken
import NewElement from './new-element';

export default class PlotGeneratorMainClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filmTitle: '',
      starringPerson: '',
      backdropPlanet: ''
    };
    this.classNames = {
      h1: className(styles.h1),
      divHeader: className(styles.divHeader),
      mainContainer: className(styles.mainContainer)
    };
    this.handleFilmTitleChange = this.handleFilmTitleChange.bind(this);
    this.handlePersonChange = this.handlePersonChange.bind(this);
    this.handlePlanetChange = this.handlePlanetChange.bind(this);
  }
  handleFilmTitleChange(selectedFilmTitel) {
    //selected Film Title from input_select-title 2 components down
    console.log('Plot Generator: New Film Titel ' + selectedFilmTitel);
    this.setState({
      filmTitle: selectedFilmTitel
    });
  }
  handlePersonChange(selectedPerson) {
    //selected Person from input-select-person 2 components down
    console.log('Plot Generator: New Person selected ' + selectedPerson);
    this.setState({
      starringPerson: selectedPerson
    });
  }
  handlePlanetChange(selectedPlanet) {
    //selected Planet from input-select-planet 2 components down
    console.log('Plot Generator: New Planet selected ' + selectedPlanet);
    this.setState({
      backdropPlanet: selectedPlanet
    });
  }
  render() {
    const { filmTitle, starringPerson, backdropPlanet } = this.state;
    return (
      <React.Fragment>
        <div className={this.classNames.mainContainer}>
          <div className={this.classNames.divHeader}>
            <h1 className={this.classNames.h1}>Star Wars Plot Generator</h1>
            <SelectionBar
              onFilmTitleChange={this.handleFilmTitleChange}
              onPersonChange={this.handlePersonChange}
              onPlanetChange={this.handlePlanetChange}
            />
          </div>
          <FilmPlotContainer
            filmTitle={filmTitle}
            backdropPlanet={backdropPlanet}
            starringPerson={starringPerson}
          />
        </div>
        <NewElement />
      </React.Fragment>
    );
  }
}
