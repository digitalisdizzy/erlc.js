/**
 * Types of account verification.
 * @typedef {Object} AccountVerificationType
 * @property {string} None Account verification is disabled
 * @property {string} Email Email verification is required
 * @property {string} Phone Phone verification is required
 * @property {string} Over17ID Photo ID verification is required, and the user must be over 17
 */


/**
 * @type {AccountVerificationType}
 * @readonly
 */
const AccountVerificationType = {
    None: "Disabled",
    Email: "Email",
    Phone: "Phone",
    Over17ID: "ID"
}

/**
 * Types of account verification.
 * @typedef {Object} UserPermissionType
 * @property {string} None No special permissions
 * @property {string} Moderator Moderator permissions
 * @property {string} Administrator Administrator permissions
 * @property {string} Owner Owner of the server
 */


/**
 * @type {UserPermissionType}
 * @readonly
 */
const UserPermissionType = {
    None: "Normal",
    Moderator: "Server Moderator",
    Administrator: "Server Administrator",
    Owner: "Server Owner"
}

/**
 * Types of account verification.
 * @typedef {Object} Team
 * @property {string} Civilian Civilian team
 * @property {string} LEO1 Police Team
 * @property {string} LEO2 Sheriff Team
 * @property {string} FireRescue Fire & Rescue and EMS Team
 * @property {string} DepartmentOfTransportation Department of Transportation Team
 */


/**
 * @type {Team}
 * @readonly
 */
const Team = {
    Civilian: "Civilian",
    LEO1: "Police",
    LEO2: "Sheriff",
    FireRescue: "Fire",
    DepartmentOfTransportation: "DOT"
}

/**
 * Error statuses that may be returned from an API request
 * @typedef {Object} HttpStatus
 * @property {number} BadRequest 400: The request wasn't in the format the server requested.
 * @property {number} Unauthorised 401: The client isn't authorised to make the request.
 * @property {number} PaymentRequired 402: Payment is required to make the request. Very rarely used and meaning may change in the future.
 * @property {number} Forbidden 403: The client is forbidden from making this request. Usually means that the Server key has been regenerated. Once this message has been received, you should cease to use this Server immediately in order to comply with the PRC API Guidelines.
 * @property {number} NotFound 404: The content requested doesn't exist.
 * @property {number} MethodNotAllowed 405: This method (GET, POST, HEAD, etc.) is not allowed on this endpoint.
 * @property {number} NotAcceptable 406
 * @property {number} ProxyAuthenticationRequired 407
 * @property {number} Timeout 408: The server wants to shutdown the connection since it is unused.
 * @property {number} Conflict 409: There is a conflict with the current state of the server.
 * @property {number} Gone 410: This content no longer exists.
 * @property {number} ContentLengthRequired 411: The request requires the "Content-Length" header but it was not given.
 * @property {number} PreconditionFailed 412
 * @property {number} PayloadTooLarge 413: The request entity is too large.
 * @property {number} URITooLong 414: The URI (or URL) is too large to process.
 * @property {number} UnsupportedMediaType 415: The media format is not supported by the server.
 * @property {number} RangeNotSatisfiable 416
 * @property {number} ExpectationFailed 417
 * @property {number} Teapot 418: The server refuses to brew coffee with a teapot.
 * @property {number} MisdirectedRequest 421
 * @property {number} UnproccessableEntity 422: The entity given cannot be proccessed. Usually given if a command is sent to an empty Server.
 * @property {number} Locked 423
 * @property {number} FailedDependency 424
 * @property {number} TooEarly 425: The server doesn't want to proccess a request that may be replayed.
 * @property {number} UpgradeRequired 426
 * @property {number} PreconditionRequired 428
 * @property {number} Ratelimited 429: The server is getting too many requests from the client and has ratelimited it. Continuing to make requests whilst ratelimited may cause a temporary ban from the API.
 * @property {number} HeaderFieldsTooLarge 431
 * @property {number} Legal 451: This content is unavailable for legal reasons, such as government censorship.
 * @property {number} InternalServerError 500: An internal server error has occured and the server cannot process the request. If this continues, check the Roblox Status.
 * @property {number} NotImplemented 501
 * @property {number} BadGateway 502
 * @property {number} ServiceUnavailable 503: The API is currently unavailable.
 * @property {number} GatewayTimeout 504
 * @property {number} HTTPVersionNotSupported 505
 * @property {number} VariantAlsoNegotiates 506
 * @property {number} InsufficientStorage 507
 * @property {number} LoopDetected 508: An infinite loop was detected whilst processing the request.
 * @property {number} NotExtended 510
 * @property {number} NetworkAuthenticationRequired 511
 */


