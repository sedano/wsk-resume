/*!
 *
 *  Web Starter Kit
 *  Copyright 2015 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */
/* eslint-env browser */
/* eslint linebreak-style: [1, "windows"] */
(function() {
  'use strict';

  // Check to make sure service workers are supported in the current browser,
  // and that the current page is accessed from a secure origin. Using a
  // service worker from an insecure origin will trigger JS console errors. See
  // http://www.chromium.org/Home/chromium-security/prefer-secure-origins-for-powerful-new-features
  var isLocalhost = Boolean(window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
  );

  if ('serviceWorker' in navigator &&
    (window.location.protocol === 'https:' || isLocalhost)) {
    navigator.serviceWorker.register('service-worker.js')
      .then(function(registration) {
        // updatefound is fired if service-worker.js changes.
        registration.onupdatefound = function() {
          // updatefound is also fired the very first time the SW is installed,
          // and there's no need to prompt for a reload at that point.
          // So check here to see if the page is already controlled,
          // i.e. whether there's an existing service worker.
          if (navigator.serviceWorker.controller) {
            // The updatefound event implies that registration.installing is set:
            // https://slightlyoff.github.io/ServiceWorker/spec/service_worker/index.html#service-worker-container-updatefound-event
            var installingWorker = registration.installing;

            installingWorker.onstatechange = function() {
              switch (installingWorker.state) {
                case 'installed':
                  // At this point, the old content will have been purged and the
                  // fresh content will have been added to the cache.
                  // It's the perfect time to display a "New content is
                  // available; please refresh." message in the page's interface.
                  break;

                case 'redundant':
                  throw new Error('The installing ' +
                    'service worker became redundant.');

                default:
                // Ignore
              }
            };
          }
        };
      }).catch(function(e) {
        console.error('Error during service worker registration:', e);
      });
  }
})();

// Your custom JavaScript goes here
/* eslint-env jquery */
(function defer() {
  if (window.jQuery) {
    $('.button--read-more').click(function() {
      $(this).text($(this).text() === 'Read more' ? 'Hide' : 'Read more');
      $(this).closest('.mdl-card').find('.hidden-text').toggle('fast');
    });
    document.querySelector('#spanish-bar')
      .addEventListener('mdl-componentupgraded', function() {
        this.MaterialProgress.setProgress(100);
      });
    document.querySelector('#english-bar')
      .addEventListener('mdl-componentupgraded', function() {
        this.MaterialProgress.setProgress(99);
      });
    document.querySelector('#polish-bar')
      .addEventListener('mdl-componentupgraded', function() {
        this.MaterialProgress.setProgress(55);
        this.MaterialProgress.setBuffer(60);
      });
    document.querySelector('#german-bar')
      .addEventListener('mdl-componentupgraded', function() {
        this.MaterialProgress.setProgress(30);
      });
    /*
      var showPlayButton = function() {
        $('#play').removeClass('hidden');
      };
    */

    var nameTimeout;

    var hideName = function() {
      $('#lejandro').animate({
        width: '0',
        opacity: '0'
      }, 500);
    };

    var showName = function() {
      clearTimeout(nameTimeout);
      $('#lejandro').animate({
        width: '130',
        opacity: '100'
      }, 500, function() {
        nameTimeout = setTimeout(hideName, 1000);
      });
    };

    // setTimeout(showPlayButton, 1000);

    $('#buttonA').click(showName);

    /*  $(document).ready(function() {
       console.log('Document ready!');
       $('.mdl-layout__content').on('swiperight', function() {
         console.log('Swipe right detected!');
       });
       $('.mdl-layout__content').on('swipeleft', function() {
         console.log('Swipe left detected!');
       });
     }); */
  } else {
    setTimeout(function() { defer() }, 50);
  }
})();