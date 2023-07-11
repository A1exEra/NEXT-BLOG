/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

// module.exports = (phase) => {
//   if (phase === PHASE_DEVELOPMENT_SERVER) {
//     return {
//       reactStrictMode: true,
//       compiler: {
//         styledComponents: true,
//       },
//       env: {
//         mongodb_username: 'godOfcode',
//         mongodb_password: 'ILR66swnSHRcd6A2',
//         mongodb_clustername: 'cluster0',
//         mongodb_database: 'devdomtest',
//       },
//     };
//   }
//   return {
//     reactStrictMode: true,
//     compiler: {
//       styledComponents: true,
//     },
//     env: {
//       mongodb_username: 'godOfcode',
//       mongodb_password: 'ILR66swnSHRcd6A2',
//       mongodb_clustername: 'cluster0',
//       mongodb_database: 'devdomination',
//     },
//   };
// };
const nextConfig = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      compiler: {
        styledComponents: true,
      },
      env: {
        mongodb_username: 'godOfcode',
        mongodb_password: 'ILR66swnSHRcd6A2',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'devdomtest',
      },
    };
  }
  return {
    reactStrictMode: true,
    compiler: {
      styledComponents: true,
    },
    env: {
      mongodb_username: 'godOfcode',
      mongodb_password: 'ILR66swnSHRcd6A2',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'devdomination',
    },
  };
};

module.exports = nextConfig;