/**
 * @type {HttpStatus}
 * @readonly
 */
const HttpStatus = {
    "BadRequest": 400,
    "Unauthorised": 401,
    "PaymentRequired": 402,
    "Forbidden": 403,
    "NotFound": 404,
    "MethodNotAllowed": 405,
    "NotAcceptable": 406,
    "ProxyAuthenticationRequired": 407,
    "Timeout": 408,
    "Conflict": 409,
    "Gone": 410,
    "ContentLengthRequired": 411,
    "PreconditionFailed": 412,
    "PayloadTooLarge": 413,
    "URITooLong": 414,
    "UnsupportedMediaType": 415,
    "RangeNotSatisfiable": 416,
    "ExpectationFailed": 417,
    "Teapot": 418,
    "MisdirectedRequest": 421,
    "UnproccessableEntity": 422,
    "Locked": 423,
    "FailedDependency": 424,
    "TooEarly": 425,
    "UpgradeRequired": 426,
    "PreconditionRequired": 428,
    "Ratelimited": 429,
    "HeaderFieldsTooLarge": 431,
    "Legal": 451,
    "InternalServerError": 500,
    "NotImplemented": 501,
    "BadGateway": 502,
    "ServiceUnavailable": 503,
    "GatewayTimeout": 504,
    "HTTPVersionNotSupported": 505,
    "VariantAlsoNegotiates": 506,
    "InsufficientStorage": 507,
    "LoopDetected": 508,
    "NotExtended": 510,
    "NetworkAuthenticationRequired": 511
}

const commandsThatAllowSpacesInArgs = [
    "log",
    "h",
    "hint",
    "m",
    "message" // excludes 'pm' purposefully
]

const statusCodesToHumanReadableMessages = {
    400: "The request wasn't in the format the server requested.",
    403: "You aren't allowed to make this request. If using your own server key, check it is correct. If using somebody else's server key, it has likely been regenerated and you should immediately cease making requests using this Server to comply with PRC API Guidelines.",
    404: "Endpoint not found. It may be temporarily down or might not exist. Double check the endpoint exists.",
    405: "This endpoint does not  allow this method (GET, POST, HEAD, etc.). Check you are using the correct method.",
    410: "This endpoint is permenantly deleted.",
    413: "The payload given is too large and the server refuses to process it.",
    418: "The server refuses to brew coffee with a teapot. This usually occurs when the server doesn't want to process this request. See more information here: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/418",
    422: "The request entity cannot be proccessed. This usually occurs when you attempt to send a command to an empty Server.",
    429: "You are being ratelimited. Respect the retryAfter property of the APIError or you risk a temporary ban from the API.",
    500: "Internal server error, you usually can't do anything to fix this and have to wait for the issue to be resolved. Retry the request. If you repeatedly get this error code, check the Roblox status.",
    503: "The PRC API is unavailable.",
    508: "The server detected an infinite loop whilst processing your request and shutdown the request to prevent any problems from occuring."
}

/**
 * An object containing information about an API error
 * @property {number} status The HTTP status for this response
 * @property {string} humanReadableMessage A human readable message for this error. It is recommended not to share this with the user
 * @property {number|null} retryAfter How long to wait before retrying the request. Null if not given by server.
 * @property {Response} responseObject The Response object of the request that returned this error.
 */
