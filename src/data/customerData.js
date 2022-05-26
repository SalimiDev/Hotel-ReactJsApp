//Customers picture
import { customer } from '../assets/images';
const { customer1, customer2, customer3 } = customer;

export const customerData = [
    {
        id: 1,
        fullName: 'Amie Bublitz',
        city: 'Kokomo',
        picture: customer1,
        comment:
            'Donec nec enim turpis. Quisque consequat ipsum libero, et rhoncus augue condimentum a. Integer blandit libero in est interdum vestibulum. In dictum posuere pharetra',
    },
    {
        id: 2,
        fullName: 'Donna Ginter',
        city: ' Marietta',
        picture: customer2,
        comment:
            'This is the only place to stay in Catalina! I have stayed in the cheaper hotels and they were fine, but this is just the icing on the cake! After spending the day bike riding and hiking to come back and enjoy a glass of wine while looking out your ocean view window and then to top it all off...',
    },
    {
        id: 3,
        fullName: 'Rosalind Cloer',
        city: 'Oxford',
        picture: customer3,
        comment:
            'Praesent fringilla convallis libero, vel ullamcorper justo luctus sed. Sed dapibus eu mi ut convallis. Pellentesque egestas magna ac eros tempus sollicitudin. Aenean eget rhoncus ante.',
    },
];
