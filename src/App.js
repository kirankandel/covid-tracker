import React, { Component } from "react";
import styles from "./App.module.css";
import GlobalPage from "./container/global/GlobalPage";
import {ToggleButton} from '@material-ui/lab';
import PublicIcon from '@material-ui/icons/Public';
import LocalPage from "./container/local/LocalPage";

class App extends Component {
  state = {
    selected : false,
  };

  render() {
    const { selected } = this.state;

    return (
      <div className={styles.container}>
        <ToggleButton
          value="check"
          selected={selected}
          onChange={() => {
          this.setState({selected: !selected});
          console.log(selected);
        }}
      >
          <PublicIcon/>
        </ToggleButton>
        { selected ? <GlobalPage/> : <LocalPage/>}
      </div>
    );
  }
}

export default App;
