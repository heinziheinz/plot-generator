
/**
 * Selection bar - contains: Input components to pick plot, the hero and planet
 */
import React from 'react';
import { Form } from 'reactstrap';
import SelectFilmTitle from './selection-bar-components/input-select-title';
import SelectPlanet from './selection-bar-components/input-select-planet';
import SelectPerson from './selection-bar-components/input-select-person';
import className from 'classnames';
import styles from './selection-bar.module.css';
import MediaQuery from 'react-responsive';
export default class SelectionBar extends React.Component {
    constructor(props) {
        super(props);
        this.classNames = {
            formMarginLeft: className(styles.formMarginLeft)
        };
    }
    render() {
        return (
            <React.Fragment>
                <MediaQuery minWidth={1200}>
                    <Form inline>
                        <SelectFilmTitle
                            onFilmTitleChange={this.props.onFilmTitleChange}
                        />
                        <SelectPerson
                            onPersonChange={this.props.onPersonChange}
                        />
                        <SelectPlanet
                            onPlanetChange={this.props.onPlanetChange}
                        />
                    </Form>
                </MediaQuery>
                <MediaQuery maxWidth={1200}>
                    <Form className={this.classNames.formMarginLeft}>
                        <SelectFilmTitle
                            onFilmTitleChange={this.props.onFilmTitleChange}
                        />
                        <SelectPerson
                            onPersonChange={this.props.onPersonChange}
                        />
                        <SelectPlanet
                            onPlanetChange={this.props.onPlanetChange}
                        />
                    </Form>
                </MediaQuery>
            </React.Fragment>
        );
    }
}