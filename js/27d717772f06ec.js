// - please add your options (host, port, version, etc..)
// - Destroy any pervious Kast
// - On example box click, call Kast
// =============================================== //

    $.kast({
        host: 'sv3.stri.my.id',
        port: 5423,
        protocol: 'https',
        version: 2,
        sid: 1,
        betaProxies: false,
        //directStreamURL: 'hhttps://sv3.stri.my.id:5423/radio',
        defaultArtwork: ['https://warningfm.github.io/v3/images/1d205655ef29e14a8255c89fe2383a41.jpg'],
        statusBar: false,
        startTemplate: 'maximized',
        language: {
            offlineText: 'Temporarily Offline',
            playedText: '<font face="Georgia" color="blue">Wes Mari Diputer :</font>',
            unknownTrackText: '97.2 - c^o^d^e^l^i^s^t^.^c^c', 
            unknownArtistText: 'Suara Banyuwangi' 
        },
        position: 'left',
        colors: 'dynamic',
        theme: 'dark',
        autoPlay: true,
        played: false
      })