class APIError{
    /**
     * Create an APIError object.
     * @param {Response} response The API response
     */
    constructor(response){
        this.status = response.status
        this.humanReadableMessage = statusCodesToHumanReadableMessages[response.status] || `An error occured. See the Mozilla Documentation for this error code: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/${response.status}`
        this.retryAfter = response.headers.get("Retry-After") * 1000000 || null
        this.responseObject = response
    }
}

/**
 * A Roblox user
 * @property {string} id The Roblox user ID of the User
 * @property {string} name The Roblox username of the User
 * @property {string} displayName The Roblox display name of the User
 * @property {string} aboutMe The 'About Me' section of the User's profile
 * @property {Date} accountCreated The time the User's account was created
 * @property {boolean} robloxVerified Whether the User has the Roblox verified badge
 * @property {boolean} robloxBanned Whether the User's Roblox account is terminated
 */
class User{
    /**
     * Create a User object
     * @param {string} userID The Roblox user ID of the User
     * @param {string} username The Roblox username of the User
     * @param {string} displayName The Roblox display name of the User
     * @param {string} description The 'About Me' section of the User's profile
     * @param {number} accountCreatedUnix The time the User's account was created in Unix format
     * @param {boolean} isVerified Whether the User has the Roblox verified badge
     * @param {boolean} isBanned Whether the User's Roblox account is terminated
     */
    constructor(userID, username, displayName, description, accountCreatedUnix, isVerified, isBanned){
        this.id = userID
        this.name = username
        this.displayName = displayName,
        this.aboutMe = description,
        this.accountCreated = new Date(accountCreatedUnix),
        this.robloxVerified = isVerified,
        this.robloxBanned = isBanned
    }

    /**
     * Ban the User from the specified Server
     * @param {Server} server The Server to ban the User from
     */
    ban(server){
        server.sendCommand("ban", [this.id])
    }
}

/**
 * Get a User object from a user ID
 * @param {string} userID The user ID of the User
 * @returns {User}
 */
function getUserFromUserID(userID){
    fetch(`https://users.roblox.com/v1/${userID}`).then(response => response.json()).then(data => {
        const accountCreatedConverted = new Date(data.created).getTime() / 1000;
        return new User(data.id, data.name, data.displayName, data.description, accountCreatedConverted, data.hasVerifiedBadge, data.isBanned)
    })
}

/**
 * A player on the Server
 * @property {string} username The username of the Player
 * @property {string} userID The Roblox user ID of the Player
 * @property {Server} server The Server object the user is playing on
 * @property {string} permissions The permissions the Player has
 * @property {string} team The team the Player is on
 * @property {string} callsign The callsign of the Player (null if not on a team)
 */
class Player{
    /**
     * Create a Player object.
     * @param {string} username The username of the Player
     * @param {string} userID The Roblox user ID of the Player
     * @param {Server} server The Server object the user is playing/played on
     * @param {string} permission The permissions the player has
     * @param {string} team The team the Player is on
     * @param {string} callsign The callsign of the Player (null if not on a team)
     */
    constructor(username, userID, server, permission, team, callsign){
        this.username = username
        this.userID = userID
        this.server = server
        this.permissions = permission
        this.team = team
        this.callsign = callsign || null
    }

    kick(reason){
        this.server.sendCommand("kick", [this.username, reason || "No reason specified."])
    }

    ban(){
        this.server.sendCommand("ban", [this.userID])
    }

    getUser(){
        return new Promise(function(success, errormessage){
            fetch(`https://users.roblox.com/v1/${this.userID}`).then(response => response.json()).then(data => {
                const accountCreatedConverted = new Date(data.created).getTime() / 1000;
                return new User(data.id, data.name, data.displayName, data.description, accountCreatedConverted, data.hasVerifiedBadge, data.isBanned)
            })
        }.bind(this))
    }
}

