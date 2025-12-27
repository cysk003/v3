// =============================================== //
// - Remove any active classes (yellow boxes)
// - please add your options (host, port, version, etc..)
// - Destroy any pervious Kast
// - On example box click, call Kast
// =============================================== //

    $.kast({
        host: 'asv.alhastream.com',
        port: 3310,
        protocol: 'https',
        version: 2,  
        sid: 1,  
        direct: true,  
        betaProxies: false,
        //directStreamURL: 'https://asv.alhastream.com:3310/rbtfm',
        defaultArtwork: ['https://warningfm.github.io/v3/images/1d205655ef29e14a8255c89fe2383a41.jpg'],
        statusBar: false, 
        minimizeMaximize: true,
        startTemplate: 'maximized',
        language: {
            offlineText: 'Temporarily Offline',
            playedText: '<font face="Georgia" color="red">Mari Diputer :</font>',
            unknownTrackText: 'Informasi & Solusi - c^o^d^e^l^i^s^t^.^c^c', 
            unknownArtistText: 'Radio Bintang Tenggara' 
        },
        position: 'left',
        colors: 'dynamic',  
        continuous: true,
        theme: 'dynamic',
        autoPlay: true,
        played: false
      })
