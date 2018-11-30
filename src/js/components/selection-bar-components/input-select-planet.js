import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import className from 'classnames';
import styles from './input-select-planet.module.css';
export default class SelectPlanet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: {}
        };
        this.classNames = {
            inputWidth: className(styles.inputWidth)
        };
        this.handleOnChange = this.handleOnChange.bind(this);
    }
    handleOnChange(e) {
        console.log('hi Planet on Change');
        this.props.onPlanetChange(e.target.value);
    }
    componentDidMount() {
        //console.log('Did mount');
        fetch('https://swapi.co/api/planets/')
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result.results);
                    this.setState({
                        isLoaded: true,
                        swapiPlanets: result.results
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }
    render() {
        const { error, isLoaded, swapiPlanets } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return (
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="selectPlanet" className="mr-sm-2">Select a backdrop:</Label>
                    <Input type="select" name="selectPlanet" id="selectPlanet" className={this.classNames.inputWidth}>
                        <option> -- Pick your backdrop -- </option>
                    </Input>
                </FormGroup>
            );
        } else {
            return (
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="selectPlanet" className="mr-sm-2">Select a backdrop:</Label>
                    <Input type="select" name="selectPlanet" id="selectPlanet" onChange={this.handleOnChange} className={this.classNames.inputWidth}>
                        <option> -- Pick your backdrop -- </option>
                        {swapiPlanets.map(planet => (
                            <option key={planet.name}>{planet.name}</option>
                        ))}
                    </Input>
                </FormGroup>
            );
        }
    }
}