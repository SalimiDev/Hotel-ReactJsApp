//import pictures
import { customer } from '../assets/images';
import { member } from '../assets/images';
const { customer1, customer2, customer3 } = customer;
const { member1, member2, member3 } = member;

export const GuestBookData = [
    {
        id: 1,
        fullName: 'Amie Bublitz',
        address: 'Kokomo',
        picture: customer1,
        title: 'Good value',
        comment:
            'Donec nec enim turpis. Quisque consequat ipsum libero, et rhoncus augue condimentum a. Integer blandit libero in est interdum vestibulum. In dictum posuere pharetra',
    },
    {
        id: 2,
        fullName: 'Donna Ginter',
        address: ' Marietta',
        picture: customer2,
        title: 'weekend stay',
        comment:
            'This is the only place to stay in Catalina! I have stayed in the cheaper hotels and they were fine, but this is just the icing on the cake! After spending the day bike riding and hiking to come back and enjoy a glass of wine while looking out your ocean view window and then to top it all off...',
    },
    {
        id: 3,
        fullName: 'Mary Ann',
        address: 'Texas, United States',
        picture: customer3,
        title: 'Friendly and Clean',
        comment:
            'Praesent fringilla convallis libero, vel ullamcorper justo luctus sed. Sed dapibus eu mi ut convallis. Pellentesque egestas magna ac eros tempus sollicitudin. Aenean eget rhoncus ante.',
    },
    {
        id: 4,
        fullName: 'Amie Bublitz',
        address: 'Punta Gorda, Florida',
        picture: member1,
        title: 'A Gem in Houston',
        comment:
            'Donec nec enim turpis. Quisque consequat ipsum libero, et rhoncus augue condimentum a. Integer blandit libero in est interdum vestibulum. In dictum posuere pharetra',
    },
    {
        id: 5,
        fullName: 'Angela',
        address: 'Denver, Colorado',
        picture: member2,
        title: 'My Favorite hotel',
        comment:
            'This is the only place to stay in Catalina! I have stayed in the cheaper hotels and they were fine, but this is just the icing on the cake! After spending the day bike riding and hiking to come back and enjoy a glass of wine while looking out your ocean view window and then to top it all off...',
    },
    {
        id: 6,
        fullName: 'Michael',
        address: ' Houston, TX',
        picture: member3,
        title: 'Lovely hotel',
        comment:
            'This is a wonderful hotel to stay at when you are wanting to be close to Downtown or the Medical Center. Staff at front desk is very kind and will to help with special accommodations',
    },
];
