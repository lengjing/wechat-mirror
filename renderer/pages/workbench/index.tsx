import React, { useCallback, useState, useRef } from 'react';
import ActivityBar from '../../components/workbench/activity-bar';
import { Chats, Dialog } from '../../components/workbench/chats';
import SearchInput from '../../components/common/search-input';
import ListView from '../../components/common/list-view';
import SplitView from '../../components/common/split-view';

const actions = [
  { name: 'chat' },
  { name: 'contact' },
  { name: 'favorite' },
]

const chats = [
  {
    "NickName": "as阿斯顿发",
    "HeadImgUrl": "/cgi-bin/mmwebwx-bin/webwxgeticon?seq=678844231&username=filehelper&skey=@crypt_ee4046b8_21bc2409188739a43714ff1a8aafcb79",
  },
  {
    "NickName": "as阿斯顿发",
    "HeadImgUrl": "/cgi-bin/mmwebwx-bin/webwxgeticon?seq=678844231&username=filehelper&skey=@crypt_ee4046b8_21bc2409188739a43714ff1a8aafcb79",
  },
  {
    "NickName": "as阿斯顿发",
    "HeadImgUrl": "/cgi-bin/mmwebwx-bin/webwxgeticon?seq=678844231&username=filehelper&skey=@crypt_ee4046b8_21bc2409188739a43714ff1a8aafcb79",
  },
  {
    "NickName": "as阿斯顿发",
    "HeadImgUrl": "/cgi-bin/mmwebwx-bin/webwxgeticon?seq=678844231&username=filehelper&skey=@crypt_ee4046b8_21bc2409188739a43714ff1a8aafcb79",
  },
  {
    "NickName": "as阿斯顿发",
    "HeadImgUrl": "/cgi-bin/mmwebwx-bin/webwxgeticon?seq=678844231&username=filehelper&skey=@crypt_ee4046b8_21bc2409188739a43714ff1a8aafcb79",
  },
  {
    "NickName": "as阿斯顿发",
    "HeadImgUrl": "/cgi-bin/mmwebwx-bin/webwxgeticon?seq=678844231&username=filehelper&skey=@crypt_ee4046b8_21bc2409188739a43714ff1a8aafcb79",
  },
  {
    "NickName": "as阿斯顿发",
    "HeadImgUrl": "/cgi-bin/mmwebwx-bin/webwxgeticon?seq=678844231&username=filehelper&skey=@crypt_ee4046b8_21bc2409188739a43714ff1a8aafcb79",
  },
  {
    "NickName": "as阿斯顿发",
    "HeadImgUrl": "/cgi-bin/mmwebwx-bin/webwxgeticon?seq=678844231&username=filehelper&skey=@crypt_ee4046b8_21bc2409188739a43714ff1a8aafcb79",
  },
  {
    "NickName": "as阿斯顿发",
    "HeadImgUrl": "/cgi-bin/mmwebwx-bin/webwxgeticon?seq=678844231&username=filehelper&skey=@crypt_ee4046b8_21bc2409188739a43714ff1a8aafcb79",
  },
  {
    "NickName": "as阿斯顿发",
    "HeadImgUrl": "/cgi-bin/mmwebwx-bin/webwxgeticon?seq=678844231&username=filehelper&skey=@crypt_ee4046b8_21bc2409188739a43714ff1a8aafcb79",
  },
  {
    "NickName": "as阿斯顿发",
    "HeadImgUrl": "/cgi-bin/mmwebwx-bin/webwxgeticon?seq=678844231&username=filehelper&skey=@crypt_ee4046b8_21bc2409188739a43714ff1a8aafcb79",
  },
  {
    "NickName": "as阿斯顿发",
    "HeadImgUrl": "/cgi-bin/mmwebwx-bin/webwxgeticon?seq=678844231&username=filehelper&skey=@crypt_ee4046b8_21bc2409188739a43714ff1a8aafcb79",
  },
  {
    "NickName": "as阿斯顿发",
    "HeadImgUrl": "/cgi-bin/mmwebwx-bin/webwxgeticon?seq=678844231&username=filehelper&skey=@crypt_ee4046b8_21bc2409188739a43714ff1a8aafcb79",
  },
  {
    "NickName": "as阿斯顿发",
    "HeadImgUrl": "/cgi-bin/mmwebwx-bin/webwxgeticon?seq=678844231&username=filehelper&skey=@crypt_ee4046b8_21bc2409188739a43714ff1a8aafcb79",
  },
  {
    "NickName": "as阿斯顿发",
    "HeadImgUrl": "/cgi-bin/mmwebwx-bin/webwxgeticon?seq=678844231&username=filehelper&skey=@crypt_ee4046b8_21bc2409188739a43714ff1a8aafcb79",
  },
  {
    "NickName": "as阿斯顿发",
    "HeadImgUrl": "/cgi-bin/mmwebwx-bin/webwxgeticon?seq=678844231&username=filehelper&skey=@crypt_ee4046b8_21bc2409188739a43714ff1a8aafcb79",
  },
  {
    "NickName": "as阿斯顿发",
    "HeadImgUrl": "/cgi-bin/mmwebwx-bin/webwxgeticon?seq=678844231&username=filehelper&skey=@crypt_ee4046b8_21bc2409188739a43714ff1a8aafcb79",
  },
  {
    "NickName": "as阿斯顿发",
    "HeadImgUrl": "/cgi-bin/mmwebwx-bin/webwxgeticon?seq=678844231&username=filehelper&skey=@crypt_ee4046b8_21bc2409188739a43714ff1a8aafcb79",
  },
  {
    "NickName": "as阿斯顿发",
    "HeadImgUrl": "/cgi-bin/mmwebwx-bin/webwxgeticon?seq=678844231&username=filehelper&skey=@crypt_ee4046b8_21bc2409188739a43714ff1a8aafcb79",
  },
  {
    "NickName": "as阿斯顿发",
    "HeadImgUrl": "/cgi-bin/mmwebwx-bin/webwxgeticon?seq=678844231&username=filehelper&skey=@crypt_ee4046b8_21bc2409188739a43714ff1a8aafcb79",
  },
  {
    "NickName": "as阿斯顿发",
    "HeadImgUrl": "/cgi-bin/mmwebwx-bin/webwxgeticon?seq=678844231&username=filehelper&skey=@crypt_ee4046b8_21bc2409188739a43714ff1a8aafcb79",
  },
  {
    "NickName": "as阿斯顿发",
    "HeadImgUrl": "/cgi-bin/mmwebwx-bin/webwxgeticon?seq=678844231&username=filehelper&skey=@crypt_ee4046b8_21bc2409188739a43714ff1a8aafcb79",
  },
  {
    "NickName": "as阿斯顿发",
    "HeadImgUrl": "/cgi-bin/mmwebwx-bin/webwxgeticon?seq=678844231&username=filehelper&skey=@crypt_ee4046b8_21bc2409188739a43714ff1a8aafcb79",
  },
  {
    "NickName": "as阿斯顿发",
    "HeadImgUrl": "/cgi-bin/mmwebwx-bin/webwxgeticon?seq=678844231&username=filehelper&skey=@crypt_ee4046b8_21bc2409188739a43714ff1a8aafcb79",
  },
  {
    "NickName": "as阿斯顿发",
    "HeadImgUrl": "/cgi-bin/mmwebwx-bin/webwxgeticon?seq=678844231&username=filehelper&skey=@crypt_ee4046b8_21bc2409188739a43714ff1a8aafcb79",
  },
  {
    "NickName": "as阿斯顿发",
    "HeadImgUrl": "/cgi-bin/mmwebwx-bin/webwxgeticon?seq=678844231&username=filehelper&skey=@crypt_ee4046b8_21bc2409188739a43714ff1a8aafcb79",
  },
  {
    "NickName": "as阿斯顿发",
    "HeadImgUrl": "/cgi-bin/mmwebwx-bin/webwxgeticon?seq=678844231&username=filehelper&skey=@crypt_ee4046b8_21bc2409188739a43714ff1a8aafcb79",
  },
  {
    "NickName": "as阿斯顿发",
    "HeadImgUrl": "/cgi-bin/mmwebwx-bin/webwxgeticon?seq=678844231&username=filehelper&skey=@crypt_ee4046b8_21bc2409188739a43714ff1a8aafcb79",
  },
  {
    "NickName": "as阿斯顿发",
    "HeadImgUrl": "/cgi-bin/mmwebwx-bin/webwxgeticon?seq=678844231&username=filehelper&skey=@crypt_ee4046b8_21bc2409188739a43714ff1a8aafcb79",
  },
  {
    "NickName": "as阿斯顿发",
    "HeadImgUrl": "/cgi-bin/mmwebwx-bin/webwxgeticon?seq=678844231&username=filehelper&skey=@crypt_ee4046b8_21bc2409188739a43714ff1a8aafcb79",
  },
  {
    "NickName": "as阿斯顿发",
    "HeadImgUrl": "/cgi-bin/mmwebwx-bin/webwxgeticon?seq=678844231&username=filehelper&skey=@crypt_ee4046b8_21bc2409188739a43714ff1a8aafcb79",
  },
  {
    "NickName": "as阿斯顿发",
    "HeadImgUrl": "/cgi-bin/mmwebwx-bin/webwxgeticon?seq=678844231&username=filehelper&skey=@crypt_ee4046b8_21bc2409188739a43714ff1a8aafcb79",
  },
  {
    "NickName": "as阿斯顿发",
    "HeadImgUrl": "/cgi-bin/mmwebwx-bin/webwxgeticon?seq=678844231&username=filehelper&skey=@crypt_ee4046b8_21bc2409188739a43714ff1a8aafcb79",
  },
  {
    "NickName": "as阿斯顿发",
    "HeadImgUrl": "/cgi-bin/mmwebwx-bin/webwxgeticon?seq=678844231&username=filehelper&skey=@crypt_ee4046b8_21bc2409188739a43714ff1a8aafcb79",
  },
  {
    "NickName": "as阿斯顿发",
    "HeadImgUrl": "/cgi-bin/mmwebwx-bin/webwxgeticon?seq=678844231&username=filehelper&skey=@crypt_ee4046b8_21bc2409188739a43714ff1a8aafcb79",
  },
  {
    "NickName": "as阿斯顿发",
    "HeadImgUrl": "/cgi-bin/mmwebwx-bin/webwxgeticon?seq=678844231&username=filehelper&skey=@crypt_ee4046b8_21bc2409188739a43714ff1a8aafcb79",
  }
]

