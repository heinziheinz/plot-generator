/**
 * Selection bar - contains: Input components to pick plot, the hero and planet
 */
import React from 'react';
import { Form } from 'reactstrap';
import fetchSwapiAPI from './selection-bar-components/HOC-fetch';
import className from 'classnames';
import styles from './selection-bar.module.css';
import MediaQuery from 'react-responsive';
import SelectedFilmTitleLoaded from './selection-bar-components/HOC-fetch-components/select-film';
import { FilmTitleLoading } from './selection-bar-components/HOC-fetch-components/select-film';
import SelectedPersonLoaded from './selection-bar-components/HOC-fetch-components/select-person';
import { PersonLoading } from './selection-bar-components/HOC-fetch-components/select-person';
import SelectedPlanetLoaded from './selection-bar-components/HOC-fetch-components/select-planet';
import { PlanetLoading } from './selection-bar-components/HOC-fetch-components/select-planet';
export default class SelectionBar extends React.Component {
  constructor(props) {
    super(props);
    this.classNames = {
      formMarginLeft: className(styles.formMarginLeft)
    };
    this.Wrapper = {
      Film: fetchSwapiAPI(
        FilmTitleLoading,
        SelectedFilmTitleLoaded,
        'https://swapi.co/api/films/'
      ),
      Planet: fetchSwapiAPI(
        PlanetLoading,
        SelectedPlanetLoaded,
        'https://swapi.co/api/planets/'
      ),
      People: fetchSwapiAPI(
        PersonLoading,
        SelectedPersonLoaded,
        'https://swapi.co/api/people/'
      )
    };
  }
  componentDidMount() {
    console.log('....componente Did Mount');
  }
  componentDidUpdate() {
    console.log('...componente Did Update');
  }
  render() {
    return (
      <React.Fragment>
        <MediaQuery minWidth={1200}>
          <Form inline>
            <this.Wrapper.Film
              onSpecificChange={this.props.onFilmTitleChange}
            />
            <this.Wrapper.People onSpecificChange={this.props.onPersonChange} />
            <this.Wrapper.Planet onSpecificChange={this.props.onPlanetChange} />
          </Form>
        </MediaQuery>
        <MediaQuery maxWidth={1200}>
          <Form className={this.classNames.formMarginLeft}>
            <this.Wrapper.Film
              onSpecificChange={this.props.onFilmTitleChange}
            />
            <this.Wrapper.People onSpecificChange={this.props.onPersonChange} />
            <this.Wrapper.Planet onSpecificChange={this.props.onPlanetChange} />
          </Form>
        </MediaQuery>
      </React.Fragment>
    );
  }
}
