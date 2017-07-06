/**
 * IP Service
 * @namespace Services
 */
(() => {

    'use strict';

    angular
        .module('app')
        .service('IPService', IPService);

    function IPService() {

        this.getLocalIp = getLocalIp;

        ////

        /**
         * Method return your local ip address
         * @param callback
         * @author Use free script from https://github.com/diafygi/webrtc-ips to get local IP.
         */
        function getLocalIp(callback) {
            let ip_dups = {};

            let RTCPeerConnection = window.RTCPeerConnection
                || window.mozRTCPeerConnection
                || window.webkitRTCPeerConnection;
            let useWebKit = !!window.webkitRTCPeerConnection;

            if (!RTCPeerConnection) {
                let win = iframe.contentWindow;
                RTCPeerConnection = win.RTCPeerConnection
                    || win.mozRTCPeerConnection
                    || win.webkitRTCPeerConnection;
                useWebKit = !!win.webkitRTCPeerConnection;
            }

            let mediaConstraints = {
                optional: [{RtpDataChannels: true}]
            };

            let servers = {iceServers: [{urls: "stun:stun.services.mozilla.com"}]};

            let pc = new RTCPeerConnection(servers, mediaConstraints);

            function handleCandidate(candidate) {
                let ip_regex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/;
                let ip_addrs = ip_regex.exec(candidate);
                let ip_addr;
                if (Array.isArray(ip_addrs) && ip_addrs.length) {
                    ip_addr = ip_regex.exec(candidate)[1];

                    if (ip_addr && ip_dups[ip_addr] === undefined) {
                        callback(ip_addr);
                    }
                }

                ip_dups[ip_addr] = true;
            }

            pc.onicecandidate = function (ice) {

                if (ice.candidate)
                    handleCandidate(ice.candidate.candidate);
            };

            pc.createDataChannel("");

            pc.createOffer(function (result) {

                pc.setLocalDescription(result, function () {
                }, function () {
                });

            }, function () {
            });

            setTimeout(function () {
                let lines = pc.localDescription.sdp.split('\n');

                lines.forEach(function (line) {
                    if (line.indexOf('a=candidate:') === 0)
                        handleCandidate(line);
                });
            }, 1000);
        }

    }

})();
