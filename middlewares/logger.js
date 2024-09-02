const dateLogger = (req, res, next) => {
    const currentDate = new Date();
    console.log(`Fecha y hora: ${currentDate.toLocaleString()}`);
    next();
};

const messageLogger = (req, res, next) => {
    console.log('Mensaje: Has accedido a una ruta.');
    next();
};

module.exports = {
    dateLogger,
    messageLogger
};
