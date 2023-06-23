// load information here
const arr_descriptions = [
  { 
    year: 2023, title: "charged up_", 
    description: "please check back later!" 
  },
  { 
    year: 2022, 
    title: "rapid react_", 
    description: "Robots collect cargo from the field and score them into the HUB, in either the low or high goal. During auto, the human player has the choice to score a ball into the HUB by throwing it to the middle of the field from the TERMINAL. During endgame, robots climb onto the HANGAR (monkey bars), which has four levels: Low, Mid, High, and Traversal.",
  },
  {
    year: 2017,
    title: "steamworks_",
    description: "Score fuel (wiffle balls) into the boilers and hang gears onto long hooks on the airship so that human players (inside of the airship) can pull them up and place them on one of four empty gear trains. Once enough gears have been transported to the airship to complete a gear train, the human player cranks the gear train to start its rotor. The robots climb a rope that the HP throws down during endgame."
  }
  ];

  const arr_robots = [
    {
      year: 2023,
      robot: 3128,
      commentary:"", 
      robotinfo:"",
      robotimg:"assets/3128-img.png",
      match1:"",
      match2:"",
      match3:""  },
    {
      year: 2022,
      robot: 1678,
      commentary:"Some strategic benefits of this design are the extreme accuracy during scoring and the quick climb that allowed for more time dedicated to scoring while reliably reaching the traversal rung. Due to the swerve drivetrain, 1678 had fast movement across the field and was agile, preventing the robot from being defended on the field. Due to the adjustable hopper, scoring is possible from any point of the field, and the shooter moves fast, allowing for quick cycles and more points scored.", 
      robotinfo:"1678's robot for the 2022 season had a swerve drivetrain, allowing for a smooth and speedy robot that was incredibly agile while scoring. The slanted hopper and adjustable hood allowed for quick scoring and the retractable roller intake ensured that the balls were reliably picked up throughout gameplay. The outtake, positioned directly opposite to the intake, allowed for quick recovery in the event that the wrong color ball is picked up. The double arm climber with t-shaped hooks allowed for a 6-second climb (on average) that was reliable and took up little space.",
      robotimg: "assets/images/1678-2022.png",
      match1:"",
      match2:"",
      match3:""
    },
    {
      year: 2022,
      robot: 1323,
      commentary: "This robot was extremely competitive for several reasons. It was able to score from almost anywhere on the field due to its turret and adjustable hood. Vision systems allowed the shooter to be aligned with the high goal at all times, which meant that the robot could score quickly without needing to adjust. The robot also had an extremely fast and consistent climb which allowed it to score even more in the endgame.",
      robotinfo:"In the 2022 season, team 1323’s robot was a turreted shooter on a swerve drive train. It included an adjustable hood, which allowed the robot to shoot from several different positions on the field. A vision system (limelight) helped the robot automatically adjust both the adjustable hood and the turret to align with the high goal. A retractable horizontal roller intake was put on one side of the robot, and an outtake on the other side of the robot directly removed balls that were the wrong color. The robot used a two-arm climbing system that hooked onto the bars.",
      robotimg: "assets/images/1323-2022.png",
      match1:"",
      match2:"",
      match3:""
    },
    //--------------
    {
      year: 2017,
      robot: 254,
      commentary: "254’s 2017 robot was extremely competitive due to several effective design choices made by the team. The use of an extendable, open hopper maximized fuel holding and eased the process of intaking fuel during a match, making each cycle more effective in gaining the team points. Additionally, their gear ground intake was effective and efficient, adding to their success. 254’s choice of velcro as a climbing mechanism allowed them to quickly scale the rope during engame, allowing them to get more cycles in during the 30-second period if needed.",
      robotinfo:"In 2017, 254’s robot was comprised of an extendable hopper for fuel on a west coast drive. They utilized a twin backspin flywheel shooter that was fed by the placement of rollers on the floor of the hopper. To intake gears off of the ground, their robot had a mechanism comprised of a pivoting roller and a plate. Their robot also had a horizontal roller intake to intake fuel from the ground. During endgame, 254’s robot scaled the rope via a velcro tube and ratchet strap. A vision system (Nexus 5) was used to aim and score fuel during gameplay.",
      robotimg: "assets/images/254-2017.png",
      match1:"",
      match2:"",
      match3:""
    },
    {
      year: 2017,
      robot: 1986,
      commentary: "1986’s use of meccanum wheels increased the robot’s traction, making it less susceptible to defense. Additionally, their robot’s scoring was incredible accurate, which could potentially be due to their use of a spindexer. ",
      robotinfo:"1986’s 2017 robot was distinct from its peers in its use of an drivetrain consisting of 10 total wheels, 8 of them meccanum. It consisted of an open, expandable hopper with a spindexer that fed its shooter. Its vision system utilized a limelight. To manipulate gears, the team created a mechanism that allowed the gears to be slid into a pocket, containing two clamps on either side fo the game piece, on the robot from the Human Player station. During endgame, the robot climbed via a spinning axle that latched onto the rope.",
      robotimg: "assets/images/1986-2017.png",
      match1:"",
      match2:"",
      match3:""
    },
    {
      year: 2017,
      robot: 973,
      commentary: "973’s robot was extremely accurate at scoring, likely due to the use of a spindexer to sort fuel within its hopper. Its use of a comb made its climbing effective.",
      robotinfo:"973’s 2017 robot consisted of an open, expandable hopper on a tank drivetrain. To further intake fuel, it had a horizontal roller intake, which eventually fed into a spindexer for scoring via a flywheel shooter; it used a limelight for vision. It had a wrist to intake gears from the ground, and a rotating comb to latch onto the rope and scale it during endgame.",
      robotimg: "assets/images/973-2017.png",
      match1:"",
      match2:"",
      match3:""
    },
    {
      year: 2017,
      robot: 3310,
      commentary: "Their gear intake was extremely reliable, which was an asset as teams playing Stronghold generally emphasized fuel scoring rather than gear scoring. Additionally, their shooting was accurate and fuel were able to seamlessly transition between the robot’s hopper and shooter.",
      robotinfo:"3310’s 2017 robot consisted of an open hopper on a tank drive. Within the hopper, 3310 added a spindexer to sort through fuel as it was either being dumped into the hopper or entering it via a horizontal roller intake. They used a limelight to aim and score fuel. It had an extremely reliable wrist for manipulating gears and picking them up off of the ground. The robot climbed via a pulley in the center of their robot.",
      robotimg: "assets/images/3310-2017.png",
      match1:"",
      match2:"",
      match3:""
    },
    {
      year: 2017,
      robot: 987,
      commentary: "987’s strengths in 2017 were found in its low center of gravity and fast cycles, which made up for the time it spent scoring gears. Additionally, its accurate aim for scoring fuel made it competitive in 2017.",
      robotinfo:"987’s 2017 robot had an open hopper situated on a tank drive. It used a limelight as its vision system to score fuel from its open hopper via a flywheel shooter. 987 implemented a wrist to manipulate gears from the ground, and scaled the rope during endgame via a spinning axle.",
      robotimg: "assets/images/987-2017.png",
      match1:"",
      match2:"",
      match3:""
    }
  ]

  const arr_matchlist = [
    { 
      year: 2022,
      team: 1678,
      number: 33,
      location: "Houston (Hopper)",
      link: "https://www.youtube.com/watch?v=2KTDGhm7Sjc"
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
  
  //defaults the content to hidden
  pg_body.style.display = 'none';

  //checks if the list is clicked
  year_list.addEventListener("click", function (event) {
    var num = -1; // Default value for num
  
    //changes the screen
    if (event.target.tagName === "LI") {
      first.style.display = 'none';
      pg_body.style.display = 'block';

      //back button func
      function back(){
        first.style.display = 'block';
        pg_body.style.display = 'none';
        console.log('works');
      }
  
      //back button code
      var backb = document.querySelector('#back');
      backb.addEventListener('click', back);

      num = parseInt(event.target.textContent.split(" ")[0]); // Assign the parsed year value to num
      console.log(num);
    }
  
    //assigning the year for descriptions -- VERY IMPORTANT ALWAYS USE THIS LAYOUT FOR WHENEVER YOU HAVE TO SET A DATA VALUE
    const gdata = arr_descriptions.find(obj => obj.year === num);

    //assigning the year for carousel by year -- VERY IMPORTANT ALWAYS USE THIS LAYOUT FOR WHENEVER YOU HAVE TO SET A DATA VALUE
    carousel_data = arr_robots.filter(obj => obj.year === num);

    console.log(gdata.year);
    console.log(gdata.title);


    //if the year is in the array, then this happens
    if (gdata) {
      //update page
      game_title.textContent = gdata.title;
      game_description.textContent = gdata.description;

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

      //traverse carousel data (button functions)
      function right(){
        i++;
        if(i > carousel_data.length-1){
          i=0;
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
      }
      function left(){
        i--;
        if(i < 0){
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
      }

      //left and right button code
      var rbutton = document.querySelector('.right');
      rbutton.addEventListener('click', right);
      var lbutton = document.querySelector('.left');
      lbutton.addEventListener('click', left);
    }
  });
  