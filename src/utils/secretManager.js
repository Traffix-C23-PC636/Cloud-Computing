import client from '../config/secretManager.js'

const loadSecretsFromManager = () => {
  return new Promise(async (resolve, reject) => {
    const [secrets] = await client.listSecrets({
      parent: 'projects/traffix-cloud'
    })
    resolve(secrets)
  })
}

const loadSecretsToEnvironment = async () => {
  try {
    const secrets = await loadSecretsFromManager()
    for (const secret of secrets) {
      const [version] = await client.accessSecretVersion({
        name: `${secret.name}/versions/latest`
      })

      const secretName = secret.name.split('/').pop()
      process.env[secretName] = version.payload.data.toString()
    }
  } catch (error) {
    console.error('Failed to load secrets from secret manager:', error)
  }
}

export {
  loadSecretsToEnvironment
}
