import React from 'react';
import { TabBar } from 'antd-mobile';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
      hidden: false,
      fullScreen: false,
    };
  }

  render() { 
    // console.log(this.props);
    return ( 
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 } }>
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
      >
        <TabBar.Item
            title="首页"
            key="Home"
            icon={<span className="iconfont icon-home"/>}
            selectedIcon={<span className="iconfont icon-home" />}
            selected={this.props.match.url === '/'}
            onPress={() => {
              this.props.history.push("/")
            }}
          >
            {this.props.match.url === '/' ?this.props.children:null}
          </TabBar.Item>
        <TabBar.Item
          icon={<span className="iconfont icon-gouwuche"/>}
          selectedIcon={<span className="iconfont icon-gouwuche" />}
          title="购物车"
          key="Cart"
          badge={1}
          selected={this.props.match.url === '/Card'}
          badge={1}
          onPress={() => {
            this.props.history.push("/Card")
          }}
        >
          {this.props.match.url === '/Card' ?this.props.children:null}
        </TabBar.Item>
        <TabBar.Item
           icon={<span className="iconfont icon-weibiaoti2fuzhi12"/>}
           selectedIcon={<span className="iconfont icon-weibiaoti2fuzhi12" />}
          title="我的"
          key="Mine"
          dot
          selected={this.props.match.url === '/Mine'}
          onPress={() => {
            this.props.history.push("/Mine")
          }}
        >
          {this.props.match.url === '/Mine' ?this.props.children:null}
        </TabBar.Item>
      </TabBar>
    </div>
     );
  }
}
 
export default App;