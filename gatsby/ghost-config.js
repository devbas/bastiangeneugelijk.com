module.exports = {
   resolve: `gatsby-source-ghost`,
   options: {
       apiUrl: `http://127.0.0.1:2368`,
       contentApiKey: `d42a6d026d7766d2ed48df892a`,
       version: `v2` // Ghost API version, optional, defaults to "v3".
                     // Pass in "v2" if your Ghost install is not on 3.0 yet!!!
   }
}