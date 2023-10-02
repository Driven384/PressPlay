export function convertDuration(duration) {
    const milliseconds = duration;

    const seconds = Math.floor((milliseconds / 1000) % 60);

    const minutes = Math.floor((milliseconds / 1000 / 60) % 60);

    return `${minutes}:${seconds}`;
};