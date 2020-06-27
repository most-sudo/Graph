import styled from 'styled-components';
import themes from '../../../themes';

const ContentContainer = styled.div`
  display: block;
  position: absolute;
  top: 100%;
  width: 110px;
  height: 200px;
  background-color: ${(props) =>
    props.theme.name === 'dark'
      ? themes.light.navbar.background
      : themes.dark.navbar.background};

  transition-duration: 0.3s;
  transition-property: background-color;
`;

export default ContentContainer;
