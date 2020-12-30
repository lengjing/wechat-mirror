import React from 'react';
import classNames from 'classnames';

export default function (props) {
  const { actions, activedAction, onChange } = props;

  return (
    <div className="activity-bar">
      <div className="content">
        <div className="composite-bar">
          <div className="user">
            <img className="avator" />
          </div>
          <ul className="actions-container">
            {actions.map(action => (
              <li
                key={action.name}
                className={classNames('action-item', action.name, { active: activedAction == action.name })}
                onClick={() => { action.name !== activedAction && onChange(action.name) }}>
              </li>
            ))}
          </ul>
        </div>
        <div className="global-activity">

        </div>
      </div>
      <style jsx global>{`
      .activity-bar .content{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
      }
      .user{
        margin-top: 75px;
      }
      .user .avator{
        width: 44px;
        height: 44px;
        border-radius: 2px;
        display: block;
        margin: 0 auto;
      }
      .actions-container{
        margin-top: 20px;
      }
      .actions-container .action-item{
        margin: 15px 0;
        height: 45px;
        background-color: #fff;
      }
      .actions-container .action-item.active{
        background-color: green;
      }
      .actions-container .action-item.chat{
        mask: url(/static/chat.svg) 50% 50% / 30px no-repeat;
      }
      .actions-container .action-item.contact{
        mask: url(/static/contact.svg) 50% 50% / 30px no-repeat;
      }
      .actions-container .action-item.favorite{
        mask: url(/static/favorite.svg) 50% 50% / 30px no-repeat;
      }
      `}</style>
    </div>
  )
}
