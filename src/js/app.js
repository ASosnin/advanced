import { orderByProps } from './helpers/helpers';

const body = document.getElementsByTagName('body')[0];
const characterPropsList = document.createElement('ul');
const propsList = orderByProps(
  {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  },
  ['name', 'level'],
);

const propsCharacterElements = propsList.map((item) => {
  const node = document.createElement('li');
  const textNode = document.createTextNode(`${item.key}: ${item.value}`);
  node.appendChild(textNode);
  return node;
});
propsCharacterElements.forEach((node) => {
  characterPropsList.appendChild(node);
});

body.appendChild(characterPropsList);
