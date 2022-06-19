// HTTPS SUCCESS
export function successResponse(res, msg) {
    return res.status(200).json({
        status: 1,
        message: msg,
    })
}

export function successResponseWithData(res, msg) {
    return res.status(200).json({
        status: 1,
        message: msg,
        data: data,
    })
}

// HTTPS ERRORS 
export function ErrorResponse(res, msg) {
    return res.status(500).json({
        status: 0,
        message: msg, // Unexpected error
    })
}

export function unauthorizedResponse(res, msg) {
    return res.status(401).json({
        status: 0,
        message: msg, // Access denied
    })
}

export function notFoundResponse(res, msg) {
    return res.status(404).json({
        status: 0,
        message: msg, // Not found
    })
}
