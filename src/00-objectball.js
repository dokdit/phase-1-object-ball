function gameObject(){
   let home = {"teamName":"Brooklyn Nets","colors":["black","white"],"players":{
    "Alan Anderson":{"number":0,"shoe":16,"points":22,"rebounds":12,"assists":12,"steals":3,"blocks":1,"slamDunks":1},
   "Reggie Evans":{"number":30,"shoe":14,"points":12,"rebounds":12,"assists":12,"steals":12,"blocks":12,"slamDunks":7},
   "Brook Lopez":{"number":11,"shoe":17,"points":17,"rebounds":19,"assists":10,"steals":3,"blocks":1,"slamDunks":15},
   "Mason Plumlee":{"number":1,"shoe":19,"points":26,"rebounds":12,"assists":6,"steals":3,"blocks":8,"slamDunks":5},
    "Jason Terry":{"number":31,"shoe":15,"points":19,"rebounds":2,"assists":2,"steals":4,"blocks":11,"slamDunks":1}}}
   let away = {"teamName":"Charlotte Hornets","colors":["turquoise","purple"],"players":{
    "Jeff Adrien":{"number":4,"shoe":18,"points":10,"rebounds":1,"assists":1,"steals":2,"blocks":7,"slamDunks":2},
   "Bismak Biyombo":{"number":0,"shoe":16,"points":12,"rebounds":4,"assists":7,"steals":7,"blocks":15,"slamDunks":10},
   "DeSagna Diop":{"number":2,"shoe":14,"points":24,"rebounds":12,"assists":12,"steals":4,"blocks":5,"slamDunks":5},
   "Ben Gordon":{"number":8,"shoe":15,"points":33,"rebounds":3,"assists":2,"steals":1,"blocks":1,"slamDunks":0},
    "Brendan Haywood":{"number":33,"shoe":15,"points":6,"rebounds":12,"assists":12,"steals":22,"blocks":5,"slamDunks":12}}}
   return {"home":home,"away":away}
}
game = gameObject()

function numPointsScored(playerName){
    for (let gameKey in game){
        let teamObj = game[gameKey]
        for(let playerlist in teamObj){
            if (playerlist==='players'){
                for (let player in teamObj[playerlist]){
                    if (player === playerName){
                        return teamObj[playerlist][playerName]['points']} 
                }                       
            }            
        }
    }
}

function shoeSize(playerName){
    for (let gameKey in game){
        let teamObj = game[gameKey]
        for(let playerlist in teamObj){
            if (playerlist==='players'){
                for (let player in teamObj[playerlist]){
                    if (player === playerName){
                        return teamObj[playerlist][playerName]['shoe']} 
                }                       
            }            
        }
    }
}

function teamColors(teamName){
    for (let gameKey in game){
        let teamObj = game[gameKey]
        for(let item in teamObj){
            if(teamObj[item]==teamName){
                return teamObj['colors']
            }
        }
    }
}

function teamNames(){
    let teamNames = []
    for (let gameKey in game){
            teamNames.unshift(game[gameKey]['teamName'])
        }
    return teamNames
}

function playerNumbers(teamName){
    let playersNumbers = []
    for (let gameKey in game){
        let teamObj = game[gameKey]
        if(teamName==teamObj['teamName']){
            for(let player in teamObj['players']){
                playersNumbers.push(teamObj['players'][player]['number'])
            }
        }
    }return playersNumbers
}

function playerStats(playerName){
    for (let gameKey in game){
        let teamObj = game[gameKey]
        for(let playerlist in teamObj){
            if (playerlist==='players'){
                for (let player in teamObj[playerlist]){
                    if (player === playerName){
                        return teamObj[playerlist][playerName]} 
                    else{continue}
                }                       
            }            
        }
    }
}

function bigShoeRebounds(){
    let rebounds = 0
    let bigShoe = 0
    for (let gameKey in game){
        let teamObj = game[gameKey]
        for(let item in teamObj){
            if (item==='players'){
                for (let player in teamObj[item]){
                    if (teamObj[item][player]['shoe']>bigShoe){
                        bigShoe=teamObj[item][player]['player']
                        rebounds = teamObj[item][player]['rebounds']
                    }
                }                       
            }            
        }
    }return rebounds
}

function mostPointsScored(){
    let points = 0
    let goat = 0
    for (let gameKey in game){
        let teamObj = game[gameKey]
        for(let item in teamObj){
            if (item==='players'){
                for (let player in teamObj[item]){
                    if (teamObj[item][player]['points']>points){
                        goat=player
                        points = teamObj[item][player]['points']
                    }
                }                       
            }            
        }
    }return goat
}

function winningTeam(){
    let homePoints = 0
    let awayPoints = 0
    for (let gameKey in game){
        console.log(gameKey)
        let teamObj = game[gameKey]
        for(let item in teamObj){
            if (item==='players'){
                for (let player in teamObj[item]){
                    if(gameKey === 'home'){
                        homePoints += teamObj[item][player]['points']
                    } 
                    else{
                        awayPoints += teamObj[item][player]['points']
                    }                     
            }            
        }}
    }
    if ((homePoints-awayPoints)>0){
        return game['home']['teamName']
    }
    return game['away']['teamName']
}


function playerWithLongestName(){
    let longestName = ""
    for (let gameKey in game){
        let teamObj = game[gameKey]
        for(let item in teamObj){
            if (item==='players'){
                for (let player in teamObj[item]){
                    if (player.length>longestName.length){
                        longestName = player
                    }else{continue}
                }                       
            }            
        }
    }return longestName
}

function doesLongNameStealATon(){
    let longestName  = playerWithLongestName()
    let mostSteals = 0
    let stealGoat = longestName
    for (let gameKey in game){
        let teamObj = game[gameKey]
        for(let item in teamObj){
            if (item==='players'){
                for (let player in teamObj[item]){
                    if (teamObj[item][player]['steals']>mostSteals){
                        stealGoat=player
                        mostSteals = teamObj[item][player]['steals']
                    }
                }                       
            }            
        }
    }return (longestName===stealGoat)
}
//console.log(mostPointsScored())
//console.log(bigShoeRebounds())
console.log(doesLongNameStealATon())