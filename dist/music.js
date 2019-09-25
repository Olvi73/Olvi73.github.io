const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "older",
        artist: 'Sasha Sloan',
        url: 'http://183.252.54.23/amobile.music.tc.qq.com/C400001MA0E84aINBl.m4a?guid=769663282&vkey=86EDE8A6BBE9C3B6407921A24D77000F31E79D2A1569A8143B1935697B6DC0F75AD7A32676F56BE1363F403F8F25C40F459A665D8B3CB39F&uin=0&fromtag=66',
        cover: 'http://p1.music.126.net/vseT5laoB5QDPTD_7C-InQ==/109951163745732052.jpg?param=300x300',
      },
      {
        name: 'Friends',
        artist: 'E^ST',
        url: 'http://ws.stream.qqmusic.qq.com/C4000044x6ay0fMM7H.m4a?guid=840744131&vkey=B0F741C2911D833AC4244697948288D0D5DF4DC9280CA1618A4607FF16DB48E772068C15A7A20EBE7582996EEB57FFD2B151D76E98FB33DE&uin=0&fromtag=66',
        cover: 'http://p2.music.126.net/IeOjL8tH0MSDvQTgpgwK_g==/109951163621882196.jpg?param=300x300',
      },
      {
        name: 'In Too Deep',
        artist: 'Why Don't We',
        url: 'http://isure.stream.qqmusic.qq.com/C400002KcoWL2XOfoI.m4a?guid=138518053&vkey=A379BD13DCE10E787F869B417B27B9DBE8975185F0F40FA922FBFAAD8505368DB0AE82BE8F2E8A9213D105933A6AE9FD6BC2DC38BD54373E&uin=0&fromtag=66',
        cover: 'http://p2.music.126.net/BzLlU3k05AgoRshJb8D18g==/109951163797823866.jpg?param=300x300',
      }
    ]
});