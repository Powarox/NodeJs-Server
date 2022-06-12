import axios from "axios";

export function sendMail() {
    axios
        .get("https://dev-21606393.users.info.unicaen.fr/Sinay/")
        .then((res) => {
            console.log(`statusCode: ${res.status}`);
        })
        .catch((error) => {
            console.error(error);
        });
}

// setInterval(sendMail, 1000 * 15);


// import { terminate } from "./services/terminate.js";

// const exitHandler = terminate(server, {
//     coredump: false,
//     timeout: 500,
// });

// process.on("uncaughtException", exitHandler(1, "Unexpected Error"));
// process.on("unhandledRejection", exitHandler(1, "Unhandled Promise"));
// process.on("SIGTERM", exitHandler(0, "SIGTERM"));
// process.on("SIGINT", exitHandler(0, "SIGINT"));
