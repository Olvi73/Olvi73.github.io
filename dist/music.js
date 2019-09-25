const ap = new APlayer
({
    container: document.getElementById('aplayer'),
    autoplay: false, //自动播放
    listFolded: true, //播放列表默认折叠
    listMaxHeight: 90, //播放列表最大高度
    order: 'list', //音频循环顺序, 可选值: 'list', 'random'
    loop: 'all', //音频循环播放, 可选值: 'all', 'one', 'none'
    theme: '#e9e9e9', //切换音频时的主题色，优先级低于audio.theme
    preload: 'none', //音频预加载，可选值: 'none', 'metadata', 'auto'
    mutex: true, //互斥，阻止多个播放器同时播放，当前播放器播放时暂停其他播放器
    volume: 0.7, //默认音量，请注意播放器会记忆用户设置，用户手动设置音量后默认音量即失效
    fixed: true, //吸底模式（fixed:true），迷你模式（mini:true），普通模式（注释此行或者设置fixed:false）
    audio: [
     {
        name: 'older',
        artist: 'Sasha Sloan',
        url: 'https://183.252.54.23/amobile.music.tc.qq.com/C400001MA0E84aINBl.m4a?guid=769663282&vkey=86EDE8A6BBE9C3B6407921A24D77000F31E79D2A1569A8143B1935697B6DC0F75AD7A32676F56BE1363F403F8F25C40F459A665D8B3CB39F&uin=0&fromtag=66',
        cover: 'https://p1.music.126.net/vseT5laoB5QDPTD_7C-InQ==/109951163745732052.jpg?param=300x300',
      },
      {
        name: 'Friends',
        artist: 'E^ST',
        url: 'https://ws.stream.qqmusic.qq.com/C4000044x6ay0fMM7H.m4a?guid=840744131&vkey=B0F741C2911D833AC4244697948288D0D5DF4DC9280CA1618A4607FF16DB48E772068C15A7A20EBE7582996EEB57FFD2B151D76E98FB33DE&uin=0&fromtag=66',
        cover: 'https://p2.music.126.net/IeOjL8tH0MSDvQTgpgwK_g==/109951163621882196.jpg?param=300x300',
      },
      {
        name: 'In Too Deep',
        artist: 'Why Dont We',
        url: 'https://isure.stream.qqmusic.qq.com/C400002KcoWL2XOfoI.m4a?guid=138518053&vkey=A379BD13DCE10E787F869B417B27B9DBE8975185F0F40FA922FBFAAD8505368DB0AE82BE8F2E8A9213D105933A6AE9FD6BC2DC38BD54373E&uin=0&fromtag=66',
        cover: 'https://p2.music.126.net/BzLlU3k05AgoRshJb8D18g==/109951163797823866.jpg?param=300x300',
      }
    ]
  });