import { useState } from 'react';
import Text from '../../Components/Text';
import styled from 'styled-components';
import '../../App.css';
import { Button, Input, Select, TimePicker } from 'antd';
import moment from 'moment';
const { Option } = Select;
const { TextArea } = Input;

interface BoxProps {
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  padding?: string;
  width?: string;
  height?: string;
  color?: string;
  bRadius?: string;
}
const Box = styled.div<BoxProps>`
  display: flex;
  flex-direction: ${props => props.flexDirection || 'column'};
  align-items: ${props => props.alignItems || 'normal'};
  justify-content: ${props => props.justifyContent || 'flex-start'};
  padding: ${props => props.padding || '40px 58px'};
  background-color: ${props => props.color || 'white'};
  width: ${props => props.width || '100%'};
  height: ${props => props.height || 'auto'};
  border-radius: ${props => props.bRadius || 0};
`;

interface InputProps {
  width?: string;
  height?: string;
}
const InputUser = styled(Input)<InputProps>`
  width: ${props => props.width || '30%'};
  height: ${props => props.height || '40px'};
  margin: 1.6%;
`;

interface LineProps {
  marginBtn?: string;
  size?: string;
}
const LineSmall = styled.div<LineProps>`
  width: ${({ size }) => size || '100%'};
  margin: 0 0 ${({ marginBtn }) => marginBtn || '30px'} 0;
  height: 0px;

  opacity: 0.1;
  border: 1px solid #000000;
`;

interface MarkedBoxProps {
  color?: string;
}
const MarkedBox = styled.div<MarkedBoxProps>`
  padding: 15px;
  margin: 10px 0;
  background-color: ${props => props.color || '#6B7885'};
  border-radius: 5px;
  display: flex;
  justify-content: center;
`;
const TimePickerBox = styled(TimePicker)`
  height: 32px;
  weight: 160px;
`;
const TextBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
const OverflowBox = styled.div`
  margin: 15px 0 0 0;
  overflow-y: scroll;
  max-height: 200px;
`;
interface CustomLi {
  margin: string;
}
const CustomLi = styled.li<CustomLi>`
  list-style-type: none;
  &:not(last-child) {
    margin-bottom: ${props => props.margin};
  }
`;

const ButtonBox = styled(Button)`
  margin-left: 20px;
  width: 102px;
  height: 32px;
  background: #5398df;
  border-radius: 2px;
`;

interface PropsType {
  status: boolean;
  length: number;
  idx: number;
  retour?: boolean;
}
interface RetourMarkedProps {
  color: string;
}
const RetourMarked = styled.div<RetourMarkedProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ color }) => color};
  border: 1px solid #b7eb8f;
  width: 57px;
  height: 22px;
  box-sizing: border-box;
  border-radius: 2px;
