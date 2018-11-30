
/**
 * It`s being verified, if all free props: selected Planet, selected Person and selected film titel are selected 
 * if not, an information is rendered, saying which options are still to choose. If all all inputfileds are selected, the text is rendered.
 */
import React from 'react';
import { Fade } from 'reactstrap';
import FilmplotFilterTextFilter from './filmplot-filter-textfilter';
import className from 'classnames';
import styles from './filmplot-filter.module.css';
export default class FilmPlotFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { fadeIn: true };
        this.classNames = {
            fade: className('d-flex', 'mt-3', styles.fade),
            h4: className(styles.h4),
            div: className(styles.div),
            p: className(styles.p)
        };
    }
    render() {
        //filtering Filmplot
        const filmData = this.props.filmData;
        const filmTitle = [];
        const filmPlot = [];
        let selectedFilmtitle = this.props.selectedFilmtitle;
        let starringPerson = this.props.starringPerson;
        let backdropPlanet = this.props.backdropPlanet;
        let errorArray = [];
        let filmTiteleSelected = false;
        let personSelected = true;
        let planetSelected = true;

        filmData.forEach((film) => {
            if (selectedFilmtitle === film.title) {
                // const filmTitle = film.title;
                filmTitle.push(film.title);
                filmPlot.push(film.opening_crawl);
                filmTiteleSelected = true;
            }
        });
        if (starringPerson === '' || starringPerson === '-- Pick your hero --') {
            // return <p>You have to pick a hero</p>;
            personSelected = false;
        }
        if (backdropPlanet === '' || backdropPlanet === '-- Pick your backdrop --') {
            // return <p>You have to pick a planet</p>;
            planetSelected = false;
        }

        let filmSelectedMessage = filmTiteleSelected ? '' : <p className={this.classNames.p} key={'filmTitel'}>{'FILM-PLOT '}</p>;
        let personSelectedMessage = personSelected ? '' : <p className={this.classNames.p} key={'person'}>{'HERO '}</p>;
        let planetSelectedMessage = planetSelected ? '' : <p className={this.classNames.p} key={'planet'}>{'PLANET '}</p>;
        errorArray.push(filmSelectedMessage);
        errorArray.push(personSelectedMessage);
        errorArray.push(planetSelectedMessage);

        if (filmTiteleSelected && personSelected && planetSelected) {
            return (
                <FilmplotFilterTextFilter
                    filmTitle={filmTitle}
                    filmPlot={filmPlot}
                    starringPerson={starringPerson}
                    backdropPlanet={backdropPlanet}
                    fadeIn={this.state.fadeIn}
                />
            );
        } else {
            return (
                <Fade in={this.props.fadeIn} tag="div" className={this.classNames.fade}>
                    <h4 className={this.classNames.h4}>Please select your:</h4>
                    <div className={this.classNames.div}>{errorArray}</div>
                </Fade>
            );
        }
    }
}