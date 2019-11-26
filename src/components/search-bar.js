import React, {Component} from 'react';
import {Button, Input, Layout} from 'antd';
const {Content} = Layout;

class SearchBar extends Component {
  constructor (props) {
    super(props);
    this.state = {
      'searchValue': '',
      'items': []
    };
  }

  handleChange = (event) => {
    this.setState({'searchValue': event.target.value});
  }

  render () {
    const {actions} = this.props;

    return (
      <Content
        className="search">
        <Input
          style={{'margin': '5px'}}
          value={this.state.searchValue}
          onChange={this.handleChange}
          type="text"
          placeholder="Search video…" />
        <Button
          style={{'margin': '5px'}}
          type="primary"
          onClick={() => actions.searchVideo()}>Search</Button>
        <Button
          style={{'margin': '5px'}}
          onClick={() => this.setState({'searchValue': ''})}>Reset</Button>
      </Content>
    );
  }
}

export default SearchBar;
