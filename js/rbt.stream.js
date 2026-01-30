// =============================================== //
// - Remove any active classes (yellow boxes)
// - please add your options (host, port, version, etc..)
// - Destroy any pervious Kast
// - On example box click, call Kast
// =============================================== //

    $.kast({
        host: 's3.free-shoutcast.com',
        port: 18034,
        protocol: 'https',
        version: 2,
        directStreamURL: 'https://free.rcast.net/65479',
        defaultArtwork: ['https://warningfm.github.io/v3/images/1d205655ef29e14a8255c89fe2383a41.jpg'],
        statusBar: false,
        startTemplate: 'maximized',
        position: 'left',
        colors: 'dynamic',
        theme: 'dynamic',
        autoPlay: true,
        played: false
      })



