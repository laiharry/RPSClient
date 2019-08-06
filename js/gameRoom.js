// JavaScript Document

class Player {
	constructor(nickname) {
	this.nickname = nickname;
	}

	getNickname() {
		return this.nickname;
	};
}

module.exports = Player;

class PlayRoom {
	constructor(name) {
	this.name = name;
	this.players = [];
	}

	joinRoom(player) {
		this.players.push(player);
	};
	
	leaveRoom(player) {
		this.players.splice($.inArray(player, this.players),1);
	};
	
	inRoom(player)  {
		return $.inArray(player, this.players);
	};
	
	playerList() {
		return this.players;
	}
}

module.exports = PlayRoom;
