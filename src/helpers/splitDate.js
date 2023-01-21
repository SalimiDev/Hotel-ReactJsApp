export const splitDate = selectedDate => {
    const date = new Date(selectedDate);
    const day = date.getDate();
    const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const week = weekday[date.getDay()];
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();

    return { day, week, month, year };
};