/**
 * @typedef {object} ResponseCache
 * @property {JoinLog[]|null} joinLogs
 * @property {Player[]|null} players
 * @property {string[]|null} queue
 * @property {Vehicle[]|null} vehicles
 * @property {ModerationLog[]|null} moderationLogs
 * @property {ModerationLog[]|null} customLogs
 * @property {KillLog[]|null} killLogs
 * @property {ModeratorCall[]|null} moderatorCalls
 * @property {BannedPlayer[]|null} bannedUsers
 */

/**
 * An ER:LC private server
 * @property {string} serverKey The server's API key
 * @property {string|null} authorizationKey The production API key (null if not provided)
 * @property {string|null} name The name of the Server (null if uninitiated)
 * @property {string|null} ownerID The user ID of the private server owner (null if uninitiated)
 * @property {string[]|null} coOwnerIDs An array of the user ID(s) of the server's co-owner(s) (null if uninitiated)
 * @property {string|null} joinCode The code used to join the server (null if uninitiated)
 * @property {string|null} verificationType The level of verification required to join the server (null if uninitiated)
 * @property {boolean|null} teamBalanceEnabled If team balance is enabled (null if uninitiated)
 * @property {ResponseCache} cache An object of the last responses from the API
 */
class Server{
    /**
     * Create a Server object
     * @param {string} key The server API key
     * @param {string} [authorizationKey] The authorization key, needed if you're using this for production (optional)
     * @returns {Server}
     */
    constructor(key, authorizationKey){
        if(!key){
            console.error("Server key is required, but no key was provided")
            return
        }
        this.serverKey = key
        this.authorizationKey = authorizationKey
        this.initiated = false

        this.name = null;
        this.ownerID = null;
        this.coOwnerIDs = null;
        this.joinCode = null;
        this.verificationType = null;
        this.teamBalanceEnabled = null;
        this.initiated = false

        let cache = {}

        cache.joinLogs = null
        cache.players = null
        cache.queue = null
        cache.vehicles = null
        cache.moderationLogs = null
        cache.customLogs = null
        cache.killLogs = null
        cache.moderatorCalls = null
        cache.bannedUsers = null

        this.cache = cache
    }

    /**
    * Initiate this server.
    * @returns {Promise<Server>} The server that was initiated.
    * @throws {APIError}
    * @example
    * const privateServer = new Server()
    * await privateServer.initiate()
    */
    initiate(){
        return new Promise(function(success, errormessage){
            let headers = {
                "Server-Key": this.serverKey,
                "Content-Type": "application/json"
            };
            if (this.authorizationKey) {
                headers["Authorization"] = this.authorizationKey;
            }
            fetch("https://api.policeroleplay.community/v1/server", {
                method: "GET",
                headers: headers
            }).then(serverResponse => serverResponse.json().then(serverData => {
                // Update class properties
                success(this);
                if(serverResponse.ok){
                    this.name = serverData.Name;
                    this.ownerID = serverData.OwnerId;
                    this.coOwnerIDs = serverData.CoOwnerIds;
                    this.joinCode = serverData.JoinKey;
                    this.verificationType = serverData.AccVerifiedReq;
                    this.teamBalanceEnabled = serverData.TeamBalance;
                    this.initiated = true;
                    if(!this.authorizationKey){
                        console.log("--------------------")
                        console.log("\x1b[31m%s\x1b[0m", "Missing authorization key!")
                        console.log("This should be used for development only! Request an Authorization key before using in production.")
                        console.log("--------------------")
                    }
                } else {
                    errormessage(new APIError(serverResponse))
                }
            })).catch(error => {
                errormessage(error);
            });
        }.bind(this));
    }

