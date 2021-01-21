module.exports = {
    name: 'space',
    description: 'summons a spacescape',
    execute(message, args){

        //Allows bot to send ascii art, or pictures
        message.channel.send(artStr = String.raw`
        .　　　　　　　　　　 ✦ 　　　　   　
　　　˚　　　　　　　　　　　　　　*　　　　　　
  　　　　　　　　　　　　　　　.　　　　　　　　　　　　　　. 　　 　　　　　　　
 ✦ 　　　　　　　　　　 　 ‍ ‍ ‍ ‍ 　　　　 　　　　　　　　　　　　,　　   　

.　　　　　　　　　　　　　.　　　ﾟ　  　　　.　　　　　　　　　　　　　.

　　　　　　,　　　　　　　.　　　　　　    　　　　
　　　　　　　　　　　　　　　　　　 ☀️ 　　　　　　　　　　　　　　　　　　   
　      　　　　　        　　　　　　　　　　　　　.
　　　　　　　　　　.　　　　　　　　　　　　　.
　　　　　　　　　　　　　　　　       　   　　　　 　　　　　　　　　　　　　
　　       　   　　　　　　　　　　　　　　　　       　    ✦ 
   　　　,　　　　　　　　　　            🚀 　　　　 　　,　　　 ‍ ‍ ‍ ‍ 　
　　　　　　　　　　　　.　　　　　 　　 　　　.　　　　　　　　　　　　　 　    
      　　　　　　　　　　　　　　　　　　　˚　　　 　   　　　　,　　　　　　
　　　　       　    　　　　　　　　　　　　　　　　.　　　
 　　    　　　　　 　　　　　.　　　　　　　　　　　　　.　　　　　　　　　　　　　　　* 　　
  　　　　　 ✦ 　　　　　　　         　        　　　　 　　 　
　　　　　 　　　　　.　　　　　　　　　　　　　　　　　　.　　　　　    　　.
　 　　　　　.　　　　 🌑
　　　　　   　　　　　.　　　　　　　　　　　.　　　　　　　　　　  

　˚　　　　　　　　　　　　　　　　　　　　　ﾟ　　　　　.　　　　　　　　　　　　　　
. 　　 　 🌎 ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ,　 　　　　　　　　　　　　　　*
.　　　　　 　　　　　　　　　　　　　　.　　　　　　　　　　 ✦ 　　　　   　
　　　˚　　　　　　　　　　　　　　*　　　　　　   　　　　　　　　　　　　　　　.`);
    }
}