import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as appActions from '../actions';
import SearchBar from '../components/search-bar';
import VideoList from './video-list';
import VideoDetails from '../components/video-details';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import {Layout, Menu, Breadcrumb} from 'antd';
const {Content, Footer, Header} = Layout;

class Home extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }
  render () {
    const {actions, videos} = this.props;

    return (
      <Router>
        <Layout className="layout">
          <Content>
            <Header>
              <div className="logo"></div>
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{'lineHeight': '64px'}}
              >
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
              </Menu>
            </Header>
            <Content style={{'padding': '0 50px'}}>
              <Breadcrumb style={{'margin': '16px 0'}}>
                <SearchBar
                  actions={actions}
                  videos={videos}
                />
              </Breadcrumb>
              <div style={{'background': '#fff', 'padding': 24}}>
                <VideoList
                  videos={videos}
                  actions={actions}
                />
              </div>
            </Content>
          </Content>
        </Layout>
        <Footer style={{'textAlign': 'center', 'position': 'fixed', 'bottom': 0, 'width': '100%'}}>Synthesio ©2019</Footer>
        <Route exact path="/videolist/:imdbID" component={VideoDetails} />
      </Router>
    );
  }
}
/**
 * Map all our state to the application
 *
 * @param  {Object} state state of our application
 * @return {Object} props
 */
function mapStateToProps (state) {
  return {
    'videos': state.videos
  };
}

/**
 * Map all our actions to dispatch
 *
 * @param  {Object} dispatch store dispatch function
 * @return {Object} actions
 */
function mapDispatchToProps (dispatch) {
  return {
    'actions': bindActionCreators(appActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