    /**
    * Make a request to the PRC API related to this Server.
    * @param {string} endpoint The endpoint to make the request to
    * @param {string} method The method used in the request. Accepts all request types specified in the Mozilla Docs.
    * @param {number} version The API version. Defaults to '1'.
    * @param {object} data The JSON data to be sent with the request
    * @returns {Promise<Response>}
    * @throws {APIError}
    * @example
     * const privateServer = new Server()
     * await privateServer.initiate()
     * // Sends the command ":m Hello World!" to the Server
     * await privateServer.makeRequest(
     *      "/server/command",
     *      method: "POST",
     *      1,
     *      {command: ":m Hello World!"}
     * )
    */
    makeRequest(endpoint, method, version, data){
        return new Promise(function(success, errormessage){
            data = data || 1
            method = method || "GET"
            version = version || 1
            let headers = {
                "Server-Key": this.serverKey,
                "Content-Type": "application/json"
            }
            if(this.authorizationKey){
                headers["Authorization"] = this.authorizationKey
            }
            if(method == "GET" || method == "HEAD"){
                fetch(`https://api.policeroleplay.community/v${version}${endpoint}`, {
                    method: method,
                    headers: headers
                }).then(response => {
                    if(response.ok){
                        success(response)
                    } else {
                        errormessage(new APIError(response))
                    }
                }).catch(e => {
                    errormessage(new APIError(response))
                })
            } else {
                fetch(`https://api.policeroleplay.community/v${version}${endpoint}`, {
                    method: method,
                    headers: headers,
                    body: JSON.stringify(data)
                }).then(response => {
                    if(response.ok){
                        success(response)
                    } else {
                        errormessage(new APIError(response))
                    }
                }).catch(e => {
                    errormessage(new APIError(response))
                })
            }
        }.bind(this))
    }

    /**
     * @typedef {Object} JoinLog A log of a join
     * @property {string} username The username of the player who joined
     * @property {string} userID The user ID of the player who joined
     * @property {Date} date A Date of when the player joined
     * @property {boolean} type The type of JoinLog
     */

    /**
     * Get the join logs of the Server
     * @returns {JoinLog[]}
     * @throws {APIError}
     */
    getJoinLogs(){
        return new Promise(function(success, errormessage){
            this.makeRequest("/server/joinlogs", "GET").then(joinLogsResponse => joinLogsResponse.json()).then(joinLogsData => {
                let newJoinLogs = []
                for(let i=0; i<joinLogsData.length; i++){
                    let joinLog = {}
                    joinLog.username = joinLogsData[i].Player.split(":")[0]
                    joinLog.userID = joinLogsData[i].Player.split(":")[1]
                    joinLog.date = new Date(joinLogsData[i].Timestamp * 1000)
                    joinLog.type = joinLogsData[i].Join
                    
                    newJoinLogs.push(joinLog)
                }
                this.cache.joinLogs = newJoinLogs
                success(newJoinLogs)
            }).catch(error => {
                errormessage(error)
            })
        }.bind(this))
    }

    /**
     * Get all Players in the Server
     * @returns {Promise<Player[]>} List of all online Players.
     * @throws {APIError}
     * @example
     * const privateServer = new Server()
     * await privateServer.initiate()
     * await privateServer.getPlayers()
     */
    getPlayers(){
        return new Promise(function(success, errormessage){
            this.makeRequest("/server/players").then(response => response.json().then(data => {
                let newPlayers = []
                for(let i=0; i<data.length; i++){
                    let player = new Player(data[i].Player.split(":")[0], data[i].Player.split(":")[1], this, data[i].Permission, data[i].Team, data[i].Callsign)
                    newPlayers.push(player)
                }
                this.cache.players = newPlayers
                success(newPlayers)
            })).catch(error => {
                errormessage(error)
            })
        }.bind(this))
    }

