
/**
 *  Text is being filtered by specified regEX condition- Persons are replaced with :insertPeople: and planets and places are replaced with :insertPlanets:.
 * Subseqeuntly :insertPeople: is being replaced with the selected person and :insertPlanets: is being replaced with the selected planet
 */
import React from 'react';
import { Fade } from 'reactstrap';
import className from 'classnames';
import styles from './filmplot-filter-textfilter.module.css';
export default class FilmplotFilterTextFilter extends React.Component {
    constructor(props) {
        super(props);
        this.classNames = {
            fade: className('mt-3', 'd-flex', styles.fade),
            h3: className(styles.h3),
            p: className(styles.p)
        };
    }

    render() {
        const filmTitle = this.props.filmTitle;
        const filmPlot = this.props.filmPlot;
        const starringPerson = this.props.starringPerson;
        const backdropPlanet = this.props.backdropPlanet;
        if (filmPlot.length === 0) return null;
        let regExPeople = /Princess(\r\n|\r|\n|\s)?Leia|Count(\r\n|\r|\n|\s)?Dooku|the(\r\n|\r|\n|\s)?Supreme(\r\n|\r|\n|\s)?Chancellor|Evil|Jabba(\r\n|\r|\n|\s)?the(\r\n|\r|\n|\s)?Hutt|FIRST(\r\n|\r|\n|\s)?ORDER|the(\r\n|\r|\n|\s)?Rebellion/g;
        let regExPlanets = /an(\r\n|\r|\n|\s)?entire(\r\n|\r|\n|\s)?planet|the(\r\n|\r|\n|\s)?besieged(\r\n|\r|\n|\s)?capital|Naboo|Tatooine|Hoth|Jakku/gi;
        let filmPlotPeopleInsert = filmPlot[0].replace(regExPeople, ':insertPeople:');
        let filmPlotPlanetsInsert = filmPlotPeopleInsert.replace(regExPlanets, ':insertPlanets:');
        let regExInsertPeople = /:insertPeople:/g;
        let regExInsertPlanets = /:insertPlanets:/g;
        let filmPlotInsertPeopleExchanged = filmPlotPlanetsInsert.replace(regExInsertPeople, starringPerson);
        let filmPlotInsertPlanetsExchanged = filmPlotInsertPeopleExchanged.replace(regExInsertPlanets, backdropPlanet);
        return (
            <Fade in={this.props.fadeIn} tag="div" className={this.classNames.fade}>
                <h3 className={this.classNames.h3}>{filmTitle}</h3>
                <p className={this.classNames.p}>{filmPlotInsertPlanetsExchanged}</p>
            </Fade>
        );
    }
}