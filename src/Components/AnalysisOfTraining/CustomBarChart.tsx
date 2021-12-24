import { FC, useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Cell } from 'recharts';

interface ICategory {
  id: string;
  name: string;
  color: string[];
}

const categories: ICategory[] = [
  {
    id: 'id-1',
    name: 'Santé',
    color: ['#90c6fd', '#a6d1fd', '#bcddfe', '#d2e8fe', '#e9f4ff']
  },
  {
    id: 'id-2',
    name: 'Famille',
    color: ['#ffd572', '#ffdd8e', '#ffe6aa', '#ffeec7', '#fff7e3']
  },
  {
    id: 'id-3',
    name: 'Logement',
    color: ['#fe6c6c', '#fe8989', '#fea6a6', '#ffc4c3', '#ffe1e1']
  },
  {
    id: 'id-4',
    name: 'Aléas de la vie',
    color: ['#b09fff', '#bfb2ff', '#cfc5ff', '#dfd8ff', '#efecff']
  },
  {
    id: 'id-5',
    name: 'Ecologie',
    color: ['#78d85c', '#93df7b', '#aee79d', '#c9efbd', '#e4f7de']
  }
];

const FirstLine = ({
  fill,
  x,
  y,
  width,
  onMouseMove,
  isActive,
  id,
  name
}: {
  fill: string;
  x: number;
  y: number;
  width: number;
  isActive: boolean;
  onMouseMove: () => void;
  id: string;
  name: string;
}) => {
  return (
    <>
      <text
        x={x + 15}
        y={y - 15}
        fontSize={12}
        fontWeight={400}
        fill='#000'
        color='#000'>
        {name}
      </text>
      <line
        x1={15 + x}
        y1={y}
        x2={x + width / 2}
        y2={y}
        id={id}
        stroke={fill}
        strokeLinecap='round'
        strokeWidth={isActive ? 25 : 19}
        onMouseMove={onMouseMove}
      />
      <line
        x1={x + width / 2}
        y1={y}
        x2={x + width}
        y2={y}
        id={id}
        stroke={fill}
        strokeWidth={isActive ? 25 : 19}
        onMouseMove={onMouseMove}
      />
    </>
  );
};

const LastLine = ({
  fill,
  x,
  y,
  width,
  onMouseMove,
  isActive,
  id,
  values,
  totalValue
}: {
  fill: string;
  x: number;
  y: number;
  width: number;
  isActive: boolean;
  onMouseMove: () => void;
  id: string;
  values: string;
  totalValue: number;
}) => {
  return (
    <>
      <line
        x1={x + 12}
        y1={y}
        x2={x + width}
        y2={y}
        id={id}
        stroke={fill}
        strokeLinecap='round'
        strokeWidth={isActive ? 25 : 19}
        onMouseMove={onMouseMove}
      />
      <line
        x1={x}
        y1={y}
        x2={x + width}
        y2={y}
        id={id}
        stroke={fill}
        strokeWidth={isActive ? 25 : 19}
        onMouseMove={onMouseMove}
      />
      <rect
        className='rect-with-shadow'
        x={x + width + 20}
        y={y - 25 / 2}
        rx='3.5'
        ry='3.5'
        width={43}
        height={25}
        fill='#ffffff'
      />
      <text
        x={x + width + 40 - values.length * 6}
        y={y + 3.5}
        fontSize={12}
        fontWeight={400}
        fill='#212121'>
        {totalValue}
      </text>
    </>
  );
};

const RectBar = (props: {
  fill: string;
  x: number;
  y: number;
  width: number;
  isActive: { color: string; number: number };
  onMouseMove: () => void;
  id: string;
  name: string;
  values: string;
  color: string;
}) => {
  const { fill, x, y, width, onMouseMove, isActive, id, values, color } = props;
  const isCurrentElActive =
    isActive.color === fill && isActive.number === Number(id);

  return (
    <>
      {Number(id) === 1 && (
        <FirstLine {...props} isActive={isCurrentElActive} />
      )}
      {Number(id) === 5 && (
        <LastLine {...props} isActive={isCurrentElActive} totalValue={+color} />
      )}
      {Number(id) !== 1 && Number(id) !== 5 && (
        <>
          <line
            x1={x}
            y1={y}
            x2={x + width}
            y2={y}
            id={id}
            stroke={fill}
            strokeWidth={isCurrentElActive ? 25 : 19}
            onMouseMove={onMouseMove}
          />
        </>
      )}
      {isCurrentElActive && (
        <text
          x={x + width / 2 - values.length * 6}
          y={y + 3.5}
          fontSize={12}
          fontWeight={400}
          fillOpacity={1}
          fill='#212121'>
          {values}%
        </text>
      )}
    </>
  );
};

interface ICustomBarChartProps {
  values: Array<{ label: string; value: number }[]>;
  onChange?: (list: INewArray, activeItemKey: string) => void;
  activeEl?: { number: number; color: string };
}

export interface INewArray extends ICategory {
  [key: string]: number | string | string[];
  total: number;
}

export const CustomBarChart: FC<ICustomBarChartProps> = props => {
  const { values, onChange, activeEl } = props;

  // created new array
  const newArray: INewArray[] = values.map((value, valueIdx) => {
    const obj: { [key: string]: number | string } = {};
    let total = 0;
    value.forEach((el, idx) => {
      obj[`value${idx + 1}`] = el.value;
      total = total + el.value;
    });
    return { ...obj, ...categories[valueIdx], total };
  });

  const [activeElData, setActiveElData] = useState<{
    color: string;
    number: number;
    value: INewArray | null;
  }>({ number: 0, color: '', value: null, ...activeEl });

  const handleOnHover = (array: {
    color: string;
    number: number;
    value: INewArray;
  }) => {
    if (!activeElData) {
      return;
    }
    if (
      activeElData.color === array.color &&
      activeElData.number === array.number
    ) {
      return;
    }
    setActiveElData(array);
    if (onChange) {
      onChange(array.value, `value${array.number}`);
    }
  };

  useEffect(() => {
    setActiveElData(prevState => ({ ...prevState, ...activeEl }));
  }, [activeEl]);

  return (
    <BarChart
      margin={{ left: -60, top: 30, right: 70 }}
      layout='vertical'
      width={800}
      height={300}
      data={newArray}>
      <CartesianGrid strokeDasharray='7 5' horizontal={false} />
      <XAxis type='number' tickLine={false} axisLine={false} />
      <YAxis type='category' tickLine={false} axisLine={false} tick={false} />

      {newArray.map((_, dataIdx) => {
        return (
          <>
            <Bar
              key={`value${dataIdx + 1}`}
              layout='vertical'
              dataKey={`value${dataIdx + 1}`}
              stackId='1'
              shape={props => <RectBar {...props} isActive={activeElData} />}>
              {newArray.map(currentElement => {
                const currentColor = currentElement.color[dataIdx];
                return (
                  <>
                    <Cell
                      key={`${currentElement[`value${dataIdx + 1}`]}`}
                      id={(1 + dataIdx).toString()}
                      fill={currentColor}
                      onMouseMove={() => {
                        handleOnHover({
                          color: currentColor,
                          number: dataIdx + 1,
                          value: currentElement
                        });
                      }}
                      name={currentElement.name}
                      values={`${currentElement[`value${dataIdx + 1}`]}`}
                      color={`${currentElement.total}`}
                    />
                  </>
                );
              })}
            </Bar>
          </>
        );
      })}
    </BarChart>
  );
};
