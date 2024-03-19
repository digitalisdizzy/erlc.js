<img src="https://i.imgur.com/iaji19g.png" alt="erlc.js Logo" width="50%" style="margin-left: 25%; position: relative;" />

<div style="text-align:center;">

<img src="https://img.shields.io/npm/v/erlc.js?logo=npm&style=for-the-badge&labelColor=0091ff" alt="NPM Version Badge" style="display" />

<a href="https://erlc.js.org"><img src="https://img.shields.io/badge/Read_the_Docs!-Click_here-blue?style=for-the-badge
" alt="Read the docs here!" style="position:relative;" /></a>

<a href="https://www.roblox.com/games/2534724415/Emergency-Response-Liberty-County"><img src="https://img.shields.io/badge/Play-ER%3ALC!-red?style=for-the-badge&logo=roblox&labelColor=blue" alt="Read the docs here!" style="position:relative;" /></a>

</div>

# Making an ER:LC program just got a whole lot easier

## About

erlc.js is a module that lets you easily and effectively connect your app to the ER:LC API, with only basic knowledge of JavaScript syntax being needed to use it.

- Easy to learn

- 100% coverage of the ER:LC API

- Speeds up your coding by up to 50%

## Example usage

### Installing erlc.js

You can install erlc.js by simply running:

```plaintext
npm install erlc.js
```

### Creating the `Server` object

We can make a `Server` object with our server key and optional authorization key:

```js
const { Server } = require("erlc.js");

const privateServer = new Server("Server-Key", "Optional-Authorization-Key");
privateServer.initiate();
```

### Running a Hello World! command

Now we have that, all we have to do to send a command is run:

```js
privateServer.sendCommand("m", ["Hello World!"]);
```

And now we've made a basic app connected to our private server!

<br /><br /><br /><br />
Copyright 2024 digitalisdizzy

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

<br /><br />
<p style="font-size: 0.7vw; text-align:center; color: color: #919191;">erlc.js is not endorsed, sponsored or otherwise affiliated with Emergency Response: Liberty County, Police Roleplay Community, Roblox Corporation or any of their respective subsidiaries.</p>