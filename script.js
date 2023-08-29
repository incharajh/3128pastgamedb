// load information here
const arr_descriptions = [
  {
    year: 2023, title: "charged up_",
    description: "The field is divided in half by a white line, and each half includes one alliance's Community and the other alliance's Loading Zone. The primary scoring areas are the two Communities (one per alliance), which are located near the two alliance station walls. Robots begin the match fully contained within their alliance's Community. Each Community includes a Grid where game pieces can be scored and a Charging Station that robots can drive onto and balance on during the autonomous period and towards the end of the match."
  },
  {
    year: 2022,
    title: "rapid react",
    description: "Robots collect cargo from the field and score them into the HUB, in either the low or high goal. During auto, the human player has the choice to score a ball into the HUB by throwing it to the middle of the field from the TERMINAL. During endgame, robots climb onto the HANGAR (monkey bars), which has four levels: Low, Mid, High, and Traversal.",
  },
  {
    year: 2020,
    title: "infinite recharge",
    description: "Robots pick up small dodgeballs and score into a low goal, high outer goal, or high inner goal. They also spin a horizontal wheel of Fortnite. During endgame, they climb onto a large clothes hanger-esque climb rung."
  },
  {
    year: 2019,
    title: 'deep space',
    description: "Game starts with a 15 second period in which driver vision is denied, so the robot either needs vision or autonomous code. Robots need to carry discs and large balls, then manipulate them with an elevator in order to score points. Only one of each game element may be carried at a time. There is a climb during endgame, with one level being higher than the other two."
  },
  {
    year: 2018,
    title: 'power up',
    description: "Robots pick up cubes and place them on 2 small switches or one tall scale. The longer the alliance has control of the switches and scale, the more points are scored. Robots can also exchange game elements into the human player station for power ups, which grant temporary advantages. At the end, teams have to climb up using a relatively small bar. "
  },
  {
    year: 2017,
    title: "steamworks",
    description: "Score fuel (wiffle balls) into the boilers and hang gears onto long hooks on the airship so that human players (inside of the airship) can pull them up and place them on one of four empty gear trains. Once enough gears have been transported to the airship to complete a gear train, the human player cranks the gear train to start its rotor. The robots climb a rope that the HP throws down during endgame."
  },
  {
    year: 2016,
    title: 'stronghold',
    description: "Two alliances with three robots each work together to breach the opposite alliance’s defense, or stronghold, along with capturing the opposing side’s tower by firing small foam balls, aka BOULDERS, at the towers. The robots can also scale the towers (basically climb but on a castle) to earn points, but only once they have scored enough boulders in the tower. The barriers between castles have obstacles selected by the audience."
  },
  {
    year: 2015,
    title: 'recycle rush',
    description: "Stack big containers and trash cans and put pool noodles called litter inside them. Throw pool noodles at opponents’ side for more points. Midline could not be crossed (gameplay was very innovative and exciting as a result)."
  },
  {
    year: 2014,
    title: 'aerial assist',
    description: "Score a ball in a high or low goal while passing between robots in your alliance for increased points. Throw the ball over a truss and catch for increased points. The opposing team can also do billboard defense and extend to block shots(within a specific zone). During auto each robot has a ball that they attempt to score into a goal with the randomized possibility of it earning bonus points on top of the increased points for an auto goal. During tele-op, there is only one ball per alliance. "
  },
  {
    year: 2013,
    title: "ultimate ascent",
    description: "Two alliances, each comprised of 3 robots, score frisbees (discs) into corresponding goals on the game field. During endgame, the robots climb onto multi-level pyramids."
  },
  {
    year: 2012,
    title: 'rebound rumble',
    description: "Two alliances, both made up of 3 robots, compete to score the most basketballs into either a low, middle or high goal. At the end of the game, two or three robots climb onto a seesaw-like platform of their alliance color, and attempt to balance it before the match ends."
  },
  {
    year: 2011,
    title: 'logo motion',
    description: 'Two alliances, each made of 3 robots, manipulate 3 game pieces, which are shaped as a triangle, circle, and square, and place them on 3 levels of hooks  (on the opposite side of the human player station) in a way that creates the first logo (triangle, circle, square). During endgame, 4 of 6 robots compete against each other to launch a “minibot” along a tower and have it hit the post on its top before the other robots.'
  },
  {
    year: 2010,
    title: 'breakaway',
    description: "Score a soccer ball into your designated goal using vision targets. The field has very tall bumps which you can attempt to go over or go under the low section in the middle. Human player returns balls to the field using a zip line esq tunnel over their head. At the end game,, climb onto the tower and get on top of the bump."
  }
];

