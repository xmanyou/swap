//array of levels so they can be loaded based on index
/*
Key:
0 - white tile
2 - green tile (goal)
3 - red tile (lava)

-1 - normal player
-2 - moves to the right
-3 - moves to the right and bounces off the left
-4 - moves with keyboard no matter what
*/

var levels = [ 
	{
		sizeX: 10,
		sizeY: 10,
		startX: 1,
		startY: 8,
		tiles: [
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 2, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1,-1, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		],
		tip: "Use arrows to move...",
	},
	{
		sizeX: 10,
		sizeY: 10,
		startX: 1,
		startY: 8,
		tiles: [
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 2, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 3, 3, 3, 3, 3, 3, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1,-1, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		],
		tip: "Be careful...",
	},
	{
		sizeX: 10,
		sizeY: 10,
		startX: 1,
		startY: 8,
		tiles: [
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 2, 1],
		[1,-1, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 3, 3, 3, 3, 3, 3, 3, 3, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1,-1, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		],
		tip: "Trolololo - try hitting space.",
	},
	{
		sizeX: 10,
		sizeY: 10,
		startX: 1,
		startY: 8,
		tiles: [
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 2, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1,-2, 0, 0, 0, 0, 0, 0, 3, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1,-1, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		],
		tip: "Sometimes they have a mind of their own...",
	},
	{
		sizeX: 10,
		sizeY: 10,
		startX: 1,
		startY: 8,
		tiles: [
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 2, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1,-1, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 3, 0, 0, 0, 0, 0, 0, 0, 1],
		[1,-3, 0, 0, 0, 0, 0, 0, 3, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		],
		tip: "You can be fast or clever...",
	},
	{
		sizeX: 10,
		sizeY: 10,
		startX: 1,
		startY: 8,
		tiles: [
		[1, 1, 1, 1, 1, 1, 3, 3, 3, 3],
		[1, 3, 3, 3, 3, 3, 0, 0, 0, 3],
		[1, 3, 3, 3, 3, 3, 0, 0, 0, 3],
		[1, 2, 0, 0, 0, 3, 0, 0, 0, 3],
		[1, 0, 0, 0, 0, 3, 0, 0, 0, 3],
		[1, 0, 0, 0, 0, 3, 0, 0, 0, 3],
		[1, 0, 0, 0, 0, 3, 0, 0, 0, 3],
		[1, 3, 3, 0, 0, 3, 0, 3, 3, 3],
		[1,-1, 0, 0, 0, 3,-4, 0, 0, 3],
		[1, 1, 1, 1, 1, 3, 3, 3, 3, 3],
		],
		tip: "No, this isn't a bug - take some time to figure out what's going on here...",
	},
	{
		sizeX: 10,
		sizeY: 10,
		startX: 1,
		startY: 6,
		tiles: [
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 2, 2, 2, 2, 3, 3, 3, 3, 1],
		[1, 2, 2, 2, 2, 3, 3, 3, 3, 1],
		[1, 2, 2, 2, 2, 3, 3, 3, 3, 1],
		[1, 2, 2, 2, 2, 3, 3, 0, 3, 1],
		[1, 0, 0, 0, 0, 3, 3, 0, 3, 1],
		[1,-1, 0, 0, 0, 3,-4, 0, 3, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1,-2, 0, 0, 0, 0, 0, 0, 3, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		],
		tip: ":)",
	},
	{
		sizeX: 10,
		sizeY: 10,
		startX: 1,
		startY: 8,
		tiles: [
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 2, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1,20, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1,-1, 0,-1,10, 0, 0, 0, 0, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		],
		tip: "There's nothing like teamwork!",
	},
	{
		sizeX: 14,
		sizeY: 10,
		startX: 1,
		startY: 8,
		tiles: [
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 2, 0, 0, 1, 0, 0, 0,-1, 1, 0, 0, 0, 1],
		[1, 0, 0, 0, 1, 0, 0, 0, 0,21, 0, 0, 0, 1],
		[1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
		[1, 0, 0, 0, 1,14, 0, 0,11, 1, 0, 0, 0, 1],
		[1,20, 1, 1, 1, 1,24, 1, 1, 1, 1,23, 1, 1],
		[1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
		[1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
		[1,-1, 0,13, 1, 0, 0, 0,10, 1, 0,-1, 0, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		],
		tip: "Guess-and-check!",
	},
	{
		sizeX: 10,
		sizeY: 10,
		startX: 2,
		startY: 8,
		tiles: [
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1,10,10, 1, 3, 1, 0, 0, 2, 1],
		[1, 0, 0, 3, 3, 1, 0, 0, 0, 1],
		[1, 0, 0, 0, 3, 1, 0, 0, 0, 1],
		[1, 0, 0, 0, 3, 1, 0, 0, 0, 1],
		[1, 3, 0, 0, 3, 1, 0, 0, 0, 1],
		[1,-1, 0, 0, 3, 1, 0, 0, 0, 1],
		[1, 1, 1, 1, 1, 1,20, 1, 1, 1],
		[1, 3,-3, 0, 0, 0, 0, 0, 0, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		],
		tip: "Sorry, the bouncing is here to stay.",
	},
	{
		sizeX: 14,
		sizeY: 10,
		startX: 4,
		startY: 6,
		tiles: [
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1,11, 0, 0,14, 0,15, 0, 0, 1, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1,12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1,13, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
		[1, 0, 0, 0,-1, 0, 0, 0,24,-3, 0,25, 3, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 3,21,-3, 0, 0, 0, 0,22, 0,23, 0, 2, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		],
		tip: "Did I say guess-and-check before? Sorry - that was kind of offensive.",
	},

]
