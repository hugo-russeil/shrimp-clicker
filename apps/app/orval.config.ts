module.exports = {
  'api': {
    output: {
      mode: 'tags-split',
      target: 'src/api/client/api-client.ts',
      schemas: 'src/api/model',
      client: 'react-query',
      mock: true,
    },
    input: {
      target: 'http://127.0.0.1:3000/swagger/json',
      baseURL: '/api'
    },
    hooks: {
      afterAllFilesWrite: 'pnpm exec prettier --write'
    }
  }
} as {[k: string]: import('orval').Options};
