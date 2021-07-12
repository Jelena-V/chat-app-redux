import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { handleAsideModal } from '../helpers/actions';

import bot from '../assets/bot.svg';
import { UserPlus } from '@styled-icons/feather/UserPlus';
import { UserMinus } from '@styled-icons/feather/UserMinus';

const AsideTop = ({
  user,
  member,
  memberChange,
  showAsideModal,
  handleAsideModal,
}) => {
  useEffect(() => {
    let timer = setTimeout(() => {
      handleAsideModal();
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [member, memberChange, showAsideModal]);

  const me = user === member ? "me" : "";

  return (
    <div className='bot-wrapper'>
       <img src={bot} alt='Robot chat' className='bot-chat' />
      {showAsideModal ? (
        <div className={`new-user-add ${me}`}>
          {memberChange ? (
            <>
              <h2>
                <UserPlus className={`plus-icon ${me}`}/> &nbsp;
                {member}
              </h2>

              <div>joined the room</div>
            </>
          ) : (
            <>
              <h2>
                <UserMinus className={`plus-icon ${me}`}/> &nbsp; {member}
              </h2>
              <div>left the room</div>
            </>
          )}
        </div>
      ) : (
        ''
      )}
     
    </div>
  );
};

AsideTop.propTypes = {
  user: PropTypes.string,
  member: PropTypes.string,
  memberChange: PropTypes.bool,
  showAsideModal: PropTypes.bool,
  handleAsideModal: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    member: state.member,
    memberChange: state.memberChange,
    showAsideModal: state.showAsideModal,
  };
};

const mapDispatchToProps = {
  handleAsideModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(AsideTop);
