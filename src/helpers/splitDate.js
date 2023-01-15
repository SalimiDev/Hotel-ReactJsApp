export const splitDate = selectedDate => {
    const date = new Date(selectedDate);
    const day = date.getDate();
    const weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const week = weekday[date.getDay()];
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();

    return { day, week, month, year };
};
