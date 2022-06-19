// HTTPS SUCCESS
export function successResponse(res, msg) {
    let data = {
        status: 1,
        message: msg,
    };
    return res.status(200).json(data);
};

export function successResponseWithData(res, msg, data) {
    let result = {
        status: 1,
        message: msg,
        data: data,
    };
    return res.status(200).json(result);
};

// HTTPS ERRORS 
export function ErrorResponse(res, msg) {
    var data = {
        status: 0,
        message: msg,   // Unexpected error
    };
    return res.status(500).json(data);
};

export function unauthorizedResponse(res, msg) {
    var data = {
        status: 0,
        message: msg,   // Access denied
    };
    return res.status(401).json(data);
};

export function notFoundResponse(res, msg) {
    var data = {
        status: 0,
        message: msg,   // Not found
    };
    return res.status(404).json(data);
};
