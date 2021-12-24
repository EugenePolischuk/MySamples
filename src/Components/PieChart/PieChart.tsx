import styled from 'styled-components';
import { Pie, PieConfig } from '@ant-design/charts';
import { ReactComponent as ellipse } from './ellipse.svg';
import { FC } from 'react';

const RADIUS = 0.95;
const INNER_RADIUS = 0.5;

const Chart = styled.div<{ size?: number }>`
  position: relative;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
`;

const Ellipse = styled(ellipse)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  fill: #fff;
  width: ${INNER_RADIUS * 100 + 1}%;
  height: ${INNER_RADIUS * 100 + 1}%;
`;

interface Element {
  id: string;
  name: string;
  value: number;
  color: string;
}

interface IPieChartProps {
  data: Element[];
  tooltipName?: string;
  size?: number;
  animation?: boolean;
}

export const PieChart: FC<IPieChartProps> = ({
  data,
  tooltipName = 'sessions',
  size = 280,
  animation = true
}) => {
  const config: PieConfig = {
    appendPadding: 0,
    data: data,
    angleField: 'value',
    colorField: 'name',
    color: [...data.map(el => el.color)],
    padding: 0,
    radius: RADIUS,

    innerRadius: INNER_RADIUS,
    tooltip: {
      formatter: datum => {
        return { name: `${datum.value} ${tooltipName}`, value: '' };
      },
      domStyles: {
        'g2-tooltip-list-item': {
          color: '#fff'
        },
        'g2-tooltip-name': {
          color: '#262626',
          marginLeft: -15
        },
        'g2-tooltip': {
          width: 10
        }
      }
    },
    label: {
      type: 'inner',
      offset: '-50%',
      content: '{value} %',
      autoRotate: false,
      style: {
        textAlign: 'center',
        fontSize: 12
      }
    },
    legend: false,
    interactions: [{ type: 'element-active' }],
    statistic: {
      title: false,
      content: {
        content: ''
      }
    },
    pieStyle: {
      stroke: 'transparent',
      lineWidth: 0
    },
    animation: animation ? { update: false } : false,
    state: {
      active: {
        style: el => ({
          lineWidth: 15,
          lineCap: 'round',
          lineJoin: 'round',
          stroke: el.getData().color
        })
      }
    }
  };

  return (
    <Chart size={size}>
      <Pie {...config} />
      <Ellipse />
    </Chart>
  );
};
