import React from 'react';
import theme from '../theme';
import styled from 'styled-components';
import Search from '../components/icons/Search';
import Close from '../components/icons/Close';
import Weight from '../components/icons/Weight';

const ItemModalContainer = styled.div`
  background-color: ${theme.colors.black};
  width: 600px;
  height: auto;
  display: flex;
  flex-direction: column;
  background: #2c2d27;
  border: 1px solid ${theme.colors.grey};
`;

const ItemModalTopBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1px;

  // close button
  & > Svg {
    background-color: ${theme.colors.red};
    padding: 4px 5px;
    border-radius: 4px 0;
  }
`;

const ItemModalTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: 'Bender Regular', 'Segoe UI', 'Helvetica Neue', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 16px;
  color: ${theme.colors.white};

  // search icon
  & > Svg {
    padding: 4px 5px;
  }
`;

const ItemModalImageContainer = styled.div`
  display: flex;
  position: relative;
  height: 360px;
  background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='200px' height='200px' viewBox='0 0 200 200' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3EShape%3C/title%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='Artboard' fill='%23191919' fill-rule='nonzero'%3E%3Cg id='test123' transform='translate(100.000000, 100.500000) scale(-1, 1) translate(-100.000000, -100.500000) translate(-1.000000, 0.000000)'%3E%3Cpath d='M201.436378,200.523081 L151.974394,200.523081 L201.461985,151.03549 L201.436378,200.523081 Z M201,0 L201,50.0032502 L50.851164,200.037612 L0.999885332,200 L0.999885332,150.890659 L151.995344,0 L201,0 Z M1,0.0354900693 L50.4619846,0.0354900693 L0.97439364,49.523081 L1,0.0354900693 Z' id='Shape'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: 8px;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(45% 90%, rgba(1, 1, 0, 0) 45%, #010100 90%);
    content: '';
    opacity: 0.75;
    z-index: 0;
  }
`;
const ItemModalImage = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  z-index: 1;
  padding: 40px;

  & > img {
    height: 50%;
    width: auto;
  }
`;

const ItemWeight = styled.div`
  position: absolute;
  top: 8px;
  right: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ItemActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: ${theme.colors.black3};
`;

const ItemActionsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  align-self: center;
  padding: 5px 0;
`;

const ItemAction = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 160px;
  padding: 3px 6px;
  background: ${theme.colors.darkGrey};
  margin: 2px;
  color: ${theme.colors.white};
  text-transform: uppercase;
  font-size: 13px;

  & > Svg {
    margin: 0 6px 0 4px;
  }
`;

const ItemStatsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: ${theme.colors.black};
`;

const ItemStatGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 15px 0;
`;

const ItemStat = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 260px;
  padding: 6px 8px;
  background: ${theme.colors.darkGrey};
  margin: 2px;
  color: ${theme.colors.white};
  text-transform: uppercase;
  font-size: 13px;
  color: white;
`;

const ItemDescriptionText = styled.div`
  background-color: ${theme.colors.black};
  color: white;
  font-size: 13px;
  padding: 0 25px 15px;
`;

const itemModal = ({ title, image, weight }) => {
  return (
    <ItemModalContainer>
      <ItemModalTopBar>
        <ItemModalTitle>
          <Search size={12} />
          {title}
        </ItemModalTitle>
        <Close size={10} />
      </ItemModalTopBar>
      <ItemModalImageContainer>
        {weight && (
          <ItemWeight>
            <Weight size={12} />
            {weight}
          </ItemWeight>
        )}
        <ItemModalImage>
          <img src={image} alt={'item alt text'} />
        </ItemModalImage>
      </ItemModalImageContainer>
      <ItemActionsContainer>
        <ItemActionsGrid>
          <ItemAction>
            <Weight size={12} />
            Insure
          </ItemAction>
          <ItemAction>
            <Search size={12} />
            Filter by Item
          </ItemAction>
          <ItemAction>
            <Weight size={12} />
            Linked Search
          </ItemAction>
          <ItemAction>
            <Search size={12} />
            Required Search
          </ItemAction>
          <ItemAction>
            <Weight size={12} />
            Discard
          </ItemAction>
        </ItemActionsGrid>
      </ItemActionsContainer>
      <ItemStatsContainer>
        <ItemStatGrid>
          <ItemStat>
            <div>Bullet Velocity</div>
            <div>392 m/s</div>
          </ItemStat>
          <ItemStat>
            <div>Damage</div>
            <div>52</div>
          </ItemStat>
          <ItemStat>
            <div>Caliber</div>
            <div>9x19</div>
          </ItemStat>
          <ItemStat>
            <div>Penetration Power</div>
            <div>30</div>
          </ItemStat>
          <ItemStat>
            <div>Armor Damage</div>
            <div>48%</div>
          </ItemStat>
          <ItemStat>
            <div>Fragmentation Chance</div>
            <div>5%</div>
          </ItemStat>
          <ItemStat>
            <div>Ricochet Chance</div>
            <div>20%</div>
          </ItemStat>
        </ItemStatGrid>
      </ItemStatsContainer>
      <ItemDescriptionText>
        <p>9x19 mm AP 6.3 round.</p>
      </ItemDescriptionText>
    </ItemModalContainer>
  );
};

export default itemModal;