`;
const Retour: React.FC<PropsType> = props => {
  const [, setTimeP] = useState({});
  const data = [{ id: '1' }, { id: '2' }, { id: '3' }];

  const textStyle = { height: '36px', size: '18px', weight: 'normal' };
  const onChange: (time: moment.Moment | null, timeString: string) => void = (
    time,
    timeString
  ) => {
    setTimeP({ time, timeString });
  };

  return (
    <Box padding='0 58px'>
      {props.retour ? (
        <>
          <Box flexDirection='row' alignItems='center' padding='20px 0 0 0 '>
            <Text size='18px' weight='500' width='120px'>
              Dossier #32
            </Text>
            <RetourMarked
              color={
                props.status
                  ? 'rgba(120, 216, 91, 0.1)'
                  : 'rgba(107, 120, 133, 0.1)'
              }>
              <Text
                color={props.status ? '#78D85B' : '#6B7885'}
                size='12px'
                margin='0'>
                {props.status ? 'En cours' : 'Cloturé'}
              </Text>
            </RetourMarked>
          </Box>
          <Text size='14px' color='#5398DF' weight='normal' width='120px'>
            Fiche client
          </Text>
        </>
      ) : (
        <>
          {' '}
          <MarkedBox>
            <Text color='white' margin='0'>
              Dossier #32
            </Text>
          </MarkedBox>
          <MarkedBox
            color={
              props.status
                ? 'rgba(120, 216, 91, 0.1)'
                : 'rgba(107, 120, 133, 0.1)'
            }>
            <Text color={props.status ? '#78D85B' : '#6B7885'} margin='0'>
              {props.status ? 'En cours' : 'Cloturé'}
            </Text>
          </MarkedBox>
        </>
      )}

      <Box padding='28px 0' flexDirection='row'>
        <Box padding='0' width='55%'>
          <Text size='18px' weight='500'>
            Information
          </Text>
          <Box padding='0' flexDirection='row' justifyContent='space-between'>
            <Box padding='0' width='30%'>
              <TextBox>
                <Text color='#A7A7A7' {...textStyle}>
                  Theme
                </Text>
                <Box padding='0' width='30%' alignItems='flex-start'>
                  <Text {...textStyle}>Famille</Text>
                </Box>
              </TextBox>
              <TextBox>
                <Text color='#A7A7A7' {...textStyle}>
                  Précision
                </Text>
                <Box padding='0' width='30%' alignItems='flex-start'>
                  <Text {...textStyle}>Divorce</Text>
                </Box>
              </TextBox>
              <TextBox>
                <Text color='#A7A7A7' {...textStyle}>
                  Ville
                </Text>
                <Box padding='0' width='30%' alignItems='flex-start'>
                  <Text {...textStyle}>Paris</Text>
                </Box>
              </TextBox>
            </Box>
            <Box padding='0' width='50%'>
              <TextBox>
                <Text color='#A7A7A7' {...textStyle}>
                  Date d’entrée
                </Text>
                <Box padding='0' width='30%' alignItems='flex-start'>
                  <Text {...textStyle}>12/03/20</Text>
                </Box>
              </TextBox>
              <TextBox>
                <Text color='#A7A7A7' {...textStyle}>
                  Date d’affectation
                </Text>
                <Box padding='0' width='30%' alignItems='flex-start'>
                  <Text {...textStyle}>12/03/20</Text>
                </Box>
              </TextBox>
              <TextBox>
                <Text color='#A7A7A7' {...textStyle}>
                  Date de transmission
                </Text>
                <Box padding='0' width='30%' alignItems='flex-start'>
                  <Text {...textStyle}>-</Text>
                </Box>
              </TextBox>
              <TextBox>
                <Text color='#A7A7A7' {...textStyle}>
                  Date de clotûration{' '}
                </Text>
                <Box padding='0' width='30%' alignItems='flex-start'>
                  <Text {...textStyle}>-</Text>
                </Box>
              </TextBox>
            </Box>
          </Box>
        </Box>
        <Box padding='0' width='45%'>
          <Text size='18px' weight='normal'>
            {' '}
            Logs
          </Text>
          <Box
            padding='0'
            width='100%'
            height='185px'
            color='#F5F5F5'
            bRadius='2px'>
            <OverflowBox>
              <ul>
                {data.map(props => {
                  return (
                    <CustomLi key={props.id} margin='16px'>
                      <Text size='16px' weight='400' height='20px'>
                        21 Août 2021
                      </Text>
                      <Box padding='4px 0' color='none' flexDirection='row'>
                        <Text
                          size='16px'
                          weight='400'
                          color='rgba(0, 0, 0, 0.5)'
                          height='20px'
                          width='60px'>
                          18:20
                        </Text>
                        <Text size='16px' weight='400' height='20px'>
                          Utilisateur retiré du système
                        </Text>
                      </Box>
                      <Box padding='4px 0' color='none' flexDirection='row'>
                        <Text
                          size='16px'
                          weight='400'
                          color='rgba(0, 0, 0, 0.5)'
                          height='20px'
                          width='60px'>
                          18:20
                        </Text>
                        <Text size='16px' weight='400' height='20px'>
                          Utilisateur retiré du système
                        </Text>
                      </Box>
                      <Box padding='4px 0' color='none' flexDirection='row'>
                        <Text
                          size='16px'
                          weight='400'
                          color='rgba(0, 0, 0, 0.5)'
                          height='20px'
                          width='60px'>
                          18:20
                        </Text>
                        <Text size='16px' weight='400' height='20px'>
                          Utilisateur retiré du système
                        </Text>
                      </Box>
                    </CustomLi>
                  );
                })}
              </ul>
            </OverflowBox>
          </Box>
        </Box>
      </Box>
      <Box padding='0 ' height='40px' flexDirection='row' alignItems='center'>
        <Text size='14px' width='140px' weight='normal' color='#000000'>
          Montant d’économie :
        </Text>
        <InputUser height='32px' width='197px' placeholder='Basic usage' />
        <Text size='14px' width='130px' weight='normal' color='#000000'>
          Temps consacré :
        </Text>
        <TimePickerBox
          onChange={onChange}
          defaultOpenValue={moment('00:00:00', 'HH:mm:ss')}
        />
      </Box>
      {props.status ? (
        <Box
          padding='50px 0 20px 0'
          height='50px'
          flexDirection='row'
          alignItems='center'>
          <Text size='14px' width='200px' weight='normal' color='#000000'>
            Affecter a un autre prestataire :
          </Text>
          <Select defaultValue='Plusieurs choix' style={{ width: 320 }}>
            <Option value='Plusieurs choix'>Plusieurs choix</Option>
          </Select>
          <ButtonBox type='primary'>Transmettre</ButtonBox>
        </Box>
      ) : (
        <Box
          padding='50px 0 20px 0'
          height='50px'
          flexDirection='row'
          alignItems='center'>
          <Text size='14px' width='140px' weight='normal' color='#000000'>
            Prestataire :
          </Text>
          <Select
            defaultValue='SIMPLEO Immobilier'
            style={{ width: 197, margin: '1.6%' }}>
            <Option value='SIMPLEO Immobilier'>SIMPLEO Immobilier</Option>
          </Select>
        </Box>
      )}

      <Box padding='0 0 30px 0' flexDirection='row' alignItems='center'>
        <TextArea
          placeholder='Commentaire'
          style={{ height: '119px', marginTop: '20px' }}
        />
      </Box>
      {props.length !== props.idx + 1 && <LineSmall />}
    </Box>
  );
};

export default Retour;
