import client from "../config/secretManager.js";

const getSecretKey = async (secret) => {
    const secretName = `projects/traffix-cloud/secrets/`+secret+`/versions/latest`;

    try {
        const [version] = await client.accessSecretVersion({
            name: secretName,
        });
        return version.payload.data.toString('utf8');
    } catch (err) {
         throw new Error('Gagal Mengambil Secret Key')
    }
}

export default getSecretKey;