export const shorten = (title) => {
    const newTitle = title.split(' ');

    return `${newTitle[0]} ${newTitle[1]}`
}