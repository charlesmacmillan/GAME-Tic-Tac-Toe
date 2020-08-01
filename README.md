# *tic-tac-toe*

This is an over-the-weekend project for my General Assembly Software Engineering Immersive

 ### User Stories
 * as a <ins>**_player_**</ins>, I want a <ins>**score box**</ins> because I want to see my <ins>**_wins & losses_**</ins>
 * as a <ins>**_player_**</ins>, I want to choose between <ins>**playing against the computer _or_ another player**</ins> because I want to <ins>**_play against my roommates_**</ins> 
 * as a <ins>**_player_**</ins> I want a <ins>**_button_ that restarts the game**</ins> so I can <ins>**_play again_**</ins>

### Pseudo Code

1. Have the user choose if they want to play a two-player game, or against the COMPUTER<br/>
(in which case the player1 and (player2/computer)score boxes will be updated with their respective titles and zeros under wins and losses)
2. Allow the player to make the first move 
3. Let the computer choose at random from one of the remaining positions to make a move 
    <br />
    -or- <br /> 
    let player two choose their move.
4. continue the game until **_isCatsGame_** or **_p1Wins_** or **_p2Wins_** or
    **_compWins_** 
5. depending on which of the above functions is called, that function should update the scorebox and also display: <br/> 
    >"Congrats (_<ins>player1</ins> or <ins>player2</ins>_) wins!"  <br/>
    -or- <br/>
    "Bummer _<ins>The Computer</ins>_ wins!"
6. make your reset game button run the _<ins>initializer</ins>_ function to restart the game

### Data

* <ins>Define Constants

    * **MAX_TOTAL_MOVES** = max number of possible moves (9)
    * 

* <ins>State Variables

    * **playsMade** = keep track of what cells are already occupied (if **playsMade** === **MAX_TOTAL_MOVES** the game is over & likely _isCatsGame_)
    * **player1Moves** = an array of the positions player 1 holds
    * **player2Moves** = an array of the positions player 2 holds

* <ins>