const defaultAsideWidth = 260;
const minAsideWidth = 260;
const maxAsideWidth = 310;

const defaultActivedAction = actions[0].name;

const App: React.FC = () => {
  const [activedAction, setActivedAction] = useState(defaultActivedAction);

  return (
    <div className="workbench" >
      <ActivityBar
        actions={actions}
        activedAction={activedAction}
        onChange={setActivedAction} >
      </ActivityBar>
      <SplitView>
        <div className="aside"></div>
        <div className="main-content"></div>
      </SplitView>
      {/* <div className="aside">
        
        <ListView defaultSize={defaultAsideWidth} minSize={minAsideWidth} maxSize={maxAsideWidth} style={{ height: '100%' }}>

          <div className="panel-chat" >
            <SearchInput />
            <Chats chats={chats}></Chats>
          </div>
        </ListView>
      </div> */}

      <style jsx global> {`
      html {
        font-size: 62.5%;
      }

      html,
      body{
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
        overflow: hidden;
        user-select: none;
        font-family: Helvetica Neue,Helvetica,Hiragino Sans GB,Microsoft YaHei,\\5FAE\8F6F\96C5\9ED1,Arial,sans-serif;
      }
      ul,
      ol{
        margin: 0;
        padding: 0;
      }
      .workbench{
        display: flex;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
      }
      .workbench .aside{
        position: relative;
        border-right: 1px solid #ececec;
        height: 100%;
      }
      .workbench .main-content{
        flex: 1;
        height: 100%;
      }
      .activity-bar{
        width: 70px;
        background-color: rgba(0,0,0,.9);
      }
      .panel-chat{
        // margin-left: 12px;
        height: 100%;
      }
      `}</style>
    </div>
  )
}

export default App;