const arr_robots = [
  {
    year: 2022,
    robot: 1678,
    commentary: "Some strategic benefits of this design are the extreme accuracy during scoring and the quick climb that allowed for more time dedicated to scoring while reliably reaching the traversal rung. Due to the swerve drivetrain, 1678 had fast movement across the field and was agile, preventing the robot from being defended on the field. Due to the adjustable hopper, scoring is possible from any point of the field, and the shooter moves fast, allowing for quick cycles and more points scored.",
    robotinfo: "1678's robot for the 2022 season had a swerve drivetrain, allowing for a smooth and speedy robot that was incredibly agile while scoring. The slanted hopper and adjustable hood allowed for quick scoring and the retractable roller intake ensured that the balls were reliably picked up throughout gameplay. The outtake, positioned directly opposite to the intake, allowed for quick recovery in the event that the wrong color ball is picked up. The double arm climber with t-shaped hooks allowed for a 6-second climb (on average) that was reliable and took up little space.",
    robotimg: "assets/images/1678-2022.png",
    match1: "https://www.youtube.com/watch?v=2KTDGhm7Sjc",
    match2: "",
    match3: ""
  },
  {
    year: 2022,
    robot: 1323,
    commentary: "This robot was extremely competitive for several reasons. It was able to score from almost anywhere on the field due to its turret and adjustable hood. Vision systems allowed the shooter to be aligned with the high goal at all times, which meant that the robot could score quickly without needing to adjust. The robot also had an extremely fast and consistent climb which allowed it to score even more in the endgame.",
    robotinfo: "In the 2022 season, team 1323’s robot was a turreted shooter on a swerve drive train. It included an adjustable hood, which allowed the robot to shoot from several different positions on the field. A vision system (limelight) helped the robot automatically adjust both the adjustable hood and the turret to align with the high goal. A retractable horizontal roller intake was put on one side of the robot, and an outtake on the other side of the robot directly removed balls that were the wrong color. The robot used a two-arm climbing system that hooked onto the bars.",
    robotimg: "assets/images/1323-2022.png",
    match1: "https://www.youtube.com/watch?v=pSQX5c7G8yg",
    match2: "",
    match3: ""
  },
  {
    year: 2022,
    robot: 1690,
    commentary: "This robot was one of the most competitive ones for this season. It was extremely consistent with its scoring and its intake was fast and efficient. The vision system vastly decreased their cycle times as they rarely needed to adjust their turret or hood. On top of all this, their consistent and fast climber ensured traversal points in any game that they climbed.",
    robotinfo: "Team 1690’s 2022 robot was a turreted shooter on a swerve drive train. It also included an adjustable hood, which automatically moved depending on the distance of the robot from the high goal. The robot had a long retractable roller intake on its side, and its hopper was positioned low below the shooter. A limelight vision system worked in tandem with the adjustable hood and turret to have constant aim on the high goal. The robot had a two-arm hooked climber which attached to the side of the hangar and allowed for a climb from mid directly to the traversal rung.",
    robotimg: "assets/images/1690-2022.png",
    match1: "https://www.youtube.com/watch?v=9s7zUlTgnDc"
  },
  {
    year: 2022,
    robot: 254,
    commentary: "The robot excels in fast shooting and efficient cycle times, thanks to its streamlined process that eliminates the need for time-consuming alignment and aiming. With the ability to intake from two sides of the robot, it maximizes efficiency in collecting game pieces. The climb mechanism is designed to be both fast and efficient, allowing the robot to quickly ascend to its desired position. Furthermore, the shooting mechanism is highly accurate, ensuring precise targeting and scoring. Overall, the robot's performance is optimized for speed, efficiency, and accuracy in both shooting and climbing tasks.",
    robotinfo: "254’s robot design features a double intake system with retractable roller intakes, allowing efficient ball collection. The hopper is below the shooter, which is equipped with an adjustable hood and a turreted mechanism, providing flexibility and precision in targeting. A single wheel guides the accelerating the ball towards the intended direction. The turret consistently aligns itself with the high goal, minimizing the chances of missing opponent game pieces. To enhance versatility, a double bar claw is incorporated, working in tandem with an extending arm. The robot is capable of climbing directly from the mid to the traversal bar.",
    robotimg: "assets/images/254-2022.png",
    match1: "https://www.youtube.com/watch?v=cAQ-dh6PVz0"
  },
  {
    year: 2022,
    robot: 1619,
    commentary: "The climb mechanism is designed to be fast, surpassing the speed of most climbs, due to its well-structured design. The intake system is sensitive and responsive, allowing for a quick and precise handling of game pieces. Its fast and compact size enables swift movement and minimizes vulnerability to defensive maneuvers. The smaller footprint of the robot requires less space on the hangar, maximizing efficiency and optimizing resource allocation. In summary, the robot's impressive climb speed, sensitive intake, fast shooting capabilities, and compact size collectively contribute to its overall effectiveness on the field.",
    robotinfo: "The robot features a retractable one-sided wheel roller intake system, strategically positioned to guide any ball towards the hopper. Both the hopper and shooter are conveniently located on one side of the robot, optimizing space utilization. The shooter is equipped with an adjustable hood, providing flexibility in targeting and shot trajectory. As for the climber, it consists of a single rotating arm with hooks on each side, enabling efficient and secure attachment to climbing structures. With these design elements, the robot is well-equipped to effectively collect, shoot, and climb, showcasing its versatility and adaptability in various tasks.",
    robotimg: "assets/images/1619-2022.png",
    match1: "https://www.youtube.com/watch?v=n00526sB2JI"
  },
  //--------------
  {
    year: 2017,
    robot: 254,
    commentary: "254’s 2017 robot was extremely competitive due to several effective design choices made by the team. The use of an extendable, open hopper maximized fuel holding and eased the process of intaking fuel during a match, making each cycle more effective in gaining the team points. Additionally, their gear ground intake was effective and efficient, adding to their success. 254’s choice of velcro as a climbing mechanism allowed them to quickly scale the rope during engame, allowing them to get more cycles in during the 30-second period if needed.",
    robotinfo: "In 2017, 254’s robot was comprised of an extendable hopper for fuel on a west coast drive. They utilized a twin backspin flywheel shooter that was fed by the placement of rollers on the floor of the hopper. To intake gears off of the ground, their robot had a mechanism comprised of a pivoting roller and a plate. Their robot also had a horizontal roller intake to intake fuel from the ground. During endgame, 254’s robot scaled the rope via a velcro tube and ratchet strap. A vision system (Nexus 5) was used to aim and score fuel during gameplay.",
    robotimg: "assets/images/254-2017.png",
    match1: "",
    match2: "",
    match3: ""
  },
  {
    year: 2017,
    robot: 1986,
    commentary: "1986’s use of meccanum wheels increased the robot’s traction, making it less susceptible to defense. Additionally, their robot’s scoring was incredible accurate, which could potentially be due to their use of a spindexer. ",
    robotinfo: "1986’s 2017 robot was distinct from its peers in its use of an drivetrain consisting of 10 total wheels, 8 of them meccanum. It consisted of an open, expandable hopper with a spindexer that fed its shooter. Its vision system utilized a limelight. To manipulate gears, the team created a mechanism that allowed the gears to be slid into a pocket, containing two clamps on either side fo the game piece, on the robot from the Human Player station. During endgame, the robot climbed via a spinning axle that latched onto the rope.",
    robotimg: "assets/images/1986-2017.png",
    match1: "",
    match2: "",
    match3: ""
  },
  {
    year: 2017,
    robot: 973,
    commentary: "973’s robot was extremely accurate at scoring, likely due to the use of a spindexer to sort fuel within its hopper. Its use of a comb made its climbing effective.",
    robotinfo: "973’s 2017 robot consisted of an open, expandable hopper on a tank drivetrain. To further intake fuel, it had a horizontal roller intake, which eventually fed into a spindexer for scoring via a flywheel shooter; it used a limelight for vision. It had a wrist to intake gears from the ground, and a rotating comb to latch onto the rope and scale it during endgame.",
    robotimg: "assets/images/973-2017.png",
    match1: "",
    match2: "",
    match3: ""
  },
  {
    year: 2017,
    robot: 3310,
    commentary: "Their gear intake was extremely reliable, which was an asset as teams playing Stronghold generally emphasized fuel scoring rather than gear scoring. Additionally, their shooting was accurate and fuel were able to seamlessly transition between the robot’s hopper and shooter.",
    robotinfo: "3310’s 2017 robot consisted of an open hopper on a tank drive. Within the hopper, 3310 added a spindexer to sort through fuel as it was either being dumped into the hopper or entering it via a horizontal roller intake. They used a limelight to aim and score fuel. It had an extremely reliable wrist for manipulating gears and picking them up off of the ground. The robot climbed via a pulley in the center of their robot.",
    robotimg: "assets/images/3310-2017.png",
    match1: "",
    match2: "",
    match3: ""
  },
  {
    year: 2017,
    robot: 987,
    commentary: "987’s strengths in 2017 were found in its low center of gravity and fast cycles, which made up for the time it spent scoring gears. Additionally, its accurate aim for scoring fuel made it competitive in 2017.",
    robotinfo: "987’s 2017 robot had an open hopper situated on a tank drive. It used a limelight as its vision system to score fuel from its open hopper via a flywheel shooter. 987 implemented a wrist to manipulate gears from the ground, and scaled the rope during endgame via a spinning axle.",
    robotimg: "assets/images/987-2017.png",
    match1: "",
    match2: "",
    match3: ""
  }
]

