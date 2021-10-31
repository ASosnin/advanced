import { orderByProps } from '../helpers';

test('Проверка сортировки свойств объекта', () => {
  const obj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };
  const order = ['name', 'level'];
  const result = orderByProps(obj, order);
  const expected = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];
  expect(result).toEqual(expected);
});

test('Проверка сортировки с пустым списком свойств', () => {
  const obj = {
    attack: 80,
    defence: 40,
    health: 10,
    level: 2,
    name: 'мечник',
  };
  const order = [];
  const result = orderByProps(obj, order);
  const expected = [
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
    { key: 'name', value: 'мечник' },
  ];
  expect(result).toEqual(expected);
});
