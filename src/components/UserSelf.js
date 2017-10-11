import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {getSelf, getSelfMedia} from 'api';
import {getToken} from 'reducers/auth';
import styled from 'styled-components';

const Container = styled.div`
  padding-top: 20px;
  width: 800px;
  height: 100%;
  display: flex;
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const UserInformation = styled.div`padding: 20px;`;

const MediaList = styled.div`dispay: flex;`;

const MediaEntity = styled.img`
  width: 300px;
  height: 300px;
`;

class UserSelf extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      media: []
    };
  }

  componentDidMount() {
    const {token} = this.props;

    getSelf(token).then(({data: {data: {id, full_name, profile_picture}}}) => {
      this.setState({
        user: {
          id,
          full_name,
          profile_picture
        }
      });
    });
    getSelfMedia(token).then(response => {
      this.setState({media: response.data.data.map(media => media.images.standard_resolution.url)});
    });
  }

  render() {
    const {user, media} = this.state;
    if (user == null) {
      return <p>Loading</p>;
    }

    return (
      <Container>
        <UserInformation>
          <Avatar src={user.profile_picture} />
        </UserInformation>
        <MediaList>{media.map((el, index) => <MediaEntity key={index} src={el} />)}</MediaList>
      </Container>
    );
  }
}

export default connect(state => ({
  token: getToken(state)
}))(UserSelf);