    /**
     * Get all players in the Server's queue by user ID
     * @returns {Promise<string[]>} List of all online Players.
     * @throws {APIError}
     * @example
     * const privateServer = new Server()
     * await privateServer.initiate()
     * await privateServer.getQueue()
     */
    getQueue(){
        return new Promise(function(success, errormessage){
            this.makeRequest("/server/queue").then(response => response.json().then(data => {
                success(data)
                this.cache.joinLogs = data
            })).catch(error => {
                errormessage(error)
            })
        }.bind(this))
    }

    /**
     * @typedef {Object} Vehicle An in-game vehicle
     * @property {string} name The name of the Vehicle
     * @property {string} ownerUsername The username of the Vehicle owner
     * @property {string} livery The name of the livery of the Vehicle
     */

    /**
     * Get a list of the spawned vehicles in the Server
     * @returns {Vehicle[]}
     * @throws {APIError}
     */
    getSpawnedVehicles(){
        return new Promise(function(success, errormessage){
            this.makeRequest("/server/vehicles").then(response => response.json().then(data => {
                let newVehicles = []
                for(let i=0; i<data.length; i++){
                    let vehicle = {}
                    vehicle.name = data[i].Name
                    vehicle.ownerUsername = data[i].Owner
                    vehicle.livery = data[i].Texture || null

                    newVehicles.push(vehicle)
                }
                this.cache.vehicles = newVehicles
                success(newVehicles)
            }).catch(error => {
                errormessage(error)
            }))
        }.bind(this))
    }

    /**
     * @typedef {Object} ModerationLog A log of a command
     * @property {string} command The command used (excluding the ':')
     * @property {string[]} args An array of arguments used with the command
     * @property {string} moderatorUsername The username of the moderator that executed the command
     * @property {string} moderatorUserID The user ID of the moderator that executed the command
     * @property {Date} date A Date object of when the command was executed
     */

    /**
     * Get the moderation logs of this Server
     * @returns {Promise<ModerationLog[]>}
     * @throws {APIError}
     * @example
     * const privateServer = new Server()
     * await privateServer.initiate()
     * await privateServer.getModerationLogs()
     * @example
     * // An example response
     * [
     *      {
     *          fullCommand: ":kick builderman",
     *          command: "kick",
     *          args: ["builderman"],
     *          moderatorUsername: "david.baszucki",
     *          moderatorUserID: "987654321",
     *          date: "2006-09-01T12:00:00.000Z"
     *      }
     * ]
     */

    getModerationLogs(){
        return new Promise(function(success, errormessage){
            this.makeRequest("/server/commandlogs").then(response => response.json()).then(data => {
                let newModLogs = []
                for(let i=0; i < data.length; i++){
                    let modLog = {}
                    modLog.fullCommand = data[i].Command
                    let newCommand = data[i].Command.split(" ")
                    modLog.command = newCommand[0].slice(1)
                    newCommand.shift()
                    if(commandsThatAllowSpacesInArgs.includes(modLog.command)) newCommand = [newCommand.join(" ")]; else if(modLog.command == "pm" || modLog.command == "privatemessage"){
                        const player = newCommand.shift()
                        newCommand = [player, newCommand.join(" ")]
                    }
                    modLog.args = newCommand
                    modLog.moderatorUsername = data[i].Player.split(":")[0]
                    modLog.moderatorUserID = data[i].Player.split(":")[1]
                    modLog.date = new Date(data[i].Timestamp * 1000)
                    newModLogs.push(modLog)
                }
                this.cache.customLogs = newModLogs.filter(item => item.command === "log")
                this.cache.moderationLogs = newModLogs
                success(newModLogs)
            }).catch(error => {
                errormessage(error)
            })
        }.bind(this))
    }

