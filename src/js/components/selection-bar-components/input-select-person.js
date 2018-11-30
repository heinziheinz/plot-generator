import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import className from 'classnames';
import styles from './input-select-person.module.css';
export default class SelectPerson extends React.Component {
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

        this.handlerOnChange = this.handlerOnChange.bind(this);
    }
    handlerOnChange(e) {
        console.log('this person onChange');
        this.props.onPersonChange(e.target.value);
    }
    componentDidMount() {
        //console.log('Did mount');
        fetch('https://swapi.co/api/people/')
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result.results);
                    this.setState({
                        isLoaded: true,
                        swapiPeople: result.results
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
        const { error, isLoaded, swapiPeople } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return (
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="selectPlanet" className="mr-sm-2">Select a hero:</Label>
                    <Input type="select" name="selectPlanet" id="selectPlanet" className={this.classNames.inputWidth}>
                        <option> -- Pick your hero -- </option>
                    </Input>
                </FormGroup>
            );
        } else {
            return (
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="selectPerson" className="mr-sm-2">Select a hero:</Label>
                    <Input type="select" name="selectPerson" id="selectPerson" onChange={this.handlerOnChange} className={this.classNames.inputWidth}>
                        <option> -- Pick your hero -- </option>
                        {swapiPeople.map(people => (
                            <option key={people.name}>{people.name}</option>
                        ))}
                    </Input>
                </FormGroup>
            );
        }
    }
}