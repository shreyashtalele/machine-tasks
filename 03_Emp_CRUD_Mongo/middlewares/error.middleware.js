function errorHandler(error, req, res, next) {


    if (error.message.includes("required")) {
        return res.status(400).json({
            success: false,
            message: error.message
        });
    }

    if (error.message.includes("Employee not found" || "not found")) {
        return res.status(404)
            .json({
                success: false,
                message: error.message
            })
    }

    if (error.name === "CastError") {
        return res.status(400).json({
            success: false,
            message: "Invalid employee ID"
        });
    }

    if (error.name === "Invalid sort field") {
        return res.status(405).json({
            success: false,
            message: "Invalid sort field"
        });
    }


    if (error.code === 11000) {
        return res.status(400).json({
            success: false,
            message: "Email already exists"
        });
    }



    if (error.name === "ValidationError") {
        return res.status(400).json({
            success: false,
            message: error.message
        });
    }



    return res.status(500).json({
        success: false,
        message: "Internal Server Error"
    });
}


module.exports = errorHandler;