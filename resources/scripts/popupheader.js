// Resolution Popup Window Header Script
// Created by Frank Jamison
// August 17, 2006

var popup_swf_url = '../resources/flash/popupheader.swf?&logo=Administration%20of%20Justice&titlecolor=0xffffff&backgroundletters=MSJC&bglettercolor=0xffffff';
var popupBgColor = '#141427';

// Ensure Ruffle loads from the local vendored directory (offline-safe).
window.RufflePlayer = window.RufflePlayer || {};
window.RufflePlayer.config = window.RufflePlayer.config || {};
window.RufflePlayer.config.publicPath = '../resources/scripts/ruffle/';
// Match the original popup header background.
window.RufflePlayer.config.backgroundColor = popupBgColor;
window.RufflePlayer.config.wmode = 'transparent';
// Autoplay the header animation without requiring a click.
// (If the SWF has audio, browsers may still start it muted.)
window.RufflePlayer.config.autoplay = 'on';
window.RufflePlayer.config.unmuteOverlay = 'hidden';
window.RufflePlayer.config.splashScreen = false;
if (!window.RufflePlayer.newest) {
    document.write('<script src="../resources/scripts/ruffle/ruffle.js" type="text/javascript"></script>');
}

// Container (Ruffle will replace contents if it loads)
document.write('<div id="popupFlashHead" style="height:50px;width:400px;overflow:hidden;background-color:' + popupBgColor + ';">');

// Hidden status message (only shown if Ruffle can't load)
document.write('<div id="popupFlashHeadStatus" style="display:none;color:#ffffff;font-family:Verdana,Arial,Helvetica,sans-serif;font-size:11px;line-height:50px;padding-left:10px;">Header animation unavailable</div>');

// Keep the legacy embed in the DOM until Ruffle successfully loads.
document.write('<div id="popupFlashHeadLegacy">');

// Legacy Flash embed (fallback for old browsers)
document.write('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" width="400" height="50" id="faqlogo" align="">');
document.write('<param name="movie" value="' + popup_swf_url + '">');
document.write('<param name="quality" value="high">');
document.write('<param name="wmode" value="transparent">');
document.write('<param name="bgcolor" value="#141427">');
document.write('<embed src="' + popup_swf_url + '" quality="high" wmode="transparent" bgcolor="#141427" WIDTH="400" HEIGHT="50" name="faqlogo" align="" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer">');
document.write('</embed>');
document.write('</object>');

document.write('</div>');

document.write('</div><br />');

// Modern browsers no longer run the Flash plugin. Use Ruffle to emulate the SWF.
(function() {
    var hasStarted = false;
    var hasLoaded = false;

    function setStatus(text) {
        var status = document.getElementById('popupFlashHeadStatus');
        if (!status) {
            return;
        }
        status.style.display = 'block';
        if (typeof text === 'string' && text.length) {
            status.innerHTML = text;
        }
    }

    function formatError(err) {
        try {
            if (!err) {
                return 'Unknown error';
            }
            if (typeof err === 'string') {
                return err;
            }
            if (err && typeof err.message === 'string' && err.message.length) {
                return err.message;
            }
            return String(err);
        } catch (e) {
            return 'Unknown error';
        }
    }

    function startRuffle(triesLeft) {
        if (typeof triesLeft !== 'number') {
            triesLeft = 20;
        }
        var container = document.getElementById('popupFlashHead');
        if (!container) {
            if (triesLeft > 0) {
                window.setTimeout(function() {
                    startRuffle(triesLeft - 1);
                }, 50);
            }
            return;
        }

        // Wait for Ruffle to actually be available. When `ruffle.js` is injected
        // via `document.write` inside this script, it won't execute until after
        // this script finishes.
        if (!window.RufflePlayer || typeof window.RufflePlayer.newest !== 'function') {
            if (triesLeft > 0) {
                window.setTimeout(function() {
                    startRuffle(triesLeft - 1);
                }, 50);
            }
            return;
        }

        try {
            hasStarted = true;
            var ruffle = window.RufflePlayer.newest();
            if (!ruffle || typeof ruffle.createPlayer !== 'function') {
                setStatus('Header animation unavailable: Ruffle source not available');
                return;
            }
            var player = ruffle.createPlayer();
            player.style.width = '400px';
            player.style.height = '50px';
            player.style.display = 'block';
            player.style.backgroundColor = popupBgColor;

            // Append player, but keep the legacy embed until Ruffle loads.
            container.appendChild(player);
            var loadResult = player.load({
                url: popup_swf_url
            });
            if (loadResult && typeof loadResult.then === 'function') {
                loadResult
                    .then(function() {
                        hasLoaded = true;
                        var legacy = document.getElementById('popupFlashHeadLegacy');
                        if (legacy) {
                            legacy.style.display = 'none';
                        }
                        var status = document.getElementById('popupFlashHeadStatus');
                        if (status) {
                            status.style.display = 'none';
                        }
                    })
                    .catch(function(err) {
                        try {
                            container.removeChild(player);
                        } catch (e2) {}
                        setStatus('Header animation unavailable: ' + formatError(err));
                        if (window && window.console && window.console.error) {
                            window.console.error('Ruffle failed to load popup SWF:', err);
                        }
                    });
            } else {
                // Older Ruffle builds may not return a promise; hide legacy immediately.
                hasLoaded = true;
                var legacy2 = document.getElementById('popupFlashHeadLegacy');
                if (legacy2) {
                    legacy2.style.display = 'none';
                }
                var status2 = document.getElementById('popupFlashHeadStatus');
                if (status2) {
                    status2.style.display = 'none';
                }
            }
        } catch (e) {
            setStatus('Header animation unavailable: ' + formatError(e));
            if (window && window.console && window.console.error) {
                window.console.error('Ruffle initialization error (popup):', e);
            }
        }
    }

    startRuffle();

    // If nothing starts/loads quickly, show the status so the header isn't just blank.
    window.setTimeout(function() {
        if (!hasLoaded) {
            setStatus(hasStarted ? 'Header animation unavailable' : 'Loading header animation...');
        }
    }, 1000);
})();