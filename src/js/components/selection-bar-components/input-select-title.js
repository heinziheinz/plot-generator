/**
 *         Input person component fetches data regarding star wars film titles for swapi.co/api API.
 */
import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import className from 'classnames';
import styles from './input-select-title.module.css';
export default class SelectFilmTitle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            swapiFilmTitle: {}
        };
        this.classNames = {
            inputWidth: className(styles.inputWidth)
        };
        this.handleOnChange = this.handleOnChange.bind(this);
    }
    handleOnChange(e) {
        this.props.onFilmTitleChange(e.target.value);
    }
    componentDidMount() {
        fetch('https://swapi.co/api/films/')
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result.results);
                    this.setState({
                        isLoaded: true,
                        swapiFilmTitle: result.results
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }
    render() {
        //filmTiles are appended into the optional input field
        const { error, isLoaded, swapiFilmTitle } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return (
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="selectPlanet" className="mr-sm-2">Select a story:</Label>
                    <Input type="select" name="selectPlanet" id="selectPlanet" className={this.classNames.inputWidth}>
                        <option> -- Pick your filmplot -- </option>
                    </Input>
                </FormGroup>
            );
        } else {
            return (
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="selectPlanet" className="mr-sm-2">Select a story:</Label>
                    <Input type="select" name="selectPlanet" id="selectPlanet" onChange={this.handleOnChange} className={this.classNames.inputWidth}>
                        <option> -- Pick your filmplot -- </option>
                        {swapiFilmTitle.map(filmTitel => (
                            <option key={filmTitel.title}>{filmTitel.title}</option>
                        ))}
                    </Input>
                </FormGroup>
            );
        }
    }
}