    /**
     * Get the custom logs of this server (sent with :log)
     * @returns {Promise<ModerationLog[]>}
     * @throws {APIError}
     * @example
     * const privateServer = new Server()
     * await privateServer.initiate()
     * await privateServer.getCustomLogs()
     * @example
     * // An example response
     * [
     *      {
     *          fullCommand: ":log Warned builderman for impersonating a construction worker.",
     *          command: "log", // Will always equal 'log'
     *          args: ["Warned builderman for impersonating a construction worker."],
     *          moderatorUsername: "david.baszucki",
     *          moderatorUserID: "987654321",
     *          date: "2006-09-01T12:00:00.000Z"
     *      }
     * ]
     */
    getCustomLogs(){
        return new Promise(function(success, errormessage){
            this.makeRequest("/server/commandlogs").then(response => response.json()).then(data => {
                let newModLogs = []
                for(let i=0; i < data.length; i++){
                    let modLog = {}
                    modLog.fullCommand = data[i].Command
                    let newCommand = data[i].Command.split(" ")
                    modLog.command = newCommand[0].slice(1)
                    newCommand.shift()
                    modLog.args = [newCommand.join(" ")]
                    modLog.moderatorUsername = data[i].Player.split(":")[0]
                    modLog.moderatorUserID = data[i].Player.split(":")[1]
                    modLog.date = new Date(data[i].Timestamp * 1000)
                    newModLogs.push(modLog)
                }
                this.cache.customLogs = newModLogs.filter(item => item.command === "log")
                this.cache.moderationLogs = newModLogs
                success(newModLogs.filter(item => item.command === "log"))
            }).catch(error => {
                errormessage(error)
            })
        }.bind(this))
    }

    /**
     * Send a custom log to this Server
     * @param {string} text The text to log
     * @returns {Promise<Response>} The fetch response from the server
     * @throws {APIError}
     * @example
     * // sends 'Hello World!' to the server logs
     * const privateServer = new Server()
     * await privateServer.initiate()
     * await privateServer.sendLog("Hello World!")
     */
    sendLog(text) {
        return new Promise(function(success, errormessage) {
            this.makeRequest("/server/command", "POST", 1, {
                command: ":log " + text.toString()
            }).then(response => {
                success(response);
            }).catch(error => {
                errormessage(error);
            });
        }.bind(this));
    }

    /**
     * @typedef {Object} KillLog A log of a kill
     * @property {string} killedUsername The username of the killed player
     * @property {string} killedUserID The user ID of the killed player
     * @property {string} killerUsername The username of the killer
     * @property {string} killerUserID The user ID of the killer
     * @property {Date} date A Date object of when the killed user died
     */

    /**
     * Get the kill logs of this Server
     * @returns {Promise<KillLog[]>}
     * @throws {APIError}
     * @example
     * const privateServer = new Server()
     * await privateServer.initiate()
     * await privateServer.getKillLogs()
     * @example
     * // An example response
     * [
     *      {
     *          killedUsername: "builderman",
     *          killedUserID: "123456789",
     *          killerUsername: "david.baszucki",
     *          killerUserID: "987654321",
     *          date: "2006-09-01T12:00:00.000Z"
     *      }
     * ]
     */
    getKillLogs(){
        return new Promise(function(success, errormessage){
            this.makeRequest("/server/killlogs").then(response => response.json()).then(data => {
                let newKillLogs = []
                for(let i=0; i < data.length; i++){
                    let killLog = {}
                    killLog.killedUsername = data[i].Killed.split(":")[0]
                    killLog.killedUserID = data[i].Killed.split(":")[1]
                    killLog.killerUsername = data[i].Killer.split(":")[0]
                    killLog.killerUserID = data[i].Killer.split(":")[1]
                    killLog.date = new Date(data[i].Timestamp)
                    newKillLogs.push(killLog)
                }
                this.cache.killLogs = newKillLogs
                success(newKillLogs)
            }).catch(error => {
                errormessage(error)
            })
        }.bind(this))
    }

    /**
     * @typedef {Object} ModeratorCall A moderator call (made with '!mod' or '!help')
     * @property {string} playerUsername The username of the player who created the call
     * @property {string} playerUserID The user ID of the player who created the call
     * @property {boolean} resolved Whether a moderator has teleported to the call
     * @property {string|null} respondentUsername The username of the moderator that responded to the call (null if resolved equals false)
     * @property {string|null} respondentUserID The user ID of the moderator that responded to the call (null if resolved equals false)
     * @property {Date} date A Date object of when the call was made
     */

