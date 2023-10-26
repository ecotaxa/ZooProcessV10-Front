module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/projects',
      },
      // {
      //   source: '/projects/:id/samples',
      //   destination: '/projects/:id',
      // },
    ]
  },
}
