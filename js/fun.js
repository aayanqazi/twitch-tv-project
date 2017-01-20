var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

function getChannel()
{
    channels.forEach(function(channel){
        function makeURL(type , name)
        {
            return 'https://wind-bow.hyperdev.space/twitch-api/' + type + '/'+ name + '?callback=?';
        };
        $.getJSON(makeURL("streams",channel),function(data)
        {
            var status , game ;
            if(data.status== null)
            {
                game = "offline";
                status = "offline";
            }
            else if (data.stream === undefined) {
        game = "Account Closed";
        status = "offline";
      } else {
        game = data.stream.game;
        status = "online";
      };
        });
    });
}