function keyhandle(e){
  if(e.keyCode === 13)
  {
    callApi();
  }
}
// /**
// THIS CODE WAS PROVIDED BY https://github.com/acrcloud/webapi_example/blob/master/identify%20protocol%201%20(recommended)/IdentifyProtocolV1.js
// **/
// var url = require('url');
// var fs = require('browserify-fs');
//
// window.crypto = require('crypto');
// //npm install request
// window.request = require('request');
// window.bitmap = fs.readFile('hotline.wav');
//
// // Replace "###...###" below with your project's host, access_key and access_secret.
// window.defaultOptions = {
//   host: 'us-west-2.api.acrcloud.com',
//   endpoint: '/v1/identify',
//   signature_version: '1',
//   data_type:'audio',
//   secure: true,
//   access_key: '1fa1e9fb09380d3017112318a078e860',
//   access_secret: 'KTyU23GZxKsRRERRYTWicGgnFIcdqGBYzki0n0SN'
// };
//
// function buildStringToSign(method, uri, accessKey, dataType, signatureVersion, timestamp) {
//   return [method, uri, accessKey, dataType, signatureVersion, timestamp].join('\n');
// }
//
// function sign(signString, accessSecret) {
//   return crypto.createHmac('sha1', accessSecret)
//     .update(new Buffer(signString, 'utf-8'))
//     .digest().toString('base64');
// }
//
// /**
//  * Identifies a sample of bytes
//  */
// window.identify = function(data, options, cb) {
//
//   var current_data = new Date();
//   var timestamp = current_data.getTime()/1000;
//
//   var stringToSign = buildStringToSign('POST',
//     options.endpoint,
//     options.access_key,
//     options.data_type,
//     options.signature_version,
//     timestamp);
//
//   var signature = sign(stringToSign, options.access_secret);
//
//   var formData = {
//     sample: data,
//     access_key:options.access_key,
//     data_type:options.data_type,
//     signature_version:options.signature_version,
//     signature:signature,
//     sample_bytes:data.length,
//     timestamp:timestamp,
//   }
//   request.post({
//     url: "http://"+options.host + options.endpoint,
//     method: 'POST',
//     formData: formData
//   }, cb);
// }
