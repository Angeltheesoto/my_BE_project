// boilerplate HTML to use elsewhere
const React = require('react')

function Default(html) {
 return (
  <html>
   <head>
    <title>{html.title || 'Default'}</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossOrigin="anonymous" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css" integrity="sha512-EZLkOqwILORob+p0BXZc+Vm3RgJBOe1Iq/0fiI7r/wJgzOFZMlsqTa29UEl6v6U6gsV4uIpsNZoV32YZqrCRCQ==" crossOrigin="anonymous" />
    <link rel="stylesheet" href="/main.css" />
    <link rel="shortcut icon" type="image/jpg" href="https://i1.sndcdn.com/avatars-D2lY2JTSP9fdjC4Q-UldbbA-t500x500.jpg"/>
   </head>
   <body>
    <div className='wrapper'>
     <header>
      <h1><a href="/computers">Computers</a></h1>
     </header>
     <div className="container">
      {html.children}
     </div>
    </div>
   </body>
  </html>
 )
}

// Exports it to use it in other files
module.exports = Default