import { blogData } from './blogData';
import { restaurantData } from './restaurantData';
import { roomsData } from './roomsData';
import { teamMemberData } from './teamMemberData';

const { breakfast, lunch, dinner, drink } = restaurantData;

const allData = [...blogData, ...roomsData, ...breakfast, ...lunch, ...dinner, ...drink, ...teamMemberData];

export default allData;
