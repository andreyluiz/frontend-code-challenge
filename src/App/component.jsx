import React, { Component } from 'react';
import Advertisement from './components/Advertisement';
import Loading from './components/Loading';
import Error from './components/Error';
import styles from './styles.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: '',
    };
  }

  setLoading = loading => this.setState({ loading })

  setError = error => this.setState({ error })

  isLoading = () => this.state.loading

  hasError = () => this.state.error;

  isAllGood = () => !this.isLoading() && !this.hasError()

  async loadData() {
    this.setLoading(true);
    try {
      await this.props.fetchAds();
    } catch (e) {
      this.setError(e.message);
    }
    this.setLoading(false);
  }

  componentWillMount() {
    this.loadData();
  }

  render() {
    const { ads } = this.props;
    if (this.isLoading()) return <Loading />;
    if (this.hasError()) return <Error error={this.state.error} />
    return (
      <div className={styles.content}>
        {ads.map(row => (
          <div className={styles.row}>
            {row.map(ad => (
              <div className={styles.column}>
                <Advertisement {...ad} />
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default App;
