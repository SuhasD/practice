Please use this Google doc during your interview (your interviewer will see what you write here). To free your hands for typing, we recommend using a headset or speakerphone.


hi
A game of "black hole" is played between two players (in this example, blue and red)

1 Empty board:
    O
   O O
  O O O
 O O O O
O O O O O

2 Midway through the game:
    1
   O O
  4 O O
 4 2 O 2
3 O O 3 1
3 After the last play:
    1
   7 6
  4 6 O
 4 2 5 2
3 7 5 3 1
4 Black Hole!!  
All numbers touching the last empty tile are scored as 0 points.  Add up all the rest of the tokens to get the final scores, most points win.
    1
   7 6
  4 6 O
 4 2 5 2
3 7 5 3 1

Final Score: 
Red: 17
Blue: 20 (winner)



var hash = {
	[
		‘state’: {[
			‘blue’: true;
			‘red’: false;
		], 
	[]}
]
};

hash[‘blue’] : 1, 2;
hash[‘red’]: 1,2;

let board = [[{
‘color’: ‘red’,
‘value’: 1,	
}], [{}, {}], [{},{},{}]];



function computetheState(board){
	// var bScore, rScore, blackHoleSpot

	// loop over board, state of each row
		// bScore ++;
		// rScore ++;
		// blackHoleSpot = n;
	// if, value = null;
		// continue;
	
	// loop over again; 
		// remove adjacent node values;

	// return (bScore > rScore)? ‘blue’ : ‘red’;

	let bScore = 0, rScore = 0, blackSpot = 0;

	for(let i=0; i< board.length; i++){
		
for(let j=0; j<board[i].length; j++){
if(board[i][j].color === ‘red’) rScore += board[i][j].value; 

if(board[i][j].color === blue) bScore += board[i][j].value; 


if(!board[i][j].color){
	if(isValid(board, i-1, j))){
	if(board[i-1][j].color == ‘blue’)
bScore = bScore - board[i-1][j].value;
	else if(board[i-1][j].color == ‘red’)
		rScore = rScore - board[i-1][j].value;
}
// [i-1][j-1]
// [i+1][j]
// [i+1][j+1]
// [i] [j+1]
// [i] [j-1]

}

	
}	
	
	}


	if(bScore > rScore) return ‘blue’;
	else if(rScore > bScore) return ‘red’;
	else if(bScore == rScore) return ‘Tie’;
	
}

function isValid(board, i, j){
	if(board[i] && board[i][j]){
		return true;
	}
	return false; 
}