    /**
     * Get the moderator calls for this Server (made with '!mod' or '!help')
     * @returns {Promise<ModeratorCall[]>}
     * @throws {APIError}
     * @example
     * const privateServer = new Server()
     * await privateServer.initiate()
     * await privateServer.getModeratorCalls()
     * @example
     * // An example response
     * [
     *      {
     *          playerUsername: "builderman",
     *          playerUserID: "123456789",
     *          resolved: true,
     *          respondentUsername: "david.baszucki",
     *          respondentUserID: "987654321",
     *          date: "2006-09-01T12:00:00.000Z"
     *      }
     * ]
     */
    getModeratorCalls(){
        return new Promise(function(success, errormessage){
            this.makeRequest("/server/modcalls").then(response => response.json()).then(data => {
                let newModCalls = []
                for(let i=0; i < data.length; i++){
                    let modCall = {}
                    modCall.playerUsername = data[i].Caller.split(":")[0]
                    modCall.playerUserID = data[i].Caller.split(":")[1]
                    if(data[i].Moderator){
                        modCall.resolved = true
                        modCall.respondentUsername = data[i].Moderator.split(":")[0]
                        modCall.respondentUserID = data[i].Moderator.split(":")[1]
                    } else {
                        modCall.resolved = false
                        modCall.respondentUsername = null
                        modCall.respondentUserID = null
                    }
                    modCall.date = new Date(data[i].Timestamp * 1000)
                    newModCalls.push(modCall)
                }
                this.cache.moderatorCalls = newModCalls
                success(newModCalls)
            }).catch(error => {
                errormessage(error)
            })
        }.bind(this))
    }

    /**
     * @typedef {Object} BannedPlayer A player that was banned
     * @property {string} playerUsername The username of the player that was banned
     * @property {string} playerUserID The user ID of the player that was banned
     */

    /**
     * Get the banned players from this Server
     * @returns {Promise<BannedPlayer[]>}
     * @throws {APIError}
     * @example
     * const privateServer = new Server()
     * await privateServer.initiate()
     * await privateServer.getBannedUsers()
     * @example
     * // An example response
     * [
     *      {
     *          playerUsername: "builderman",
     *          playerUserID: "123456789"
     *      }
     * ]
     */
    getBannedUsers(){
        return new Promise(function(success, errormessage){
            this.makeRequest("/server/bans").then(response => response.json()).then(data => {
                let newBans = []
                for(const [key, value] of Object.entries(data)){
                    let ban = {}
                    ban.playerUsername = value
                    ban.playerUserID = key
                    newBans.push(ban)
                }
                this.cache.bannedUsers = newBans
                success(newBans)
            }).catch(error => {
                errormessage(error)
            })
        }.bind(this))
    }



    /**
     * Send a command to this Server
     * @param {string} command The command to send, excluding ':'
     * @param {string[]} args An array of arguments to be sent with the command
     * @returns {Promise<Response>} The fetch response from the server
     * @throws {APIError}
     * @example
     * // sends ':m Hello World!' to the Server
     * const privateServer = new Server()
     * await privateServer.initiate()
     * await privateServer.sendCommand("m", ["Hello World!"])
     */
    sendCommand(command, args) {
        return new Promise(function(success, errormessage) {
            this.makeRequest("/server/command", "POST", 1, {
                command: ":" + command + " " + args.join(" ")
            }).then(response => {
                success(response);
            }).catch(error => {
                errormessage(error);
            });
        }.bind(this));
    }
}

module.exports = {
    User,
    Player,
    Server,
    APIError,
    getUserFromUserID,
    AccountVerificationType,
    UserPermissionType,
    Team,
    HttpStatus
}