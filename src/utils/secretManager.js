import client from '../config/secretManager.js'

const loadSecretsToEnvironment = async () => {
    const [secrets] = await client.listSecrets({
        parent: 'projects/traffix-cloud',
    });

    for (const secret of secrets) {
        const [version] = await client.accessSecretVersion({
            name: `${secret.name}/versions/latest`,
        });

        const secretName = secret.name.split('/').pop();
        process.env[secretName] = version.payload.data.toString();
    }
}

export {
    loadSecretsToEnvironment
}
