/**
 *         Input person component fetches data regarding star wars film titles for swapi.co/api API.
 */
import React from 'react';

const fetchSwapiAPI = (WrappedCompLoading, WrappedCompLoaded, URLAdress) => {
  class FetchSwapiAPI extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        gernericTitle: {} //TODO:Filmtitel einen generischeren Namen geben
      };
      this.handleOnChange = this.handleOnChange.bind(this);
    }
    handleOnChange(e) {
      //TODO: Curomzeable eventhandler übergeben
      this.props.onSpecificChange(e.target.value);
    }
    componentDidMount() {
      fetch(URLAdress)
        .then(res => res.json())
        .then(
          result => {
            console.log(result.results);
            this.setState({
              isLoaded: true,
              gernericTitle: result.results
            });
          },
          error => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        );
    }
    render() {
      //filmTiles are appended into the optional input field
      const { error, isLoaded, gernericTitle } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <WrappedCompLoading />;
      } else {
        return (
          <WrappedCompLoaded
            gernericTitle={gernericTitle}
            handleOnChange={this.handleOnChange}
          />
        );
      }
    }
  }
  FetchSwapiAPI.displayName = `FetchSwapiAPI(${getDisplayName(
    WrappedCompLoading,
    WrappedCompLoaded
  )})`;
  return FetchSwapiAPI;
};
function getDisplayName(WrappedComponent, WrappedComp) {
  return (
    WrappedComponent.displayName + ' ' + WrappedComp.displayName ||
    WrappedComponent.name + ' ' + WrappedComp.name ||
    'Component'
  );
}
export default fetchSwapiAPI;