const arr_matchlist = [
  {
    year: 2022,
    team: 1678,
    number: "33",
    location: "Houston (Hopper)",
    link: "https://www.youtube.com/watch?v=2KTDGhm7Sjc"
  },
  {
    year: 2022,
    team: 1323,
    number: 'Finals 2',
    location: "Houston (Carver)",
    link: "https://www.youtube.com/watch?v=pSQX5c7G8yg"
  },
  {
    year: 2022,
    team: 254,
    number: "42",
    location: "Houston (Galileo)",
    link: "https://www.youtube.com/watch?v=cAQ-dh6PVz0"
  }
]

// variables that are changed
const year_list = document.getElementById("games-list");
const first = document.getElementById('first');
const pg_body = document.getElementById("pg-content");
const game_title = document.getElementById('title-desc');
const game_description = document.getElementById('desc-body');
const rob_description = document.getElementById('rob-desc');
const strat_commentary = document.getElementById('com-body');
const rob_title = document.getElementById('title-pic');
const images = document.getElementById('images');
var carousel_data;
var match_bot;
var match_num = document.getElementById('match-n');
var match_loc = document.getElementById('reg-l');
var match_link = document.getElementById('matchlink');

//defaults the content to hidden
pg_body.style.display = 'none';

//checks if the list is clicked -- everything game-related is in this function :)
year_list.addEventListener("click", function (event) {
  var num = -1; // Default value for num

  //changes the screen
  if (event.target.tagName === "LI") {
    first.style.display = 'none';
    pg_body.style.display = 'block';

    //back button func
    function back() {
      first.style.display = 'block';
      pg_body.style.display = 'none';
      game_title.textContent = '';
      console.log('works');
    }

    //back button code
    var backb = document.querySelector('#back');
    backb.addEventListener('click', back);

    num = parseInt(event.target.textContent.split(" ")[0]); // Assign the parsed year value to num
    console.log(num);
  }

  //assigning the year for descriptions -- VERY IMPORTANT ALWAYS USE THIS LAYOUT FOR WHENEVER YOU HAVE TO SET A DATA VALUE
  var gdata = arr_descriptions.find(obj => obj.year === num);

  //assigning the year for carousel by year -- VERY IMPORTANT ALWAYS USE THIS LAYOUT FOR WHENEVER YOU HAVE TO SET A DATA VALUE
  carousel_data = arr_robots.filter(obj => obj.year === num);

  console.log(gdata.year);
  console.log(gdata.title); //just checks if the code is working, for troubleshooting reasons

  //if the year is in the array, then this happens
  if (gdata) {
    //update page
    game_description.textContent = gdata.description;

    var message = gdata.title.split(''),
		speed = 150,
    box = document.getElementById('title-desc');

    message.forEach(function(element, index){
      var letter = element.trim() ? element : "&nbsp;";
      setTimeout(function(){
        box.innerHTML += letter;
        
        if (index === message.length - 1){ 
            // Done.
            box.className = 'done-writing';
        }
      }, speed * index);
    });

    //update robot info and add carousel data
    var i = 0;
    const rimage = document.getElementById("r-image");
    var newsrc = carousel_data[i].robotimg;
    rimage.setAttribute("src", newsrc);
    console.log(newsrc);
    var rdata = carousel_data[i];
    rob_description.textContent = rdata.robotinfo;
    strat_commentary.textContent = rdata.commentary;
    rob_title.textContent = rdata.robot;

    //loading matches (must use year and robot for this)

    match_bot = arr_matchlist.find(obj => obj.team === rdata.robot && obj.year === rdata.year);
    if (match_bot) {
      match_num.innerHTML = match_bot.number;
      match_loc.innerHTML = match_bot.location;
      match_link.setAttribute('href', match_bot.link);
    }

    console.log(match_bot.number)

    console.log(rdata.robot);

    //traverse carousel data (button functions)
    function right() {
      i++;
      if (i > carousel_data.length - 1) {
        i = 0;
      }
      console.log(i);
      rdata = carousel_data[i];
      rob_description.textContent = rdata.robotinfo;
      strat_commentary.textContent = rdata.commentary;
      rob_title.textContent = rdata.robot;
      //loading in images
      newsrc = carousel_data[i].robotimg;
      rimage.setAttribute("src", newsrc);
      console.log(newsrc);
      match_bot = arr_matchlist.find(obj => obj.team === rdata.robot && obj.year === rdata.year);
      if (match_bot) {
        match_num.innerHTML = match_bot.number;
        match_loc.innerHTML = match_bot.location;
        match_link.setAttribute('href', match_bot.link);
      }
    }
    function left() {
      i--;
      if (i < 0) {
        i = carousel_data.length - 1;
      }
      console.log(i);
      rdata = carousel_data[i];
      rob_description.textContent = rdata.robotinfo;
      strat_commentary.textContent = rdata.commentary;
      rob_title.textContent = rdata.robot;
      //loading in images
      newsrc = carousel_data[i].robotimg;
      rimage.setAttribute("src", newsrc);
      match_bot = arr_matchlist.find(obj => obj.team === rdata.robot && obj.year === rdata.year);
      if (match_bot) {
        match_num.innerHTML = match_bot.number;
        match_loc.innerHTML = match_bot.location;
        match_link.setAttribute('href', match_bot.link);
      }
    }

    //left and right button code
    var rbutton = document.querySelector('.right');
    rbutton.addEventListener('click', right);
    var lbutton = document.querySelector('.left');
    lbutton.addEventListener('click', left);
  }
});
