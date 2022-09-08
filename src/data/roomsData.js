//Rooms Image
import { room } from '../assets/images';
const { room1, room2, room3, room4, room5, room6 } = room;

export const roomsData = [
    {
        id: 1,
        title: 'Couple Room',
        price: 160,
        image: room1,
        shortDescrip:
            'Nullam nec bibendum libero, eget ultricies urna. Ut fermentum ligula dui, sodales accumsan ante ornare nec. Vivamus convallis, velit tincidunt mollis scelerisque, mauris lorem porttitor sem, at molestie nibh enim ut tellus',
        bodyDescrip1:
            'Located in the heart of Aspen with a unique blend of contemporary luxury and historic heritage, deluxe accommodations, superb amenities, genuine hospitality and dedicated service for an elevated experience in the Rocky Mountains.',
        bodyDescrip2:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
        amenities: ['Allowed Pets', 'Free Wifi', 'Television'],
        capacity: { adult: 2, children: 2 },
        roomInfo: ['Mountain view', '60 m2 ', '2 Double bed'],
        inclusions: ['Free breakfast', ' Tax included in room'],
        policies: ['No smoking', 'No deposit'],
        remainRoom: 4,
    },
    {
        id: 2,
        title: 'Single Room',
        price: 80,
        image: room2,
        shortDescrip:
            'Nullam nec bibendum libero, eget ultricies urna. Ut fermentum ligula dui, sodales accumsan ante ornare nec. Vivamus convallis, velit tincidunt mollis scelerisque, mauris lorem porttitor sem, at molestie nibh enim ut tellus',
        bodyDescrip1:
            'Cras ut turpis neque. Duis dapibus massa justo, eget porta urna ultrices sodales. In in nisi ornare, pharetra tortor sed, pellentesque mauris. Morbi sed mattis purus, vel fringilla nisl. Nullam at justo a arcu ullamcorper lacinia a id enim. Praesent mi purus, feugiat a aliquet tempor, auctor at est. Aenean ligula felis, vulputate et dolor eu, lacinia sollicitudin neque. Donec blandit tincidunt mauris, ut convallis nulla venenatis quis. Etiam gravida velit non urna porttitor ullamcorper.',
        bodyDescrip2:
            'Nullam nec bibendum libero, eget ultricies urna. Ut fermentum ligula dui, sodales accumsan ante ornare nec. Vivamus convallis, velit tincidunt mollis scelerisque, mauris lorem porttitor sem, at molestie nibh enim ut tellus. Aenean elementum leo ac metus vestibulum luctus. In pharetra lectus urna, id hendrerit velit rhoncus eu. Vivamus mollis condimentum neque, non feugiat felis tincidunt vitae. Aenean non nisl et est cursus volutpat.',
        amenities: ['Allowed Pets', 'Free Wifi', 'Television'],
        capacity: { adult: 1, children: 1 },
        roomInfo: ['Lake view', '25 m2 ', '1 Double bed'],
        inclusions: ['Breakfast included', 'Tax included in room', 'Free Cancellation'],
        policies: ['Free smoking', 'No deposit'],
        remainRoom: 3,
    },
    {
        id: 3,
        title: 'Deluxe Room',
        price: 200,
        image: room3,
        shortDescrip:
            'Nullam nec bibendum libero, eget ultricies urna. Ut fermentum ligula dui, sodales accumsan ante ornare nec. Vivamus convallis, velit tincidunt mollis scelerisque, mauris lorem porttitor sem, at molestie nibh enim ut tellus',
        bodyDescrip1:
            'Cras ut turpis neque. Duis dapibus massa justo, eget porta urna ultrices sodales. In in nisi ornare, pharetra tortor sed, pellentesque mauris. Morbi sed mattis purus, vel fringilla nisl. Nullam at justo a arcu ullamcorper lacinia a id enim. Praesent mi purus, feugiat a aliquet tempor, auctor at est. Aenean ligula felis, vulputate et dolor eu, lacinia sollicitudin neque. Donec blandit tincidunt mauris, ut convallis nulla venenatis quis. Etiam gravida velit non urna porttitor ullamcorper.',
        bodyDescrip2:
            'Nullam nec bibendum libero, eget ultricies urna. Ut fermentum ligula dui, sodales accumsan ante ornare nec. Vivamus convallis, velit tincidunt mollis scelerisque, mauris lorem porttitor sem, at molestie nibh enim ut tellus. Aenean elementum leo ac metus vestibulum luctus. In pharetra lectus urna, id hendrerit velit rhoncus eu. Vivamus mollis condimentum neque, non feugiat felis tincidunt vitae. Aenean non nisl et est cursus volutpat.',
        amenities: ['Allowed Pets', 'Free Wifi', 'Television'],
        capacity: { adult: 3, children: 3 },
        roomInfo: ['City view', '75 m2 ', '3 Double bed'],
        inclusions: ['Free Breakfast', 'Tax included', 'Free Cancellation'],
        policies: ['No pets'],
        remainRoom: 2,
    },
    {
        id: 4,
        title: 'Standard Room',
        price: 150,
        image: room4,
        shortDescrip:
            'Nullam nec bibendum libero, eget ultricies urna. Ut fermentum ligula dui, sodales accumsan ante ornare nec. Vivamus convallis, velit tincidunt mollis scelerisque, mauris lorem porttitor sem, at molestie nibh enim ut tellus',
        bodyDescrip1:
            'Cras ut turpis neque. Duis dapibus massa justo, eget porta urna ultrices sodales. In in nisi ornare, pharetra tortor sed, pellentesque mauris. Morbi sed mattis purus, vel fringilla nisl. Nullam at justo a arcu ullamcorper lacinia a id enim. Praesent mi purus, feugiat a aliquet tempor, auctor at est. Aenean ligula felis, vulputate et dolor eu, lacinia sollicitudin neque. Donec blandit tincidunt mauris, ut convallis nulla venenatis quis. Etiam gravida velit non urna porttitor ullamcorper.',
        bodyDescrip2:
            'Nullam nec bibendum libero, eget ultricies urna. Ut fermentum ligula dui, sodales accumsan ante ornare nec. Vivamus convallis, velit tincidunt mollis scelerisque, mauris lorem porttitor sem, at molestie nibh enim ut tellus. Aenean elementum leo ac metus vestibulum luctus. In pharetra lectus urna, id hendrerit velit rhoncus eu. Vivamus mollis condimentum neque, non feugiat felis tincidunt vitae. Aenean non nisl et est cursus volutpat.',
        amenities: ['Allowed Pets', 'Free Wifi', 'Television'],
        capacity: { adult: 2, children: 2 },
        roomInfo: ['Pool view', '50 m2 ', '2 Double bed'],
        inclusions: ['Breakfast included', 'Tax included in room'],
        policies: ['No pet', 'No deposit'],
        remainRoom: 4,
    },
    {
        id: 5,
        title: 'Angle Room',
        price: 170,
        image: room5,
        shortDescrip:
            'Nullam nec bibendum libero, eget ultricies urna. Ut fermentum ligula dui, sodales accumsan ante ornare nec. Vivamus convallis, velit tincidunt mollis scelerisque, mauris lorem porttitor sem, at molestie nibh enim ut tellus',
        bodyDescrip1:
            'Cras ut turpis neque. Duis dapibus massa justo, eget porta urna ultrices sodales. In in nisi ornare, pharetra tortor sed, pellentesque mauris. Morbi sed mattis purus, vel fringilla nisl. Nullam at justo a arcu ullamcorper lacinia a id enim. Praesent mi purus, feugiat a aliquet tempor, auctor at est. Aenean ligula felis, vulputate et dolor eu, lacinia sollicitudin neque. Donec blandit tincidunt mauris, ut convallis nulla venenatis quis. Etiam gravida velit non urna porttitor ullamcorper.',
        bodyDescrip2:
            'Nullam nec bibendum libero, eget ultricies urna. Ut fermentum ligula dui, sodales accumsan ante ornare nec. Vivamus convallis, velit tincidunt mollis scelerisque, mauris lorem porttitor sem, at molestie nibh enim ut tellus. Aenean elementum leo ac metus vestibulum luctus. In pharetra lectus urna, id hendrerit velit rhoncus eu. Vivamus mollis condimentum neque, non feugiat felis tincidunt vitae. Aenean non nisl et est cursus volutpat.',
        amenities: ['Allowed Pets', 'Free Wifi', 'Television'],
        capacity: { adult: 2, children: 1 },
        roomInfo: ['Mountain view', '60 m2 ', '2 Double bed'],
        inclusions: ['Free Breakfast', 'Tax included', 'Allow pets'],
        policies: ['No deposit', 'No cancellation'],
        remainRoom: 3,
    },
    {
        id: 6,
        title: 'Prince Room',
        price: 190,
        image: room6,
        shortDescrip:
            'Nullam nec bibendum libero, eget ultricies urna. Ut fermentum ligula dui, sodales accumsan ante ornare nec. Vivamus convallis, velit tincidunt mollis scelerisque, mauris lorem porttitor sem, at molestie nibh enim ut tellus',
        bodyDescrip1:
            'Cras ut turpis neque. Duis dapibus massa justo, eget porta urna ultrices sodales. In in nisi ornare, pharetra tortor sed, pellentesque mauris. Morbi sed mattis purus, vel fringilla nisl. Nullam at justo a arcu ullamcorper lacinia a id enim. Praesent mi purus, feugiat a aliquet tempor, auctor at est. Aenean ligula felis, vulputate et dolor eu, lacinia sollicitudin neque. Donec blandit tincidunt mauris, ut convallis nulla venenatis quis. Etiam gravida velit non urna porttitor ullamcorper.',
        bodyDescrip2:
            'Nullam nec bibendum libero, eget ultricies urna. Ut fermentum ligula dui, sodales accumsan ante ornare nec. Vivamus convallis, velit tincidunt mollis scelerisque, mauris lorem porttitor sem, at molestie nibh enim ut tellus. Aenean elementum leo ac metus vestibulum luctus. In pharetra lectus urna, id hendrerit velit rhoncus eu. Vivamus mollis condimentum neque, non feugiat felis tincidunt vitae. Aenean non nisl et est cursus volutpat.',
        amenities: ['Allowed Pets', 'Free Wifi', 'Television'],
        capacity: { adult: 3, children: 3 },
        roomInfo: ['Ocean view', '80 m2 ', '3 Double bed'],
        inclusions: ['Free Breakfast', 'Tax included', 'Allow pets'],
        policies: ['No cancellation'],
        remainRoom: 1,
    },
];
