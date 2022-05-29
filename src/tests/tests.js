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
