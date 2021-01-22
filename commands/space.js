module.exports = {
    name: 'space',
    description: 'summons a spacescape',
    execute(client, message, args, Discord){

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