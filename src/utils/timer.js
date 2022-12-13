const timer = (result) => {
    console.log(`Used ${process.memoryUsage().heapUsed / 1024 / 1024} MB`); // eslint-disable-line no-console
    console.timeEnd('Time'); // eslint-disable-line no-console

    return result;
};

export default timer;
