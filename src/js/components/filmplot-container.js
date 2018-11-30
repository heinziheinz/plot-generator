/**
 *  Story Container
 */
import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import FilmPlotFilter from './filmplot-container-components/filmplot-filter';
import classNames from 'classnames';
import styles from './filmplot-container.module.css';
export default class FilmPlotContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            filmData: {}
        };
        this.classNames = {
            JumbotronContainer: classNames(styles.jumbotronContainer, 'd-flex justify-content-center')
        };
    }
    componentDidMount() {
        console.log('Story Container did mount');
        fetch('https://swapi.co/api/films/')
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result.results);
                    this.setState({
                        isLoaded: true,
                        filmData: result.results
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
        console.log(this.props.filmTitle);
        console.log(this.props.backdropPlanet);
        console.log(this.props.starringPerson);
        const { error, isLoaded, filmData } = this.state;

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        }
        return (
            <Jumbotron fluid className={styles.jumbotron}>
                <Container fluid className={this.classNames.JumbotronContainer}>
                    <FilmPlotFilter
                        selectedFilmtitle={this.props.filmTitle}
                        backdropPlanet={this.props.backdropPlanet}
                        starringPerson={this.props.starringPerson}
                        filmData={filmData}
                    />
                </Container>
            </Jumbotron>
        );
    }
}
