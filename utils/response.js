const response = (statusCode, data, message, res) => {
    const status = statusCode >= 400 ? 'error' : 'success';
    res.status(statusCode).json({
        status,
        message,
        payload: data,
        metadata: {
            prev: "",
            next: "",
            current: ""
        },
    });
};

module.exports = response;
