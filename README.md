# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by:Evans Asuboah

Time spent:10 hours spent in total

Link to project: (insert your link here, should start with https://glitch.com...)

## Required Functionality

The following **required** functionality is complete:

* [ ] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [ ] "Start" button toggles between "Start" and "Stop" when clicked. 
* [ ] Game buttons each light up and play a sound when clicked. 
* [ ] Computer plays back sequence of clues including sound and visual cue for each button
* [ ] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [ ] User wins the game after guessing a complete pattern
* [ ] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [ ] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [ ] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [ ] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![](gif1-link-here)
![](gif2-link-here)
![](gif3-link-here)
![](gif4-link-here)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
[Stack OverFlow, W3School]

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

Creating time for this project was my greatest challenge. After spending 3 days at the recent Salesforce B.A.S.E Camp in San Francisco and getting exposed to the company’s values and culture, I arrived to meet a plethora of academic work awaiting me. After several days of trying to catch up, I received the news about the opportunity to participate in this pre-internship program. This was an exciting moment. I vowed to myself to secure an internship at Salesforce and get a return offer, and this seemed to me the best opportunity to set my foot in the door. After turning in the application, it was time for the prework. This came in the period I was preparing for my second exam, making it difficult for me to work on the prework. The program also specified that priority would be given to those who turn in their application early as a sign of professionalism. I had to set my priority. Considering that the deadline was 20 days after my last exam, I decided to work on my academic work first; however, I was able to secure short slots of time to complete the required tasks. 
I had some challenges there too. After completing the required tasks, I wanted to challenge myself by attempting the optional questions. I had challenge with how and where to set the timer. Although I had some experience with JavaScript, I had gotten a bit rusty. I set out to W3Schools and Stack Overflow to refresh my knowledge base and subsequently overcome the challenge. After figuring that out, I run into more bugs, the timer seemed to change after every sequence of resets. After several minutes of studying the code, I realized the setTimeout function performs a function after every specified time. I figured that if I made the timer start after every 2 seconds multiplied by the number of patterns or tones played. This makes the made the timer start only when the sequences are played. I was so excited to complete all the required task and I am looking forward to working with Salesforce this summer.


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

I have become obsessed with data structures after a few months of learning and prepping for my internship interviews. I would like to know if the space complexity and time complexity are important during web development. When I was working on the project, I sought ways to reduce the space by reducing the number of times the variables were called in the function and attempting to step through the ‘for loops’ without going through it all. I realized that there weren’t available options in data structures to optimize the ‘for loops’ since it could only be looped through to achieve the goal. However, I reduced he space complexity by using global variables and just reassigning them to a new variable. 
Considering the vast storage space the server has, is it necessary to reduce space complexity in web development, if so, what some ways it can be optimized?




4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

If I had a few more hours to work on this project, I would like to add a recording option to the game so that users can record, save, and play back their recordings. When I was 13 years old, I self-taught myself how to play the traditional African flute which had 7 keys. I would play a good sound and record myself on a phone recorder so I would know the kind of keys I played when making an original sound. In my Android class in Codepath, we were just introduced to the room database for android. It would be awesome to leverage that or any database of that sort to this program so I could make my own sounds and listen to them as I play.
I would also include a replay option, so the player can listen to the notes again after an unsuccessful effort. With the current game, the user must guess correctly without listening to the notes again, even if previous efforts were unsuccessful.




## Interview Recording URL Link

[My 5-minute Interview Recording](your-link-here)


## License

    Copyright Evans Asuboah

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
