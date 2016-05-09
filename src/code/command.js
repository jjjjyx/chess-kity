var Command = kity.createClass( "Command", {
	constructor: function () {
		this._isContentChange = true;
		this._isSelectionChange = false;
	},

	execute: function ( chess, args ) {

	},

	setContentChanged: function ( val ) {
		this._isContentChange = !! val;
	},

	isContentChanged: function () {
		return this._isContentChange;
	},

	setSelectionChanged: function ( val ) {
		this._isSelectionChange = !! val;
	},

	isSelectionChanged: function () {
		return this._isContentChange;
	},

	queryState: function ( km ) {
		return 0;
	},

	queryValue: function ( km ) {
		return 0;
	},
	isNeedUndo: function () {
		return true;
	}
} );

kity.extendClass(Chess, {
    _getCommand: function (name) {
        return this._commands[name.toLowerCase()];
    },

    _queryCommand: function (name, type, args) {
        var cmd = this._getCommand(name);
        //console.log(cmd);
        if (cmd) {
            var queryCmd = cmd['query' + type];
            if (queryCmd)
                return queryCmd.apply(cmd, [this].concat(args));
        }
        return 0;
    },

    queryCommandState: function (name) {
        return this._queryCommand(name, "State", Utils.argsToArray(1));
    },

    queryCommandValue: function (name) {
        return this._queryCommand(name, "Value", Utils.argsToArray(1));
    },

    execCommand: function (name) {
        name = name.toLowerCase();

        var cmdArgs = Utils.argsToArray(arguments, 1),
            cmd, stoped, result, eventParams;
        var me = this;
        cmd = this._getCommand(name);

        eventParams = {
            command: cmd,
            commandName: name.toLowerCase(),
            commandArgs: cmdArgs
        };
        if (!cmd || !~this.queryCommandState(name)) {
            return false;
        }
        this._fire(new ChessEvent('execCommand', eventParams, false));
        result = cmd.execute.apply(cmd, [me].concat(cmdArgs));

        if (!this._hasEnterExecCommand) {
            this._interactChange();
        }
        return result === undefined ? null : result;
    }
});