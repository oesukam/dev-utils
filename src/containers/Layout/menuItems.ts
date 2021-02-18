import textIcon from '../../assets/icons/text.svg';

export interface MenuItemInterface {
  icon: string,
  text: string,
  to: string,
};

interface MenuHeaderInterface {
  icon: string,
  text: string,
  to: string,
  items?: MenuItemInterface[],
};

const menuItems: MenuHeaderInterface[] = [
  {
    icon: textIcon,
    text: 'Text',
    to: '/text',
    items: [
      {
        icon: '',
        text: 'Case Converter',
        to: '/text/case-converter',
      },
    ],
  },
];

export default menuItems;
